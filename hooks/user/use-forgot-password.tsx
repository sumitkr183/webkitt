import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { registerUser } from "@/lib/api-client";

export const useForgotPassword = () => {
  const mutation = useMutation({
    mutationFn: registerUser,
    onError: (error) => toast.error(error.message),
    onSuccess: (response) => toast.success(response.message),
  });

  return { ...mutation };
};
