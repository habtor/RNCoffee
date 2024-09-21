import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useCart } from "../../contexts/cart";
import CoffeeCard from "../../components/coffeeCard";
import { Swipeable } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";

const Favourite = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <GestureHandlerRootView>
      <View className="">
        <Text className="text-3xl text-center font-bold mt-8">Favourite</Text>
        <FlatList
          className="mt-8"
          showsHorizontalScrollIndicator={false}
          data={cart}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <Swipeable
              renderRightActions={() => (
                <TouchableOpacity
                  className="w-24 h-full items-center justify-center"
                  onPress={() => removeFromCart(item)}
                >
                  <Ionicons name="trash-outline" size={40} color="red" />
                </TouchableOpacity>
              )}
            >
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
            </Swipeable>
          )}
        />
      </View>
    </GestureHandlerRootView>
  );
};

export default Favourite;
