import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Container = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.componentChild} />
      <Text style={[styles.time, styles.fTypo]}>TIME</Text>
      <Text style={[styles.am, styles.textTypo]}>11:25 AM</Text>
      <Text style={[styles.text, styles.textTypo]}>4</Text>
      <Text style={[styles.text1, styles.textTypo]}>58%</Text>
      <Text style={[styles.text2, styles.textTypo]}>22</Text>
      <Text style={[styles.uv, styles.fTypo]}>UV</Text>
      <Text style={[styles.rain, styles.fTypo]}>% RAIN</Text>
      <Text style={[styles.f, styles.fTypo]}>F°</Text>
      <View style={styles.componentItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  fTypo: {
    textAlign: "center",
    color: Color.colorSilver,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    top: 6,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorDarkgray,
    fontSize: FontSize.size_mini,
    top: 26,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
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
  time: {
    left: 36,
  },
  am: {
    left: 20,
  },
  text: {
    left: 134,
  },
  text1: {
    left: 203,
  },
  text2: {
    left: 289,
  },
  uv: {
    left: 131,
  },
  rain: {
    left: 198,
  },
  f: {
    left: 292,
  },
  componentItem: {
    top: -34,
    left: 247,
    width: 100,
    height: 100,
    overflow: "hidden",
    position: "absolute",
  },
  rectangleParent: {
    top: 466,
    left: 24,
    width: 327,
    height: 59,
    position: "absolute",
  },
});

export default Container;
