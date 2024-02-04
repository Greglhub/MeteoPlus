import React, { useState, useEffect } from 'react';
import { View, Text, AsyncStorage, ScrollView } from 'react-native';  // Added ScrollView for scrolling if needed
import { useRoute } from '@react-navigation/native';

const FavoritesAddedScreen = () => {
  const [addedCities, setAddedCities] = useState([]);
  const route = useRoute();
  const { city } = route.params;

  useEffect(() => {
    // Charger les villes ajoutées depuis AsyncStorage lors du montage initial du composant
    const loadAddedCities = async () => {
      try {
        const savedAddedCities = await AsyncStorage.getItem('addedCities');
        if (savedAddedCities) {
          setAddedCities(JSON.parse(savedAddedCities));
        }
      } catch (error) {
        console.error('Error loading added cities:', error);
      }
    };

    loadAddedCities();
  }, []);  // Removed dependency array to only run on mount

  useEffect(() => {
    // Ajouter la ville à la liste des villes ajoutées
    setAddedCities((prevCities) => [...prevCities, city]);

    // Enregistrer les villes ajoutées dans AsyncStorage
    AsyncStorage.setItem('addedCities', JSON.stringify([...addedCities, city]));
  }, [city]);  // Added city to the dependency array

  return (
    <ScrollView>
      <View>
        <Text>Ville ajoutée aux favoris :</Text>
        <Text>{city}</Text>
        <Text>Villes ajoutées précédemment :</Text>
        {addedCities.map((addedCity) => (
          <Text key={addedCity}>{addedCity}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default FavoritesAddedScreen;
