import React, {useEffect, useState, useMemo} from 'react';

import {
  WrapperWithLoader,
  CryptoFlatlist,
  OneCoinLessInfComponent,
  TextInputUI,
} from '../../components';
import _ from 'lodash';
import {fetchAllCryptoCoins} from '../../store/allCryptoCoins/actions';
import {connect} from 'react-redux';

function RealtimeConverterMain({fetchAllCryptoCoins, isLoading, data}) {
  const start = () => {
    fetchAllCryptoCoins();
  };
  const [textInputValue, setTextInputValue] = useState('');
  useEffect(() => {
    start();
  }, []);
  const filterData = useMemo(() => {
    return data.filter((el) => el.name.includes(textInputValue));
  }, [textInputValue]);
  return (
    <WrapperWithLoader isLoading={isLoading && _.isEmpty(data)}>
      <TextInputUI
        style={{marginTop: 30}}
        keyboardType="default"
        placeholder={'Поиск'}
        textInputValue={textInputValue}
        setTextInputValue={setTextInputValue}
      />

      <CryptoFlatlist
        data={filterData}
        onEndReachedFunc={() => {}}
        renderComponent={OneCoinLessInfComponent}
        start={start}
        isLoading={isLoading}
      />
    </WrapperWithLoader>
  );
}
const mapStateToProps = (state) => ({
  isLoading: state.allCryptoCoinsReducer.isLoading,
  data: state.allCryptoCoinsReducer.allCryptoCoins,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllCryptoCoins: () => dispatch(fetchAllCryptoCoins()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RealtimeConverterMain);
