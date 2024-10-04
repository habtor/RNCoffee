import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";

const FavCard = ({
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
      className="flex m-2 bordser-[1px] borsder-slate-400 rounded-3xl bg-[#ffffff] flex-row items-center "
      style={styles.shadow}
    >
      <View className=" items-center justify-center h-32 w-32 p-1 rounded-t-3xl">
        <Image
          source={{ uri: image }}
          className="h-full w-full rounded-3xl "
          resizeMode="cover"
        />
      </View>
      <View className=" rounded-b-3xl px-3 pb-3 flex-row justify-between w-2/3">
        <View className="flex justify-between ">
          <View className="">
            <Text className="text-orange-900 text-xl font-bold">{name}</Text>
            <View className="flex-row items-center">
              <Text className=" text-xs">{addon ? addon : "-"}</Text>
            </View>
          </View>

          <View className="flex-row items-end justify-between">
            <Text className="text-gray-800 font-bold text-xl">${price}</Text>
          </View>
        </View>
        <View className="flex items-center pr-3 justify-center">
          <Ionicons name="star" size={14} color={"orange"}></Ionicons>
          <Text className="ml-1">{rating ? rating : "-"}</Text>
          <Text className="text-slate-700 ml-2">
            {`(${numReviews} reviews)`}
          </Text>
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
    elevation: 3, // Android elevation for shadow
  },
};
export default FavCard;
