import { StyleSheet, Text, View, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/pages/Home";
import Details from "./src/pages/Details";
import Toast from "react-native-toast-message";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouriteProducts from "./src/pages/FavouriteProducst";

export default function App() {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <StatusBar />

      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomePages"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="DetailsPage"
          component={Details}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Favourite"
          component={FavouriteProducts}
        />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}
