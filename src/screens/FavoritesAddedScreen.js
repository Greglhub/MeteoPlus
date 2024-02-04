import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, AsyncStorage } from 'react-native';

const FavoritesAddedScreen = ({ favorites }) => {
  const [addedCities, setAddedCities] = useState([]);

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

  // Mettre à jour les favoris dans AsyncStorage lorsque la prop favorites change
  useEffect(() => {
    const saveAddedCities = async () => {
      try {
        await AsyncStorage.setItem('addedCities', JSON.stringify(favorites));
        setAddedCities(favorites);
      } catch (error) {
        console.error('Error saving added cities:', error);
      }
    };

    saveAddedCities();
  }, [favorites]);

  return (
    <View>
      <Text>Villes ajoutées :</Text>
      {addedCities.length > 0 && (
        <FlatList
          data={addedCities}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View>
              <Text>{item}</Text>
              {/* Ajoutez ici tout autre rendu ou action nécessaire pour chaque ville ajoutée */}
            </View>
          )}
        />
      )}
    </View>
  );
};

export default FavoritesAddedScreen;
