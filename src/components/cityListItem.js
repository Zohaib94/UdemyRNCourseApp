import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const cityListItem = (props) => {
  return(
    <TouchableOpacity onPress={() => console.log(props.key)}>
      <View style={ styles.listItem }>
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
  }
});

export default cityListItem;
