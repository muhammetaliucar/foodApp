import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import dataProducts from "./../../ProductsData.json";
import ProductsCard from "./components/ProductsCard";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const FavouriteProducts = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: 20,
          alignItems: "center",
          marginHorizontal: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            name="left"
            size={16}
            color="black"
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: "#CDCDCD",
              borderRadius: 8,
            }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 34, fontWeight: "500" }}>Favourite Products</Text>
      </View>
      <FlatList
        data={dataProducts.filter((le) => le.fav === true)}
        renderItem={({ item }) => <ProductsCard data={item} />}
      />
    </View>
  );
};

export default FavouriteProducts;
