import { View, Text, ScrollView, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import SearchBar from "../../components/searchBar";
import Catergories from "../../components/categories";
import CoffeeCard from "../../components/coffeeCard";
import useGetCoffee from "../../hooks/useGetCoffee";
import { useCart } from "../../contexts/cart";

const Home = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  const { data, loading, error } = useGetCoffee();

  const isInCart = (itemId) => {
    return cart.some((cartItem) => cartItem._id === itemId);
  };

  const handleToggleCart = (item) => {
    if (isInCart(item._id)) {
      removeFromCart(item);
    } else {
      addToCart(item);
    }
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading data</Text>;

  return (
    <>
      <ScrollView className="h-full mt-10">
        {/* Top Section */}
        <View className="pt- px-4 relative">
          <SearchBar />
          <Text className="text-wshite text-4xl font-bold mt-8">
            Good Morning
          </Text>
          <Text className="text-wshite text-sm font-bold">
            Grab your favorite coffee :)
          </Text>
          <View className="mt-8">
            <Catergories />
          </View>
        </View>

        <FlatList
          className=""
          showsHorizontalScrollIndicator={false}
          data={data}
          horizontal
          keyExtractor={(item) => item._id}
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
              onPress={() => handleToggleCart(item)}
              inCart={isInCart(item._id)}
            />
          )}
        />

        <StatusBar backgroundColor="#000" style="light" />
      </ScrollView>
    </>
  );
};

export default Home;
