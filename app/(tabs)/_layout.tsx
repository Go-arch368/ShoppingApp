import { icons } from "@/constants/icons";
import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";

type TabIconProps = {
  focused: boolean;
  icon: any;
  title: string;
};

const TabIcon = ({ focused, icon, title }: TabIconProps) => {
  if (focused) {
    return (
      <View className="flex-row items-center justify-center px-3 py-1 bg-gray-100 rounded-full min-w-[100px]">
        <Image
          source={icon}
          className="w-6 h-6 mr-1"
        />
        <Text
          className="text-black text-sm font-semibold flex-shrink-0"
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
      </View>
    );
  }

  return (
    <View className="justify-center items-center">
      <Image
        source={icon}
        className="w-6 h-6"
      />
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
          width: 100, // Ensure enough space for each tab
        },
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "#e0e0e0",
          height: 60,
          position: "absolute",
          bottom:0,
          paddingTop:10,
          marginHorizontal: "auto", // Center the tab bar horizontally
          alignSelf: "center", // Ensure the tab bar is centered
          borderRadius: 12,
          elevation: 8,
          overflow: "hidden",
          paddingHorizontal: 10, // Optional: padding to prevent tab items from touching edges
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Zepto",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.zepto} title="Zepto" />
          ),
        }}
      />

      <Tabs.Screen
        name="categories"
        options={{
          title: "Categories",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.categories}
              title="Categories"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.cart} title="Cart" />
          ),
        }}
      />
    </Tabs>
  );
}