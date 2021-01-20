import React, {useState, useEffect} from 'react';
import {WrapperWithLoader} from '../Wrappers';
import {} from 'react-native';
import _ from 'lodash';
import {fetchCryptoHistoryCost} from '../../utils/fetchCryptoHistoryCost';
function HistoryCoinPriceComponent({id}) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const start = async () => {
    setIsLoading(true);
    const data = await fetchCryptoHistoryCost(id);
    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    start();
  }, []);
  console.log('data', data);
  return (
    <WrapperWithLoader isLoading={isLoading && _.isEmpty(data)}>
      {/* {!_.isEmpty(data) && <CoinConvertTemplate data={data} />} */}
    </WrapperWithLoader>
  );
}

export default HistoryCoinPriceComponent;
