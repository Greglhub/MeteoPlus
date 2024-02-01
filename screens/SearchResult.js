import * as React from "react";
import { StyleSheet, View } from "react-native";
import RectangleComponent from "../components/RectangleComponent";
import ParisCard1 from "../components/ParisCard1";
import CardContainer from "../components/CardContainer";
import ContainerCard from "../components/ContainerCard";
import { Color } from "../GlobalStyles";

const SearchResult = () => {
  return (
    <View style={styles.searchResult}>
      <RectangleComponent />
      <ParisCard1 />
      <CardContainer />
      <ContainerCard />
    </View>
  );
};

const styles = StyleSheet.create({
  searchResult: {
    backgroundColor: Color.colorTurquoise,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});

export default SearchResult;
