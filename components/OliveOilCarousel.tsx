import React from "react";
import { ScrollView, Image, Text, TouchableOpacity, View, Animated } from "react-native";
import { useRouter } from "expo-router";
import { SvgXml } from "react-native-svg";

const products = [
  {
    href: "/pn/figaro-extra-virgin-olive-oil/pvid/a1eec578-d6fe-4779-af60-f0e0933f11f9",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/220e226a-adb1-4c81-bb70-ac7b6dc2c988.jpeg",
    price: 293,
    originalPrice: 599,
    discount: "₹306 Off",
    name: "Figaro Extra Virgin Olive Oil",
    tag: "Salads and Garnish",
    volume: "250 ml",
    rating: 4.8,
    reviews: 314,
  },
  {
    href: "/pn/jivo-pomace-olive-oil/pvid/ac9a7dd8-489b-4475-a14d-27ae393a5505",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1470-1470,pr-true,f-auto,q-80/cms/product_variant/9aa9e1b7-a97e-4f5e-8d5b-6932f6d16fb3.jpeg",
    price: 406,
    originalPrice: 1049,
    discount: "₹643 Off",
    name: "Jivo Pomace Olive Oil",
    tag: "Daily Cooking",
    volume: "1 L",
    rating: 4.7,
    reviews: 86,
  },
  {
    href: "/pn/borges-extra-virgin-olive-oil/pvid/45ba57f9-a238-482c-b5c3-54be77be1e4e",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/c7d1a466-19eb-44f7-9ece-4cbf083b71ee.jpeg",
    price: 441,
    originalPrice: 750,
    discount: "₹309 Off",
    name: "Borges Extra Virgin Olive Oil",
    tag: "Salads and Garnish",
    volume: "250 ml",
    rating: 4.9,
    reviews: 79,
  },
  {
    href: "/pn/borges-extra-light-olive-oil/pvid/ff36eb28-0dd6-48fc-bcb0-13416c30ab7d",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/7f5dabaa-a37d-4ea7-b089-61e09299f646.jpeg",
    price: 660,
    originalPrice: 1300,
    discount: "₹640 Off",
    name: "Borges Extra Light Olive Oil",
    tag: "Fry, Roast, and Cook",
    volume: "500 ml",
    rating: 5.0,
    reviews: 61,
  },
  {
    href: "/pn/borges-extra-light-olive-oil/pvid/8ee6be52-eec0-49a6-b42f-9b39b4323ee6",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/085f2f0e-dc72-48ee-bd79-30c3d9cf82cb.jpeg",
    price: 2375,
    originalPrice: 4200,
    discount: "₹1.8K Off",
    name: "Borges Extra Light Olive Oil",
    tag: "Fry, Roast, and Cook",
    volume: "2 L",
    rating: 4.9,
    reviews: 59,
  },
  {
    href: "/pn/figaro-extra-virgin-olive-oil/pvid/49985600-a0f1-4934-acb6-e47e72a5d62f",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/63c18599-3830-42b8-a8b7-9ab1ab0f0e7b.jpeg",
    price: 1110,
    originalPrice: 1999,
    discount: "₹889 Off",
    name: "Figaro Extra Virgin Olive Oil",
    tag: "Salads and Garnish",
    volume: "1 L",
    rating: 4.8,
    reviews: 314,
  },
  {
    href: "/pn/jivo-extra-light-olive-oil/pvid/2300d5e1-ccd1-46ab-990d-aa7fee80bc5d",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/fd09b479-57af-445b-9aab-16a6e9936ca8.jpg",
    price: 588,
    originalPrice: 1499,
    discount: "₹911 Off",
    name: "Jivo Extra Light Olive Oil",
    tag: "Fry, Roast, and Cook",
    volume: "1 L",
    rating: 4.9,
    reviews: 59,
  },
  {
    href: "/pn/oleev-pomace-olive-oil/pvid/b90a826a-c179-44eb-abd8-a959ff8722a3",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/9ec1e135-43b6-4829-8785-e93b838147fa.jpeg",
    price: 379,
    originalPrice: 1200,
    discount: "₹821 Off",
    name: "Oleev Pomace Olive Oil",
    tag: "Daily Cooking",
    volume: "1 L",
    rating: 4.5,
    reviews: 74,
  },
  {
    href: "/pn/figaro-pure-olive-oil/pvid/a42c1315-fc66-44d3-b8c9-fd898d92ad8e",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/114d4a4e-63aa-45ae-b82e-efd85651efb1.jpeg",
    price: 342,
    originalPrice: 399,
    discount: "₹57 Off",
    name: "Figaro Pure Olive Oil",
    tag: "Salads and Garnish",
    volume: "200 ml",
    rating: 4.6,
    reviews: 204,
  },
  {
    href: "/pn/jivo-extra-light-olive-oil/pvid/29e72c8c-7ff6-46e2-9721-ca4e9f612e98",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1470-1470,pr-true,f-auto,q-80/cms/product_variant/ee2e30a7-d4ca-4143-95a6-bb2d77da6cec.jpeg",
    price: 1697,
    originalPrice: 2799,
    discount: "₹1.1K Off",
    name: "Jivo Extra Light Olive Oil",
    tag: "Fry, Roast, and Cook",
    volume: "2 L",
    rating: 4.1,
    reviews: 55,
  },
];

