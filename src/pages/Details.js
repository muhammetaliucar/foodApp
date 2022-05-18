import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import Toast from "react-native-toast-message";

const Details = ({ route }) => {
  const data = route.params;
  const name = data.title.split(" ")[0];
  const secondName = data.title.split(" ")[1];
  const [fav, setFav] = useState(data.fav);

  const showToast = () => {
    Toast.show({
      type: "success",
      text1: fav === false ? "Favorilere Eklendi" : "Favorilerden Çıkartıldı",
    });
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: 20,
          alignItems: "center",
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
        <TouchableOpacity onPress={() => showToast((data.fav = !data.fav), setFav(!fav))}>
          {fav === false ? (
            <FontAwesome
              name="star-o"
              size={16}
              style={{
                padding: 10,
                borderWidth: 1,
                justifyContent: "center",
                borderRadius: 10,
                borderColor: "#E4723C",
              }}
              color="#E4723C"
            />
          ) : (
            <View style={{ justifyContent: "center" }}>
              <FontAwesome
                name="star"
                size={16}
                style={{
                  padding: 10,
                  borderWidth: 1,
                  justifyContent: "center",
                  borderRadius: 10,
                  borderColor: "#E4723C",
                }}
                color="#E4723C"
              />
            </View>
          )}
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 32, fontWeight: "bold" }}>{name}</Text>
        <Text style={{ fontSize: 32, fontWeight: "bold", color: "black" }}>
          {secondName}
        </Text>
        <Text style={{ fontSize: 32, fontWeight: "700", color: "#E4723C" }}>
          ${data.price}
        </Text>
      </View>
      <View
        style={{
          marginVertical: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ color: "#CDCDCD" }}>Size</Text>
          <Text
            style={{ fontSize: 16, fontWeight: "bold", marginTop: 5, marginBottom: 5 }}
          >
            {data.size}
          </Text>
          <Text style={{ color: "#CDCDCD" }}>Crust</Text>
          <Text
            style={{ fontSize: 16, fontWeight: "bold", marginTop: 5, marginBottom: 5 }}
          >
            {data.crust}
          </Text>
          <Text style={{ color: "#CDCDCD" }}>Delivery in</Text>
          <Text
            style={{ fontSize: 16, fontWeight: "bold", marginTop: 5, marginBottom: 5 }}
          >
            {data.time} min
          </Text>
        </View>
        <Image
          source={{ uri: data.image }}
          style={{ height: 300, width: 300, resizeMode: "contain" }}
        />
      </View>
      <View>
        <TouchableOpacity
          style={{
            paddingVertical: 17,
            paddingHorizontal: 20,
            alignItems: "center",
            backgroundColor: "#F5CA48",
            borderRadius: 25,
          }}
          onPress={() => console.log("1")}
        >
          <Text style={{ fontWeight: "bold", fontSize: 17 }}> Place an order ></Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Details;
