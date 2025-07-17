import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const categories = [
  {
    name: "Makeup & Beauty",
    image:
      "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/91b5ee91-38a4-4654-93db-ba948f6265ea.png",
    href: "/pip/makeup-beauty/27819",
    aspectRatio: 225 / 333,
  },
  {
    name: "Skincare",
    image:
      "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/b1909dfd-726c-412b-beb7-9553bc909363.png",
    href: "/cn/skincare/skincare/cid/d6c455aa-496b-4599-8f7d-81ecee8cf5a3/scid/9e89c253-515a-49f6-b80b-6eac6e3a5e52?",
    aspectRatio: 225 / 333,
  },
  {
    name: "Protein & Nutrition",
    image:
      "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/0da227bf-f9c1-4688-b26a-8ee28dcdaa8e.png",
    href: "/cn/protein-nutrition/protein-nutrition/cid/2e75e2ea-5cb9-4f14-8a66-f3a61addeb32/scid/b5870d30-cc75-43f6-978f-4138d41ad7b8?",
    aspectRatio: 225 / 333,
  },
  {
    name: "Baby Care",
    image:
      "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/227b70d5-d1cf-428b-a276-1392c5067eb3.png",
    href: "/cn/baby-care/baby-care/cid/0118c4f5-750c-4929-a734-b4ef454e265b/scid/b998e39c-6948-42f2-84bb-947f07f2ceca?",
    aspectRatio: 225 / 333,
  },
  {
    name: "Bath & Body",
    image:
      "https://cdn.zeptonow.com/production/tr:w-210,ar-226-334,pr-true,f-auto,q-80/cms/category/e4fe52ef-96d9-4289-afb1-1c1ca7efd85b.png",
    href: "/cn/bath-body/bath-body/cid/26e64367-19ad-4f80-a763-42599d4215ee/scid/e8801cfd-49d0-4388-bc29-f83258204d39?",
    aspectRatio: 226 / 334,
  },
  {
    name: "Hair Care",
    image:
      "https://cdn.zeptonow.com/production/tr:w-210,ar-226-334,pr-true,f-auto,q-80/cms/category/eb6fe22a-f8b8-4189-8d9a-deb32ff659c9.png",
    href: "/pip/hair-care/20135",
    aspectRatio: 226 / 334,
  },
  {
    name: "Jewellery",
    image:
      "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/20d9687b-58a4-4bf7-a561-99198b4d5ca1.png",
    href: "/cn/jewellery/jewellery/cid/27b4b613-108e-4c77-91e6-b839d542385b/scid/0?",
    aspectRatio: 225 / 333,
  },
  {
    name: "Apparel & Lifestyle",
    image:
      "https://cdn.zeptonow.com/production/tr:w-210,ar-229-349,pr-true,f-auto,q-80/cms/category/498eea73-358c-42c1-b482-158e80669be9.png",
    href: "/pip/apparel-lifestyle/23798",
    aspectRatio: 229 / 349,
  },
  {
    name: "Fragrances & Grooming",
    image:
      "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/a4d7f18e-3a58-4c85-b912-f15f0be533ab.png",
    href: "/cn/fragrances-grooming/fragrances-grooming/cid/875671b0-ec18-42c7-9749-c2cf165509fa/scid/a7129b9a-4466-4935-957f-f91eff2130b7?",
    aspectRatio: 225 / 333,
  },
  {
    name: "Pharma & Wellness",
    image:
      "https://cdn.zeptonow.com/production/tr:w-210,ar-304-464,pr-true,f-auto,q-80/cms/category/bc5f6b57-fa3a-4a71-b498-7b8cb83323f9.png",
    href: "/pip/pharma-wellness/18608",
    aspectRatio: 304 / 464,
  },
  {
    name: "Feminine Hygiene",
    image:
      "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/2b267097-f22b-4269-be34-1ea534ced3d4.png",
    href: "/cn/feminine-hygiene/feminine-hygiene/cid/72066480-9851-4263-89b6-50dd7525edc1/scid/56983fec-fd04-4190-9587-20e0a6fc4642?",
    aspectRatio: 225 / 333,
  },
  {
    name: "Sexual Wellness",
    image:
      "https://cdn.zeptonow.com/production/tr:w-210,ar-225-333,pr-true,f-auto,q-80/cms/category/f4371151-d6ed-42d6-9338-8f7391d03fec.png",
    href: "/cn/sexual-wellness/sexual-wellness/cid/5ff01c62-4d1a-4eae-b566-2fe3b345abe9/scid/1c3ad1c2-76e8-4097-b2ca-99c180d23b96?",
    aspectRatio: 225 / 333,
  },
];

const BeautyAndPersonalCare = () => {
  const router = useRouter();

  return (
    <View className="px-4 pt-4">
      <Text className="text-lg font-bold mb-4">Beauty and Personal Care</Text>
      <View className="flex-row flex-wrap justify-between">
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => router.push(category.href as any)}
            style={{
              width: "23%", // Four items per row
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

export default BeautyAndPersonalCare;
