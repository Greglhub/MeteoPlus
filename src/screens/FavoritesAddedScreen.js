// FavoritesAddedScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import styles from './FaddedStyle';

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
      loadFavoriteCities();
    });

    return unsubscribe;
  }, [navigation]);

  const removeCityFromFavorites = async (selectedCity) => {
    try {
      const updatedFavorites = favoriteCities.filter((fav) => fav !== selectedCity);
      setFavoriteCities(updatedFavorites);
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } catch (error) {
      console.error('Error removing city from favorites:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={[styles.favoriteCityItem, styles.addBg]}>
      <Text style={[styles.favoriteCityText, styles.fTypo]}>{item}</Text>
      <TouchableOpacity onPress={() => removeCityFromFavorites(item)}>
        <Text style={styles.removeCityButton}>Supprimer</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Favorites</Text>
      <FlatList
        data={favoriteCities}
        keyExtractor={(item) => item}
        renderItem={renderItem}
      />
    </View>
  );
};

export default FavoritesAddedScreen;
