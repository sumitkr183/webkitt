import React from "react";
import { clsx } from "clsx";

import { TextareaProps } from "@/types";

const FormArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, children, rows, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        {...props}
        rows={rows || 3}
        className={clsx("form-control", className)}
      >
        {children}
      </textarea>
    );
  }
);

FormArea.displayName = "FormInput";

export default FormArea;
