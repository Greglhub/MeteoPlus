import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const ParisCard1 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.componentChild} />
      <Text style={[styles.text, styles.textFlexBox]}>20</Text>
      <Text style={[styles.paris, styles.textFlexBox]}>Paris</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={styles.componentItem}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    textAlign: "center",
    color: Color.colorGray_200,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  componentChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_2xs,
    backgroundColor: Color.colorGray_100,
    position: "absolute",
  },
  text: {
    top: 60,
    left: 6,
    fontSize: FontSize.size_41xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    width: 100,
    height: 100,
    textAlign: "center", // Ajout de cette ligne
    lineHeight: 70, // Ajout de cette ligne pour aligner le texte verticalement
    color: Color.colorGray_200,
    position: "absolute",
    
  },
  paris: {
    top: 20,
    left: 37,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
  },
  vectorIcon: {
    height: "25%",
    width: "25.38%",
    top: "34.66%",
    bottom: "40.34%",
    left: "64.53%",
    right: "10.09%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  vectorIcon1: {
    height: "17.61%",
    width: "14.37%",
    top: "27.84%",
    bottom: "54.55%",
    left: "75.54%",
    right: "10.09%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  vectorIcon2: {
    height: "13.64%",
    width: "12.54%",
    top: "52.27%",
    right: "19.57%",
    bottom: "34.09%",
    left: "67.89%",
  },
  componentItem: {
    top: 62,
    left: 92,
    width: 5,
    height: 5,
    position: "absolute",
  },
  rectangleParent: {
    top: 300,
    left: 24,
    width: 360,
    height: 176,
    position: "absolute",
  },
});

export default ParisCard1;
