import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import NiceCardContainer from "../components/NiceCardContainer";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const AddToList = () => {
  return (
    <View style={styles.addToList}>
      <Text style={styles.paris}>Paris</Text>
      <View style={[styles.addToListChild, styles.addBg]} />
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group2.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
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
      <View style={[styles.addToListItem, styles.addBg]} />
      <Text style={[styles.addToList1, styles.fTypo]}>Add to list</Text>
      <Image
        style={styles.iconcontentaddCircleOutlin}
        contentFit="cover"
        source={require("../assets/iconcontentadd-circle-outline-24px.png")}
      />
      <Image
        style={[styles.iconnavigationarrowBackIos, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/iconnavigationarrow-back-ios-24px1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addBg: {
    backgroundColor: Color.colorGray_100,
    position: "absolute",
  },
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 77,
    height: 30,
    textAlign: "center",
    color: Color.colorGray_200,
    position: "absolute",
  },
  addToListChild: {
    top: 440,
    left: 24,
    borderRadius: Border.br_2xs,
    width: 327,
    height: 59,
  },
  groupIcon: {
    height: "15.15%",
    width: "32.8%",
    top: "33%",
    right: "33.6%",
    bottom: "51.85%",
    left: "33.6%",
  },
  vectorIcon: {
    height: "2.59%",
    width: "5.6%",
    top: "36.33%",
    right: "31.2%",
    bottom: "61.08%",
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
  addToListItem: {
    top: 65,
    left: 241,
    borderRadius: Border.br_6xs,
    width: 110,
    height: 39,
  },
  addToList1: {
    top: 77,
    left: 255,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.colorGray_200,
  },
  iconcontentaddCircleOutlin: {
    width: 14,
    height: 14,
  },
  iconnavigationarrowBackIos: {
    height: "2.44%",
    width: "3.12%",
    top: "9.24%",
    right: "90.48%",
    bottom: "88.33%",
    left: "6.4%",
  },
  addToList: {
    backgroundColor: Color.colorTurquoise,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default AddToList;
