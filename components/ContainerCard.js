import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const ContainerCard = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.componentChild} />
      <Text style={styles.lile}>lile</Text>
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
    borderRadius: Border.br_6xs,
    backgroundColor: Color.colorGray_100,
    position: "absolute",
  },
  lile: {
    top: 8,
    left: 18,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_200,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    top: 180,
    left: 112,
    width: 61,
    height: 31,
    position: "absolute",
  },
});

export default ContainerCard;
