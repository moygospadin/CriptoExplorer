import React from 'react';
import {TextInput} from 'react-native';
import {TextInputUIStyles as styles} from './styles';

function TextInputUI({
  textInputValue,
  setTextInputValue,
  placeholder,
  keyboardType,
  style,
}) {
  return (
    <TextInput
      onChangeText={(value) => setTextInputValue(value)}
      value={textInputValue.toString()}
      style={[styles.textInput, {...style}]}
      placeholder={placeholder}
      keyboardType={keyboardType}
    />
  );
}

export default TextInputUI;
