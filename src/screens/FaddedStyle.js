// FaddedStyle.js

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  favoriteCityItem: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: "#ECECEC",
    padding: 10,
    marginBottom: 10,
  },
  favoriteCityText: {
    fontSize: 16,
    marginLeft: 10,
  },
  addBg: {
    backgroundColor: "#ECECEC",
  },
  fTypo: {
    fontWeight: "bold",
  },
  removeCityButton: { left:250,
    color: "red",
    marginLeft: "auto",
  },
});

export default styles;
