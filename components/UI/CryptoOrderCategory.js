import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import {changeParams} from '../../store/allCryptoReducer/actions';
import {CryptoOrderCategoryStyles as styles} from './styles';

function CryptoOrderCategory({params, changeParams}) {
  console.log('params', params);
  const changeParamsHandler = (name, type) => {
    const newParams = JSON.parse(JSON.stringify(params));

    for (let i = 0; i < newParams.orderFields.length; i++) {
      if (
        newParams.orderFields[i].name === name &&
        newParams.orderFields[i][type] === false
      ) {
        newParams.orderFields[i][type] = true;
      } else {
        newParams.orderFields[i][type] = false;
      }
    }

    changeParams(newParams);
  };
  return (
    <View style={styles.container}>
      {params.orderFields.map((el) => (
        <View
          style={[styles.btnContainer, el.active && styles.btnContainerActive]}
          key={el.name}>
          <TouchableOpacity
            onPress={() => changeParamsHandler(el.name, 'active')}>
            <Text style={[{color: 'black'}, el.active && styles.textActive]}>
              {el.name}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changeParamsHandler(el.name, 'value')}>
            <Image
              style={[
                {width: 24, height: 24, marginLeft: 5},
                !el.value && {transform: [{rotate: '180deg'}]},
              ]}
              source={require('../../img/chevron.png')}
            />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const mapStateToProps = (state) => ({
  params: state.allCryptoReducer.params,
});

const mapDispatchToProps = (dispatch) => ({
  changeParams: (newParams) => dispatch(changeParams(newParams)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CryptoOrderCategory);
