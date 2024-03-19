import { IVariants } from "@/types";
import clsx from "clsx";
import React from "react";

interface IBadge extends IVariants {
  children: React.ReactNode;
}

const Badge = ({ variant, children }: IBadge) => {
  return (
    <span
      className={clsx("badge badge-pill", {
        "badge-success": variant === "success",
        "badge-danger": variant === "danger",
        "badge-dark": variant === "dark",
        "badge-info": variant === "info",
        "badge-light": variant === "light",
        "badge-primary": variant === "primary",
        "badge-secondary": variant === "secondary",
        "badge-warning": variant === "warning",
      })}
    >
      {children}
    </span>
  );
};

export default Badge;
