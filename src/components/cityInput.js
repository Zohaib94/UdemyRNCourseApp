import React from 'react';
import { View, TextInput, Button } from 'react-native';

const cityInput = (props) => {
  return(
    <View>
      <TextInput
        value={ props.inputValue }
        onChangeText={ (text) => props.textChangeHandler(text) }
        placeholder='Please enter city name'
      />
      <Button title='Add' onPress={ props.buttonPressHandler } />
    </View>
  );
}

export default cityInput;
