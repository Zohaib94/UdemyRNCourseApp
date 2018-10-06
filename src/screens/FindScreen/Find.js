import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import CityList from '../../components/cityList';

class Find extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  }

  onCitySelect = key => {
    currentCity = this.props.placesList[key]

    this.props.navigator.push({
      screen: 'UdemyCourseApp.DetailScreen',
      title: currentCity,
      passProps: {
        cityData: {
          city: currentCity,
          key: key
        }
      }
    })
  }

  render(){
    return(
      <View>
        <CityList
          cities={ this.props.placesList }
          cityPressHandler={ this.onCitySelect } />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    placesList: state.places.placesList,
  }
}

export default connect(mapStateToProps)(Find);
