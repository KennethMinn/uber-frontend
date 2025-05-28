import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Welcome = () => {
  return (
    <SafeAreaView className="h-full px-5">
      <TouchableOpacity
        activeOpacity={0.7}
        className="flex-row ms-auto"
        onPress={() => router.replace("/login")}
      >
        <Text className="font-semibold">Skip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Welcome;
