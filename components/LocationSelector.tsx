// components/LocationSelector.tsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LocationSelector = () => {
  return (
    <View className="flex flex-row items-center gap-x-3 mt-0 px-4">
      <TouchableOpacity accessibilityLabel="login">
        <View className="flex flex-col items-center gap-y-1 min-w-max">
          <Ionicons name="person-circle-outline" size={32} color="white" />
        </View>
      </TouchableOpacity>

      <View className="flex-1 flex flex-col justify-center h-11">
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Select Location"
          className="flex flex-row items-center gap-x-2"
        >
          <Text
            className="text-sm font-semibold text-white max-w-[170px] truncate"
            numberOfLines={1}
          >
            Select Location
          </Text>
          <Ionicons name="chevron-down" size={16} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LocationSelector;
