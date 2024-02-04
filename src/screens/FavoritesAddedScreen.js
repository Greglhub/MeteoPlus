import React, { useState, useEffect } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
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
  }, []);

  useEffect(() => {
    // Ajouter la ville à la liste des villes ajoutées
    setAddedCities([...addedCities, city]);

    // Enregistrer les villes ajoutées dans AsyncStorage
    AsyncStorage.setItem('addedCities', JSON.stringify([...addedCities, city]));
  }, [city, addedCities]);

  return (
    <View>
      <Text>Ville ajoutée aux favoris :</Text>
      <Text>{city}</Text>
      <Text>Villes ajoutées précédemment :</Text>
      {addedCities.map((addedCity) => (
        <Text key={addedCity}>{addedCity}</Text>
      ))}
    </View>
  );
};

export default FavoritesAddedScreen;
