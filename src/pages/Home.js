import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Image,
} from "react-native";
import CategoriesCard from "./components/CategoriesCard";
import data from "./../../CategoriesData.json";
import { AntDesign } from "@expo/vector-icons";
import ProductsCard from "./components/ProductsCard";
import dataProduct from "../../ProductsData.json";

const Home = () => {
  const [categoriesId, setCategoriesId] = useState(0);
  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 35,
          marginBottom: 20,
          marginHorizontal: 10,
        }}
      >
        <Image
          source={{
            uri: "https://www.arabnews.com/sites/default/files/2022/05/01/3206336-603779425.jpg",
          }}
          style={{ height: 50, width: 50, borderRadius: 50 }}
        />
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://pngset.com/images/hamburger-menu-menu-menu-button-icon-with-and-vector-format-text-symbol-gray-transparent-png-1888371.png",
            }}
            style={{ height: 35, width: 35 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ marginStart: 10 }}>
        <Text style={{ fontSize: 14, fontWeight: "100" }}>Food</Text>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Delivery</Text>
        <View
          style={{
            flexDirection: "row",
            width: Dimensions.get("window").width,
            marginVertical: 10,
            alignItems: "center",
          }}
        >
          <AntDesign name="search1" size={20} color="black" />
          <TextInput
            placeholder="Search..."
            style={{
              borderBottomWidth: 1,
              borderColor: "gray",

              width: Dimensions.get("window").width * 0.85,
              marginStart: 10,
            }}
            placeholderTextColor="gray"
          />
        </View>
      </View>
      <View>
        <Text
          style={{ fontWeight: "bold", fontSize: 18, marginStart: 10, marginBottom: 10 }}
        >
          Categories
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => setCategoriesId(0)}
            style={{
              height: Dimensions.get("window").height * 0.27,
              width: Dimensions.get("window").width * 0.28,
              backgroundColor: categoriesId === 0 ? "#F5CA48" : "white",
              margin: 10,
              justifyContent: "space-around",
              elevation: 10,
              borderRadius: 10,
              padding: 10,
              alignItems: "center",
            }}
          >
            <Image source={{ uri: data[0].image }} style={{ height: 60, width: 60 }} />

            <Text style={{ fontSize: 14, fontWeight: "bold" }}>{data[0].title}</Text>
            <View>
              <AntDesign
                name="right"
                size={16}
                color={categoriesId === 0 ? "black" : "white"}
                style={{
                  padding: 8,
                  backgroundColor: categoriesId === 0 ? "white" : "#F26C68",
                  borderRadius: 100,
                }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCategoriesId(1)}
            style={{
              height: Dimensions.get("window").height * 0.27,
              width: Dimensions.get("window").width * 0.28,
              backgroundColor: categoriesId === 1 ? "#F5CA48" : "white",
              margin: 10,
              justifyContent: "space-around",
              elevation: 10,
              borderRadius: 10,
              padding: 10,
              alignItems: "center",
            }}
          >
            <Image source={{ uri: data[1].image }} style={{ height: 60, width: 60 }} />

            <Text style={{ fontSize: 14, fontWeight: "bold" }}>{data[1].title}</Text>
            <View>
              <AntDesign
                name="right"
                size={16}
                color={categoriesId === 1 ? "black" : "white"}
                style={{
                  padding: 8,
                  backgroundColor: categoriesId === 1 ? "white" : "#F26C68",
                  borderRadius: 100,
                }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCategoriesId(2)}
            style={{
              height: Dimensions.get("window").height * 0.27,
              width: Dimensions.get("window").width * 0.28,
              backgroundColor: categoriesId === 2 ? "#F5CA48" : "white",
              margin: 10,
              justifyContent: "space-around",
              elevation: 10,
              borderRadius: 10,
              padding: 10,
              alignItems: "center",
            }}
          >
            <Image source={{ uri: data[2].image }} style={{ height: 60, width: 60 }} />

            <Text style={{ fontSize: 14, fontWeight: "bold" }}>{data[2].title}</Text>
            <View>
              <AntDesign
                name="right"
                size={16}
                color={categoriesId === 2 ? "black" : "white"}
                style={{
                  padding: 8,
                  backgroundColor: categoriesId === 2 ? "white" : "#F26C68",
                  borderRadius: 30,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ marginStart: 10, fontSize: 18, fontWeight: "bold" }}>Popular</Text>
      </View>
      <FlatList
        data={dataProduct}
        renderItem={({ item }) => <ProductsCard data={item} />}
      />
    </ScrollView>
  );
};

export default Home;
