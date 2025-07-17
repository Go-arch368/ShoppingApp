import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const banners = [
  {
    title: "Home Cleaning",
    price: "Starting at ₹99",
    image:
      "https://cdn.zeptonow.com/production/tr:w-416,ar-416-392,pr-true,f-auto,q-80/inventory/banner/b1193cd8-62b4-4ba5-b744-1f20bc4c6a07.png",
    href: "/pip/home-cleaning/24497",
  },
  {
    title: "Home & Festive Decor",
    price: "Starting at ₹99",
    image:
      "https://cdn.zeptonow.com/production/tr:w-416,ar-416-392,pr-true,f-auto,q-80/inventory/banner/49a30619-eae0-416d-807e-b1baaa73be55.png",
    href: "/pip/home-decor/24499",
  },
  {
    title: "Home Furnishing",
    price: "Starting at ₹199",
    image:
      "https://cdn.zeptonow.com/production/tr:w-416,ar-416-392,pr-true,f-auto,q-80/inventory/banner/55de0084-1593-4e41-8311-a9030fbd3b04.png",
    href: "/pip/home-furnishing/24500",
  },
  {
    title: "Bathroom Utility",
    price: "Starting at ₹49",
    image:
      "https://cdn.zeptonow.com/production/tr:w-416,ar-416-392,pr-true,f-auto,q-80/inventory/banner/3c6f64ed-cb22-45a6-940a-77ffad123c56.png",
    href: "/pip/bath-utility/24601",
  },
  {
    title: "Home Improvement",
    price: "Starting at ₹149",
    image:
      "https://cdn.zeptonow.com/production/tr:w-416,ar-416-392,pr-true,f-auto,q-80/inventory/banner/e5727db0-fc97-4ad3-a303-9763fc33d1eb.png",
    href: "/pip/home-improvement/24602",
  },
  {
    title: "Monsoon Must haves",
    price: "Starting at ₹99",
    image:
      "https://cdn.zeptonow.com/production/tr:w-416,ar-416-392,pr-true,f-auto,q-80/inventory/banner/09a8bd68-6925-4870-b119-57578ba02e74.png",
    href: "/cn/monsoon-specials/monsoon-specials/cid/1d49f533-125f-4889-be05-c21f33a6c542/scid/06e7d79b-e02d-4257-86e4-3baa39f1c145",
  },
];

const BannerGrid = () => {
  const router = useRouter();

  return (
    <View className="px-4">
      {/* Top Banner */}
      <Image
        source={{
          uri: "https://cdn.zeptonow.com/production/tr:w-640,ar-1440-444,pr-true,f-auto,q-80/inventory/banner/18dc228c-17c9-4e16-8774-214ffce45c7a.png",
        }}
        style={{ width: "100%", aspectRatio: 1440 / 444 }}
        resizeMode="contain"
      />

      {/* Grid of 2 rows × 3 columns */}
      <View className="flex flex-wrap flex-row justify-between mt-4">
        {banners.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => router.push({ pathname: item.href } as any)}
            className="w-[31%] bg-white rounded-lg items-center px-2 py-3 mb-3"
            style={{
              elevation: 2,
              borderColor: "#e5e5e5",
              borderWidth: 1,
            }}
          >
            <Image
              source={{ uri: item.image }}
              resizeMode="contain"
              style={{ width: 100, height: 80 }}
            />
            
        
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default BannerGrid;
