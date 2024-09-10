import { View, Text } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const RootLayout = () => {
  return (
    <>
      <Stack>
        {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default RootLayout;
