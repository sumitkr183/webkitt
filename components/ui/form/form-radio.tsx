import React from "react";
import clsx from "clsx";

import { RadioProps } from "@/types";

const FormRadio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="custom-control custom-radio">
        <input
          id={label}
          ref={ref}
          type={"radio"}
          {...props}
          className={clsx("custom-control-input", className)}
        />
        <label className="custom-control-label mg-r-30" htmlFor={label}>
          {label}
        </label>
      </div>
    );
  }
);

FormRadio.displayName = "FormRadio";

export default FormRadio;
