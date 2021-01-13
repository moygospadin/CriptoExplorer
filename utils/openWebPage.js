import {Linking, Alert} from 'react-native';
export const openWebPage = (URL) => {
  Linking.canOpenURL(URL)
    .then((supported) => {
      if (!supported) {
        Alert.alert('Не получается открыть браузер');
      } else {
        return Linking.openURL(URL);
      }
    })
    .catch((err) => console.log(err));
};
