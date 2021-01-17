import {StyleSheet} from 'react-native';

export const OneCoinComponentStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: 60,
    backgroundColor: '#f9f9f9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 9,
    marginVertical: 10,
    marginHorizontal: 20,
  },
});

export const CryptoOrderCategoryStyles = StyleSheet.create({
  btnContainer: {
    padding: 10,
    flexDirection: 'row',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  btnContainerActive: {borderWidth: 5, borderColor: 'red', padding: 6},
  textActive: {fontWeight: 'bold'},

  container: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
