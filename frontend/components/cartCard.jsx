import { View, Text, Image, TouchableOpacity } from "react-native";

const CartItem = ({
  name,
  addon,
  image,
  price,
  count,
  pressAddCount,
  pressSubCount,
}) => {
  return (
    <View
      className="m-2 rounded-2xl flex-row justify-between flex bg-[#ffffff]"
      style={styles.shadow}
    >
      <View className="flex-row">
        <View className="h-24 w-24 p-1">
          <Image
            source={{ uri: image }}
            className="h-full w-full rounded-2xl"
            resizeMode="cover"
          />
        </View>

        <View className="p-2">
          <Text className="text-lg font-bold">{name}</Text>
          <Text className="text-gray-700">{addon}</Text>
          <Text className="text-gray-700 font-bold text-lg">${price}</Text>
        </View>
      </View>

      <View className="flex-row items-center mr-4">
        <TouchableOpacity
          activeOpacity={0.6}
          className="h-6 w-6 border-2 border-slate-700 rounded-md items-center justify-center"
          onPress={pressSubCount}
        >
          <Text className="h-[2px] w-[14px] bg-black"></Text>
        </TouchableOpacity>
        <Text className="mx-2 text-lg">{!count ? 1 : count}</Text>
        <TouchableOpacity
          activeOpacity={0.6}
          className="h-6 w-6 border-2 border-slate-700 rounded-md items-center justify-center"
          onPress={pressAddCount}
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

const styles = {
  shadow: {
    shadowColor: "#000", // iOS shadow color
    shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
    shadowOpacity: 0.5, // iOS shadow opacity
    shadowRadius: 1.84, // iOS shadow radius
    elevation: 5, // Android elevation for shadow
  },
};

export default CartItem;
