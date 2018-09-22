import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const cityInput = (props) => {
  return(
    <View style={ styles.inputContainer }>
      <TextInput
        style={ styles.placeInput }
        value={ props.inputValue }
        onChangeText={ (text) => props.textChangeHandler(text) }
        placeholder='Please enter city name'
      />
      <Button style={ styles.placeButton } title='Add' onPress={ () => props.buttonPressHandler() } />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});

export default cityInput;
