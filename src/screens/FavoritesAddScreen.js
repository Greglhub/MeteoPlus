import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, AsyncStorage } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import styles from './FaddStyle';

const FavoritesAddScreen = () => {
  const [city, setCity] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const navigation = useNavigation();

  const handleAddToFavorites = async (selectedCity) => {
    try {
      // Vérifier si la ville est déjà dans les favoris
      const isCityInFavorites = favorites.some((fav) => fav === selectedCity);
      if (!isCityInFavorites) {
        // Ajouter la ville aux favoris
        setFavorites([...favorites, selectedCity]);

        // Enregistrer les favoris dans AsyncStorage
        await AsyncStorage.setItem('favorites', JSON.stringify([...favorites, selectedCity]));

        // Naviguer vers l'écran "FavoritesAdded"
        navigation.navigate('FavoritesAdded', { city: selectedCity });
      }
    } catch (error) {
      console.error('Error adding city to favorites:', error);
    }
  };

  const handleRemoveFromFavorites = async (selectedCity) => {
    try {
      // Supprimer la ville des favoris
      const updatedFavorites = favorites.filter((fav) => fav !== selectedCity);
      setFavorites(updatedFavorites);

      // Enregistrer les favoris mis à jour dans AsyncStorage
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } catch (error) {
      console.error('Error removing city from favorites:', error);
    }
  };

  const fetchCities = async () => {
    try {
      const response = await axios.get(
        `https://api-adresse.data.gouv.fr/search/?q=${city}&limit=5&type=municipality`
      );
      setSearchResults(response.data.features);
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };

  useEffect(() => {
    // Charger les favoris depuis AsyncStorage lors du montage initial du composant
    const loadFavorites = async () => {
      try {
        const savedFavorites = await AsyncStorage.getItem('favorites');
        if (savedFavorites) {
          setFavorites(JSON.parse(savedFavorites));
        }
      } catch (error) {
        console.error('Error loading favorites:', error);
      }
    };

    loadFavorites();
  }, []);

  useEffect(() => {
    if (city.length >= 3) {
      fetchCities();
    } else {
      setSearchResults([]);
    }
  }, [city]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.favoris}
        placeholder="Nom de la ville"
        value={city}
        onChangeText={(text) => setCity(text)}
      />
      <Button title="Ajouter aux favoris" onPress={() => handleAddToFavorites(city)} />
      {searchResults.length > 0 && (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.properties.id}
          renderItem={({ item }) => (
            <View>
              <Text onPress={() => handleAddToFavorites(item.properties.city)}>
                {item.properties.city}
              </Text>
              <Button
                title="Supprimer des favoris"
                onPress={() => handleRemoveFromFavorites(item.properties.city)}
              />
            </View>
          )}
        />
      )}
      <Text>Favoris :</Text>
      {favorites.map((fav) => (
        <View key={fav}>
          <Text>{fav}</Text>
          <Button title="Supprimer des favoris" onPress={() => handleRemoveFromFavorites(fav)} />
        </View>
      ))}
    </View>
  );
};

export default FavoritesAddScreen;
