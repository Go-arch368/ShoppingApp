import React from "react";
import { ScrollView, Image, Text, TouchableOpacity, View, Animated } from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

const products = [
  {
    name: "Hit Anti Roach Gel - Cockroach Killer - Fast And Convenient(20gms) & Hit Flying Insect Killer - Mosquito & Fly Killer Spray(400ml) Combo",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1494-1494,pr-true,f-auto,q-80/cms/product_variant/19ae3c58-aeb1-4b20-aaa5-95f51977d951.jpg",
    href: "/pn/hit-anti-roach-gel-cockroach-killer-fast-and-convenient20gms-hit-flying-insect-killer-mosquito-fly-killer-spray400ml-combo/pvid/43f508d1-651f-4fb8-bcd7-43b50fe16c74",
    price: 398,
    originalPrice: 400,
    discount: "₹2 Off",
    tag: null,
    volume: "2 combo",
    rating: 4.4,
    reviews: "878",
    options: null,
  },
  {
    name: "All Out Ultra Liquid Vaporizer Mosquito Repellent | Machine + Refill",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/a17a81e3-0a90-4409-a172-979316e7fef7.jpeg",
    href: "/pn/all-out-ultra-liquid-vaporizer-mosquito-repellent-machine-refill/pvid/2ee62123-4539-4296-8ea5-2a608bbf2e57",
    price: 89,
    originalPrice: 105,
    discount: "₹16 Off",
    tag: "For Mosquitoes",
    volume: "45 ml",
    rating: 4.7,
    reviews: "2100",
    options: null,
  },
  {
    name: "Good Knight Flash Liquid Vaporizer Mosquito Repellent",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1600-1600,pr-true,f-auto,q-80/cms/product_variant/0f796a80-9bd8-4227-a49f-4f80046377bd.jpeg",
    href: "/pn/good-knight-flash-liquid-vaporizer-mosquito-repellent/pvid/538e3237-6b6f-4484-ab36-2987d581893e",
    price: 171,
    originalPrice: 190,
    discount: "₹19 Off",
    tag: "For Mosquitoes",
    volume: "2 x 45 ml",
    rating: 4.2,
    reviews: "1300",
    options: null,
  },
  {
    name: "Mortein Advanced Electric Mosquito Racquet Bat | 30% Longer Battery",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-2000-2000,pr-true,f-auto,q-80/cms/product_variant/a25affea-ed5d-485e-a37b-7942c49f7a79.jpeg",
    href: "/pn/mortein-advanced-electric-mosquito-racquet-bat-30-longer-battery/pvid/7f00a257-8ea0-4a1a-99dd-577c50f2c3f4",
    price: 546,
    originalPrice: 600,
    discount: "₹54 Off",
    tag: null,
    volume: "1 pc",
    rating: 4.4,
    reviews: "187",
    options: null,
  },
  {
    name: "Good Knight Flash Lavender Vapourizer Mosquito Repellent Refill",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1600-1600,pr-true,f-auto,q-80/cms/product_variant/304ec560-5b13-4b00-91d6-45082c592e91.jpeg",
    href: "/pn/good-knight-flash-lavender-vapourizer-mosquito-repellent-refill/pvid/5920c371-fa46-42eb-a4f5-a8f521c6f512",
    price: 289,
    originalPrice: 325,
    discount: "₹36 Off",
    tag: "For Mosquitoes",
    volume: "4 x 45 ml",
    rating: 4.7,
    reviews: "688",
    options: null,
  },
  {
    name: "All Out Ultra Power + Slider Floral Mosquito Repellent",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/f5dba1c7-1afb-4cbc-9469-0a6426cdec3d.jpeg",
    href: "/pn/all-out-ultra-power-slider-floral-mosquito-repellent/pvid/3042cc2f-5b2c-4bfb-a8a3-09f454561fbd",
    price: 152,
    originalPrice: 190,
    discount: "₹38 Off",
    tag: "For Mosquitoes",
    volume: "90 ml",
    rating: 4.7,
    reviews: "631",
    options: null,
  },
  {
    name: "Hit Flying Mosquito & Insect Killer Spray",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1600-1600,pr-true,f-auto,q-80/cms/product_variant/779b01d3-20c1-49d1-806f-872deeb86daa.jpeg",
    href: "/pn/hit-flying-mosquito-insect-killer-spray/pvid/2c1c6914-67a4-4add-8ae1-610e1bcdbe7d",
    price: 180,
    originalPrice: null,
    discount: null,
    tag: "For Insects",
    volume: "400 ml",
    rating: 4.8,
    reviews: "918",
    options: null,
  },
  {
    name: "Herbal Strategi Mosquito Repellent Room Spray",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-2000-2000,pr-true,f-auto,q-80/cms/product_variant/36170deb-44d4-4bd2-ad5c-33f50f65b86e.jpg",
    href: "/pn/herbal-strategi-mosquito-repellent-room-spray/pvid/159efee6-34b8-4395-a742-d1b38ba6b4d9",
    price: 240,
    originalPrice: null,
    discount: null,
    tag: "For Mosquitoes",
    volume: "100 ml",
    rating: 4.7,
    reviews: "58",
    options: null,
  },
  {
    name: "Hit Kills Disease Spreading Cockroaches 400 ml & Flying Insect Killer 400 ml Combo",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1494-1494,pr-true,f-auto,q-80/cms/product_variant/43ec40e9-795b-4e9f-a882-44bd3cf0b41c.jpg",
    href: "/pn/hit-kills-disease-spreading-cockroaches-400-ml-flying-insect-killer-400-ml-combo/pvid/73796866-9748-4bef-807e-5af76e97b221",
    price: 361,
    originalPrice: 369,
    discount: "₹8 Off",
    tag: null,
    volume: "2 Combo",
    rating: 4.5,
    reviews: "573",
    options: null,
  },
  {
    name: "Hit Rechargeable Electric Mosquito Racquet With LED Light",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1600-1600,pr-true,f-auto,q-80/cms/product_variant/9744ebac-dfe3-4518-a972-cfdb75791585.jpeg",
    href: "/pn/hit-rechargeable-electric-mosquito-racquet-with-led-light/pvid/8b18c4a5-ae7b-4479-9863-616c159fab8e",
    price: 534,
    originalPrice: 600,
    discount: "₹66 Off",
    tag: null,
    volume: "1 pc",
    rating: 3.9,
    reviews: "193",
    options: null,
  },
];

