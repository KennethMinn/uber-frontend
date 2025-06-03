import { icons } from "@/constants";
import { Tabs } from "expo-router";
import React, { FC } from "react";
import { Image, ImageSourcePropType, View } from "react-native";

interface TabIconProps {
  source: ImageSourcePropType;
  focused: boolean;
}

const TabIcon: FC<TabIconProps> = ({ source, focused }) => (
  <View
    className={`w-14 h-14 rounded-full items-center justify-center ${
      focused ? "bg-success" : ""
    }`}
  >
    <Image
      source={source}
      resizeMode="contain"
      className="w-6 h-6"
      style={{ tintColor: "white" }}
    />
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#333333",
          height: 70,
          paddingTop: 15,
          marginBottom: 25,
          marginHorizontal: 20,
          borderRadius: 50,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.home} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="rides"
        options={{
          title: "Rides",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.list} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.chat} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.profile} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
