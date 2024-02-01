import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import NiceCardContainer from "../components/NiceCardContainer";
import Component4Icon from "../components/Component4Icon";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Sunny = () => {
  return (
    <View style={styles.sunny}>
      <Text style={styles.nice}>Nice</Text>
      <View style={[styles.sunnyChild, styles.sunnyPosition1]} />
      <View style={[styles.sunnyItem, styles.sunnyPosition]} />
      <Image
        style={styles.iconactionsearch24px}
        contentFit="cover"
        source={require("../assets/iconactionsearch-24px1.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group3.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector9.png")}
      />
      <NiceCardContainer quantity="25" propTop={360} />
      <Text style={[styles.time, styles.fTypo]}>TIME</Text>
      <Text style={styles.searchLocation}>Search Location</Text>
      <Text style={[styles.am, styles.textTypo]}>11:25 AM</Text>
      <Text style={[styles.text, styles.textTypo]}>4</Text>
      <Text style={[styles.text1, styles.textTypo]}>58%</Text>
      <Text style={[styles.text2, styles.fPosition]}>22</Text>
      <Text style={[styles.uv, styles.fTypo]}>UV</Text>
      <Text style={[styles.rain, styles.fTypo]}>% RAIN</Text>
      <Text style={[styles.f, styles.fTypo]}>F°</Text>
      <Component4Icon dimensionCode={require("../assets/component-41.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  sunnyPosition: {
    width: 360,
    backgroundColor: Color.colorGray_100,
    left: 24,
    position: "absolute",
  },
  sunnyPosition1: {
    width: 360,
    backgroundColor: Color.colorGray_100,
    left: 24,
    position: "absolute",
    top:600,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    
  },
  fTypo: {
    textAlign: "left",
    color: Color.colorSilver,
    fontSize: FontSize.size_xs,
    top: 605,
  },
  textTypo: {
    color: Color.colorDarkgray,
    top: 491,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    top: 625,
  },
  ttextTypo: {
    color: Color.colorDarkgray,
    top: 491,
    fontSize: FontSize.size_mini,
    textAlign: "60",
  },
  fPosition: {
    left: 313,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
    top: 625,
  },
  nice: {
    top: 400,
    left: 180,
    fontSize: FontSize.size_11xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorGray_200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 77,
    height: 100,
    textAlign: "center",
    position: "absolute",

    
  },
  sunnyChild: {
    top: 465,
    borderRadius: Border.br_2xs,
    height: 59,
    width: 150
  },
  sunnyItem: {
    top: 80,
    borderRadius: Border.br_mini,
    height: 46,
    
  },
  iconactionsearch24px: {
    width: 17,
    height: 17,
  },
  groupIcon: {
    height: "15.15%",
    width: "32.8%",
    top: "25%",
    right: "33.6%",
    bottom: "48.76%",
    left: "33.6%",
  },
  vectorIcon: {
    height: "2.59%",
    width: "5.6%",
    top: "43%",
    right: "31.2%",
    bottom: "58.01%",
    left: "60.2%",
  },
  time: {
    left: 60,
    
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  searchLocation: {
    top: 92,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_mini,
    left: 44,
    textAlign: "left",
    color: Color.colorSilver,
    position: "absolute",
  },
  am: {
    left: 44,
    color: Color.colorDarkgray,
    top: 491,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  text: {
    left: 158,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  text1: {
    left: 227,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  text2: {
    color: Color.colorDarkgray,
    top: 491,
    fontSize: FontSize.size_mini,
    textAlign: "center",
  },
  uv: {
    left: 155,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  rain: {
    left: 222,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  f: {
    left: 320,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  sunny: {
    backgroundColor: Color.colorTurquoise,
    flex: 1,
    width: "100%",
    height: 808,
    overflow: "hidden",
  },
});

export default Sunny;