const PestControlCarousel = () => {
  const router = useRouter();
  const scaleValue = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 1.1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Text className="text-lg font-bold mx-4">Repellents & More</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="py-4 mx-4 mb-10"
      >
        <View className="flex-row gap-3 mx-4">
          {products.map((product, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => router.push(product.href as any)}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              className="relative inline-block min-w-[108px]"
            >
              <Animated.View
                className="w-[108px]"
                style={{
                  transform: [{ scale: scaleValue }],
                }}
              >
                <View className="mb-1.5">
                  <View className="overflow-hidden rounded-lg border-[0.5px] border-gray-200">
                    <Image
                      source={{ uri: product.image }}
                      className="w-full aspect-square bg-white"
                      style={{ width: 108, height: 108 }}
                      resizeMode="contain"
                      onError={(error) => console.log(`Image failed to load: ${product.image}`, error)}
                      accessibilityLabel={product.name}
                    />
                    <View className="absolute bottom-1 right-1 z-0">
                      <TouchableOpacity
                        aria-label="add"
                        className="flex h-8 w-14 flex-col justify-between overflow-hidden rounded-lg border-[0.75px] border-[#F9105E] bg-white shadow-[1.5px_1.5px_0px_0px_#F9105E]"
                        onPress={() => console.log("Add pressed")}
                      >
                        <Text className="flex w-full grow items-center justify-center text-[12px] font-semibold leading-4 tracking-[0.2px] text-[#F9105E]">
                          ADD
                        </Text>
                        {product.options && (
                          <Text className="w-full bg-red-100 text-[8px] text-[#757C8D]">
                            {product.options}
                          </Text>
                        )}
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View className="mb-0.5">
                  <View className="flex flex-wrap items-baseline">
                    <Text className="text-[14px] font-bold leading-[18px] tracking-[-0.2px] text-[#262A33]">
                      ₹{product.price}
                    </Text>
                    {product.originalPrice && (
                      <Text className="ml-1 text-[10px] font-normal leading-4 tracking-[0.2px] text-[#757C8D] line-through">
                        ₹{product.originalPrice}
                      </Text>
                    )}
                  </View>
                </View>

                {product.discount && (
                  <View className="mb-1 flex items-center justify-start gap-0.5">
                    <Text className="rounded-[4px] bg-[#E5FAEC] px-1 py-0.5 text-[10px] font-semibold leading-3 tracking-[0.2px] text-[#329537]">
                      {product.discount}
                    </Text>
                  </View>
                )}

                <Text
                  className="mb-1 text-xs font-medium leading-[14px] tracking-normal text-[#2E3642] line-clamp-2"
                  numberOfLines={2}
                >
                  {product.name}
                </Text>

                {product.tag && (
                  <View className="mb-1 flex items-center justify-start gap-0.5">
                    <View className="line-clamp-1 rounded-[4px] bg-[#F3F5F7] px-1 py-0.5">
                      <Text className="text-[10px] font-semibold leading-3 tracking-[0.2px] text-[#586274]">
                        {product.tag}
                      </Text>
                    </View>
                  </View>
                )}

                <View className="mb-1">
                  <Text className="text-[10px] font-[400] leading-[14px] text-[#5A6477]">
                    {product.volume}
                  </Text>
                </View>

                <View className="flex w-fit flex-wrap items-center justify-start">
                  <View className="flex flex-row items-center justify-center gap-0.5 rounded-[20px] p-0.5 bg-[#E5FAEC]">
                    <MaterialIcons name="star" size={12} color="#329537" />
                    <Text className="text-[10px] font-semibold text-[#329537]">
                      {product.rating}
                    </Text>
                    <Text className="ml-[3px] text-[10px] font-[400] text-[#586274]">
                      ({product.reviews})
                    </Text>
                  </View>
                </View>
              </Animated.View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default PestControlCarousel;