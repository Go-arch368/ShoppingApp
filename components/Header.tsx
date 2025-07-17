import React from "react";
import { View } from "react-native";
import ToggleSwitch from "./ToggleSwitch";
import LocationSelector from "./LocationSelector";
import SearchBar from "./SearchBar"; // Adjust the path
import HeaderComponent from "./HeaderComponent"; // Adjust the path

const Header = () => {
  return (
    <View className="sticky top-0 z-[105] bg-teal">
      <View className="flex flex-col gap-y-[18px] px-4 pt-5 pb-3 md:px-8 bg-teal">
        <ToggleSwitch/>
        <LocationSelector/>
        <SearchBar />
        <HeaderComponent />
      </View>
    </View>
  );
};

export default Header;