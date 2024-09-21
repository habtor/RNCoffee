import { View, Text, FlatList } from "react-native";
import { useCart } from "../../contexts/cart";
import CoffeeCard from "../../components/coffeeCard";

const Favourite = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  console.log(cart);

  return (
    <View className="">
      <Text className="text-3xl text-center font-bold mt-8">Favourite</Text>
      <FlatList
        className="mt-8"
        showsHorizontalScrollIndicator={false}
        data={cart}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <CoffeeCard
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
        )}
      />
    </View>
  );
};

export default Favourite;
