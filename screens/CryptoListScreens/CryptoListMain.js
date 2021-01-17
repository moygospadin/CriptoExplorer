import React, {useEffect} from 'react';

import {connect} from 'react-redux';
import {
  WrapperWithLoader,
  CryptoFlatlist,
  OneCoinComponent,
  CryptoOrderCategory,
} from '../../components';
import _ from 'lodash';
import {
  fetchAllCryptoData,
  fetchNewCryptoData,
} from '../../store/allCryptoReducer/actions';

function CryptoListMain({
  fetchAllCryptoData,
  fetchNewCryptoData,
  isLoading,
  data,
  params,
}) {
  const start = () => {
    fetchAllCryptoData();
  };
  const onEnd = () => {
    fetchNewCryptoData();
  };
  useEffect(() => {
    start();
  }, [params]);

  return (
    <WrapperWithLoader isLoading={isLoading && _.isEmpty(data)}>
      <CryptoOrderCategory />
      <CryptoFlatlist
        data={data}
        onEndReachedFunc={() => {
          console.log('end');
          onEnd();
        }}
        renderComponent={OneCoinComponent}
        start={start}
        isLoading={isLoading}
      />
    </WrapperWithLoader>
  );
}
const mapStateToProps = (state) => ({
  isLoading: state.allCryptoReducer.isLoading,
  data: state.allCryptoReducer.allCryptoData,
  params: state.allCryptoReducer.params,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllCryptoData: () => dispatch(fetchAllCryptoData()),
  fetchNewCryptoData: () => dispatch(fetchNewCryptoData()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CryptoListMain);
