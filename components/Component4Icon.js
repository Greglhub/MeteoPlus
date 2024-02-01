import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

const Component4Icon = ({ dimensionCode }) => {
  return (
    <Image
      style={styles.component4Icon}
      contentFit="cover"
      source={dimensionCode}
    />
  );
};

const styles = StyleSheet.create({
  component4Icon: {
    position: "absolute",
    top: 150,
    left: 165,
    width: 80,
    height: 22,
  },
});

export default Component4Icon;
