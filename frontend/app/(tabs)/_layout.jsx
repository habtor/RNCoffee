import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Define Tab Icon component
const TabIcon = ({ name, color, focused }) =>
  focused ? (
    <View className="items-center">
      <Text className="text-[#fff] font-bold">
        {name === "home-outline"
          ? "Home"
          : name === "heart-outline"
          ? "Favorite"
          : name === "bag-handle-outline"
          ? "Cart"
          : name === "person-outline"
          ? "Profile"
          : ""}
      </Text>
      <View className="bg-white h-1 w-1 rounded-full mt-1"></View>
    </View>
  ) : (
    <Ionicons name={name} size={24} color={color} />
  );

// Tab Layout Definition
const TabsLayout = () => {
  return (
    <>
      {/* <StatusBar backgroundColor="#000000" style="light" /> */}
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#fff",
          tabBarStyle: {
            borderTopWidth: 0,
            shadowColor: "rgba(0, 0, 0, 0.1)",
            height: 70,
            backgroundColor: "#000",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="home-outline" color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="favorite"
          options={{
            title: "Favorite",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="heart-outline" color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "Cart",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name="bag-handle-outline"
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name="person-outline" color={color} focused={focused} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
