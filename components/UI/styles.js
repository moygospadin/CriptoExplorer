import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');
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

export const OneCoinScreenStyles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', paddingTop: 30},
  textBold: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#222325',
    marginBottom: 10,
  },
  textGray: {
    fontSize: 18,

    color: '#4F4F4F',
  },
});

export const TextInputUIStyles = StyleSheet.create({
  textInput: {
    width: width - 40,
    height: 48,
    alignSelf: 'center',

    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    paddingLeft: 20,
  },
});

export const CoinConvertScreenStyles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', padding: 20},
  textBold: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#222325',
    marginBottom: 10,
  },
  textGray: {
    fontSize: 18,

    color: '#4F4F4F',
  },
  valueField: {
    width: width - 40,
    height: 48,
    alignSelf: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    justifyContent: 'center',
    paddingLeft: 30,
  },
  converterContainer: {
    justifyContent: 'space-between',
    height: 150,
    alignItems: 'center',
    marginTop: 30,
  },
});
export const RealtimeConverterMainStyles = StyleSheet.create({
  textInput: {},
});
