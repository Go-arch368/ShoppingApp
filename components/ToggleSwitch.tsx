import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const ToggleSwitch = () => {
  const [selected, setSelected] = useState("Zepto");

  return (
    <View className="px-4 pt-5">
      <View className="flex-row bg-white rounded-full border border-gray-300 p-1">
        {/* Zepto */}
        <TouchableOpacity
          onPress={() => setSelected("Zepto")}
          className={`flex-1 items-center justify-center py-2 rounded-full ${
            selected === "Zepto" ? "bg-[#9A16CA]" : "bg-transparent"
          }`}
        >
          <Text
            className={`text-sm ${
              selected === "Zepto"
                ? "text-white font-bold"
                : "text-[#9A16CA] font-semibold"
            }`}
          >
            zepto
          </Text>
        </TouchableOpacity>

        {/* Zepto Super Saver */}
        <TouchableOpacity
          onPress={() => setSelected("Zepto Super Saver")}
          className={`flex-1 items-center justify-center py-2 rounded-full ${
            selected === "Zepto Super Saver" ? "bg-[#0C8346]" : "bg-transparent"
          }`}
        >
          <Text
            className={`text-sm ${
              selected === "Zepto Super Saver"
                ? "text-white font-bold"
                : "text-[#0C8346] font-semibold"
            }`}
          >
            zepto <Text className="italic">Super Saver</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ToggleSwitch
