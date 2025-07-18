import React from "react";
import { ScrollView, Image, Text, TouchableOpacity, View, Animated } from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

const products = [
  {
    name: "Boult Audio Z40 Pro with 100H Battery, Quad Mic ENC, Scratch Proof, 5.3v TWS (Midnight)",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/8dab4a8d-2a87-4161-a937-e3a1d8722db0.jpg",
    href: "/pn/boult-audio-z40-pro-with-100h-battery-quad-mic-enc-scratch-proof-53v-tws-midnight/pvid/3b4fe5c6-f1d3-4563-ba54-58772f690317",
    price: 1299,
    originalPrice: 5499,
    discount: "₹4.2K Off",
    volume: "1 pair",
    rating: 3.9,
    reviews: "178",
    specialOffer: null,
  },
  {
    name: "boAt Stone 1000 - Blue",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/1dd1ba77-2635-4f61-9a30-7876ffceab84.jpg",
    href: "/pn/boat-stone-1000-blue/pvid/6f19d7fc-a3c7-4f48-b27d-6f794077769a",
    price: 1579,
    originalPrice: 6990,
    discount: "₹5.4K Off",
    volume: "1 pc",
    rating: 4.5,
    reviews: "56",
    specialOffer: "Open Box Delivery",
  },
  {
    name: "boAt Rockerz Neckband 378 - Vibrant Red",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/f4e480b1-08c6-4743-b30a-9840d87fb679.jpg",
    href: "/pn/boat-rockerz-neckband-378-vibrant-red/pvid/69c97418-cedc-4400-ab87-5c405a701882",
    price: 1149,
    originalPrice: 5990,
    discount: "₹4.8K Off",
    volume: "1 pc",
    rating: 4.7,
    reviews: "56",
    specialOffer: "Open Box Delivery",
  },
  {
    name: "boAt Stone 1800 BT Speaker w/ 90W RMS Sound, 5H Platime, EQ Modes, BT v5.3 & IPX6 Rating (Camo Black)",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/291301cb-6874-4413-9777-b9f18d4999ec.jpeg",
    href: "/pn/boat-stone-1800-bt-speaker-w-90w-rms-sound-5h-platime-eq-modes-bt-v53-ipx6-rating-camo-black/pvid/e3425097-8a7d-4f03-9b9c-94d7c73a74d3",
    price: 7999,
    originalPrice: 21990,
    discount: "₹14.0K Off",
    volume: "1 pc",
    rating: 4.3,
    reviews: "663",
    specialOffer: "No Cost EMI",
  },
  {
    name: "boAt Airdopes 131 - Krypton Blue",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/a93dbee4-1836-4198-8530-04ff9ed77350.jpg",
    href: "/pn/boat-airdopes-131-krypton-blue/pvid/8473decf-8186-481e-93e5-f2723e987b2f",
    price: 1199,
    originalPrice: 2990,
    discount: "₹1.8K Off",
    volume: "1 pair",
    rating: 3.8,
    reviews: "115",
    specialOffer: "Open Box Delivery",
  },
  {
    name: "boAt Airdopes 800 Hidef With Hidef Audio By Ldac, Enx, App Support, 40Hrs Battery, Sterling Silver",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-4000-4000,pr-true,f-auto,q-80/cms/product_variant/5345e974-811a-436d-b70c-3df5e3f337df.jpg",
    href: "/pn/boat-airdopes-800-hidef-with-hidef-audio-by-ldac-enx-app-support-40hrs-battery-sterling-silver/pvid/10ed1eb4-d398-4616-b3fb-25aa223dfb29",
    price: 2299,
    originalPrice: 7490,
    discount: "₹5.2K Off",
    volume: "1 pair",
    rating: 4.2,
    reviews: "540",
    specialOffer: "Open Box Delivery",
  },
  {
    name: "Portronics SoundDrum 1 Bluetooth Speaker",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/ed135516-0a7c-46fc-96e1-330ce34ec497.jpg",
    href: "/pn/portronics-sounddrum-1-bluetooth-speaker/pvid/12ee39a0-5c36-4dfc-b738-db125bae997d",
    price: 939,
    originalPrice: 2499,
    discount: "₹1.6K Off",
    volume: "1 pc",
    rating: 4.6,
    reviews: "108",
    specialOffer: null,
  },
  {
    name: "Portronics Harmony Mini, 25W Hd Sound Portable Bluetooth Speaker - Black",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1400-1400,pr-true,f-auto,q-80/cms/product_variant/accf8e68-a774-41e4-abde-c98b7716133d.jpg",
    href: "/pn/portronics-harmony-mini-25w-hd-sound-portable-bluetooth-speaker-black/pvid/b2698af8-3ea3-4b1b-9f85-5611892a2cf1",
    price: 2408,
    originalPrice: 4999,
    discount: "₹2.6K Off",
    volume: "1 pc",
    rating: 5.0,
    reviews: "67",
    specialOffer: null,
  },
  {
    name: "Zebronics County 3W Bluetooth Speaker With Carry Handle, USB, SD Card, Aux, FM & Call Function (Black)",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/2db1cc3a-f365-46ab-b349-f72642b5dc58.jpeg",
    href: "/pn/zebronics-county-3w-bluetooth-speaker-with-carry-handle-usb-sd-card-aux-fm-call-function-black/pvid/2fab1d91-8220-4ff2-8cec-acec943c7069",
    price: 549,
    originalPrice: 999,
    discount: "₹450 Off",
    volume: "1 pc",
    rating: 4.1,
    reviews: "495",
    specialOffer: "Open Box Delivery",
  },
  {
    name: "Zeb Warrior 2.0 Multimedia Speaker With Aux Connectivity,Usb Powered And Volume Control (No Bluetooth )",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/52929ac0-bb17-4547-a416-fae1acbc58a8.jpg",
    href: "/pn/zeb-warrior-20-multimedia-speaker-with-aux-connectivityusb-powered-and-volume-control-no-bluetooth/pvid/c41dbfe6-ed44-42f4-b3f8-3eb716c306be",
    price: 699,
    originalPrice: 1249,
    discount: "₹550 Off",
    volume: "1 pc",
    rating: 4.5,
    reviews: "685",
    specialOffer: null,
  },
];

const ElectronicsCarousel = () => {
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
      <Text className="text-lg font-bold mx-4">Electronics</Text>
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
                  {product.specialOffer === "No Cost EMI" && (
                    <Text className="w-fit bg-[#FFED25] py-0.5 px-1 text-[10px] font-[400] shadow-[0.5px_0.5px_0px_0.5px_#000000]">
                      ₹{Math.round(product.price / 12)}/month EMI
                    </Text>
                  )}
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

                {product.specialOffer && product.specialOffer !== "No Cost EMI" && (
                  <View className="flex items-end justify-start tracking-[0.08px]">
                    <Text className="text-[10px] font-[400] tracking-[0.08px] text-[#9C27B0]">
                      {product.specialOffer}
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

export default ElectronicsCarousel;