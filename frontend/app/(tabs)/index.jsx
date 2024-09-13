import { View, Text, ScrollView, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../components/searchBar";
import Catergories from "../../components/categories";
import CoffeeCard from "../../components/coffeeCard";
import useGetCoffee from "../../hooks/useGetCoffee";

const Home = () => {
  const { data, loading, error } = useGetCoffee();
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading data</Text>;

  return (
    <>
      <ScrollView className="relative bg-[#EDE7D7]">
        <View className="pt-14 px-4">
          <SearchBar />
          <Text className="text-whsite text-4xl font-bold mt-8">
            Good Morning
          </Text>
          <Text className="text-s text-sm font-bold">
            Grab your favorite coffee : {")"}
          </Text>
          <View className="mt-8">
            <Catergories />
          </View>
        </View>
        <FlatList
          className="mt-8"
          showsHorizontalScrollIndicator={false}
          data={data}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CoffeeCard
              name={item.name}
              addon={item.addon}
              image={item.image}
              description={item.description}
              price={item.price}
              size={item.size}
              rating={item.rating}
              numReviews={item.numReviews}
              count={item.count}
            />
          )}
        />

        <StatusBar backgroundColor="#000000" style="auto" />
      </ScrollView>
    </>
  );
};

export default Home;