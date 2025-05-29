import { icons, images } from "@/constants";
import { useRegister } from "@/hooks/useRegister";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import { Alert, Image, Text, View } from "react-native";
import { z } from "zod";
import CustomButton from "../../components/CustomButton";
import Input from "../../components/Input";

const registerSchema = z.object({
  name: z.string().min(1, "name is required"),
  email: z.string().email({ message: "invalid email" }),
  password: z.string().min(8, "passwords must be at least 8 characters"),
});

export type TRegisterSchema = z.infer<typeof registerSchema>;

const Register = () => {
  const { mutate: register, isPending } = useRegister();
  const { reset, handleSubmit, control } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: TRegisterSchema) => {
    register(data, {
      onSuccess: () => {
        reset();
      },
      onError: () => {
        Alert.alert("Error Register", "Something went wrong");
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
          Create your account
        </Text>
      </View>
      <View className="h-full p-5 gap-y-5">
        <Input
          name="name"
          control={control}
          label="Name"
          placeholder="Enter your name"
          leftIcon={icons.person}
        />
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
          title="Register"
          textVariant="secondary"
          onPress={handleSubmit(onSubmit)}
        />
        <Link href="/login" className="mx-auto">
          <Text>Already have an account? </Text>
          <Text className="text-primary">Log in</Text>
        </Link>
      </View>
    </View>
  );
};

export default Register;
