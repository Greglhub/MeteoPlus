import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SearchResult from "./screens/SearchResult";
import Sunny from "./screens/Sunny";
import Cloudy from "./screens/Cloudy";
import AddToList from "./screens/AddToList";
import AddedToList from "./screens/AddedToList";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
const Stack = createNativeStackNavigator();
const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="SearchResult"
              component={SearchResult}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sunny"
              component={Sunny}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cloudy"
              component={Cloudy}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddToList"
              component={AddToList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddedToList"
              component={AddedToList}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;

