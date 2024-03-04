"use client";

import Link from "next/link";
import { useCallback } from "react";

import Button from "../ui/button";
import { FormGroup, OtpForm } from "../ui/form";
import { useEmailVerify } from "@/hooks/user";
import Spinner from "../ui/spinner";

const VerifyEmail = () => {
  const { mutate, isPending } = useEmailVerify();

  const onSubmit = useCallback((otp: string) => {
    mutate(otp);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="signin-form mb-5">
        <OtpForm inputCount={4} onSuccess={onSubmit} />

        <FormGroup>
          <Button fit disabled={isPending} className="btn-uppercase">
            {isPending ? <Spinner text="Verifying..." /> : "Verify Email"}
          </Button>
        </FormGroup>
      </div>
      <p className="mg-t-auto mg-b-0 tx-sm tx-color-03 text-center">
        Already have an account? <Link href="/">Signin</Link>
      </p>
    </>
  );
};

export default VerifyEmail;
