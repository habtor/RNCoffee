import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import CartItem from "../../components/cartCard";
import { useCart } from "../../contexts/cart";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useState } from "react";
import { Swipeable } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const [itemCounts, setItemCounts] = useState(
    cart.reduce((acc, item) => {
      acc[item._id] = 1;
      return acc;
    }, {})
  );

  const getTotalCost = () => {
    return cart.reduce((total, item) => {
      const itemTotal = item.price * (itemCounts[item._id] || 1); // Multiply
      return total + itemTotal;
    }, 0);
  };

  const deliveryCost = 2;

  // Handle increase of item count
  const increaseItemCount = (id) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 1) + 1, // Increase item count by 1
    }));
  };

  // Handle decrease of item count
  const decreaseItemCount = (id) => {
    setItemCounts((prevCounts) => {
      const currentCount = prevCounts[id];

      if (currentCount === 1) {
        removeFromCart(id); // Remove item if the count is 1
        return prevCounts; // Return the same state because the item is removed
      }

      // Otherwise, decrease the count
      return {
        ...prevCounts,
        [id]: currentCount - 1,
      };
    });
  };

  return (
    <GestureHandlerRootView>
      <View className="p-2">
        <Text className="text-3xl text-center font-bold mt-7">Cart</Text>
      </View>
      {!cart || cart.length === 0 ? (
        <Text className="text-3xl text-black text-center font-bold mt-24">
          Your cart is empty
        </Text>
      ) : (
        <>
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
                <CartItem
                  name={item.name}
                  addon={item.addon}
                  image={item.image}
                  price={item.price}
                  count={itemCounts[item._id]}
                  pressAddCount={() => increaseItemCount(item._id)}
                  pressSubCount={() => decreaseItemCount(item._id)}
                />
              </Swipeable>
            )}
          />
          <View className="items-center px-6">
            <View className="w-full border-[1px] border-slate-500 rounded-full mt-5"></View>
            <View className="flex-row justify-between p-2 w-full">
              <Text className="text-lg font-bold">Subtotal</Text>
              <Text className="text-lg font-bold">
                ${getTotalCost().toFixed(2)}
              </Text>
            </View>
            <View className="flex-row justify-between p-2 w-full">
              <Text className="text-lg font-bold">Delivery</Text>
              <Text className="text-lg font-bold">
                ${deliveryCost.toFixed(2)}
              </Text>
            </View>
            <View className="w-full border-[1px] border-slate-500 rounded-full"></View>
            <View className="flex-row justify-between p-2 w-full">
              <Text className="text-lg font-bold">Grand total</Text>
              <Text className="text-lg font-bold">
                ${(getTotalCost() + deliveryCost).toFixed(2)}
              </Text>
            </View>
          </View>
          <View className="items-center mb-5">
            <TouchableOpacity
              activeOpacity={0.6}
              className="bg-black h-16 w-11/12 items-center justify-center rounded-xl mt-5"
            >
              <Text className="text-white text-lg font-bold">Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </GestureHandlerRootView>
  );
};

export default Cart;
