import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TransitionScreenOptions from './TransitionScreenOptions';
import {RealtimeConverterMain, CoinConvertScreen} from '../screens';

const Stack = createStackNavigator();

function RealtimeConverterNavigation() {
  return (
    <Stack.Navigator screenOptions={TransitionScreenOptions} headerMode="none">
      <Stack.Screen
        name="RealtimeConverterMain"
        component={RealtimeConverterMain}
      />
      <Stack.Screen name="CoinConvertScreen" component={CoinConvertScreen} />
    </Stack.Navigator>
  );
}
export default RealtimeConverterNavigation;
