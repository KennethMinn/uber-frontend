import { useAuth } from "@/hooks/useAuth";
import { Redirect, router } from "expo-router";
import { useEffect } from "react";
import { Button } from "react-native";

export default function Index() {
  const { user, setUser } = useAuth();

  useEffect(() => {
    // setUser(null);
    console.log("user ", user);
  }, [user]);

  if (!user) return <Redirect href="/welcome" />;

  if (user)
    return (
      <>
        <Button title="Logout" onPress={() => setUser(null)} />
        <Button title="Go to tabs" onPress={() => router.push("/home")} />
      </>
    );
}
