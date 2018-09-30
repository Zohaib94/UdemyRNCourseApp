import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';

const cityListItem = (props) => {
  return(
    <TouchableOpacity onPress={ () => props.cityPressed(props.cityItem.key) }>
      <View style={ styles.listItem }>
        <Image source={ { uri: 'https://pbs.twimg.com/profile_images/491404645000962049/0n-I-pl-_400x400.png' } }
               style={ styles.imageItem } />
        <Text>{ props.cityItem.cityName }</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center"
  },
  imageItem: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
  }
});

export default cityListItem;
