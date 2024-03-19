"use client";

import Fallback from "@/components/ui/fallback-ui";
import { IError } from "@/types";

const UserError = ({ error, reset } : IError) => {
  return <Fallback error={error} reset={reset} />;
};

export default UserError;
