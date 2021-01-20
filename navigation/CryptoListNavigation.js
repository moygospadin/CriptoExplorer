import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TransitionScreenOptions from './TransitionScreenOptions';
import {CryptoListMain, OneCoinScreen} from '../screens';

const Stack = createStackNavigator();

function CryptoListNavigation() {
  return (
    <Stack.Navigator screenOptions={TransitionScreenOptions} headerMode="none">
      <Stack.Screen name="CryptoListMain" component={CryptoListMain} />
      <Stack.Screen name="OneCoinScreen" component={OneCoinScreen} />
    </Stack.Navigator>
  );
}
export default CryptoListNavigation;
