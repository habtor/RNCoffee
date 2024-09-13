import { View, Text } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const TabIcon = ({ name, color, focused }) => {
  return focused ? (
    <View className="items-center">
      <Text className="text-orange-500 font-bold">
        {name === "home-outline"
          ? "Home"
          : name === "heart-outline"
          ? "Favorite"
          : name === "bag-handle-outline"
          ? "Bag"
          : name === "person-outline"
          ? "Profile"
          : ""}
      </Text>
      <View className="bg-orange-500 h-1 w-1 rounded-full mt-1"></View>
    </View>
  ) : (
    <View>
      <Ionicons name={name} size={24} color={color} />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#B98025",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            borderTopWidth: 0,
            shadowColor: "rgba(0, 0, 0, 0.1)",
            height: 70,
            backgroundColor: "#000000",
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
            title: "Bag",
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
