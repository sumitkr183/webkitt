"use client";

import React from "react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

import Button from "@/components/ui/button";
import Form, { FormGroup, FormInput } from "@/components/ui/form";
import { IRegisterProps } from "@/types/auth.type";
import { useSignUp } from "@/hooks/user";
import Spinner from "../ui/spinner";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<IRegisterProps>();

  const { mutate, isPending } = useSignUp();

  const onSubmit: SubmitHandler<IRegisterProps> = async (data) => mutate(data);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} className="signin-form">
        <div className="row">
          <div className="col-md-6">
            <FormGroup label="Outlet Name" required>
              <FormInput
                autoFocus
                placeholder="Enter your outlet name"
                {...register("name", { required: "Outlet name is required" })}
              />
              {errors.name && (
                <span className="required-field">{errors.name.message}</span>
              )}
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup label="Number" required>
              <FormInput
                placeholder="Enter your phone number"
                {...register("phone", {
                  required: "Phone number is required",
                  minLength: {
                    value: 10,
                    message: "Minium 10 digits required",
                  },
                  pattern: {
                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                    message: "Invalid number",
                  },
                })}
              />
              {errors.phone && (
                <span className="required-field">{errors.phone.message}</span>
              )}
            </FormGroup>
          </div>
          <div className="col-md-6">
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
          </div>
          <div className="col-md-6">
            <FormGroup label="Address" required>
              <FormInput
                placeholder="Enter your address"
                {...register("address", { required: "Address is required" })}
              />
              {errors.address && (
                <span className="required-field">{errors.address.message}</span>
              )}
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup label="Industry" required>
              <FormInput
                placeholder="Enter your industry"
                {...register("industry", { required: "Industry is required" })}
              />
              {errors.industry && (
                <span className="required-field">
                  {errors.industry.message}
                </span>
              )}
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup label="City" required>
              <FormInput
                placeholder="Enter your city"
                {...register("city", { required: "City is required" })}
              />
              {errors.city && (
                <span className="required-field">{errors.city.message}</span>
              )}
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup label="State" required>
              <FormInput
                placeholder="Enter your state"
                {...register("state", { required: "State is required" })}
              />
              {errors.state && (
                <span className="required-field">{errors.state.message}</span>
              )}
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup label="Pincode" required>
              <FormInput
                placeholder="Enter your pincode"
                {...register("pincode", { required: "Pincode is required" })}
              />
              {errors.pincode && (
                <span className="required-field">{errors.pincode.message}</span>
              )}
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup label="Password" required>
              <FormInput
                type="password"
                placeholder="******"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters required",
                  },
                })}
              />
              {errors.password && (
                <span className="required-field">
                  {errors.password.message}
                </span>
              )}
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup label="Confirm Password" required>
              <FormInput
                type="password"
                placeholder="******"
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                  validate: (value: string) => {
                    if (watch("password") !== value) {
                      return "Password did't matched";
                    }
                  },
                })}
              />
              {errors.confirmPassword && (
                <span className="required-field">
                  {errors.confirmPassword.message}
                </span>
              )}
            </FormGroup>
          </div>
        </div>
        <FormGroup className="d-flex mg-b-0">
          <Button className="btn-uppercase" disabled={isPending}>
            {isPending ? <Spinner text="Creating..." /> : "Create an account"}
          </Button>
        </FormGroup>
        <p className="mg-t-auto mg-b-0 tx-sm tx-color-03 text-center">
          Already have an account? <Link href="/">Signin</Link>
        </p>
      </Form>
    </>
  );
};

export default SignUpForm;
