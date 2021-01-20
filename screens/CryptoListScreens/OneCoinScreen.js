import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {HistoryCoinPriceComponent} from '../../components/UI';
import {OneCoinScreenStyles as styles} from '../../components/UI/styles';

function OneCoinScreen(props) {
  const data = props.route.params.props;
  console.log('data', data);
  return (
    <ScrollView style={styles.container}>
      <View style={{paddingHorizontal: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.textBold}>
            Название:{'  '}
            <Text style={styles.textGray}>{data.id}</Text>
          </Text>
          <Image style={{width: 30, height: 30}} source={{uri: data.image}} />
        </View>

        <Text style={styles.textBold}>
          Текущая цена:{'  '}
          <Text style={styles.textGray}>{data.current_price} $</Text>
        </Text>
        <Text style={styles.textBold}>
          Последнее обновление:{'  '}
          <Text style={styles.textGray}>
            {new Date(data.last_updated).toDateString()}
          </Text>
        </Text>
        <Text style={styles.textBold}>Изменение в цене за 24 часа:{'  '}</Text>
        <Text style={styles.textGray}>{data.price_change_24h} $</Text>
        <Text style={styles.textGray}>
          {data.price_change_percentage_24h} %
        </Text>
        <Text style={styles.textBold}>График цен:</Text>
      </View>

      <HistoryCoinPriceComponent id={data.id} />
    </ScrollView>
  );
}

export default OneCoinScreen;
