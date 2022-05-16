import { StyleSheet, Text, View, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/pages/Home";
import Details from "./src/pages/Details";
import Toast from "react-native-toast-message";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar />

      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="HomePage" component={Home} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="DetailsPage"
          component={Details}
        />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}
