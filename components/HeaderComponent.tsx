import React, { useState, useRef } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const categories = [
  {
    title: "All",
    image: "https://cdn.zeptonow.com/production/inventory/banner/a767cf6e-9113-409b-b5ab-ac0d22a7db58.png",
  },
  {
    title: "Cafe",
    image: "https://cdn.zeptonow.com/production/inventory/banner/e8abccfb-64fe-4249-84d3-426eccf01e23.png",
  },
  {
    title: "Home",
    image: "https://cdn.zeptonow.com/production/inventory/banner/be82f78d-d993-4838-9f4a-4c64cd387126.png",
  },
  {
    title: "Toys",
    image: "https://cdn.zeptonow.com/production/inventory/banner/b6960301-bb3c-4b75-af0e-433a8ce0a6b9.png",
  },
  {
    title: "Fresh",
    image: "https://cdn.zeptonow.com/production/inventory/banner/8e8a58b9-f2d7-46fb-9634-930b016499fa.png",
  },
  {
    title: "Electronics",
    image: "https://cdn.zeptonow.com/production/inventory/banner/5c9a7bea-68b1-4bad-9fab-44cc940b72ee.png",
  },
  {
    title: "Mobiles",
    image: "https://cdn.zeptonow.com/production/inventory/banner/c882779f-738d-46f8-8656-8ebb72246b46.png",
  },
  {
    title: "Beauty",
    image: "https://cdn.zeptonow.com/production/inventory/banner/fcb1b518-5047-4aee-a6c4-3677c801d2ca.png",
  },
  {
    title: "Fashion",
    image: "https://cdn.zeptonow.com/production/inventory/banner/331fa0bc-afda-409d-a201-acc3deedaa2d.png",
  },
];

const HeaderComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScrollRight = () => {
    scrollViewRef.current?.scrollTo({ x: 120, animated: true });
  };

  return (
    <View className="w-full">
      <View className="relative w-full">
        <ScrollView
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexDirection: "row", alignItems: "center" }}
          className="w-full"
        >
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              className="relative flex flex-row items-center gap-1 px-1 shrink-0 pb-3 mr-3 min-w-[80px]"
              onPress={() => setSelectedCategory(category.title)}
            >
             <Image
                source={{ uri: category.image }}
                 style={{
                    width: 24,
                    height: 24,
                    tintColor: 'white', 
                        }}
                    resizeMode="contain"
                        />

              <Text
                className={`text-lg font-medium leading-5 shrink-0 text-white ${
                  selectedCategory === category.title ? "font-bold" : ""
                }`}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {category.title}
              </Text>
              <View
                className={`absolute bottom-0 h-[3px] w-full bg-white rounded-tl-[4px] rounded-tr-[4px] ${
                  selectedCategory === category.title ? "opacity-100" : "opacity-0"
                }`}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View className="absolute right-5 top-1/2 -translate-y-1/2 z-10">
          <TouchableOpacity
            className="flex h-8 w-8 items-center justify-center rounded-full bg-black p-2 shadow-lg"
            onPress={handleScrollRight}
          >
            <Ionicons
              name="chevron-forward"
              size={24}
              color="white"
              className="-rotate-180"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HeaderComponent;