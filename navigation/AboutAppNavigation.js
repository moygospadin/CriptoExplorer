import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TransitionScreenOptions from './TransitionScreenOptions';
import {AboutAppMain} from '../screens';

const Stack = createStackNavigator();

function AboutAppNavigation() {
  return (
    <Stack.Navigator screenOptions={TransitionScreenOptions} headerMode="none">
      <Stack.Screen name="AboutAppMain" component={AboutAppMain} />
    </Stack.Navigator>
  );
}
export default AboutAppNavigation;
