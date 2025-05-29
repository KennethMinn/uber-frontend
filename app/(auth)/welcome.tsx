import { onboarding } from "@/constants";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import CustomButton from "../../components/CustomButton";

const DOT_STYLE = "w-[32px] h-[4px] mx-1 rounded-full";
const INACTIVE_DOT = <View className={`${DOT_STYLE} bg-[#E2E8F0]`} />;
const ACTIVE_DOT = <View className={`${DOT_STYLE} bg-[#0286FF]`} />;

const Welcome = () => {
  const swiperRef = useRef<Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide = activeIndex === onboarding.length - 1;

  const handleNext = () => {
    if (isLastSlide) {
      router.replace("/register");
    } else {
      swiperRef.current?.scrollBy(1);
    }
  };

  return (
    <SafeAreaView className="h-full px-5">
      <TouchableOpacity
        activeOpacity={0.7}
        className="flex-row ms-auto"
        onPress={() => router.replace("/login")}
      >
        <Text className="font-semibold">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={INACTIVE_DOT}
        activeDot={ACTIVE_DOT}
        onIndexChanged={setActiveIndex}
      >
        {onboarding.map((item) => (
          <View key={item.id} className="items-center flex-1 mt-20 gap-y-5">
            <Image
              source={item.image}
              className=" w-full h-[400px]"
              resizeMode="contain"
            />
            <Text className="mx-5 text-5xl font-bold text-center">
              {item.title}
            </Text>
            <Text className="mt-1 text-lg text-center opacity-60">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButton onPress={handleNext} title="Next" textVariant="secondary" />
    </SafeAreaView>
  );
};

export default Welcome;
