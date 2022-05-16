import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const ProductsCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("DetailsPage", data)}
      style={{
        marginHorizontal: 10,
        backgroundColor: "white",
        borderRadius: 30,
        margin: 10,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
              marginStart: 10,
            }}
          >
            <FontAwesome5 name="crown" size={12} color="#F5CA48" />
            <Text style={{ marginStart: 5, fontWeight: "bold" }}>top of the week</Text>
          </View>
          <View style={{ marginStart: 15, marginVertical: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{data.title}</Text>
            <Text style={{ color: "gray" }}>Weight {data.weight}</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#F5CA48",
                borderBottomLeftRadius: 30,
                borderTopRightRadius: 30,
                marginEnd: 20,
              }}
            >
              <AntDesign
                name="plus"
                size={20}
                color="black"
                style={{ paddingHorizontal: 40, paddingVertical: 20 }}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <AntDesign name="star" size={15} color="black" />
              <Text style={{ marginStart: 5 }}>{data.rate}</Text>
            </View>
          </View>
        </View>
        <View>
          <Image
            source={{ uri: data.image }}
            style={{ height: 125, resizeMode: "contain", width: 125 }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductsCard;
