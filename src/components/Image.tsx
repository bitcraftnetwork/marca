import React from "react";

export interface ImageProps {
  src: string;
  alt?: string;
  // Wrapper dimensions
  height?: string | number;
  width?: string | number;
  maxHeight?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  minWidth?: string | number;
  // Aspect ratio
  aspectRatio?: string; // e.g., "16/9", "4/3", "1/1"
  // Image object fit
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  objectPosition?: string; // e.g., "center", "top", "bottom left"
  // Responsive behavior
  responsive?: boolean;
  // Custom classes
  wrapperClass?: string;
  imageClass?: string;
  // Loading and error handling
  loading?: "lazy" | "eager";
  placeholder?: string; // placeholder image URL
  fallback?: string; // fallback image URL
  onLoad?: () => void;
  onError?: () => void;
  // Accessibility
  role?: string;
  // Additional HTML attributes
  id?: string;
  title?: string;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt = "image",
  height,
  width,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  aspectRatio,
  objectFit = "cover",
  objectPosition = "center",
  responsive = true,
  wrapperClass = "",
  imageClass = "",
  loading = "lazy",
  placeholder,
  fallback,
  onLoad,
  onError,
  role,
  id,
  title,
}) => {
  const [currentSrc, setCurrentSrc] = React.useState(placeholder || src);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  // Helper function to convert size values to CSS
  const getSizeValue = (size: string | number | undefined): string => {
    if (!size) return "";
    return typeof size === "number" ? `${size}px` : size;
  };

  // Build wrapper styles
  const wrapperStyles: React.CSSProperties = {
    height: getSizeValue(height),
    width: getSizeValue(width),
    maxHeight: getSizeValue(maxHeight),
    maxWidth: getSizeValue(maxWidth),
    minHeight: getSizeValue(minHeight),
    minWidth: getSizeValue(minWidth),
    aspectRatio: aspectRatio,
  };

  // Build wrapper classes
  const wrapperClasses = [
    "relative overflow-hidden",
    responsive ? "w-full" : "",
    !height && responsive ? "h-auto" : "",
    wrapperClass,
  ]
    .filter(Boolean)
    .join(" ");

  // Build image classes
  const imageClasses = [
    "transition-opacity duration-300",
    responsive ? "w-full h-full" : "",
    `object-${objectFit}`,
    objectPosition !== "center"
      ? `object-[${objectPosition}]`
      : "object-center",
    isLoaded ? "opacity-100" : "opacity-0",
    imageClass,
  ]
    .filter(Boolean)
    .join(" ");

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
    if (currentSrc === placeholder && src !== placeholder) {
      setCurrentSrc(src);
    }
    onLoad?.();
  };

  // Handle image error
  const handleError = () => {
    setHasError(true);
    if (fallback && currentSrc !== fallback) {
      setCurrentSrc(fallback);
      setHasError(false);
    }
    onError?.();
  };

  // Use effect to handle src changes
  React.useEffect(() => {
    if (src !== currentSrc && !placeholder) {
      setCurrentSrc(src);
      setIsLoaded(false);
      setHasError(false);
    }
  }, [src, currentSrc, placeholder]);

  return (
    <div className={wrapperClasses} style={wrapperStyles}>
      {/* Placeholder/Loading state */}
      {!isLoaded && placeholder && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}

      {/* Main image */}
      <img
        id={id}
        src={currentSrc}
        alt={alt}
        title={title}
        role={role}
        loading={loading}
        className={imageClasses}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          objectPosition: objectPosition,
        }}
      />

      {/* Error state */}
      {hasError && !fallback && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-500 text-center p-4">
            <div className="text-2xl mb-2">📷</div>
            <div className="text-sm">Failed to load image</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Image;
