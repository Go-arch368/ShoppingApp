import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const categories = [
  {
    name: "Zepto Cafe",
    image: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/031c2a24-d40f-4272-8c71-8a566252495e.png",
    href: "/pip/zepto-cafe/12830",
    aspectRatio: 225 / 333,
  },
  {
    name: "Tea, Coffee & More",
    image: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/f078a8dc-a9b6-41a6-9c6f-721d4892b8ee.png",
    href: "/cn/tea-coffee-more/...",
    aspectRatio: 225 / 333,
  },
  {
    name: "Ice Creams & More",
    image: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-334,pr-true,f-auto,q-80/cms/category/db346f5e-644f-426a-85af-92d707e086ac.png",
    href: "/cn/ice-creams-more/...",
    aspectRatio: 225 / 334,
  },
  {
    name: "Frozen Food",
    image: "https://cdn.zeptonow.com/production/tr:w-210,ar-226-334,pr-true,f-auto,q-80/cms/category/366e5b7d-2028-4935-b9f1-75bfa085c3d7.png",
    href: "/cn/frozen-food/...",
    aspectRatio: 226 / 334,
  },
  {
    name: "Sweet Cravings",
    image: "https://cdn.zeptonow.com/production/tr:w-210,ar-300-444,pr-true,f-auto,q-80/cms/category/ec7b14c6-2640-4165-b3ae-68c09a249ae0.png",
    href: "/cn/sweet-cravings/...",
    aspectRatio: 300 / 444,
  },
  {
    name: "Cold Drinks & Juices",
    image: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/59d2c0cc-e776-407c-9142-7e69898d9eab.png",
    href: "/cn/cold-drinks-juices/...",
    aspectRatio: 225 / 333,
  },
  {
    name: "Munchies",
    image: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/90b2faee-1461-465a-a8c6-8c84716dd7dc.png",
    href: "/cn/munchies/...",
    aspectRatio: 225 / 333,
  },
  {
    name: "Biscuits",
    image: "https://cdn.zeptonow.com/production/tr:w-210,ar-226-334,pr-true,f-auto,q-80/cms/category/9b88fff5-73f5-46fd-999f-1622db4203d7.png",
    href: "/cn/biscuits/...",
    aspectRatio: 226 / 334,
  },
];

const SnacksAndDrinks = () => {
  const router = useRouter();

  return (
    <View className="px-4 pt-4 mb-10">
      <Text className="text-lg font-bold mb-4">Snacks & Beverages</Text>
      <View className="flex-row flex-wrap justify-between">
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => router.push(category.href as any)}
            style={{
              width: "23%", // ~4 items per row
              marginBottom: 16,
            }}
          >
            <View
              style={{
                width: "100%",
                aspectRatio: category.aspectRatio,
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <Image
                source={{ uri: category.image }}
                resizeMode="cover"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </View>
           
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SnacksAndDrinks;
