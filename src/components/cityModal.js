import React from 'react';
import { Modal, Text, Button, Image, View } from 'react-native';

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
      <Button title='Delete' onPress={ () => props.deletePressHandler() } />
      <Button title='Close' onPress={ () => props.closePressHandler() } />
    </Modal>
  );
}

export default cityModal;
