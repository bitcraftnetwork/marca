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
          "bg-secondary text-dark hover:bg-secondary-700 focus:ring-secondary-500",
        helper: "bg-helper text-dark hover:bg-helper-700 focus:ring-helper-500",
        dark: "bg-dark text-white hover:bg-gray-700 focus:ring-gray-500",
      },
      outline: {
        primary:
          "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary-500",
        secondary:
          "border-2 border-secondary text-secondary-700 hover:bg-secondary hover:text-dark focus:ring-secondary-500",
        helper:
          "border-2 border-helper text-helper-700 hover:bg-helper hover:text-dark focus:ring-helper-500",
        dark: "border-2 border-dark text-dark hover:bg-dark hover:text-white focus:ring-gray-500",
      },
      ghost: {
        primary: "text-primary hover:bg-primary-50 focus:ring-primary-500",
        secondary:
          "text-secondary-700 hover:bg-secondary-100 focus:ring-secondary-500",
        helper: "text-helper-700 hover:bg-helper-100 focus:ring-helper-500",
        dark: "text-dark hover:bg-gray-100 focus:ring-gray-500",
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
        className={`rounded-2xl p-8 duration-300 max-w-sm mx-auto ${containerClassName}`}
      >
        {/* Icon Container */}
        <div className={`flex justify-center mb-6 ${iconContainerClassName}`}>
          <div className="bg-primary-100 p-6 rounded-full">
            <Icon className={`w-16 h-16 text-primary ${iconClassName}`} />
          </div>
        </div>

        {/* Title */}
        <h3
          className={`text-xl font-bold text-dark text-center mb-4 font-montserrat ${titleClassName}`}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={`text-gray-600 text-center mb-6 leading-relaxed ${descriptionClassName}`}
        >
          {description}
        </p>

        {/* Button */}
        {showButton && (
          <div className="flex justify-center">
            <Button
              variant="solid"
              color="primary"
              size="lg"
              onClick={handleClick}
              className={buttonClassName}
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
