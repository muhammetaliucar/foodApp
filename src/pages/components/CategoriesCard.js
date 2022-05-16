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

const CategoriesCard = ({ data }) => {
  return (
    <TouchableOpacity
      style={{
        height: Dimensions.get("window").height * 0.2,
        width: Dimensions.get("window").width * 0.3,
        backgroundColor: "#F5CA48",
        margin: 10,
        justifyContent: "space-around",
        elevation: 10,
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
      }}
    >
      <Image source={{ uri: data.image }} style={{ height: 60, width: 60 }} />

      <Text style={{ fontSize: 14, fontWeight: "bold" }}>{data.title}</Text>
    </TouchableOpacity>
  );
};

export default CategoriesCard;
