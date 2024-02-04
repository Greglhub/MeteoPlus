// FavoritesListScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import styles from './FaddedStyle'; // Assurez-vous d'importer les styles appropriés

const FavoritesAddedScreen = () => {
  const [favoriteCities, setFavoriteCities] = useState([]);
  const navigation = useNavigation();

  const loadFavoriteCities = async () => {
    try {
      const savedFavoriteCitiesString = await AsyncStorage.getItem('favorites');
      if (savedFavoriteCitiesString) {
        const savedFavoriteCities = JSON.parse(savedFavoriteCitiesString);
        setFavoriteCities(savedFavoriteCities);
      }
    } catch (error) {
      console.error('Error loading favorite cities:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Chargement des villes favorites à chaque fois que la page reçoit le focus
      loadFavoriteCities();
    });

    // Nettoyage de l'écouteur lorsque le composant est démonté
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Favorites</Text>
      <FlatList
        data={favoriteCities}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.favoriteCityItem}>
            <Text style={styles.favoriteCityText}>{item}</Text>
            {/* Ajoutez ici d'autres éléments que vous souhaitez afficher pour chaque ville favorite */}
          </View>
        )}
      />
    </View>
  );
};

export default FavoritesAddedScreen;
