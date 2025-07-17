import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const categories = [
  {
    name: "Home Needs",
    image: "https://cdn.zeptonow.com/production/tr:w-210,ar-226-334,pr-true,f-auto,q-80/cms/category/b322b3db-e75e-45e5-a11d-7ee37561c426.png",
    href: "/pip/home-needs/13145",
    aspectRatio: 226 / 334,
  },
  {
    name: "Kitchen & Dining",
    image: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/c42610fc-a94c-40f6-9e74-d30c4a1f5895.png",
    href: "/pip/kitchen-dining/13886",
    aspectRatio: 225 / 333,
  },
  {
    name: "Cleaning Essentials",
    image: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-334,pr-true,f-auto,q-80/cms/category/acfa1279-d46b-408c-8f74-6fcd71bd89f9.png",
    href: "/cn/cleaning-essentials/cleaning-essentials/cid/1a7e46a8-e627-450f-8960-490b550eeee6/scid/3b8d9db5-1953-4593-b4ce-8593f6fbd67a?",
    aspectRatio: 225 / 334,
  },
  {
    name: "Electronics & Appliances",
    image: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/c084c75c-82ca-497f-857c-5069c6723194.png",
    href: "/pip/electronics-appliances/14025",
    aspectRatio: 225 / 333,
  },
  {
    name: "Pet Care",
    image: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/b117aaf8-960c-43c2-83e8-76d6d238c510.png",
    href: "/cn/pet-care/pet-care/cid/13831a81-e0d5-4939-9650-df2413e7aead/scid/8f39b80f-2682-4038-befa-c0001465647d?",
    aspectRatio: 225 / 333,
  },
  {
    name: "Toys & Sports",
    image: "https://cdn.zeptonow.com/production/tr:w-210,ar-226-334,pr-true,f-auto,q-80/cms/category/8d4fb022-bae0-432d-92c8-2b12d97ee6cc.png",
    href: "/pip/toys-sports/11911",
    aspectRatio: 226 / 334,
  },
  {
    name: "Stationery & Books",
    image: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/b5cfc944-9611-4f08-b4f9-a071d07b1aad.png",
    href: "/cn/stationery-books/stationery-books/cid/0d74209d-c2e4-431b-98e0-c00a92766773/scid/68aecbfb-46ba-43ae-bfe5-97127b4e8117?",
    aspectRatio: 225 / 333,
  },
  {
    name: "Paan Corner",
    image: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/6d26710a-1dd8-4d53-9884-33bbaebc4bf4.png",
    href: "/cn/paan-corner/paan-corner/cid/cd50825e-baf8-47fe-9abc-ed9556122a9a/scid/5ce06b88-4e4e-4625-9fa0-0793aac0e50e?",
    aspectRatio: 225 / 333,
  },
];

const HouseholdEssentials = () => {
  const router = useRouter();

  return (
    <View className="px-4 pt-4 mb-10">
      <Text className="text-lg font-bold mb-4">Household Essentials</Text>
      <View className="flex-row flex-wrap justify-between">
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => router.push(category.href as any)}
            style={{
              width: "23%",
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
            <Text
              style={{
                textAlign: "center",
                fontSize: 12,
                fontWeight: "600",
                marginTop: 6,
                color: "#2E3642",
              }}
              numberOfLines={2}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default HouseholdEssentials;
