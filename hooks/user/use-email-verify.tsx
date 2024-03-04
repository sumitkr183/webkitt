import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { verifyEmail } from "@/lib/api-client";
import { VERIFY_SUCCESS } from "@/lib/constants";

export const useEmailVerify = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: verifyEmail,
    onError: (error) => toast.error(error.message),
    onSuccess: () => {
      toast.success(VERIFY_SUCCESS);
      sessionStorage.removeItem("uid");
      router.push("/");
    },
  });

  return { ...mutation };
};
