import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import NiceCardContainer from "../components/NiceCardContainer";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const AddedToList = () => {
  return (
    <View style={styles.addedToList}>
      <Text style={styles.paris}>Paris</Text>
      <View style={styles.addedToListChild} />
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group1.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <NiceCardContainer quantity="20" propTop={335} />
      <Text style={[styles.time, styles.fTypo]}>TIME</Text>
      <Text style={[styles.am, styles.textTypo]}>11:25 AM</Text>
      <Text style={[styles.text, styles.textTypo]}>4</Text>
      <Text style={[styles.text1, styles.textTypo]}>58%</Text>
      <Text style={[styles.text2, styles.fPosition]}>22</Text>
      <Text style={[styles.uv, styles.fTypo]}>UV</Text>
      <Text style={[styles.rain, styles.fTypo]}>% RAIN</Text>
      <Text style={[styles.f, styles.fPosition]}>F°</Text>
      <View style={styles.addedToListItem} />
      <Image
        style={[styles.iconactiondone24px, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/iconactiondone-24px.png")}
      />
      <Text style={[styles.addedToList1, styles.fTypo]}>Added to list</Text>
      <Image
        style={[styles.iconnavigationarrowBackIos, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/iconnavigationarrow-back-ios-24px.png")}
      />
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
  fTypo: {
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  textTypo: {
    color: Color.colorDarkgray,
    fontSize: FontSize.size_mini,
    top: 466,
    textAlign: "center",
  },
  fPosition: {
    left: 313,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  paris: {
    top: 289,
    left: 149,
    fontSize: FontSize.size_11xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorGray_200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 77,
    height: 30,
    textAlign: "center",
    position: "absolute",
  },
  addedToListChild: {
    top: 440,
    left: 24,
    borderRadius: Border.br_2xs,
    backgroundColor: Color.colorGray_100,
    width: 327,
    height: 59,
    position: "absolute",
  },
  groupIcon: {
    height: "15.15%",
    width: "32.8%",
    top: "33.01%",
    right: "33.6%",
    bottom: "51.84%",
    left: "33.6%",
  },
  vectorIcon: {
    height: "2.59%",
    width: "5.6%",
    top: "36.32%",
    right: "31.2%",
    bottom: "61.09%",
    left: "63.2%",
  },
  time: {
    left: 60,
    color: Color.colorSilver,
    top: 446,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  am: {
    left: 44,
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
    fontSize: FontSize.size_mini,
    top: 466,
    textAlign: "center",
  },
  uv: {
    left: 155,
    color: Color.colorSilver,
    top: 446,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  rain: {
    left: 222,
    color: Color.colorSilver,
    top: 446,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  f: {
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.colorSilver,
    top: 446,
  },
  addedToListItem: {
    top: 65,
    left: 241,
    borderRadius: Border.br_6xs,
    backgroundColor: "#009456",
    width: 110,
    height: 39,
    position: "absolute",
  },
  iconactiondone24px: {
    height: "0.99%",
    width: "2.93%",
    top: "9.98%",
    right: "8.53%",
    bottom: "89.03%",
    left: "88.53%",
  },
  addedToList1: {
    top: 76,
    left: 249,
    color: "#fff",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  iconnavigationarrowBackIos: {
    height: "2.44%",
    width: "3.12%",
    top: "9.23%",
    right: "90.48%",
    bottom: "88.33%",
    left: "6.4%",
  },
  addedToList: {
    backgroundColor: Color.colorTurquoise,
    flex: 1,
    width: "100%",
    height: 808,
    overflow: "hidden",
  },
});

export default AddedToList;
