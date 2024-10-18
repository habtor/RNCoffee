import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import CartItem from "../../components/cartItem";

const Cart = () => {
  return (
    <>
      <ScrollView className="">
        <View className="p-2">
          <Text className="text-3xl text-center font-bold mt-7">Cart</Text>
        </View>
        <View className="">
          <CartItem />
          <CartItem />
        </View>
        <View className="items-center px-6">
          <View className="w-full  border-[1px] border-slate-500 rounded-full mt-5"></View>
          <View className="flex-row justify-between p-2 w-full">
            <Text className="text-lg font-bold">Subtotal</Text>
            <Text className="text-lg font-bold">$9.98</Text>
          </View>
          <View className="flex-row justify-between p-2 w-full">
            <Text className="text-lg font-bold">Deleviery</Text>
            <Text className="text-lg font-bold">$9.98</Text>
          </View>
          <View className="w-full  border-[1px] border-slate-500 rounded-full"></View>
          <View className="flex-row justify-between p-2 w-full">
            <Text className="text-lg font-bold">Grand total</Text>
            <Text className="text-lg font-bold">$9.98</Text>
          </View>
        </View>

        <View className=" items-center mb-5">
          <TouchableOpacity
            activeOpacity={0.6}
            className="bg-black h-16 w-11/12 items-center justify-center rounded-xl mt-5"
          >
            <Text className="text-white text-lg font-bold">Checkout</Text>
          </TouchableOpacity>
        </View>
        {/* <StatusBar backgroundColor="#000" style="light" /> */}
      </ScrollView>
    </>
  );
};

export default Cart;
