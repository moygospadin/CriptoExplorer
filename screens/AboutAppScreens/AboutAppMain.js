import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

function AboutAppMain() {
  return (
    <View>
      <Text>AboutAppMain</Text>
    </View>
  );
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(AboutAppMain);
