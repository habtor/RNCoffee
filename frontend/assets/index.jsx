import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const Index = () => {
  return (
    <SafeAreaView className="h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <TouchableOpacity
          onPress={() => router.push("(tabs)")}
          activeOpacity={0.8}
          className="bg-blue-500 p-4 m-4 rounded-lg"
        >
          <Text className="text-white text-center">Go to Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
