import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import FavoritesAddScreen from '../screens/FavoritesAddScreen';
import FavoritesAddedScreen from '../screens/FavoritesAddedScreen';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="FavoritesAdd" options={{ headerShown: false }} component={FavoritesAddScreen} />
        <Tab.Screen name="FavoritesAdded" component={FavoritesAddedScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
