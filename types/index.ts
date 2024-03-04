import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export interface IVariants {
  variant?:
    | "primary"
    | "success"
    | "secondary"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}
