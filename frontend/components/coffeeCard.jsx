import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CoffeeCard = ({ name, addon, image, price, rating, numReviews }) => {
  return (
    <View className="flex m-2 border-[1px] border-slate-400 rounded-3xl">
      <View className=" items-center justify-center h-44 w-60 p-2 bg-slate-100 rounded-t-3xl ">
        <Image
          source={{ uri: image }}
          className="h-full w-full rounded-3xl "
          resizeMode="cover"
        />
      </View>
      <View className="bg-slate-100 rounded-b-3xl px-3 pb-3">
        <View className="flex-row justify-between ">
          <View className="">
            <Text className="text-orange-900 text-2xl font-bold">{name}</Text>
            <Text className="text-gray-500">{addon}</Text>
          </View>
          <View className="flex-row items-center">
            <Ionicons name="star" size={14} color={"orange"}></Ionicons>
            <Text className="text-orange-400 ml-2">
              {rating ? rating : "-"}
            </Text>
          </View>
        </View>
        <View className="flex-row items-end justify-between">
          <Text className="text-gray-800 font-bold text-2xl">{price}</Text>
          <TouchableOpacity
            className="h-12 w-12 bg-orange-400 rounded-2xl items-center justify-center"
            activeOpacity={0.6}
          >
            <Text className="text-3xl text-white">+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CoffeeCard;
