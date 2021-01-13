import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

function RealtimeConverterMain() {
  return (
    <View>
      <Text>RealtimeConverterMain</Text>
    </View>
  );
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = () => ({});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RealtimeConverterMain);
