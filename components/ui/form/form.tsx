import clsx from "clsx";
import React from "react";

interface IFromProps {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
  className?: string;
}

const Form = ({ children, onSubmit, className }: IFromProps) => {
  return (
    <form
      autoComplete="off"
      onSubmit={onSubmit}
      className={clsx("mb-0", className)}
    >
      {children}
    </form>
  );
};

export default Form;
