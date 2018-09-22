import React from 'react';
import { FlatList, View } from 'react-native';
import CityListItem from './cityListItem';

const cityInput = (props) => {
  citiesList = props.cities.map((city, index) => {
    return {
      key: index,
      cityName: city
    }
  });

  return(
    <FlatList data={ citiesList }
              renderItem={ ({ item }) => <CityListItem cityItem={ item } /> } />
  );
}

export default cityInput;
