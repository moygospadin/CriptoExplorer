import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {styles} from './styles';

function WrapperWithLoader(props) {
  return (
    <View styles={styles.container}>
      {props.isLoading ? (
        <View style={styles.center}>
          <ActivityIndicator size={90} color={'#222325'} />
        </View>
      ) : (
        props.children
      )}
    </View>
  );
}
export default WrapperWithLoader;
