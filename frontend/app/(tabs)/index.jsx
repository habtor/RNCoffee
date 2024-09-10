import { View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../components/searchBar";
import Catergories from "../../components/categories";
import CoffeeCard from "../../components/coffeeCard";

const Home = () => {
  return (
    <>
      <ScrollView className="relative bg-black">
        <View className="pt-14 px-4">
          <SearchBar />
          <Text className="text-white text-4xl font-bold mt-8">
            Good Morning
          </Text>
          <Text className="text-white text-sm font-bold">
            Grab your favorite coffee : {")"}
          </Text>
          <View className="mt-8">
            <Catergories />
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-10 px-4 flex-col "
        >
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </ScrollView>
        <StatusBar backgroundColor="#000000" style="light" />
      </ScrollView>
    </>
  );
};

export default Home;
