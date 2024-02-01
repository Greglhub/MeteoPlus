import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import NiceCardContainer from "../components/NiceCardContainer";
import Container from "../components/ContainerWrapper22";
import RectangleComponent1 from "../components/RectangleComponent1";
import Component4Icon from "../components/Component4Icon";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Cloudy = () => {
  return (
    <View style={styles.cloudy}>
      <Text style={styles.tunis}>Tunis</Text>
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <NiceCardContainer quantity="31" propTop={361} />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <ContainerWrapper22 />
      <RectangleComponent1 />
      <Component4Icon dimensionCode={require("../assets/component-4.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition: {
    right: "41.87%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  tunis: {
    top: 315,
    left: 102,
    fontSize: FontSize.size_11xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorGray_200,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 172,
    height: 30,
    position: "absolute",
  },
  groupIcon: {
    height: "11.95%",
    width: "25.87%",
    top: "32.88%",
    right: "33.6%",
    bottom: "55.17%",
    left: "40.53%",
  },
  vectorIcon: {
    height: "2.59%",
    width: "5.6%",
    top: "39.41%",
    right: "18.4%",
    bottom: "58%",
    left: "76%",
  },
  vectorIcon1: {
    width: "14.13%",
    top: "26.23%",
    bottom: "69.83%",
    left: "44%",
    height: "3.94%",
  },
  vectorIcon2: {
    height: "6.03%",
    width: "24.53%",
    top: "27.71%",
    bottom: "66.26%",
    left: "33.6%",
  },
  vectorIcon3: {
    height: "7.39%",
    width: "30.13%",
    top: "22.66%",
    right: "37.07%",
    bottom: "69.95%",
    left: "32.8%",
    display: "none",
  },
  vectorIcon4: {
    width: "14.93%",
    top: "30.91%",
    right: "49.33%",
    bottom: "65.15%",
    left: "35.73%",
    height: "3.94%",
  },
  cloudy: {
    backgroundColor: Color.colorTurquoise,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Cloudy;
