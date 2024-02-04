import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, FlatList, TouchableWithoutFeedback } from 'react-native';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from './FaddStyle';

const api = {
  key: "94f573feef288410e3e62deac7659349",
  baseUrl: "https://api.openweathermap.org/data/2.5/",
};

const FavoritesAddScreen = () => {
  const [city, setCity] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);

  const saveAutocompleteResults = async (results) => {
    try {
      await AsyncStorage.setItem('autocompleteResults', JSON.stringify(results));
    } catch (error) {
      console.error('Error saving autocomplete results:', error);
    }
  };

  const clearAutocompleteResults = async () => {
    try {
      await AsyncStorage.removeItem('autocompleteResults');
    } catch (error) {
      console.error('Error clearing autocomplete results:', error);
    }
  };

  const loadAutocompleteResults = async () => {
    try {
      const savedResultsString = await AsyncStorage.getItem('autocompleteResults');
      return savedResultsString ? JSON.parse(savedResultsString) : [];
    } catch (error) {
      console.error('Error loading autocomplete results:', error);
      return [];
    }
  };

  const saveFavorites = async (favoritesToSave) => {
    try {
      await AsyncStorage.setItem('favorites', JSON.stringify(favoritesToSave));
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  };

  const loadFavorites = async () => {
    try {
      const savedFavoritesString = await AsyncStorage.getItem('favorites');
      if (savedFavoritesString) {
        setFavorites(JSON.parse(savedFavoritesString));
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  };

  const handleAddToFavorites = async (selectedCity) => {
    try {
      // Vérifier si la ville sélectionnée n'est pas vide
      if (selectedCity.trim() === "") {
        console.warn("Nom de la ville vide. La ville n'a pas été ajoutée aux favoris.");
        return;
      }
  
      // Vérifier si la ville sélectionnée est présente dans les résultats de l'autocomplétion
      const isCityInAutocompleteResults = searchResults.some((result) => result.properties.city === selectedCity);
      if (!isCityInAutocompleteResults) {
        console.warn("La ville sélectionnée n'est pas dans les résultats de l'autocomplétion. La ville n'a pas été ajoutée aux favoris.");
        return;
      }
  
      const isCityInFavorites = favorites.some((fav) => fav === selectedCity);
      if (!isCityInFavorites) {
        const updatedFavorites = [...favorites, selectedCity];
        setFavorites(updatedFavorites);
        await saveFavorites(updatedFavorites);
        // Effacer les résultats de l'autocomplétion après l'ajout aux favoris
        clearAutocompleteResults();
      }
    } catch (error) {
      console.error('Error adding city to favorites:', error);
    }
  };
  
  

  const handleRemoveFromFavorites = async (selectedCity) => {
    try {
      const updatedFavorites = favorites.filter((fav) => fav !== selectedCity);
      setFavorites(updatedFavorites);
      await saveFavorites(updatedFavorites);
    } catch (error) {
      console.error('Error removing city from favorites:', error);
    }
  };

  const fetchCities = async () => {
    try {
      const response = await axios.get(
        `https://api-adresse.data.gouv.fr/search/?q=${city}&limit=5&type=municipality`
      );
      const results = response.data.features;
      setSearchResults(results);
      await saveAutocompleteResults(results);
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };

  const handleAutocompletePress = async (selectedCity) => {
    await handleAddToFavorites(selectedCity);
    setCity(''); 
    setSearchResults([]); 

    try {
      const weatherResponse = await axios.get(
        `${api.baseUrl}weather?q=${selectedCity}&units=metric&appid=${api.key}`
      );
      setCurrentWeather(weatherResponse.data);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  useEffect(() => {
    loadFavorites();
    const loadAutocomplete = async () => {
      const results = await loadAutocompleteResults();
      setSearchResults(results);
    };

    loadAutocomplete();
  }, []);

  useEffect(() => {
    if (city.length >= 3) {
      fetchCities();
    } else {
      setSearchResults([]);
    }
  }, [city]);

  return (
    <TouchableWithoutFeedback onPress={() => setSearchResults([])}>
      <View style={styles.container}>
        <TextInput
          style={styles.favoris}
          placeholder="Nom de la ville"
          value={city}
          onChangeText={(text) => setCity(text)}
        />
        <Button title="Ajouter aux favoris" onPress={() => handleAddToFavorites(city)} />

        <View style={styles.favoriscard}>
          {searchResults.length > 0 && (
            <FlatList
              data={searchResults}
              keyExtractor={(item) => item.properties.id}
              renderItem={({ item }) => (
                <TouchableWithoutFeedback onPress={() => handleAutocompletePress(item.properties.city)}>
                  <View key={item.properties.id} style={styles.favoriscardItem}>
                    <Text>{item.properties.city}</Text>
                  </View>
                </TouchableWithoutFeedback>
              )}
            />
          )}

          {currentWeather && (
            <View style={styles.favoriscardItem}>
              <Text>{currentWeather.name}</Text>
              <Text>Temperature: {currentWeather.main.temp} °C</Text>
              <Text>Humidity: {currentWeather.main.humidity}%</Text>
              <Button
                title="Supprimer des favoris"
                onPress={() => handleRemoveFromFavorites(currentWeather.name)}
                color={styles.favorisButton.color}
              />
            </View>
          )}

          {favorites.map((fav) => (
            <View key={fav} style={styles.favoriscardItem}>
              <Text style={styles.favorisText}>{fav}</Text>
              <Button
                title="Supprimer des favoris"
                onPress={() => handleRemoveFromFavorites(fav)}
                color={styles.favorisButton.color}
              />
            </View>
          ))}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FavoritesAddScreen;
