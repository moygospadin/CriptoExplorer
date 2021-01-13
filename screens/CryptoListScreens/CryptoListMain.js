import React, {useEffect} from 'react';

import {Text} from 'react-native';
import {connect} from 'react-redux';
import {WrapperWithLoader} from '../../components';
import {fetchAllCryptoData} from '../../store/allCryptoReducer/actions';

function CryptoListMain({fetchAllCryptoData, isLoading}) {
  useEffect(() => {
    fetchAllCryptoData('dawdaw');
    console.log('FETCH');
  }, []);

  return (
    <WrapperWithLoader isLoading={true}>
      <Text>dawdaw</Text>
    </WrapperWithLoader>
  );
}
const mapStateToProps = (state) => ({
  isLoading: state.allCryptoReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllCryptoData: (params) => dispatch(fetchAllCryptoData(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CryptoListMain);
