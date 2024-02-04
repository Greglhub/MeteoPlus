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
  const [temperatureFahrenheit, setTemperatureFahrenheit] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true); // Ajout de l'état pour suivre l'unité

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

        // Convertir la température de Celsius à Fahrenheit
        const tempFahrenheit = tempCelsius * (9 / 5) + 32;
        setTemperatureFahrenheit(tempFahrenheit);

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
      return require('../../assets/pluie.png'); // Exemple d'icône pour les nuages
    } else {
      return require('../../assets/pluie.png'); // Icône par défaut pour les autres cas
    }
  };
  useEffect(() => {
    loadSavedData();
  }, []);

  const saveData = async (data) => {
    try {
      const dataString = JSON.stringify(data);
      await AsyncStorage.setItem("savedData", dataString);
    } catch (e) {
      console.error("Error saving data:", e);
    }
  };

  const loadSavedData = async () => {
    try {
      const savedDataString = await AsyncStorage.getItem("savedData");
      if (savedDataString) {
        const savedData = JSON.parse(savedDataString);
        setData(savedData);

        // Convertir la température de Kelvin à Celsius
        const tempCelsius = savedData?.main?.temp - 273.15;
        setTemperatureCelsius(tempCelsius);

        // Convertir la température de Celsius à Fahrenheit
        const tempFahrenheit = tempCelsius * (9 / 5) + 32;
        setTemperatureFahrenheit(tempFahrenheit);

        // Déterminer l'icône en fonction de la météo
        const weatherId = savedData?.weather[0]?.id;
        setWeatherIcon(getWeatherIcon(weatherId));
      }
    } catch (e) {
      console.error("Error loading saved data:", e);
    }
  };

  const toggleTemperatureUnit = () => {
    setIsCelsius((prevIsCelsius) => !prevIsCelsius);
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
        <Button title="Rechercher" onPress={fetchDataHandler}
        style={styles.btn}
        />
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
          {isCelsius ? (
            <Text style={styles.temperature}>{`${Math.round(temperatureCelsius)} °C`}</Text>
          ) : (
            <Text style={styles.temperature}>{`${Math.round(temperatureFahrenheit)} °F`}</Text>
          )}

          {data && (
            <View style={styles.meteocard}>
              <Text style={styles.meteodate}>
                Time{" "}
                {new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Text>
              {isCelsius ? (
                <Text style={styles.temperature}>{`Température ${Math.round(
                  temperatureCelsius
                )} °C`}</Text>
              ) : (
                <Text style={styles.temperature}>{`Température ${Math.round(
                  temperatureFahrenheit
                )} °F`}</Text>
              )}
              <Text style={styles.humidity}>
                Humidité {data?.main?.humidity}%
              </Text>
            </View>
          )}
        </View>
      )}
    
        <View >
          <Button style={styles.btn} title={`Basculer en dégres ${isCelsius ? "Fahrenheit" : "Celsius"}`}
       onPress={toggleTemperatureUnit} ></Button>
        </View>
      
    
    </View>
  );
};

export default HomeScreen;
