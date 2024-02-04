import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeScreen';
import FavoritesAddScreen from '../screens/FavoritesAddScreen';
import FavoritesAddedScreen from '../screens/FavoritesAddedScreen';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'FavoritesAdd') {
              iconName = 'plus';
            } else if (route.name === 'FavoritesAdded') {
              iconName = 'star';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        <Tab.Screen name="FavoritesAdd" options={{ headerShown: false }} component={FavoritesAddScreen} />
        <Tab.Screen name="FavoritesAdded" component={FavoritesAddedScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
