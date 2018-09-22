import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const cityInput = (props) => {
  return(
    <TouchableOpacity onPress={() => console.log(props.key)}>
      <Text>{props.cityName}</Text>
    </TouchableOpacity>
  );
}

export default cityInput;
