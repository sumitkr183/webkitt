"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Button from "@/components/ui/button";
import Form, { FormGroup, FormInput } from "@/components/ui/form";
import { IUserCreate } from "@/types/user.type";
import { useCreateUser } from "@/hooks/user";
import Spinner from "../ui/spinner";

const CreateUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserCreate>();

  const { mutate, isPending } = useCreateUser();

  const onSubmit: SubmitHandler<IUserCreate> = async (data) => mutate(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="form-settings">
      <div className="row">
        <div className="col-md-6">
          <FormGroup label="Name" required>
            <FormInput
              placeholder="Enter user's name"
              disabled={isPending}
              {...register("name", { required: "User's name is required" })}
            />
            {errors.name && (
              <span className="required-field">{errors.name.message}</span>
            )}
          </FormGroup>
        </div>
        <div className="col-md-6">
          <FormGroup label="Email Address" required>
            <FormInput
              placeholder="Enter user's email"
              disabled={isPending}
              {...register("email", {
                required: "User's email is required",
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
      </div>
      <Button rounded disabled={isPending}>
        {isPending ? <Spinner text="Creating..." /> : "Create Account"}
      </Button>
    </Form>
  );
};

export default CreateUser;
