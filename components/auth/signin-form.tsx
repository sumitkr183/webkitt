"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

import Terms from "@/components/auth/terms";
import Button from "@/components/ui/button";
import Spinner from "@/components/ui/spinner";
import Form, { FormGroup, FormInput } from "@/components/ui/form";
import { useSignIn } from "@/hooks/user";
import { ILoginProps } from "@/types/auth.type";

const SignInForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginProps>();

  const { mutate, isPending } = useSignIn();

  const onSubmit: SubmitHandler<ILoginProps> = async (data) => mutate(data);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} className="signin-form">
        <FormGroup label="Email Address" required>
          <FormInput
            placeholder="webkitt@gmail.com"
            {...register("username", {
              required: "Email address is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            disabled={isPending}
            autoFocus
          />
          {errors.username && (
            <span className="required-field">{errors.username.message}</span>
          )}
        </FormGroup>
        <div className="form-group">
          <label className="d-flex justify-content-between">
            <span>
              Password <span className="required-field">*</span>
            </span>
            <Link href="/forgot-password" className="tx-13">
              Forgot password?
            </Link>
          </label>
          <div className="d-flex justify-content-between align-items-center">
            <FormInput
              type="password"
              placeholder="*********"
              {...register("password", { required: "Password is required" })}
              disabled={isPending}
            />
          </div>
          {errors.password && (
            <span className="required-field">{errors.password.message}</span>
          )}
        </div>
        <FormGroup className="d-flex mg-b-0">
          <Button className="btn-uppercase" disabled={isPending}>
            {isPending ? <Spinner text="Signing..." /> : "Sign In"}
          </Button>
          <Button
            disabled={isPending}
            type="button"
            variant="white"            
            className="mg-l-10 btn-uppercase"
            onClick={() => router.push("/sign-up")}
          >
            Sign Up
          </Button>
        </FormGroup>
      </Form>
      <Terms />
    </>
  );
};

export default SignInForm;