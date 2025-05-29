import React, { FC, useState } from "react";
import { Control, Controller } from "react-hook-form";
import {
  Image,
  ImageSourcePropType,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface InputProps extends TextInputProps {
  label?: string;
  name: string;
  control: Control<any>;
  leftIcon?: ImageSourcePropType;
  actionIcon?: ImageSourcePropType;
  actionHandler?: () => void;
  secureTextEntry?: boolean;
}

const Input: FC<InputProps> = ({
  label,
  name,
  control,
  leftIcon,
  actionIcon,
  actionHandler,
  secureTextEntry = false,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const containerStyle = {
    borderWidth: isFocused ? 1 : 0,
    borderColor: isFocused ? "#3b82f6" : "transparent",
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Controller
          control={control}
          name={name}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <View>
              {label && (
                <Text className="mb-1 text-lg text-black">{label}</Text>
              )}

              <View
                className="flex-row items-center w-full rounded-full bg-neutral-200 h-[50px] px-5"
                style={containerStyle}
              >
                {leftIcon && (
                  <Image
                    source={leftIcon}
                    className="w-6 h-6"
                    resizeMode="contain"
                  />
                )}

                <TextInput
                  onFocus={handleFocus}
                  onBlur={() => {
                    handleBlur();
                    onBlur();
                  }}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry={secureTextEntry}
                  className="flex-1 h-full mx-1"
                  placeholderTextColor="#ADADAD"
                  {...rest}
                />

                {actionIcon && (
                  <TouchableOpacity onPress={actionHandler}>
                    <Image
                      source={actionIcon}
                      className="w-6 h-6"
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                )}
              </View>

              {error?.message && (
                <Text className="text-base text-danger">* {error.message}</Text>
              )}
            </View>
          )}
        />
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Input;
