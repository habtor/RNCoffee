import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <>
      <View className="flex flex-row justify-between items-center">
        <View className="relative items-center justify-center w-full">
          <TextInput
            className="w-full h-12 bg-[#ffffff] rounded-full px-4 text-black border border-gray-800"
            placeholder="Search coffee"
          />
          <View className="absolute right-0 ">
            <TouchableOpacity
              activeOpacity={0.6}
              className="bg-[#845744] rounded-full p-3"
            >
              <Ionicons name="search" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        {/* <View className="">
          <Image
            source={{
              uri: "https://i1.rgstatic.net/ii/profile.image/708360861147136-1545897798167_Q512/Saleh-Habtor.jpg",
            }}
            className="w-14 h-14 rounded-full"
            resizeMode="contain"
          />
        </View> */}
      </View>
    </>
  );
};

export default SearchBar;
