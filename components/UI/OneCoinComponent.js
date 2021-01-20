import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {OneCoinComponentStyles as styles} from './styles';

function OneCoinComponent(props, navigation) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('OneCoinScreen', {props})}>
      <Image style={{width: 24, height: 24}} source={{uri: props.image}} />
      <Text style={{maxWidth: '40%'}}>{props.name}</Text>
      <Text>{props.current_price} $</Text>
      <Text>{props.price_change_24h ? props.price_change_24h : 'No inf'}</Text>
    </TouchableOpacity>
  );
}

export default OneCoinComponent;
