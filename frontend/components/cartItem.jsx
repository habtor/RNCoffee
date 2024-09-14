import { View, Text, Image, TouchableOpacity } from "react-native";

const CartItem = () => {
  return (
    <View className="border-[1px] border-black m-2 rounded-2xl flex-row justify-between bg-[#FAF7EF]">
      <View className="flex-row">
        <View className="h-24 w-24 p-1">
          <Image
            source={{
              uri: "https://images.news18.com/ibnlive/uploads/2024/01/image-76-2024-01-c4b36ce27d9508ae9aa4b2f55a0b220f.jpg?impolicy=website&width=640&height=480",
            }}
            className="h-full w-full rounded-2xl"
            resizeMode="cover"
          />
        </View>

        <View className="p-2">
          <Text className="text-lg font-bold">Cappuccino</Text>
          <Text className="text-gray-700">Medium</Text>
          <Text className="text-gray-700 font-bold text-lg">$4.99</Text>
        </View>
      </View>

      <View className="flex-row items-center mr-4">
        <TouchableOpacity
          activeOpacity={0.6}
          className="h-6 w-6 border-2 border-slate-700 rounded-md items-center justify-center"
        >
          <Text className="h-[2px] w-[14px] bg-black"></Text>
        </TouchableOpacity>
        <Text className="mx-2 text-lg">2</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          className="h-6 w-6 border-2 border-slate-700 rounded-md items-center justify-center"
        >
          <View className="relative h-[2px] w-[14px] bg-black">
            <Text className="h-[2px] w-[14px] bg-black"></Text>
            <Text className="absolute top-[-6] left-[6px] h-[14px] w-[2px] bg-black"></Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
