import React from "react";

import clsx from "clsx";

interface IFormGroupProps {
  children: React.ReactNode;
  className?: string;
  label?: string;
  required?: boolean;
}

const FormGroup = ({
  children,
  className,
  label,
  required,
}: IFormGroupProps) => {
  return (
    <div className={clsx("form-group", className)}>
      {label && (
        <label className="form-label">
          {label} {required && <span className="required-field">*</span>}
        </label>
      )}
      {children}
    </div>
  );
};

export default FormGroup;
