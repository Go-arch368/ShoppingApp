import React from "react";
import { View, ScrollView } from "react-native";
import Header from "@/components/Header"; // Adjust the path if needed

import Section from "@/components/Section";
import ProductCarousel from "@/components/ProductCarousel";
import CategoryGrid from "@/components/CategoryGrid";
import SnacksAndDrinks from "@/components/SnacksAndDrinks";
import BeautyAndPersonalCare from "@/components/BeautyAndPersonalCare";
import HouseholdEssentials from "@/components/HouseholdEssentials";
import ShopByStoreCarousel from "@/components/ShopByStoreCarousel";
import ProductCardCarousel from "@/components/ProductCardCarousel";
import BannerCarousel from "@/components/BannerCarousel";
import OliveOilCarousel from "@/components/OliveOilCarousel";
import PestControlCarousel from "@/components/PestControlCarousel";
import MonsoonCarousel from "@/components/MonsoonCarousel";
import ElectronicsCarousel from "@/components/ElectronicsCarousel";

const Index = () => {
  return (
    <View className="flex-1 bg-white">
      <Header />

      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
       
        <Section />
        <ProductCarousel/>
        <CategoryGrid/>
        <SnacksAndDrinks/>
        <BeautyAndPersonalCare/>
         <HouseholdEssentials/> 
         <ShopByStoreCarousel/>
         <ProductCardCarousel/>
         <BannerCarousel/>
         <OliveOilCarousel/>
         <PestControlCarousel/>
         <MonsoonCarousel/>
         <ElectronicsCarousel/>
      </ScrollView>
    </View>
  );
};

export default Index;
