import React, { forwardRef } from "react";
import { type LucideIcon } from "lucide-react";

interface ButtonProps {
  variant?: "solid" | "outline" | "ghost";
  color?: "primary" | "secondary" | "helper" | "dark";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "solid",
      color = "primary",
      size = "md",
      onClick,
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const sizeClasses = {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };

    const variantClasses = {
      solid: {
        primary:
          "bg-primary text-white hover:bg-primary-700 focus:ring-primary-500",
        secondary:
          "bg-secondary  hover:bg-secondary-700 focus:ring-secondary-500",
        helper: "bg-helper  hover:bg-helper-700 focus:ring-helper-500",
        dark: "bg-dark text-white hover:bg-gray-700 focus:ring-gray-500",
      },
      outline: {
        primary:
          "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary-500",
        secondary:
          "border-2 border-secondary text-secondary-700 hover:bg-secondary hover: focus:ring-secondary-500",
        helper:
          "border-2 border-helper text-helper-700 hover:bg-helper hover: focus:ring-helper-500",
        dark: "border-2 border-dark  hover:bg-dark hover:text-white focus:ring-gray-500",
      },
      ghost: {
        primary: "text-primary hover:bg-primary-50 focus:ring-primary-500",
        secondary:
          "text-secondary-700 hover:bg-secondary-100 focus:ring-secondary-500",
        helper: "text-helper-700 hover:bg-helper-100 focus:ring-helper-500",
        dark: " hover:bg-gray-100 focus:ring-gray-500",
      },
    };

    const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant][color]} ${className}`;

    return (
      <button ref={ref} className={classes} onClick={onClick} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  showButton?: boolean;
  // Custom class props for each component
  containerClassName?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  buttonClassName?: string;
}

const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(
  (
    {
      icon: Icon,
      title,
      description,
      buttonText = "Get Started",
      onButtonClick,
      showButton = true,
      containerClassName = "",
      iconContainerClassName = "",
      iconClassName = "",
      titleClassName = "",
      descriptionClassName = "",
      buttonClassName = "",
    },
    ref
  ) => {
    const handleClick = () => {
      if (onButtonClick) {
        onButtonClick();
      }
    };

    return (
      <div
        ref={ref}
        className={`md:h-[360px] rounded-2xl p-4 sm:p-6 md:p-8 duration-300 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lgmx-auto bg-white shadow-lg hover:shadow-xltransition-all ${containerClassName}`}
      >
        {/* Icon Container */}
        <div
          className={`flex justify-center mb-4 sm:mb-6 ${iconContainerClassName}`}
        >
          <div className="bg-blue-50 p-3 sm:p-4 md:p-6 rounded-full transition-colors hover:bg-blue-100">
            <Icon
              className={` w-8 h-8 sm:w-12 sm:h-12  md:w-16 md:h-16 lg:w-20 lg:h-20 ${iconClassName}`}
            />
          </div>
        </div>

        {/* Title */}
        <div
          className={`text-lg sm:text-xl md:text-2xl font-bold text-center mb-3 sm:mb-4 text-gray-900 leading ${titleClassName}`}
        >
          {title}
        </div>

        {/* Description */}
        <p
          className={`text-sm sm:text-base text-gray-600 text-center mb-4 sm:mb-6 leading-relaxedpx-2 sm:px-0 ${descriptionClassName}`}
        >
          {description}
        </p>

        {/* Button */}
        {showButton && (
          <div className="flex justify-center">
            <Button
              onClick={handleClick}
              className={`px-4 py-2  sm:px-6 sm:py-3 text-sm sm:text-base font-medium transition-all hover:scale-105 ${buttonClassName}`}
            >
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    );
  }
);

FeatureCard.displayName = "FeatureCard";

export { FeatureCard, Button };
export type { FeatureCardProps, ButtonProps };
