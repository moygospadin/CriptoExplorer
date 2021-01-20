import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {connect} from 'react-redux';
import {AboutAppMainStyles as styles} from './styles';
import {openWebPage} from '../../utils/openWebPage';
import Clipboard from '@react-native-community/clipboard';
function AboutAppMain() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.textBold}>О приложении:</Text>
        <Text style={[styles.textGray, {marginBottom: 10}]}>
          Explorer криптовалют с графиком цен, с возможностью конвертировать
          криптовалюту.
        </Text>
        <Text style={styles.textBold}>Ипользованные технологии:</Text>
        <Text style={[styles.textGray, {marginBottom: 10}]}>
          Redux, Saga, React-navigation, Lodash
        </Text>
        <Text style={styles.textBold}>Использованное API:</Text>
        <Text style={[styles.textGray, {marginBottom: 10}]}>
          CoinGecko API V3
        </Text>
        <Text style={styles.textBold}>Ссылки на соцсети разработчика:</Text>
        <TouchableOpacity
          style={{marginBottom: 10}}
          onPress={() => openWebPage('https://t.me/moygospadin')}>
          <Text style={[styles.textGray, {textDecorationLine: 'underline'}]}>
            Телеграм
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginBottom: 10}}
          onPress={() => openWebPage('https://github.com/moygospadin')}>
          <Text style={[styles.textGray, {textDecorationLine: 'underline'}]}>
            GitHub
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginBottom: 10}}
          onPress={() => {
            Clipboard.setString('lesha.belenko1337@gmail.com');
            Alert.alert('Скопировано!');
          }}>
          <Text style={[styles.textGray, {textDecorationLine: 'underline'}]}>
            lesha.belenko1337@gmail.com
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(AboutAppMain);
