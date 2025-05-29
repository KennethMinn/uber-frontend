import { icons, images } from "@/constants";
import { useAuth } from "@/hooks/useAuth";
import { useLogin } from "@/hooks/useLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, router } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import { Alert, Image, Text, View } from "react-native";
import { z } from "zod";
import CustomButton from "../../components/CustomButton";
import Input from "../../components/Input";

const loginSchema = z.object({
  email: z.string().email({ message: "invalid email" }),
  password: z.string().min(8, "passwords must be at least 8 characters"),
});

export type TLoginSchema = z.infer<typeof loginSchema>;

const Register = () => {
  const { mutate: login, isPending } = useLogin();
  const { setUser } = useAuth();
  const { reset, handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: TLoginSchema) => {
    login(data, {
      onSuccess: (res) => {
        setUser(res?.user);
        AsyncStorage.setItem("accessToken", res?.accessToken);
        reset();
        router.push("/");
      },
      onError: () => {
        Alert.alert("Error Login", "Something went wrong");
      },
    });
  };

  return (
    <View className="flex-1">
      <View className="relative">
        <Image
          source={images.getStarted}
          resizeMode="cover"
          className=" w-full h-[350px]"
        />
        <Text className="absolute text-3xl font-semibold text-black bottom-3 left-5">
          Log in to your account
        </Text>
      </View>
      <View className="h-full p-5 gap-y-5">
        <Input
          name="email"
          control={control}
          label="Email"
          placeholder="Enter your email"
          leftIcon={icons.email}
        />
        <Input
          secureTextEntry
          name="password"
          control={control}
          label="Password"
          placeholder="Enter your password"
          leftIcon={icons.lock}
        />
        <CustomButton
          isLoading={isPending}
          className="mt-2"
          title="Login"
          textVariant="secondary"
          onPress={handleSubmit(onSubmit)}
        />
        <Link href="/register" className="mx-auto">
          <Text>Don&apos;t have an account? </Text>
          <Text className=" text-primary">Register</Text>
        </Link>
      </View>
    </View>
  );
};

export default Register;
