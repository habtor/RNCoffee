import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useFav } from "../../contexts/fav";
import CoffeeCard from "../../components/coffeeCard";
import { Swipeable } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import FavCard from "../../components/favCard";

const Favourite = () => {
  const { fav, addToFav, removeFromFav } = useFav();

  return (
    <GestureHandlerRootView>
      <Text className="text-3xl text-center font-bold mt-8">Favourite</Text>
      {!fav || fav.length === 0 ? (
        <Text className="text-3xl text-black text-center font-bold mt-24">
          You don't have favourites
        </Text>
      ) : (
        <View className="">
          <FlatList
            className="mt-8"
            showsHorizontalScrollIndicator={false}
            data={fav}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <Swipeable
                renderRightActions={() => (
                  <TouchableOpacity
                    className="w-24 h-full items-center justify-center"
                    onPress={() => removeFromFav(item)}
                  >
                    <Ionicons name="trash-outline" size={40} color="red" />
                  </TouchableOpacity>
                )}
              >
                <FavCard
                  name={item.name}
                  addon={item.addon}
                  image={item.image}
                  description={item.description}
                  price={item.price}
                  size={item.size}
                  rating={item.rating}
                  numReviews={item.numReviews}
                  count={item.count}
                />
              </Swipeable>
            )}
          />
        </View>
      )}
    </GestureHandlerRootView>
  );
};

export default Favourite;
