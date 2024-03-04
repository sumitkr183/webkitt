import { IVariants } from "@/types";
import clsx from "clsx";
import React from "react";

interface ISpinnerProps extends IVariants {
  text?: string;
}

const Spinner = ({ text, variant }: ISpinnerProps) => {
  return (
    <>
      <div
        className={clsx("spinner-border spinner-border-sm", {
          "text-primary": variant === "primary",
          "text-danger": variant === "danger",
          "text-success": variant === "success",
          "text-secondary": variant === "secondary",
          "text-warning": variant === "warning",
          "text-info": variant === "info",
          "text-light": variant === "light",
          "text-dark": variant === "dark",

        })}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
      {text && <span className="ml-2">{text}</span>}
    </>
  );
};

export default Spinner;
