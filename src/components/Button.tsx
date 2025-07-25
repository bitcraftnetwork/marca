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
    xs: "text-xs py-1 px-2",
    sm: "text-sm py-1.5 px-3",
    md: "text-base py-2 px-4",
    lg: "text-lg py-2.5 px-5",
    xl: "text-xl py-3 px-6",
    xxl: "text-2xl py-4 px-8",
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
          "bg-green-500 text-white border-green-500 hover:bg-green-600 focus:ring-green-300",
        outlined:
          "bg-transparent text-green-500 border-green-500 hover:bg-green-50 focus:ring-green-300",
        ghost:
          "bg-transparent text-green-500 border-transparent hover:text-green-600 focus:ring-green-300",
        glow: "bg-green-500 text-white border-green-500 shadow-lg shadow-green-500/50 hover:shadow-xl hover:shadow-green-500/60 focus:ring-green-300",
      },
      warning: {
        solid:
          "bg-amber-500 text-white border-amber-500 hover:bg-amber-600 focus:ring-amber-300",
        outlined:
          "bg-transparent text-amber-500 border-amber-500 hover:bg-amber-50 focus:ring-amber-300",
        ghost:
          "bg-transparent text-amber-500 border-transparent hover:text-amber-600 focus:ring-amber-300",
        glow: "bg-amber-500 text-white border-amber-500 shadow-lg shadow-amber-500/50 hover:shadow-xl hover:shadow-amber-500/60 focus:ring-amber-300",
      },
      error: {
        solid:
          "bg-red-500 text-white border-red-500 hover:bg-red-600 focus:ring-red-300",
        outlined:
          "bg-transparent text-red-500 border-red-500 hover:bg-red-50 focus:ring-red-300",
        ghost:
          "bg-transparent text-red-500 border-transparent hover:text-red-600 focus:ring-red-300",
        glow: "bg-red-500 text-white border-red-500 shadow-lg shadow-red-500/50 hover:shadow-xl hover:shadow-red-500/60 focus:ring-red-300",
      },
      dark: {
        solid:
          "bg-dark text-white border-dark hover:bg-secondary hover:text-dark focus:ring-secondary-300",
        outlined:
          "bg-transparent text-dark border-dark hover:bg-secondary-100 hover:text-dark focus:ring-secondary-300",
        ghost:
          "bg-transparent text-dark border-transparent hover:text-secondary-600 focus:ring-secondary-300",
        glow: "bg-dark text-white border-dark shadow-lg shadow-dark/50 hover:shadow-xl hover:shadow-dark/60 focus:ring-secondary-300",
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

