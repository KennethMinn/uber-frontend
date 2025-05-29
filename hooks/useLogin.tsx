import { TLoginSchema } from "@/app/(auth)/login";
import { axiosInstance } from "@/lib/axios/axiosInstance";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data: TLoginSchema) => {
      const res = await axiosInstance.post("/users/login", data);
      return res.data;
    },
  });
};
