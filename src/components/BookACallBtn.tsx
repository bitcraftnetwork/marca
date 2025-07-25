import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
type Props = {
  text: string;
  variant?: "solid" | "outlined" | "ghost" | "glow";
  color?: "primary" | "secondary" | "helper" | "success" | "warning" | "dark";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | 'xxl';
};
const BookACallBtn: React.FC<Props> = ({
  text = "Get Started",
  variant = "solid",
  color = "primary",
  size = "lg",
}) => {
  const nav = useNavigate();
  const handleClick = () => {
    nav("/bookings");
  };
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      onClick={handleClick}
      className={
        color === "dark"
          ? "bg-dark text-white"
          : ""
      }
    >
      {text}
    </Button>
  );
};

export default BookACallBtn;

