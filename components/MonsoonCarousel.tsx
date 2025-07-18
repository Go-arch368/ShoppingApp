import React from "react";
import { ScrollView, Image, Text, TouchableOpacity, View, Animated } from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

const products = [
  {
    name: "Citizen 21 Black Silver Umbrella | 2 Folds",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1200-931,pr-true,f-auto,q-80/cms/product_variant/3076d754-f3a7-4d7c-be3c-b3f9ef0d87fe.jpeg",
    href: "/pn/citizen-21-black-silver-umbrella-2-folds/pvid/1efb7901-1504-4eb2-b7bd-3e4a6b1962bd",
    price: 259,
    originalPrice: 799,
    discount: "₹540 Off",
    tag: "Size: 21 in",
    volume: "1 pc",
    rating: 4.1,
    reviews: "64",
    options: null,
  },
  {
    name: "Citizen Kids PVC Series Disney Printed Long Coat with Zip",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-2000-2000,pr-true,f-auto,q-80/cms/product_variant/74a31290-3efc-4860-a61b-c5808351ee35.jpeg",
    href: "/pn/citizen-kids-pvc-series-disney-printed-long-coat-with-zip/pvid/c63b2af5-2f91-4e7a-b4b4-df090ccd32cb",
    price: 369,
    originalPrice: 399,
    discount: "₹30 Off",
    tag: null,
    volume: "1 pc",
    rating: 4.3,
    reviews: "670",
    options: null,
    instantReturn: true,
  },
  {
    name: "McCain French Fries",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-3481-3999,pr-true,f-auto,q-80/cms/product_variant/c51703d3-5c97-4d5e-8cee-1c012802f318.jpeg",
    href: "/pn/mccain-french-fries/pvid/cefb066b-c0f5-4a09-abc8-683f67daf141",
    price: 99,
    originalPrice: 125,
    discount: "₹26 Off",
    tag: null,
    volume: "420 g",
    rating: 4.7,
    reviews: "10600",
    options: null,
  },
  {
    name: "Tata Tea Gold Natural Black Tea",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/f3d64acc-dbe6-4f7e-8c53-67df197aac26.jpeg",
    href: "/pn/tata-tea-gold-natural-black-tea/pvid/8be1fdc8-aa36-4369-89ff-3a1c47d5f2bf",
    price: 150,
    originalPrice: null,
    discount: null,
    tag: null,
    volume: "250 g",
    rating: 4.8,
    reviews: "3700",
    options: null,
  },
  {
    name: "All Out Ultra Mosquito Repellent Refills",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/7c1d8088-9ce3-46d5-b03d-acc411ac9eb9.jpeg",
    href: "/pn/all-out-ultra-mosquito-repellent-refills/pvid/add06766-764f-432b-af4c-a21088ba960d",
    price: 135,
    originalPrice: 165,
    discount: "₹30 Off",
    tag: "For Mosquitoes",
    volume: "2 x 45 ml",
    rating: 4.8,
    reviews: "3300",
    options: null,
  },
  {
    name: "Maggi 2-Minute Noodles Masala",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/7f32128e-0b71-41d4-afb3-7d0eeb9ea095.jpeg",
    href: "/pn/maggi-2-minute-noodles-masala/pvid/cf7f86bc-73ef-45e5-a229-38ab35680914",
    price: 60,
    originalPrice: null,
    discount: null,
    tag: null,
    volume: "4 x 70 g",
    rating: 4.7,
    reviews: "116600",
    options: null,
  },
  {
    name: "Tata Tea Premium Desh Ki Chai Black Tea",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/e43087d8-fb00-449a-b2d5-2bfcefb438b1.jpeg",
    href: "/pn/tata-tea-premium-desh-ki-chai-black-tea/pvid/1e59f8b8-ebe3-4bbb-b9b3-b45ef7a45274",
    price: 140,
    originalPrice: null,
    discount: null,
    tag: null,
    volume: "250 g",
    rating: 4.8,
    reviews: "6000",
    options: null,
  },
  {
    name: "Citizen 21 Inch Mono Silver Umbrella - Lime Green",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1000-882,pr-true,f-auto,q-80/cms/product_variant/86cffdbe-fa10-4030-a669-793ec9004888.jpeg",
    href: "/pn/citizen-21-inch-mono-silver-umbrella-lime-green/pvid/9ef8b92f-f462-4bc8-b6fc-5ec6f9930f60",
    price: 229,
    originalPrice: 799,
    discount: "₹570 Off",
    tag: "Size: 21 in",
    volume: "1 pc",
    rating: 4.1,
    reviews: "69",
    options: null,
  },
  {
    name: "Knorr Chinese Hot And Sour Veg Soup",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-655-826,pr-true,f-auto,q-80/inventory/product/b300b76d-8105-4334-bc1d-7e5e2b7f794e-1H8fhGnRBOlojlD4YMeNmkT63diqePHXK.jpeg",
    href: "/pn/knorr-chinese-hot-and-sour-veg-soup/pvid/b300b76d-8105-4334-bc1d-7e5e2b7f794e",
    price: 59,
    originalPrice: 65,
    discount: "₹6 Off",
    tag: null,
    volume: "41 g",
    rating: 4.7,
    reviews: "1100",
    options: null,
  },
  {
    name: "Wonder Killex Mosquito Racket",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/3b3edb63-d48b-40dd-87e4-6cd2dc294d1f.jpeg",
    href: "/pn/wonder-killex-mosquito-racket/pvid/e4cc03d3-c0fc-440a-abeb-e6abab6ba4ae",
    price: 329,
    originalPrice: null,
    discount: null,
    tag: null,
    volume: "1 pc",
    rating: 4.2,
    reviews: "335",
    options: null,
  },
];

const MonsoonCarousel = () => {
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
      <Text className="text-lg font-bold mx-4">Monsoon Essentials</Text>
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
                        className="h-8 w-14 rounded-lg border-[0.75px] border-[#F9105E] bg-white p-1.5 shadow-[1.5px_1.5px_0px_0px_#F9105E]"
                        onPress={() => console.log("Add pressed")}
                      >
                        <Text className="text-[12px] font-semibold leading-4 tracking-[0.2px] text-[#F9105E]">
                          ADD
                        </Text>
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

                {product.instantReturn && (
                  <View className="flex items-end justify-start tracking-[0.08px]">
                    <Text className="text-[10px] font-[400] tracking-[0.08px] text-[#9C27B0]">
                      Instant Return
                    </Text>
                  </View>
                )}
              </Animated.View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default MonsoonCarousel;