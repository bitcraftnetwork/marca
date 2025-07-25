import React from "react";

// Define the direction type
type Direction = "left" | "right" | "up" | "down";

// Define the props interface
interface SectionProps {
  title: any; // Required
  subtitle?: any; // Optional
  ctaText?: any; // Optional
  ctaLink?: string; // Optional
  direction?: Direction; // Optional, defaults to 'down'
  className?: string; // Optional additional classes
  onCtaClick?: () => void; // Optional click handler
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  direction = "down",
  className = "",
  onCtaClick,
}) => {
  // Define layout classes based on direction
  const getDirectionClasses = () => {
    switch (direction) {
      case "left":
        return "flex flex-col md:flex-row md:items-center md:justify-between gap-6";
      case "right":
        return "flex flex-col md:flex-row-reverse md:items-center md:justify-between gap-6";
      case "up":
        return "flex flex-col-reverse gap-6";
      case "down":
      default:
        return "flex flex-col gap-6";
    }
  };

  // Define text alignment based on direction
  const getTextAlignment = () => {
    switch (direction) {
      case "left":
        return "text-left md:text-left";
      case "right":
        return "text-left md:text-right";
      case "up":
      case "down":
      default:
        return "text-center";
    }
  };

  // Define CTA alignment based on direction
  const getCtaAlignment = () => {
    switch (direction) {
      case "left":
        return "flex justify-start md:justify-start";
      case "right":
        return "flex justify-start md:justify-end";
      case "up":
      case "down":
      default:
        return "flex justify-center";
    }
  };

  // Handle CTA click
  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else if (ctaLink) {
      window.open(ctaLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className={getDirectionClasses()}>
          {/* Content Container */}
          <div className={`flex-1 ${getTextAlignment()}`}>
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h2>

            {/* Subtitle */}
            {subtitle && (
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto md:mx-0 text-center w-full">
                {subtitle}
              </p>
            )}
          </div>

          {/* CTA Button */}
          {ctaText && (
            <div className={`flex-shrink-0 ${getCtaAlignment()}`}>
              <button
                onClick={handleCtaClick}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                {ctaText}
                <svg
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Section;
