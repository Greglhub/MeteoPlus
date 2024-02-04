import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NiceCardContainer = ({ quantity, propTop }) => {
  const component1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.component1, component1Style]}>
      <Text style={styles.text}>{quantity}</Text>
      <Image
        style={styles.component1Child}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    top: "150%",
    left: "30%",
    width: '100%',
    fontSize: FontSize.size_41xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorGray_200,
    textAlign: "center",
    position: "absolute",
  },
  component1Child: {
    height: "15/%",
    width: "7.100%",
    top: "170%",
    right: '-50%',
    position: "absolute",
  },
  component1: {
    top: 360,
    left: 129,
    width: 150,
    height: 70,
    position: "absolute",
  },
});

export default NiceCardContainer;
