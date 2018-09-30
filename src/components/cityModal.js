import React from 'react';
import { Modal, Text, Button, Image, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const deleteIcon = (<Icon name="trash" size={30} color="#900" />)
const closeIcon = (<Icon name="times" size={30} color="#900" />)

const cityModal = (props) => {
  let modalContent = null;

  if (props.cityData !== null) {
    modalContent = (
      <View>
        <Image source={ { uri: 'https://pbs.twimg.com/profile_images/491404645000962049/0n-I-pl-_400x400.png' } }
               style={ { width: 400, height: 400 } } />
        <Text>{ props.cityData.city }</Text>
      </View>
    );
  }

  return(
    <Modal visible={ props.cityData !== null }
           onRequestClose={ () => props.closePressHandler() } >
      {modalContent}
      <TouchableOpacity onPress={ () => props.deletePressHandler() }>
        {deleteIcon}
      </TouchableOpacity>
      <TouchableOpacity onPress={ () => props.closePressHandler() }>
        {closeIcon}
      </TouchableOpacity>
    </Modal>
  );
}

export default cityModal;
