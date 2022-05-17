import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Image,
} from "react-native";
import data from "./../../CategoriesData.json";
import { AntDesign } from "@expo/vector-icons";
import ProductsCard from "./components/ProductsCard";
import dataProduct from "../../ProductsData.json";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const Home = () => {
  const [categoriesId, setCategoriesId] = useState(3);
  const navigation = useNavigation();

  const [productData, setProductData] = useState(dataProduct);

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
        <View
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#E4723C",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Favourite")}>
            <MaterialIcons name="favorite" size={24} color="#E4723C" />
          </TouchableOpacity>
        </View>
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
      <Text
        style={{ fontWeight: "bold", fontSize: 18, marginStart: 10, marginBottom: 10 }}
      >
        Categories
      </Text>
      <ScrollView horizontal>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => (setCategoriesId(3), setProductData(dataProduct))}
            style={{
              height: Dimensions.get("window").height * 0.27,
              width: Dimensions.get("window").width * 0.28,
              backgroundColor: categoriesId === 3 ? "#F5CA48" : "white",
              margin: 10,
              justifyContent: "space-around",
              elevation: 10,
              borderRadius: 10,
              padding: 10,
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: data[3].image }}
              style={{ height: 60, width: 60, tintColor: "#E4723C" }}
            />

            <Text style={{ fontSize: 14, fontWeight: "bold" }}>{data[3].title}</Text>
            <View>
              <AntDesign
                name="right"
                size={16}
                color={categoriesId === 3 ? "black" : "white"}
                style={{
                  padding: 8,
                  backgroundColor: categoriesId === 3 ? "white" : "#F26C68",
                  borderRadius: 30,
                }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => (
              setCategoriesId(0),
              setProductData(dataProduct.filter((le) => le.cat == "pizza"))
            )}
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
            onPress={() => (
              setCategoriesId(1),
              setProductData(dataProduct.filter((le) => le.cat == "seafood"))
            )}
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
            onPress={() => (
              setCategoriesId(2),
              setProductData(dataProduct.filter((le) => le.cat == "softdrinks"))
            )}
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
      </ScrollView>
      <View style={{ marginTop: 20 }}>
        <Text style={{ marginStart: 10, fontSize: 18, fontWeight: "bold" }}>Popular</Text>
      </View>
      <FlatList
        data={productData}
        renderItem={({ item }) => <ProductsCard data={item} />}
      />
    </ScrollView>
  );
};

export default Home;
