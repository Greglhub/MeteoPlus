import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { View, Text, TextInput, ActivityIndicator, Button, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./homeStyle";

const HomeScreen = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [temperatureCelsius, setTemperatureCelsius] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);

  const api = {
    key: "94f573feef288410e3e62deac7659349",
    baseUrl: "https://api.openweathermap.org/data/2.5/",
  };

  const fetchDataHandler = useCallback(() => {
    setLoading(true);
    setInput("");
    axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api.key}`,
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);

        // Convertir la température de Kelvin à Celsius
        const tempCelsius = res.data?.main?.temp - 273.15;
        setTemperatureCelsius(tempCelsius);

        // Déterminer l'icône en fonction de la météo
        const weatherId = res.data?.weather[0]?.id;
        setWeatherIcon(getWeatherIcon(weatherId));

        // Sauvegarder les données après avoir obtenu avec succès les données de l'API
        saveData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => setLoading(false));
  }, [api.key, input]);

  // Fonction pour déterminer l'icône en fonction de l'ID de la météo
  const getWeatherIcon = (weatherId) => {
    // Ajoutez ici vos conditions pour déterminer l'icône en fonction de l'ID de la météo
    if (weatherId >= 200 && weatherId < 300) {
      return require('../../assets/pluie.png'); // Exemple d'icône pour les orages
    } else if (weatherId >= 300 && weatherId < 500) {
      return require('../../assets/pluie.png'); // Exemple d'icône pour la bruine
    } else if (weatherId >= 500 && weatherId < 600) {
      return require('../../assets/pluie.png'); // Exemple d'icône pour la pluie
    } else if (weatherId >= 600 && weatherId < 700) {
      return require('../../assets/pluie.png'); // Exemple d'icône pour la neige
    } else if (weatherId >= 700 && weatherId < 800) {
      return require('../../assets/pluie.png'); // Exemple d'icône pour les conditions atmosphériques
    } else if (weatherId === 800) {
      return require('../../assets/pluie.png'); // Exemple d'icône pour le ciel dégagé
    } else if (weatherId > 800 && weatherId < 900) {
      return require('../../assets/soleil.png'); // Exemple d'icône pour les nuages
    } else {
      return require('../../assets/pluie.png'); // Icône par défaut pour les autres cas
    }
  };

  // Charger les données sauvegardées lors du montage initial du composant
  useEffect(() => {
    loadSavedData();
  }, []);

  const saveData = async (data) => {
    try {
      // Convertir l'objet de données en chaîne JSON
      const dataString = JSON.stringify(data);
      // Sauvegarder la chaîne JSON dans AsyncStorage
      await AsyncStorage.setItem("savedData", dataString);
    } catch (e) {
      console.error("Error saving data:", e);
    }
  };

  const loadSavedData = async () => {
    try {
      // Charger la chaîne JSON du stockage local
      const savedDataString = await AsyncStorage.getItem("savedData");
      if (savedDataString) {
        // Convertir la chaîne JSON en objet
        const savedData = JSON.parse(savedDataString);
        setData(savedData);
        // Convertir la température de Kelvin à Celsius
        const tempCelsius = savedData?.main?.temp - 273.15;
        setTemperatureCelsius(tempCelsius);

        // Déterminer l'icône en fonction de la météo
        const weatherId = savedData?.weather[0]?.id;
        setWeatherIcon(getWeatherIcon(weatherId));
      }
    } catch (e) {
      console.error("Error loading saved data:", e);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher une ville..."
          onChangeText={(text) => setInput(text)}
          value={input}
          placeholderTextColor={"#000"}
          onSubmitEditing={fetchDataHandler}
        />
        <Button title="Rechercher" onPress={fetchDataHandler} />
      </View>
      {loading && (
        <View>
          <ActivityIndicator size={"large"} color="#000" />
        </View>
      )}
      {data && (
        <View>
          <Image source={getWeatherIcon(data?.weather[0]?.id)} style={styles.weatherIcon} />
          {weatherIcon && <Image source={weatherIcon} style={styles.weatherIcon} />}
          <Text style={styles.headerText}>
            Ville {`${data?.name}, ${data?.sys?.country}`}
          </Text>
          <Text style={styles.headerText}>{`${Math.round(
            temperatureCelsius
          )} °C`}</Text>
         

          {data && (
            <View style={styles.meteocard}>

             
              <Text style={styles.meteodate}>
                Time{" "}
                {new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Text>
              <Text style={styles.headerText}>
                Température {`${Math.round(temperatureCelsius)} °C`}
              </Text>
              <Text style={styles.humidity}>
                Humidité {data?.main?.humidity}%
              </Text>
              {/* <Text style={styles.minmax}>
                 {`Min ${Math.round(data?.main?.temp_min)} °C / Max ${Math.round(data?.main?.temp_max)} °C`}
               </Text> */}
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
