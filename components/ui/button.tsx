import React from "react";
import clsx from "clsx";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?:
    | "primary"
    | "success"
    | "secondary"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "white";
  outline?: boolean;
  size?: "xs" | "sm" | "lg";
  fit?: boolean;
  rounded?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      children,
      variant = "primary",
      outline = false,
      rounded = false,
      size,
      className,
      fit,
      ...props
    }: IButtonProps,
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "btn flex-fill",
          rounded && "rounded-40",
          {
            "btn-block": fit,
            "btn-outline": outline,
            "btn-xs": size === "xs",
            "btn-sm": size === "sm",
            "btn-lg": size === "lg",
          },
          {
            "btn-primary": !outline && variant==="primary",
            "btn-danger": !outline && variant==="danger",
            "btn-dark": !outline && variant==="dark",
            "btn-info": !outline && variant==="info",
            "btn-secondary": !outline && variant==="secondary",
            "btn-success": !outline && variant==="success",
            "btn-warning": !outline && variant==="warning",
            "btn-light": !outline && variant==="light",
            "btn-white": variant==="white",
          }, 
          {
            "btn-outline-primary": outline && variant==="primary",
            "btn-outline-danger": outline && variant==="danger",
            "btn-outline-dark": outline && variant==="dark",
            "btn-outline-info": outline && variant==="info",
            "btn-outline-secondary": outline && variant==="secondary",
            "btn-outline-success": outline && variant==="success",
            "btn-outline-warning": outline && variant==="warning",
            "btn-outline-light": outline && variant==="light",
          },          
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
