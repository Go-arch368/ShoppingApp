import React from "react";
import { Image } from "react-native";

const Banner = () => {
  return (
    <Image
      source={{ uri: "https://cdn.zeptonow.com/production/tr:w-640,ar-1440-444,pr-true,f-auto,q-80/inventory/banner/18dc228c-17c9-4e16-8774-214ffce45c7a.png" }}
      className="w-full relative overflow-hidden mb-[-1px] mt-5"
      style={{ aspectRatio: 1440 / 444 }}
      resizeMode="contain"
      accessibilityLabel="Home-Fest-DW1-PP"
    />
  );
};

export default Banner;