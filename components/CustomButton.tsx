import { FC } from "react";
import {
  ActivityIndicator,
  Image,
  ImageSourcePropType,
  Platform,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

const BG_VARIANTS = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  success: "bg-success",
  danger: "bg-danger",
  warning: "bg-warning",
  outlined: "bg-transparent border-neutral-300 border-[0.5px]",
} as const;

const TEXT_VARIANTS = {
  primary: "text-black",
  secondary: "text-white",
  success: "text-green",
  danger: "text-danger",
  warning: "text-warning",
} as const;

type BgVariant = keyof typeof BG_VARIANTS;
type TextVariant = keyof typeof TEXT_VARIANTS;

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
  onPress: () => void;
  className?: string;
  bgVariant?: BgVariant;
  textVariant?: TextVariant;
  leftIcon?: ImageSourcePropType;
  rightIcon?: ImageSourcePropType;
}

const CustomButton: FC<CustomButtonProps> = ({
  isLoading,
  title,
  onPress,
  className = "",
  bgVariant = "primary",
  textVariant = "primary",
  leftIcon,
  rightIcon,
  ...rest
}) => {
  const bgStyle = BG_VARIANTS[bgVariant];
  const textStyle = TEXT_VARIANTS[textVariant];
  const dynamicShadowStyle =
    Platform.OS === "ios" ? "shadow-md" : "elevation-md";

  return (
    <TouchableOpacity
      disabled={isLoading}
      onPress={onPress}
      className={`w-full rounded-full py-5 px-4 flex-row items-center justify-center space-x-2 ${dynamicShadowStyle} ${bgStyle} ${className}`}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator className="w-5 h-5" />
      ) : (
        <>
          {leftIcon && (
            <Image source={leftIcon} className="w-5 h-5" resizeMode="contain" />
          )}
          <Text className={`font-semibold mx-2 ${textStyle}`}>{title}</Text>
          {rightIcon && (
            <Image
              source={rightIcon}
              className="w-5 h-5"
              resizeMode="contain"
            />
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
