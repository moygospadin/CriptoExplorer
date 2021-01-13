import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TransitionScreenOptions from './TransitionScreenOptions';
import {RealtimeConverterMain} from '../screens';

const Stack = createStackNavigator();

function RealtimeConverterNavigation() {
  return (
    <Stack.Navigator screenOptions={TransitionScreenOptions} headerMode="none">
      <Stack.Screen
        name="RealtimeConverterMain"
        component={RealtimeConverterMain}
      />
    </Stack.Navigator>
  );
}
export default RealtimeConverterNavigation;
