import { TRegisterSchema } from "@/app/(auth)/register";
import { axiosInstance } from "@/lib/axios/axiosInstance";
import { useMutation } from "@tanstack/react-query";

export const useRegister = () => {
  return useMutation({
    mutationFn: async (data: TRegisterSchema) => {
      const res = await axiosInstance.post("/users/register", data);
      return res.data;
    },
  });
};
