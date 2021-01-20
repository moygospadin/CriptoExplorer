import React, {useMemo, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {TextInputUI} from '.';
import {CoinConvertScreenStyles as styles} from './styles';

function CoinConvertTemplate({data}) {
  const [convertValue, setConvertValue] = useState('');
  const [currPos, setCurrPos] = useState(true);
  const coinValue = useMemo(() => {
    if (currPos) {
      return convertValue / data.market_data.current_price.usd;
    } else return convertValue * data.market_data.current_price.usd;
  }, [convertValue, currPos]);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          source={{uri: data.image.large}}
          style={{width: 50, height: 50}}
        />
        <Text style={styles.textBold}>{data.name}</Text>
      </View>
      <Text style={[styles.textGray, {marginTop: 10}]}>
        Tекущая цена{' '}
        <Text style={styles.textBold}>
          {data.market_data.current_price.usd} $
        </Text>
      </Text>
      <View style={styles.converterContainer}>
        <View>
          <Text>
            {currPos
              ? 'Из долларов в криптовалюту'
              : 'Из криптовалюты в доллары'}
          </Text>
          <TextInputUI
            keyboardType="numeric"
            placeholder={'Значение'}
            textInputValue={convertValue}
            setTextInputValue={setConvertValue}
          />
        </View>
        <TouchableOpacity
          style={{backgroundColor: '#fff'}}
          onPress={() => setCurrPos((prev) => !prev)}>
          <Image
            style={{width: 24, height: 24}}
            source={require('../../img/reverse.png')}
          />
        </TouchableOpacity>
        <View style={styles.valueField}>
          <Text>{coinValue}</Text>
        </View>
      </View>
    </View>
  );
}

export default CoinConvertTemplate;
