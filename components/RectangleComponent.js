import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
const RectangleComponent = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Sunny"); // Lorsque l'image est pressée, naviguez vers l'écran Sunny
  };

  return (

    <View style={styles.rectangleParent}>
      <View style={styles.componentChild} />
      <Pressable onPress={handlePress}>
        <Image
          style={styles.iconactionsearch24px}
          contentFit="cover"
          source={require("../assets/iconactionsearch-24px.png")}
        />
      </Pressable>
      <Text style={styles.paris}>Paris</Text>
    </View>

  );
};

const styles = StyleSheet.create({
  componentChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGray_100,
    position: "absolute",
  },
  iconactionsearch24px: {
    width: 17,
    height: 17,
    position: "absolute",
    top: "50%",
    right: 12, // Aligner à droite
    marginTop: 15,
  },
  paris: {
    top: 11,
    left: 20,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_200,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    top: 100,
    left: 24,
    width: 360,
    height: 46,
    position: "absolute",
  },
});

export default RectangleComponent;
