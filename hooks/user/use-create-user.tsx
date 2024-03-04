import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { createUser } from "@/lib/api-client";
import { USER_SUCCESS } from "@/lib/constants";

export const useCreateUser = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: createUser,
    onError: (error) => toast.error(error.message),
    onSuccess: () => {
      toast.success(USER_SUCCESS);
      router.push("/users");
    },
  });

  return { ...mutation };
};
