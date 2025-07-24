import type { ButtonHTMLAttributes } from "react";

 

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type ButtonVariant = 'solid' | 'outlined' | 'ghost' | 'glow';
type ButtonColor = 'primary' | 'secondary' | 'helper' | 'success' | 'warning' | 'error';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  size = 'md',
  variant = 'solid',
  color = 'primary',
  className = '',
  children,
  ...props // Spread other HTML button attributes
}) => {
  const baseClasses = 'font-bold py-2 px-4 rounded';
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    xxl: 'text-2xl',
  };

  const variantClasses = {
    solid: `bg-${color}-500 text-white`,
    outlined: `border border-${color}-500 text-${color}-500`,
    ghost: `bg-transparent text-${color}-500`,
    glow: `bg-${color}-500 text-white shadow-lg`,
  };

  const colorClasses = {
    primary: 'bg-blue-500',
    secondary: 'bg-gray-500',
    helper: 'bg-green-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${colorClasses[color]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

