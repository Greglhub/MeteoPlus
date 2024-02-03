<<<<<<< Updated upstream
import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import NiceCardContainer from "../components/NiceCardContainer";
import Component4Icon from "../components/Component4Icon";
import axios from "axios"; // N'oubliez pas d'importer Axios
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
const Sunny = () => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = 'be3b05420a55fe98234ede476700ebc7';

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather",
          {
            params: {
              q: "Paris", // Vous pouvez remplacer "Nice" par votre emplacement souhaité
              appid: API_KEY,
              units: "metric", // Unité métrique pour la température en Celsius
            },
          }
        );

        setWeatherData(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données météorologiques", error);
      }
    };

    fetchWeatherData();
  }, []); // Le tableau de dépendances est vide, ce qui signifie que cette requête sera effectuée une fois lors du montage du composant.

  return (
    <View style={styles.sunny}>
      <View >
        <Text style={styles.nice}>Paris</Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
      </View>

      <View style={[styles.sunnyChild, styles.sunnyPosition1]} />
      <View style={[styles.sunnyItem, styles.sunnyPosition]} >
        <Text style={styles.searchLocation}>Search Location</Text>
        <Image
          style={styles.iconactionsearch24px}
          contentFit="cover"
          source={require("../assets/iconactionsearch-24px1.png")}
        />
      </View >

=======
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
>>>>>>> Stashed changes
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group3.png")}
      />
<<<<<<< Updated upstream

      <NiceCardContainer quantity={weatherData?.main?.temp} propTop={360} />
      <Text style={[styles.time, styles.fTypo]}>Lever </Text>

      {/* Mise à jour pour afficher l'heure du lever du soleil */}
      
      <Text style={[styles.am, styles.textTypo]}>
        {weatherData?.sys?.sunrise ? formatSunsetTime(weatherData.sys.sunrise) : ""}

      </Text>
      <Text style={[styles.amm, styles.textTypo]}>
        {weatherData?.sys?.sunset ? formatSunsetTime(weatherData.sys.sunset) : ""}
      </Text>
      <Text style={[styles.text1, styles.textTypo]}>
        {weatherData?.main?.humidity}%
      </Text>
      <Text style={[styles.text2, styles.fPosition]}>
       {convertToFahrenheit(weatherData?.main?.temp)}°F
      </Text>
=======
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
>>>>>>> Stashed changes
      <Text style={[styles.uv, styles.fTypo]}>UV</Text>
      <Text style={[styles.rain, styles.fTypo]}>% RAIN</Text>
      <Text style={[styles.f, styles.fTypo]}>F°</Text>
      <Component4Icon dimensionCode={require("../assets/component-41.png")} />
    </View>
  );
};

<<<<<<< Updated upstream

const styles = StyleSheet.create({
  searchBar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  sunnyPosition: {
    width: 360,
    backgroundColor: Color.colorGray_100,
=======
const styles = StyleSheet.create({
  sunnyPosition: {
    width: 360,
    backgroundColor: Color.colorGray_100,
    left: 24,
>>>>>>> Stashed changes
    position: "absolute",
  },
  sunnyPosition1: {
    width: 360,
    backgroundColor: Color.colorGray_100,
    left: 24,
    position: "absolute",
<<<<<<< Updated upstream
    top: 600,
=======
    top:600,
>>>>>>> Stashed changes
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
<<<<<<< Updated upstream
=======
    
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
    top: 400,
    left: 180,
>>>>>>> Stashed changes
    fontSize: FontSize.size_11xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorGray_200,
<<<<<<< Updated upstream
    height: 100,
    textAlign: "center",


=======
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 77,
    height: 100,
    textAlign: "center",
    position: "absolute",

    
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

=======
    
>>>>>>> Stashed changes
  },
  iconactionsearch24px: {
    width: 17,
    height: 17,
<<<<<<< Updated upstream
    position: 'absolute',
    right: '5%',
    top: '30%'
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    top: "10%",
    right: '-8%'
  },
  time: {
    left: 60,

=======
    height: "2.59%",
    width: "5.6%",
    top: "43%",
    right: "31.2%",
    bottom: "58.01%",
    left: "60.2%",
  },
  time: {
    left: 60,
    
>>>>>>> Stashed changes
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  searchLocation: {
<<<<<<< Updated upstream
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorSilver,
    position: 'absolute',
    left: '5%',
    top: '25%'
  },
  am: {
    left: 60,
    color: Color.colorDarkgray,
    top: 491,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  amm: {
    left: 140,
=======
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
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
=======
>>>>>>> Stashed changes
    height: 808,
    overflow: "hidden",
  },
});
<<<<<<< Updated upstream
const formatSunsetTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
};
const convertToCelsius = (temperature) => {
  return temperature;
};

const convertToFahrenheit = (temperature) => {
  return (temperature * 9/5) + 32;
};
export default Sunny;
=======

export default Sunny;
>>>>>>> Stashed changes
