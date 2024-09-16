import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import { Stack } from "expo-router";
import { AuthContext, AuthProvider } from "../contexts/authContext"; // Import AuthContext and AuthProvider
import { StatusBar } from "expo-status-bar";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const RootLayout = () => {
  const { user, loading } = useContext(AuthContext); // Get user and loading status

  if (loading) {
    // Show loading spinner while the user is being fetched
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
};
