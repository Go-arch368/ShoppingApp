import React from "react";
import { ScrollView, Image, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

const products = [
  {
    name: "Centrum Women Tablet 30",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1021-1021,pr-true,f-auto,q-80/cms/product_variant/8d2e882e-ef11-4d82-82eb-9bc418f4442d.jpeg",
    href: "/pn/centrum-women-tablet-30/pvid/c2f5e46b-05d6-4426-ae7a-4295b011140a",
    price: 490,
    originalPrice: 520,
    discount: "₹30 Off",
    tag: "Premium",
    volume: "30 tablets",
    rating: 5.0,
    reviews: "51",
    options: null,
  },
  {
    name: "Swisse Women's Multivitamin - Boosts Energy, Stamina, Mental Performance With 36 Herbs - (30 Tabs)",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/298664b5-63fd-48d1-a997-e05408a38722.jpg",
    href: "/pn/swisse-womens-multivitamin-boosts-energy-stamina-mental-performance-with-36-herbs-30-tabs/pvid/1fb3ff93-19da-4444-92ed-9dc67d7c50e9",
    price: 936,
    originalPrice: 1299,
    discount: "₹363 Off",
    tag: "Imported",
    volume: "1 pack (30 tablets)",
    rating: 4.2,
    reviews: "879",
    options: null,
  },
  {
    name: "Z&B Tablets",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-690-700,pr-true,f-auto,q-80/cms/product_variant/c667cb49-7b81-4f21-a262-ec8557f120e2.jpeg",
    href: "/pn/zb-tablets/pvid/f3e90124-be35-45c2-b468-beec02c30523",
    price: 120,
    originalPrice: 160,
    discount: "₹40 Off",
    tag: null,
    volume: "15 tablets",
    rating: 4.3,
    reviews: "343",
    options: null,
  },
  {
    name: "Limcee 500mg Orange Flavour Chewable Tablets",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-1063-1057,pr-true,f-auto,q-80/cms/product_variant/abde1548-3612-4598-8fd6-f4f3762e4aa1.jpg",
    href: "/pn/limcee-500mg-orange-flavour-chewable-tablets/pvid/8b80c557-3272-4eb9-a49c-a142107aa2e1",
    price: 26,
    originalPrice: 26.32,
    discount: null,
    tag: "Vitamin C",
    volume: "15 Tablets",
    rating: 4.6,
    reviews: "366",
    options: null,
  },
  {
    name: "Veba-Plus Tablets",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-690-700,pr-true,f-auto,q-80/cms/product_variant/3be0738d-2a62-43ee-909c-f3cb065820b0.jpeg",
    href: "/pn/veba-plus-tablets/pvid/49d85719-b3a6-4bb9-b4fe-64d1238a8f57",
    price: 75,
    originalPrice: 90,
    discount: "₹15 Off",
    tag: null,
    volume: "15 tablets",
    rating: 4.7,
    reviews: "684",
    options: null,
  },
  {
    name: "Benfomet Plus Tablets",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-690-700,pr-true,f-auto,q-80/cms/product_variant/a7681851-c820-40c2-a593-96c08656e794.jpeg",
    href: "/pn/benfomet-plus-tablets/pvid/90902482-d2be-4df6-922d-096d72dcdb25",
    price: 170,
    originalPrice: 218,
    discount: "₹48 Off",
    tag: null,
    volume: "10 tablets",
    rating: 4.2,
    reviews: "871",
    options: null,
  },
  {
    name: "ES-BIO Capsules",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-371-406,pr-true,f-auto,q-80/cms/product_variant/5c14f70e-0460-4364-bbd1-687759aadf85.jpeg",
    href: "/pn/es-bio-capsules/pvid/7aded8a8-25f1-441e-b169-e82049ea2851",
    price: 160,
    originalPrice: 200,
    discount: "₹40 Off",
    tag: null,
    volume: "10 capsules",
    rating: 4.2,
    reviews: "769",
    options: null,
  },
  {
    name: "Qcard Coenzyme Q10 Capsules",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-4000-4000,pr-true,f-auto,q-80/cms/product_variant/af85c200-cc9f-41bc-bcab-4d4e174a98e5.jpeg",
    href: "/pn/qcard-coenzyme-q10-capsules/pvid/36f8a928-55bb-45d1-a886-d7e56e62e27f",
    price: 133,
    originalPrice: 167.5,
    discount: "₹35 Off",
    tag: null,
    volume: "10 Capsules",
    rating: 4.5,
    reviews: "439",
    options: null,
  },
  {
    name: "Bio D3 Plus Capsule 15",
    image: "https://cdn.zeptonow.com/production/image_not_available.jpeg",
    href: "/pn/bio-d3-plus-capsule-15/pvid/9b7ea419-6c4c-43cb-b0a8-f9181f39fc55",
    price: 259,
    originalPrice: 331,
    discount: "₹72 Off",
    tag: null,
    volume: "1 pack (15 pcs)",
    rating: 4.2,
    reviews: "293",
    options: null,
    icon: "https://cdn.zeptonow.com/production/tr:w-100,ar-48-48,pr-true,f-auto,q-80/inventory/product/3fcb8b9e-bf2d-4538-8a09-b98bee4afae6.png",
  },
  {
    name: "Evion 400 Capsules",
    image: "https://cdn.zeptonow.com/production/tr:w-640,ar-690-700,pr-true,f-auto,q-80/cms/product_variant/7b9312c1-e801-4657-a0d5-c3379258cbba.jpeg",
    href: "/pn/evion-400-capsules/pvid/0cb31882-0432-4b33-95c6-aca56aebc5ca",
    price: 67,
    originalPrice: 86.87,
    discount: "₹20 Off",
    tag: "Vitamin E",
    volume: "20 capsules",
    rating: 4.3,
    reviews: "965",
    options: null,
  },
];

export default function Practice(){
     const router =useRouter()
    return(
        <View className="px-4 mt-10">
         <Text className="text-lg font-bold">Baby Care</Text>
         <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="py-4 mx-4 mb-10"
         >
            <View className="flex-row gap-3 mx-4">
                 {products.map((product,index)=>(
                    <TouchableOpacity
                       key={index}
                       onPress={()=>router.push(product.href as any)}
                       className="relative inline-block min-w-[108px]"
                    >
                    <View className="w-[108px]">
                       <View className="mb-1.5">
                         <View className="overflow-hidden rounded-lg border-[0.5] border-gray-200">
                          <Image
                             source={{uri:product.image}}
                             className="w-full aspect-square bg-white"
                             style={{width:108,height:108}}
                             resizeMode="contain"
                          />
                          <View className="absolute bottom-1 right-1 z-0">
                             <TouchableOpacity>
                                <Text>
                                    Add
                                </Text>
                                {product.options&&
                                <Text>{product.options}</Text>
                                }
                             </TouchableOpacity>
                          </View>
                         </View>
                       </View>

                       

                    </View>
                    </TouchableOpacity>
                 ))}
            </View>

         </ScrollView>
        </View>
    )
}