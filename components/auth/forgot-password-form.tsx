"use client";

import React from "react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

import Form, { FormGroup, FormInput } from "../ui/form";
import Button from "../ui/button";
import { useForgotPassword } from "@/hooks/user";

interface IFormProps {
  email: string;
}

const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormProps>();

  const { mutate, isPending } = useForgotPassword();

  const onSubmit: SubmitHandler<IFormProps> = async (data) => {
    console.log(data);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} className="signin-form">
        <FormGroup label="Email Address" required>
          <FormInput
            placeholder="Enter your email address"
            {...register("email", {
              required: "Email address is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className="required-field">{errors.email.message}</span>
          )}
        </FormGroup>

        <Button fit className="btn-uppercase">SEND EMAIL</Button>
      </Form>
      <p className="mg-t-40 mg-b-0 tx-color-03 text-center">
        Already have an account? <Link href="/">Signin</Link>
      </p>
    </>
  );
};

export default ForgotPasswordForm;
