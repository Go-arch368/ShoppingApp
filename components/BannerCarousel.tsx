import React from "react";
import { ScrollView, Image, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

const banners = [
  {
    elementId: "83e19dfd-a0a5-4c3f-93b3-0db6a2cb4f98",
    elementName: "Mimo",
    deeplink: "https://www.zeptonow.com/DeepLink?id=ce20d4dc-9278-4381-aad2-4943b60a9ca8",
    image:
      "https://cdn.zeptonow.com/production/tr:w-459,ar-459-612,pr-true,f-auto,q-80/inventory/banner/c06ca765-de7c-4091-8eb7-24741fa4ec3f-70ee4810-e120-4447-a30d-93dcd07cd0b0",
  },
  {
    elementId: "9d37fac1-a37f-4383-ab07-7a0e2965129d",
    elementName: "NIC",
    deeplink: "https://www.zeptonow.com/DeepLink?id=377e3124-bc5a-4075-93f9-4edb48a010a4",
    image:
      "https://cdn.zeptonow.com/production/tr:w-459,ar-459-612,pr-true,f-auto,q-80/inventory/banner/d83def01-1a95-44e8-a24f-a43153905668-639f4d52-2b90-4ddc-a588-1d3c9dd5f0d2",
  },
  {
    elementId: "7c575924-97fb-439e-98cd-99caebd30d8b",
    elementName: "Grameen",
    deeplink: "https://www.zeptonow.com/DeepLink?id=64d84cc9-6087-4f98-988b-8adf81f2fad4",
    image:
      "https://cdn.zeptonow.com/production/tr:w-459,ar-459-612,pr-true,f-auto,q-80/inventory/banner/7dc00534-7518-4094-8007-74bc0fd37bf8-cf80b821-82a0-4e97-ad43-3dfb8db9b0ea",
  },
  {
    elementId: "bf485764-dc2a-45c7-aeff-68808303a822",
    elementName: "UBON",
    deeplink:
      "https://www.zeptonow.com/LayoutEngine?isCafeLMSPIPEnabled=true&isLMSPIPEnabled=true&layoutId=31423&pageId=PAGE_IN_PAGE",
    image:
      "https://cdn.zeptonow.com/production/tr:w-459,ar-459-612,pr-true,f-auto,q-80/inventory/banner/8d43d4b1-6442-4efb-ab5a-a8cfa01054ed-87e21d04-fdb2-4254-830d-c53d4eda55e0",
  },
];

const BannerCarousel = () => {
  const router = useRouter();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="py-4 px-4 mb-10"
    >
      <View className="flex-row gap-3">
        {banners.map((banner, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => router.push(banner.deeplink as any)}
            className="rounded-lg overflow-hidden"
            style={{ width: 108, height: 150  }} 
          >
            <Image
              source={{ uri: banner.image }}
              style={{ width: 108, height: 150  }}
              resizeMode="cover"
              accessibilityLabel={banner.elementName}
              onError={(error) =>
                console.log(`Image failed to load: ${banner.image}`, error)
              }
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default BannerCarousel;
