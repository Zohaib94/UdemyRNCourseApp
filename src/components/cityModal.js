import React from 'react';
import { Modal, Text, Button } from 'react-native';

const cityModal = (props) => {
  let modalContent = null;

  if (props.cityData !== null) {
    modalContent = (
      <Text>{ props.cityData.city }</Text>
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
