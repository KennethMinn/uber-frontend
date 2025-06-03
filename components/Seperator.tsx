import React from "react";
import { View } from "react-native";

interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  thickness?: number; // in pixels
  color?: string; // tailwind color class like "bg-gray-200"
  className?: string;
}

const Separator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  thickness = 1,
  color = "bg-gray-200",
  className = "",
}) => {
  const isHorizontal = orientation === "horizontal";
  const dimensionClass = isHorizontal
    ? `h-[${thickness}px] w-full`
    : `w-[${thickness}px] h-full`;

  return <View className={`${dimensionClass} ${color} ${className}`} />;
};

export default Separator;
