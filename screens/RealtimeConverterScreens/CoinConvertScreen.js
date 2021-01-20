import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {CoinConvertTemplate, WrapperWithLoader} from '../../components';
import _ from 'lodash';
import {fetchOneCoinInfFromApi} from '../../utils/fetchOneCoinInfFromApi';

function CoinConvertScreen({route}) {
  console.log('route', route.params.props.id);

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const start = async () => {
    setIsLoading(true);
    const data = await fetchOneCoinInfFromApi(route.params.props.id);
    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    start();
  }, []);
  console.log('data', data);
  return (
    <WrapperWithLoader isLoading={isLoading && _.isEmpty(data)}>
      {!_.isEmpty(data) && <CoinConvertTemplate data={data} />}
    </WrapperWithLoader>
  );
}

export default CoinConvertScreen;
