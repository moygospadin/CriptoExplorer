import React, {useState, useEffect} from 'react';
import {WrapperWithLoader} from '../Wrappers';
import {Dimensions, ScrollView, View} from 'react-native';
import _ from 'lodash';
import {fetchCryptoHistoryCost} from '../../utils/fetchCryptoHistoryCost';
import {LineChart} from 'react-native-chart-kit';
import {calcChartValues} from '../../utils/calcChartValues';
function HistoryCoinPriceComponent({id}) {
  const [isLoading, setIsLoading] = useState(true);
  const [chartValues, setChartValues] = useState({
    labels: [],
    datasetsData: [],
  });

  const start = async () => {
    setIsLoading(true);
    const data = await fetchCryptoHistoryCost(id);
    const chartCalcValues = calcChartValues(data.prices);

    setChartValues(chartCalcValues);
    setIsLoading(false);
  };

  useEffect(() => {
    start();
  }, []);

  return (
    <WrapperWithLoader isLoading={isLoading}>
      {!isLoading && !_.isEmpty(chartValues) && (
        <ScrollView horizontal={true} maximumZoomScale={3} minimumZoomScale={3}>
          <View style={{width: 10}} />
          <LineChart
            data={{
              labels: chartValues.labels,
              datasets: [
                {
                  data: chartValues.datasetsData,
                },
              ],
            }}
            width={Dimensions.get('window').width * 2}
            height={260}
            yAxisSuffix="$"
            yLabelsOffset={2}
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              strokeWidth: 2,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 8,
              },
              propsForDots: {
                r: '2',
                strokeWidth: '1',
                stroke: '#ffa726',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 8,
            }}
          />
          <View style={{width: 10}} />
        </ScrollView>
      )}
    </WrapperWithLoader>
  );
}

export default HistoryCoinPriceComponent;
