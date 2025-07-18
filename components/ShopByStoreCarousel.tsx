import React from "react";
import { ScrollView, Image, Text, TouchableOpacity ,View} from "react-native";
import { useRouter } from "expo-router";

const banners = [
  {
    name: "Monsoon Store",
    image: "https://cdn.zeptonow.com/production/tr:w-298,ar-298-431,pr-true,f-auto,q-80/inventory/banner/988eaf67-a9dc-4376-873c-5ef5e0910ef4.png",
    deeplink: "https://www.zeptonow.com/LayoutEngine?pageId=PAGE_IN_PAGE&layoutId=30364&isLMSPIPEnabled=true",
    aspectRatio: 298 / 431, // 0.691
    width: 90,
  },
  {
    name: "Gift Card",
    image: "https://cdn.zeptonow.com/production/tr:w-298,ar-298-431,pr-true,f-auto,q-80/inventory/banner/995d3b0a-32bd-4f91-8a28-f8068886915a.png",
    deeplink: "https://www.zeptonow.com/LayoutEngine?pageId=PAGE_IN_PAGE&layoutId=25059&isLMSPIPEnabled=true",
    aspectRatio: 298 / 431, // 0.691
    width: 90,
  },
  {
    name: "Fitness Store",
    image: "https://cdn.zeptonow.com/production/tr:w-298,ar-298-431,pr-true,f-auto,q-80/inventory/banner/c46ebb0c-ab73-4351-a0b9-c5c3686d2575.png",
    deeplink: "https://www.zeptonow.com/LayoutEngine?pageId=PAGE_IN_PAGE&layoutId=17084&title=Fitness&isLMSPIPEnabled=true",
    aspectRatio: 298 / 431, // 0.691
    width: 90,
  },
  {
    name: "Birthday Store",
    image: "https://cdn.zeptonow.com/production/tr:w-298,ar-298-431,pr-true,f-auto,q-80/inventory/banner/95a61cfd-b6d3-4d8a-bc05-c1f63da3be5b.png",
    deeplink: "https://www.zeptonow.com/LayoutEngine?pageId=PAGE_IN_PAGE&layoutId=30551&isLMSPIPEnabled=true",
    aspectRatio: 298 / 431, // 0.691
    width: 90,
  },
  {
    name: "Book Store",
    image: "https://cdn.zeptonow.com/production/tr:w-298,ar-298-431,pr-true,f-auto,q-80/inventory/banner/e1fe97eb-eb58-4b1c-a485-c97ead616841.png",
    deeplink: "https://www.zeptonow.com/LayoutEngine?pageId=PAGE_IN_PAGE&layoutId=17365&isLMSPIPEnabled=true",
    aspectRatio: 298 / 431, // 0.691
    width: 90,
  },
  {
    name: "Gifting Store",
    image: "https://cdn.zeptonow.com/production/tr:w-298,ar-298-431,pr-true,f-auto,q-80/inventory/banner/2c1e204d-431b-46c4-8460-f8268d3b8c63.png",
    deeplink: "https://www.zeptonow.com/LayoutEngine?pageId=PAGE_IN_PAGE&layoutId=22730&isLMSPIPEnabled=true",
    aspectRatio: 298 / 431, // 0.691
    width: 90,
  },
  {
    name: "Pooja Store",
    image: "https://cdn.zeptonow.com/production/tr:w-298,ar-298-431,pr-true,f-auto,q-80/inventory/banner/4d574fd7-9eca-4885-b5e5-f706f3cccb9a.png",
    deeplink: "https://www.zeptonow.com/LayoutEngine?pageId=PAGE_IN_PAGE&layoutId=13919&title=Pooja1&isLMSPIPEnabled=true",
    aspectRatio: 298 / 431, // 0.691
    width: 90,
  },
  {
    name: "Premium Store",
    image: "https://cdn.zeptonow.com/production/tr:w-298,ar-298-431,pr-true,f-auto,q-80/inventory/banner/6c6f0eca-1c41-4997-9f53-14ffc2be0ea0.png",
    deeplink: "https://www.zeptonow.com/LayoutEngine?pageId=PAGE_IN_PAGE&layoutId=19583&isLMSPIPEnabled=true",
    aspectRatio: 298 / 431, // 0.691
    width: 90,
  },
  {
    name: "Sports Store",
    image: "https://cdn.zeptonow.com/production/tr:w-298,ar-298-431,pr-true,f-auto,q-80/inventory/banner/9b50c8dc-212d-43d4-b749-1eb89eec2714.png",
    deeplink: "https://www.zeptonow.com/LayoutEngine?pageId=PAGE_IN_PAGE&layoutId=17126&isLMSPIPEnabled=true",
    aspectRatio: 298 / 431, // 0.691
    width: 90,
  },
  {
    name: "Baby Store",
    image: "https://cdn.zeptonow.com/production/tr:w-298,ar-298-431,pr-true,f-auto,q-80/inventory/banner/99461417-a8b7-4a23-a49e-3532ddcdeebb.png",
    deeplink: "https://www.zeptonow.com/LayoutEngine?pageId=PAGE_IN_PAGE&layoutId=16191&isLMSPIPEnabled=true",
    aspectRatio: 298 / 431, // 0.691
    width: 90,
  },
  {
    name: "Wedding Store",
    image: "https://cdn.zeptonow.com/production/tr:w-298,ar-298-431,pr-true,f-auto,q-80/inventory/banner/781285b2-e9eb-4440-9c9f-718f6b36221d.png",
    deeplink: "https://www.zeptonow.com/LayoutEngine?pageId=PAGE_IN_PAGE&layoutId=16193&isLMSPIPEnabled=true",
    aspectRatio: 298 / 431, // 0.691
    width: 90,
  },
  {
    name: "Pleasure Store",
    image: "https://cdn.zeptonow.com/production/tr:w-298,ar-298-431,pr-true,f-auto,q-80/inventory/banner/b228b268-8c93-4c1c-ad4f-593cfb84b2c5.png",
    deeplink: "https://www.zeptonow.com/LayoutEngine?pageId=PAGE_IN_PAGE&layoutId=30518&isLMSPIPEnabled=true",
    aspectRatio: 298 / 431, // 0.691
    width: 90,
  },
];

const ShopByStoreCarousel = () => {
  const router = useRouter();

  return (
     <View className="mb-10">
      {/* <Text className="text-lg font-bold mx-4 mb-2">Shop by Store</Text> */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        <View className="flex-row space-x-3">
          {banners.map((banner, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => router.push(banner.deeplink as any)}
              className="rounded-lg"
              style={{
                width: banner.width,
                aspectRatio: banner.aspectRatio,
              }}
            >
              <Image
                source={{ uri: banner.image }}
                className="w-full h-full rounded-lg"
                resizeMode="contain"
                onError={(e) =>
                  console.log(`Image failed to load: ${banner.image}`, e)
                }
              
              />
            
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ShopByStoreCarousel;