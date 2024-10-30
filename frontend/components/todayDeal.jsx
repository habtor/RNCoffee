import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";

const TodayDealCard = ({
  name,
  addon,
  image,
  price,
  rating,
  numReviews,
  onHeartPress,
  onCartPress,
  inCart,
}) => {
  return (
    <View
      className="flex-row m-2 bordser-[1px] borsder-slate-400 rounded-3xl bg-[#fff] h-36 items-center"
      style={styles.shadow}
    >
      <View className=" items-center justify-center h-s4 w-48 p-2 rounded-t-3xl">
        <Image
          source={{ uri: image }}
          className="h-full w-full rounded-3xl "
          resizeMode="cover"
        />
      </View>
      <View className="flex-row rounded-b-3xl pr-3 pb-3 items-center">
        <View className="flex-row justify-between ">
          <View className="">
            <Text className="text-orange-900 text-lg ">{name}</Text>
            <View className="flex-row items-center">
              <Ionicons name="star" size={14} color={"orange"}></Ionicons>
              <Text className="ml-1">{rating ? rating : "-"}</Text>
            </View>
            <Text className="text-gray-800 font-bold text-lg">${price}</Text>
          </View>
        </View>
        <View className="flex-row items-end justify-between">
          <TouchableOpacity
            className="h-12 w-12 bg-black rounded-2xl items-center justify-center"
            activeOpacity={0.6}
            onPress={onCartPress}
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
export default TodayDealCard;
