import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const categories = ["All", "Espresso", "Mocha", "Tee", "Cappuccino"];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          className={`py-2 px-3 rounded-xl items-center justify-center mr-2 flex-row ${
            selectedCategory === index ? "bg-orange-400" : "bg-[#141921]"
          }`}
          activeOpacity={0.6}
          onPress={() => setSelectedCategory(index)}
        >
          {category === "All" && (
            <View className="">
              <Ionicons
                name="grid-outline"
                color="white"
                size={20}
                style={{ marginRight: 5 }}
              />
            </View>
          )}
          <Text className="text-white text-center font-bold">{category}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Categories;
