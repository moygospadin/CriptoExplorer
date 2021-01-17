import React from 'react';
import {View, ActivityIndicator} from 'react-native';
function LoadingFooter({isLoading}) {
  if (isLoading) {
    return (
      <View>
        <ActivityIndicator color="#222325" />
      </View>
    );
  }
  return <></>;
}
export default LoadingFooter;
