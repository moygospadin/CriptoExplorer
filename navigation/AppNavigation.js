import React, {useEffect} from 'react';

import {Image, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {enableScreens} from 'react-native-screens';

enableScreens();
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AboutAppNavigation from './AboutAppNavigation';
import CryptoListNavigation from './CryptoListNavigation';
import RealtimeConverterNavigation from './RealtimeConverterNavigation';
import MyTabBar from './MyTabBar';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen
        name="CryptoList"
        component={CryptoListNavigation}
        options={{
          title: <Text>Криптовалюта</Text>,
          tabBarIcon: (
            <Image
              source={require('../img/bottomTabBar/dollars.png')}
              style={{width: 24, height: 24}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="RealtimeConverter"
        component={RealtimeConverterNavigation}
        options={{
          title: <Text>Конвертация</Text>,
          tabBarIcon: (
            <Image
              source={require('../img/bottomTabBar/convert.png')}
              style={{width: 24, height: 24}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AboutApp"
        component={AboutAppNavigation}
        options={{
          title: <Text>О приложении</Text>,
          tabBarIcon: (
            <Image
              source={require('../img/bottomTabBar/question.png')}
              style={{width: 24, height: 24}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function AppNavigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default AppNavigation;
