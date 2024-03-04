import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { loginUser } from "@/lib/api-client";
import { LOGIN_SUCCESS } from "@/lib/constants";
import { ILoginSuccess } from "@/types/auth.type";
import { setCookie } from "cookies-next";

export const useSignIn = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: loginUser,
    onError: (error) => toast.error(error.message),
    onSuccess: (response: ILoginSuccess) => {
      setCookie('token', response.data?.token)
      toast.success(LOGIN_SUCCESS);
      router.push("/dashboard");
    },
  });

  return { ...mutation };
};
