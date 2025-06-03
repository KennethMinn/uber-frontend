import RideCard from "@/components/RideCard";
import { recentRides } from "@/constants";
import React from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="px-5 ">
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerClassName=" gap-y-5 pb-5"
        keyExtractor={(item) => item.ride_id}
        data={recentRides}
        renderItem={({ item }) => <RideCard item={item} />}
      />
    </SafeAreaView>
  );
};

export default Home;
