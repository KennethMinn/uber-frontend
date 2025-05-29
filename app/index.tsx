import { useAuth } from "@/hooks/useAuth";
import { Redirect } from "expo-router";
import { Text } from "react-native";

export default function Index() {
  const { user } = useAuth();

  if (!user) return <Redirect href="/register" />;

  if (user) return <Text>{user.name}</Text>;
}
