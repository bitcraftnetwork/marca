import type { ButtonHTMLAttributes } from "react";

type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
type ButtonVariant = "solid" | "outlined" | "ghost" | "glow";
type ButtonColor =
  | "primary"
  | "secondary"
  | "helper"
  | "success"
  | "warning"
  | "error"
  | "dark";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  size = "md",
  variant = "solid",
  color = "primary",
  className = "",
  children,
  ...props
}) => {
  const baseClasses =
    "font-montserrat font-bold rounded transition-all duration-200 cursor-pointer border-2 outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center";

  const sizeClasses = {
    xs: "text-xs sm:text-xs py-1 px-2 sm:py-1 sm:px-2",
    sm: "text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-3",
    md: "text-sm sm:text-base py-1.5 px-3 sm:py-2 sm:px-4",
    lg: "text-base sm:text-lg py-2 px-4 sm:py-2.5 sm:px-5",
    xl: "text-lg sm:text-xl py-2.5 px-5 sm:py-3 sm:px-6",
    xxl: "text-xl sm:text-2xl py-3 px-6 sm:py-4 sm:px-8",
  };

  const getVariantClasses = () => {
    const colorMap = {
      primary: {
        solid:
          "bg-primary text-dark border-primary hover:bg-primary-600 focus:ring-primary-300",
        outlined:
          "bg-transparent text-primary border-primary hover:bg-primary-100 focus:ring-primary-300",
        ghost:
          "bg-transparent text-primary border-transparent hover:text-primary-600 focus:ring-primary-300",
        glow: "bg-primary text-dark border-primary shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 focus:ring-primary-300",
      },
      secondary: {
        solid:
          "bg-secondary text-dark border-secondary hover:bg-secondary-600 focus:ring-secondary-300",
        outlined:
          "bg-transparent text-secondary border-secondary hover:bg-secondary-100 focus:ring-secondary-300",
        ghost:
          "bg-transparent text-secondary border-transparent hover:text-secondary-600 focus:ring-secondary-300",
        glow: "bg-secondary text-dark border-secondary shadow-lg shadow-secondary/50 hover:shadow-xl hover:shadow-secondary/60 focus:ring-secondary-300",
      },
      helper: {
        solid:
          "bg-helper text-dark border-helper hover:bg-helper-600 focus:ring-helper-300",
        outlined:
          "bg-transparent text-helper border-helper hover:bg-helper-100 focus:ring-helper-300",
        ghost:
          "bg-transparent text-helper border-transparent hover:text-helper-600 focus:ring-helper-300",
        glow: "bg-helper text-dark border-helper shadow-lg shadow-helper/50 hover:shadow-xl hover:shadow-helper/60 focus:ring-helper-300",
      },
      success: {
        solid:
          "bg-primary-600 text-dark border-primary-600 hover:bg-primary-700 focus:ring-primary-300",
        outlined:
          "bg-transparent text-primary-600 border-primary-600 hover:bg-primary-100 focus:ring-primary-300",
        ghost:
          "bg-transparent text-primary-600 border-transparent hover:text-primary-700 focus:ring-primary-300",
        glow: "bg-primary-600 text-dark border-primary-600 shadow-lg shadow-primary-600/50 hover:shadow-xl hover:shadow-primary-600/60 focus:ring-primary-300",
      },
      warning: {
        solid:
          "bg-secondary-700 text-dark border-secondary-700 hover:bg-secondary-800 focus:ring-secondary-300",
        outlined:
          "bg-transparent text-secondary-700 border-secondary-700 hover:bg-secondary-100 focus:ring-secondary-300",
        ghost:
          "bg-transparent text-secondary-700 border-transparent hover:text-secondary-800 focus:ring-secondary-300",
        glow: "bg-secondary-700 text-dark border-secondary-700 shadow-lg shadow-secondary-700/50 hover:shadow-xl hover:shadow-secondary-700/60 focus:ring-secondary-300",
      },
      error: {
        solid:
          "bg-primary-800 text-dark border-primary-800 hover:bg-primary-900 focus:ring-primary-300",
        outlined:
          "bg-transparent text-primary-800 border-primary-800 hover:bg-primary-100 focus:ring-primary-300",
        ghost:
          "bg-transparent text-primary-800 border-transparent hover:text-primary-900 focus:ring-primary-300",
        glow: "bg-primary-800 text-dark border-primary-800 shadow-lg shadow-primary-800/50 hover:shadow-xl hover:shadow-primary-800/60 focus:ring-primary-300",
      },
      dark: {
        solid:
          "bg-primary-900 text-dark border-primary-900 hover:bg-primary-800 focus:ring-primary-300",
        outlined:
          "bg-transparent text-primary-900 border-primary-900 hover:bg-primary-100 focus:ring-primary-300",
        ghost:
          "bg-transparent text-primary-900 border-transparent hover:text-primary-800 focus:ring-primary-300",
        glow: "bg-primary-900 text-dark border-primary-900 shadow-lg shadow-primary-900/50 hover:shadow-xl hover:shadow-primary-900/60 focus:ring-primary-300",
      },
    };

    return colorMap[color][variant];
  };

  const allClasses = `${baseClasses} ${
    sizeClasses[size]
  } ${getVariantClasses()} ${className}`;

  return (
    <button className={allClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
