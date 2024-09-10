import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CoffeeCard = () => {
  return (
    <View className="flex m-2 ">
      <View className=" items-center justify-center h-40 w-48 ">
        <Image
          source={{
            uri: "https://cdn.vox-cdn.com/thumbor/6kLvmWfhU4h64EhC0S6tsn714fI=/0x0:4032x3024/1200x900/filters:focal(1694x1190:2338x1834)/cdn.vox-cdn.com/uploads/chorus_image/image/59740845/IMG_1503.42.jpg",
          }}
          className="h-full w-full rounded-t-3xl"
          resizeMode="cover"
        />
      </View>
      <View className="bg-slate-100 rounded-b-3xl p-5">
        <View className="flex-row justify-between ">
          <View className="">
            <Text className="text-orange-900 text-2xl font-bold">Espresso</Text>
            <Text className="text-gray-500">With Milk</Text>
          </View>
          <View className="flex-row items-center">
            <Ionicons name="star" size={14} color={"orange"}></Ionicons>
            <Text className="text-orange-400 ml-2">4.5</Text>
          </View>
        </View>
        <View className="flex-row items-end justify-between">
          <Text className="text-gray-800 font-bold text-2xl">$6.99</Text>
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
