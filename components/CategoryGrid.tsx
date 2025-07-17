import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const categories = [
  {
    name: "Fruits & Vegetables",
    image: "https://cdn.zeptonow.com/production/tr:w-420,ar-486-333,pr-true,f-auto,q-80/cms/category/2b5f2be5-cada-4cd7-b0af-e46c0c065f71.png",
    href: "/cn/fruits-vegetables/...",
    aspectRatio: 486 / 333,
    widthPercent: 48,
  },
  {
    name: "Dairy, Bread & Eggs",
    image: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/474e6e58-1894-4378-86f1-168cc7266d1a.png",
    href: "/cn/dairy-bread-eggs/...",
    aspectRatio: 225 / 333,
    widthPercent: 23,
  },
  {
    name: "Atta, Rice, Oil & Dals",
    image: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/dc4a299d-521f-4a64-8205-c5ba8e1d13e3.png",
    href: "/cn/atta-rice-oil-dals/...",
    aspectRatio: 225 / 333,
    widthPercent: 23,
  },
  {
    name: "Meats, Fish & Eggs",
    image: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/1237afd6-40bf-4942-a266-25f23025e86c.png",
    href: "/cn/meats-fish-eggs/...",
    aspectRatio: 225 / 333,
    widthPercent: 23,
  },
  {
    name: "Masala, Dry Fruits & More",
    image: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/8d4d3977-5197-49d9-9867-8a670524e48b.png",
    href: "/cn/masala-dry-fruits-more/...",
    aspectRatio: 225 / 333,
    widthPercent: 23,
  },
  {
    name: "Breakfast & Sauces",
    image: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/ab241d87-da5b-4830-b38f-1a6cd30d0d41.png",
    href: "/cn/breakfast-sauces/...",
    aspectRatio: 225 / 333,
    widthPercent: 23,
  },
  {
    name: "Packaged Food",
    image: "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/3b0ce887-3b38-4450-b7da-9da0ad8b799d.png",
    href: "/cn/packaged-food/...",
    aspectRatio: 225 / 333,
    widthPercent: 23,
  },
];

const CategoryGrid = () => {
  const router = useRouter();

  return (
    <View className="px-4 pt-0 ">
      <Text className="text-lg font-bold mb-4">Groceries & Vegetables</Text>
      <View className="flex-row flex-wrap justify-between">
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => router.push(category.href as any)}
            style={{
              width: `${category.widthPercent}%`,
              marginBottom: 16,
            }}
          >
            <View
              style={{
                width: '100%',
                aspectRatio: category.aspectRatio,
                borderRadius: 12,
                overflow: 'hidden',
              }}
            >
              <Image
                source={{ uri: category.image }}
                resizeMode="cover"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CategoryGrid;
