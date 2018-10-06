import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const deleteIcon = (<Icon name="trash" size={30} color="#900" />)

const Detail = (props) => {
  return(
    <View>
      <Image
        source={ { uri: 'https://pbs.twimg.com/profile_images/491404645000962049/0n-I-pl-_400x400.png' } }
        style={ { width: 400, height: 400 } } />

      <Text>{ props.cityData.city }</Text>

      <TouchableOpacity onPress={ () => props.deletePressHandler() }>
        {deleteIcon}
      </TouchableOpacity>
    </View>
  );
}

export default Detail;