const starSvg = `
  <svg fill="none" height="12" viewBox="0 0 16 16" width="12" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.892 2.012c.291-.314.64-.57 1.109-.57.468 0 .817.256 1.108.57.278.3.576.735.931 1.254l.535.779c.218.319.266.376.32.415.053.04.122.066.493.176l.906.267c.602.177 1.108.326 1.48.498.389.18.74.433.884.878.145.446.01.857-.2 1.23-.199.358-.52.776-.903 1.274l-.576.748c-.236.307-.276.37-.297.433-.02.063-.025.137-.014.523l.026.945c.017.628.032 1.155-.017 1.561-.05.425-.183.837-.562 1.112-.379.276-.811.274-1.232.191-.401-.08-.898-.256-1.49-.466l-.89-.317c-.364-.13-.436-.148-.502-.148-.067 0-.139.019-.503.148l-.89.317c-.592.21-1.088.387-1.49.466-.42.083-.853.085-1.232-.19-.378-.276-.51-.688-.562-1.113-.048-.406-.034-.933-.016-1.561l.026-.945c.01-.386.006-.46-.015-.523-.02-.063-.06-.126-.296-.433l-.576-.748c-.383-.498-.705-.916-.904-1.273-.21-.374-.344-.785-.2-1.23.145-.446.496-.699.885-.879.371-.172.877-.32 1.48-.498l.906-.267c.37-.11.44-.137.493-.176.054-.039.101-.096.32-.415l.534-.78c.355-.518.653-.952.931-1.253Z" fill="#329537" stroke="#329537" stroke-width="1"/>
  </svg>
`;

const OliveOilCarousel = () => {
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
     <View>
      <Text className="text-lg font-bold mx-4">Olive Oil</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="py-4 mb-10"
      >
        <View className="flex-row gap-4 px-4">
          {products.map((product, index) => (
            <TouchableOpacity
              key={index}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              onPress={() => router.push(product.href as any)}
              activeOpacity={0.9}
            >
              <Animated.View
                style={{
                  transform: [{ scale: scaleValue }],
                  width: 120,
                }}
                className="bg-white rounded-xl"
              >
             
                <View className="relative mb-1.5">
                  <Image
                    source={{ uri: product.image }}
                    className="w-full h-[108px] rounded-lg bg-white border border-gray-50"
                    resizeMode="contain"
                  />
                  <TouchableOpacity
                    className="absolute bottom-1 right-1 h-8 w-14 rounded-lg border border-pink-600 bg-white items-center justify-center"
                    onPress={() => console.log("ADD pressed")}
                  >
                    <Text className="text-xs font-semibold text-pink-600">ADD</Text>
                  </TouchableOpacity>
                </View>

                {/* Price & Discount */}
                <View className="mb-0.5">
                  <View className="flex-row items-center">
                    <Text className="text-sm font-bold text-black">
                      ₹{product.price}
                    </Text>
                    <Text className="text-[10px] line-through text-gray-500 ml-1">
                      ₹{product.originalPrice}
                    </Text>
                  </View>
                </View>

                {product.discount && (
                  <Text className="bg-green-100 text-green-700 text-[10px] px-1 py-0.5 rounded w-fit mb-1 font-semibold">
                    {product.discount}
                  </Text>
                )}

             
                <Text
                  className="text-xs font-medium text-gray-800 mb-1"
                  numberOfLines={2}
                >
                  {product.name}
                </Text>

             
                {product.tag && (
                  <Text className="text-[10px] font-semibold bg-gray-100 text-gray-700 px-1 py-0.5 rounded w-fit mb-1">
                    {product.tag}
                  </Text>
                )}

               
                <Text className="text-[10px] text-gray-500 mb-1">
                  {product.volume}
                </Text>

                {/* Rating */}
                <View className="flex-row items-center gap-1">
                  <SvgXml xml={starSvg} width={12} height={12} />
                  <Text className="text-[10px] font-semibold text-green-700">
                    {product.rating}
                  </Text>
                  <Text className="text-[10px] text-gray-600 ml-1">
                    ({product.reviews})
                  </Text>
                </View>
              </Animated.View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default OliveOilCarousel;