import { icons } from "@/constants";
import { Ride } from "@/types/type";
import { formatDate, formatTime } from "@/utils";
import React, { FC } from "react";
import { Image, Platform, Text, View } from "react-native";
import Separator from "./Seperator";

interface RideCardProps {
  item: Ride;
}

const InfoRow: FC<{ label: string; value: string; valueClass?: string }> = ({
  label,
  value,
  valueClass = "",
}) => (
  <View className="flex-row justify-between">
    <Text className="text-secondary">{label}</Text>
    <Text className={valueClass}>{value}</Text>
  </View>
);

const RideCard: FC<RideCardProps> = ({ item }) => {
  const {
    origin_address,
    destination_address,
    destination_latitude,
    destination_longitude,
    ride_time,
    created_at,
    driver,
    payment_status,
  } = item;

  const mapUri = `https://maps.geoapify.com/v1/staticmap?style=osm-bright-smooth&width=600&height=400&center=lonlat:${destination_longitude},${destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`;

  return (
    <View
      className={`p-5 bg-white rounded-2xl gap-y-4 ${
        Platform.OS === "ios" ? "shadow-sm" : "elevation-sm"
      }`}
    >
      {/* Map and addresses */}
      <View className="flex-row items-center gap-x-5">
        <Image
          className="w-[80px] h-[90px] rounded-lg"
          source={{ uri: mapUri }}
        />
        <View className="gap-y-3">
          <View className="flex-row items-center gap-x-2">
            <Image source={icons.to} resizeMode="contain" className="w-7 h-7" />
            <Text className="text-base">{origin_address}</Text>
          </View>
          <View className="flex-row items-center gap-x-2">
            <Image
              source={icons.point}
              resizeMode="contain"
              className="w-7 h-7"
            />
            <Text className="text-base">{destination_address}</Text>
          </View>
        </View>
      </View>

      {/* Ride Details */}
      <View className="p-5 rounded-2xl bg-neutral-100 gap-y-3">
        <InfoRow
          label="Date & Time"
          value={`${formatDate(created_at)}, ${formatTime(ride_time)}`}
        />
        <Separator color="bg-white" />

        <InfoRow
          label="Driver"
          value={`${driver?.first_name} ${driver?.last_name}`}
        />
        <Separator color="bg-white" />

        <InfoRow label="Car seats" value={`${driver?.car_seats}`} />
        <Separator color="bg-white" />

        <InfoRow
          label="Payment Status"
          value={payment_status}
          valueClass={`font-semibold ${
            payment_status === "paid" ? "text-success" : "text-danger"
          }`}
        />
      </View>
    </View>
  );
};

export default RideCard;
