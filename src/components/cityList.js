import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import CityListItem from './cityListItem';

const cityList = (props) => {
  citiesList = props.cities.map((city, index) => {
    return {
      key: index,
      cityName: city
    }
  });

  return(
      <FlatList
        data={ citiesList }
        renderItem={ ({ item }) => <CityListItem cityItem={ item } /> }
        style={ styles.listContainer }
      />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default cityList;
