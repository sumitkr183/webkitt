import React from "react";
import { clsx } from "clsx";

import { InputProps } from "@/types";

const FormInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type || "text"}
        {...props}
        autoComplete="off"
        className={clsx("form-control", className)}
      />
    );
  }
);

FormInput.displayName = "FormInput";

export default FormInput;
