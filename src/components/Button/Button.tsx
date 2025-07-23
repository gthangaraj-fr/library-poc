import React from "react";
import "./Button.css";

export interface ButtonProps {
  /**
   * The content to display inside the button
   */
  children: React.ReactNode;
  /**
   * Button variant style
   */
  variant?: "primary" | "secondary" | "outline";
  /**
   * Button size
   */
  size?: "small" | "medium" | "large";
  /**
   * Is the button disabled?
   */
  disabled?: boolean;
  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * Additional CSS class names
   */
  className?: string;
  /**
   * Button type
   */
  type?: "button" | "submit" | "reset";
}

/**
 * A simple, customizable button component -> Small change.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
  className = "",
  type = "button",
  ...props
}) => {
  const baseClass = "btn";
  const variantClass = `btn--${variant}`;
  const sizeClass = `btn--${size}`;
  const disabledClass = disabled ? "btn--disabled" : "";

  const buttonClasses = [
    baseClass,
    variantClass,
    sizeClass,
    disabledClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
