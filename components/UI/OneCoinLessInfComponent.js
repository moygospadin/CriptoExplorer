import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {OneCoinComponentStyles as styles} from './styles';

function OneCoinLessInfComponent(props, navigation) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('CoinConvertScreen', {props})}>
      <Text style={{maxWidth: '40%'}}>{props.name}</Text>
      <Text>{props.symbol} </Text>
    </TouchableOpacity>
  );
}

export default OneCoinLessInfComponent;
