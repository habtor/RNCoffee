import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";

const CoffeeCard = ({
  name,
  addon,
  image,
  price,
  rating,
  numReviews,
  onPress,
  inCart,
}) => {
  return (
    <View
      className="flex m-2 bordser-[1px] borsder-slate-400 rounded-3xl bg-[#ffffff] "
      style={styles.shadow}
    >
      <View className=" items-center justify-center h-44 w-60 p-2 rounded-t-3xl">
        <Image
          source={{ uri: image }}
          className="h-full w-full rounded-3xl "
          resizeMode="cover"
        />
      </View>
      <View className=" rounded-b-3xl px-3 pb-3">
        <View className="flex-row justify-between ">
          <View className="">
            <Text className="text-orange-900 text-2xl font-bold">{name}</Text>
            <View className="flex-row items-center">
              <Ionicons name="star" size={14} color={"orange"}></Ionicons>
              <Text className="ml-1">{rating ? rating : "-"}</Text>
              <Text className="text-slate-700 ml-2">
                {`(${numReviews} reviews)`}
              </Text>
            </View>
          </View>
          <View className="flex-row items-center pr-3">
            <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
              {!inCart ? (
                <Feather name="heart" size={24} color="black" />
              ) : (
                <AntDesign name="heart" size={24} color="red" />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row items-end justify-between">
          <Text className="text-gray-800 font-bold text-2xl">${price}</Text>
          <TouchableOpacity
            className="h-12 w-12 bg-black rounded-2xl items-center justify-center"
            activeOpacity={0.6}
          >
            <Text className="text-3xl text-white">+</Text>
          </TouchableOpacity>
        </View>
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
export default CoffeeCard;
