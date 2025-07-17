import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

const products = [
  {
    name: "Cetaphil Gentle Skin Cleanser",
    price: 399,
    originalPrice: 429,
    discount: "₹30 Off",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/b2071e07-c625-421e-b6c2-a98cf9e1ad9b.jpg",
    href: "/pn/cetaphil-gentle-skin-cleanser/pvid/8f6c4956-5ef6-47c9-87e2-40225f851508",
    volume: "125 ml",
    rating: 4.8,
    reviews: "2.0k",
    tag: "Hydration",
    options: "4 options",
  },
  {
    name: "Minimalist 02% Salicylic Acid + LHA Face Cleanser",
    price: 285,
    originalPrice: 299,
    discount: "₹14 Off",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1600-1600,pr-true,f-auto,q-80/cms/product_variant/6d45fe5a-6b40-4b67-8ccd-ab750977f26b.jpeg",
    href: "/pn/minimalist-02-salicylic-acid-lha-face-cleanser/pvid/64c8426d-1217-4572-9ab5-0b0401060f44",
    volume: "100 ml",
    rating: 4.7,
    reviews: "728",
    tag: null,
  },
  {
    name: "Paradyes No Bleach Hazel Brown Glossy Hair Tint, Ammonia-Free Formula - 5 Light Brown",
    price: 589,
    originalPrice: 645,
    discount: "₹56 Off",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1080-1080,pr-true,f-auto,q-80/cms/product_variant/b5ab82d1-415d-4059-a6ec-1b31e2826484.jpeg",
    href: "/pn/paradyes-no-bleach-hazel-brown-glossy-hair-tint-ammonia-free-formula-5-light-brown/pvid/7f4e6984-f07c-445b-9d8d-2874482db473",
    volume: "160 g",
    rating: 4.1,
    reviews: "135",
    tag: "Brown",
  },
  {
    name: "Bblunt Salon Secret High Shine Creme Hair Colour Chocolate Dark Brown",
    price: 212,
    originalPrice: 225,
    discount: "₹13 Off",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/06598ab7-3560-4438-9fec-09664fe3c698.jpeg",
    href: "/pn/bblunt-salon-secret-high-shine-creme-hair-colour-chocolate-dark-brown/pvid/586bd438-f7d8-46f5-a45b-d6a124f32f67",
    volume: "2 x 50 g + 8 ml",
    rating: 4.5,
    reviews: "138",
    tag: null,
  },
  {
    name: "Mamaearth Rice Face Wash With Rice Water & Niacinamide For Glass Skin | Hydrated, Even SkinTone",
    price: 245,
    originalPrice: 269,
    discount: "₹24 Off",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/694d58b4-3a20-488b-aeca-11f6095ef174.jpeg",
    href: "/pn/mamaearth-rice-face-wash-with-rice-water-niacinamide-for-glass-skin-hydrated-even-skintone/pvid/79193eee-ca2b-4aa1-97d9-55154bc089e6",
    volume: "100 ml",
    rating: 4.8,
    reviews: "780",
    tag: "Hydration",
  },
  {
    name: "Dot & Key Vitamin C + E Super Bright Gel Face Wash",
    price: 230,
    originalPrice: 249,
    discount: "₹19 Off",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/d39a54a2-bc44-42d6-baf6-d864ff129b5d.jpeg",
    href: "/pn/dot-key-vitamin-c-e-super-bright-gel-face-wash/pvid/3df78e63-a03b-4dfa-bd27-f991b7691269",
    volume: "100 ml",
    rating: 4.6,
    reviews: "449",
    tag: null,
  },
  {
    name: "Paradyes No Bleach Cherry Coke Glossy Hair Tint, Ammonia-Free Formula - 6.6 True Red",
    price: 523,
    originalPrice: 645,
    discount: "₹122 Off",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1080-1080,pr-true,f-auto,q-80/cms/product_variant/1790af60-4dcf-4758-bdd3-9fc85d2a0ef9.jpeg",
    href: "/pn/paradyes-no-bleach-cherry-coke-glossy-hair-tint-ammonia-free-formula-66-true-red/pvid/ea08ee88-a381-420e-b47c-3e1fe3134673",
    volume: "160 g",
    rating: 4.8,
    reviews: "104",
    tag: "Red",
  },
  {
    name: "Dot & Key Barrier Repair + Hydrating Gentle Face Wash",
    price: 230,
    originalPrice: 249,
    discount: "₹19 Off",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/2e637bd1-cd42-4a58-b380-ea97efe2e47d.jpeg",
    href: "/pn/dot-key-barrier-repair-hydrating-gentle-face-wash/pvid/6c38f1b3-13ed-4da2-a6c1-3923758747f0",
    volume: "100 ml",
    rating: 4.8,
    reviews: "546",
    tag: null,
  },
  {
    name: "Cetaphil Gentle Skin Cleanser",
    price: 716,
    originalPrice: 769,
    discount: "₹53 Off",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/527bcc0d-5bbc-4b52-ae67-fc6d1cacf3db.jpeg",
    href: "/pn/cetaphil-gentle-skin-cleanser/pvid/3c47e73e-3c7b-404d-925e-eea8ef19aa97",
    volume: "250 ml",
    rating: 4.7,
    reviews: "229",
    tag: "Hydration",
    options: "4 options",
  },
  {
    name: "Mamaearth Natural Henna Paste",
    price: 247,
    originalPrice: 249,
    discount: "₹2 Off",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1080-1080,pr-true,f-auto,q-80/cms/product_variant/8b08c43d-ff08-4fa1-a70c-fc898b39a4f1.jpg",
    href: "/pn/mamaearth-natural-henna-paste/pvid/a1794aca-19cb-463c-a34d-934473ca889e",
    volume: "200 g",
    rating: 4.8,
    reviews: "76",
    tag: null,
  },
];

const ProductCarousel = () => {
  const router = useRouter();

  return (
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
            className="relative inline-block min-w-[108px]"
          >
            <View className="w-[108px]">
              <View className="mb-1.5">
                <View className="overflow-hidden rounded-lg border-[0.5px] border-gray-200">
                  <Image
                    source={{ uri: product.image }}
                    className="w-full aspect-square bg-white"
                    style={{ width: 108, height: 108 }}
                    resizeMode="contain"
                    accessibilityLabel={product.name}
                  />
                  <View className="absolute bottom-1 right-1 z-0">
                    <TouchableOpacity
                      aria-label="add"
                      className="flex h-8 w-14 flex-col justify-between overflow-hidden rounded-lg border-[0.75px] border-[#F9105E] bg-white shadow-[1.5px_1.5px_0px_0px_#F9105E]"
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
                  <Text className="ml-1 text-[10px] font-normal leading-4 tracking-[0.2px] text-[#757C8D] line-through">
                    ₹{product.originalPrice}
                  </Text>
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
                <View className="flex  flex-row items-center justify-center gap-0.5 rounded-[20px] p-0.5 bg-[#E5FAEC]">
                  <MaterialIcons name="star" size={12} color="#329537" />
                  
                    <Text className="text-[10px] font-semibold text-[#329537]">
                      {product.rating}
                    </Text>
                    <Text className="ml-[3px] text-[10px] font-[400] text-[#586274]">
                      ({product.reviews})
                    </Text>
                  
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default ProductCarousel;