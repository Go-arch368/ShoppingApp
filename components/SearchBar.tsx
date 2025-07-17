import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from "react-native-reanimated";

const searchItems = [
  "kurkure",
  "apple juice",
  "cheese slices",
  "chocolate box",
  "amul butter",
  "banana",
];

const SearchBar = () => {
  const opacityValues = searchItems.map(() => useSharedValue(0));

  useEffect(() => {
    const animate = () => {
      searchItems.forEach((_, index) => {
        setTimeout(() => {
          opacityValues[index].value = withTiming(1, {
            duration: 1000,
            easing: Easing.inOut(Easing.ease),
          });
          setTimeout(() => {
            opacityValues[index].value = withTiming(0, {
              duration: 1000,
              easing: Easing.inOut(Easing.ease),
            });
          }, 2000);
        }, index * 3000);
      });
    };
    animate();
    const interval = setInterval(animate, 18000);
    return () => clearInterval(interval);
  }, []);

  return (
    <TouchableOpacity
      accessibilityLabel="Search for products"
      className="relative flex flex-row items-center gap-x-4 overflow-hidden rounded-lg border bg-white px-2 py-3"
    >
      <Ionicons name="search-outline" size={18} color="#383837" />
      <View className="flex flex-1 flex-row items-center gap-x-1">
        <Text className="text-md font-extralight text-gray700">Search for</Text>
        <View className="relative flex-1">
          {searchItems.map((item, index) => {
            const animatedStyle = useAnimatedStyle(() => ({
              opacity: opacityValues[index].value,
            }));
            return (
              <Animated.Text
                key={index}
                className="absolute text-md font-extralight text-gray700 -mt-3"
                style={animatedStyle}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                "{item}"
              </Animated.Text>
            );
          })}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SearchBar;