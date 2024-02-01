import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const RectangleComponent1 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.componentChild}/>
      <Image
        style={styles.iconactionsearch24px}
        contentFit="cover"
        source={require("../assets/iconactionsearch-24px.png")}
      />
      <Text style={styles.searchLocation}>Search Location</Text>
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
  },
  searchLocation: {
    top: 11,
    left: 20,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorSilver,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    top: 44,
    left: 24,
    width: 327,
    height: 46,
    position: "absolute",
  },
});

export default RectangleComponent1;
