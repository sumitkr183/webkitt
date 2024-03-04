import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { registerUser } from "@/lib/api-client";

interface ISuccess {
  data: {
    createdId: string;
  };
  message: string;
  status: boolean;
}

export const useSignUp = () => {
  const router = useRouter()

  const mutation = useMutation({
    mutationFn: registerUser,
    onError: (error) => toast.error(error.message),
    onSuccess: (response: ISuccess) => {
      sessionStorage.setItem("uid", response.data.createdId);
      toast.success(response.message);
      router.push('/verify-email')
    },
  });

  return { ...mutation };
};
