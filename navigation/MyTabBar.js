import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
function MyTabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        overflow: 'hidden',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={[
              {flex: 1, alignItems: 'center', paddingVertical: 5},
              isFocused && {backgroundColor: '#B3B7B9'},
            ]}>
            {options.tabBarIcon}
            <Text
              style={[
                {
                  color: isFocused ? '#222325' : '#333',
                  fontWeight: isFocused ? 'bold' : 'normal',
                },
                {textAlign: 'center', fontSize: 16},
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
export default MyTabBar;
