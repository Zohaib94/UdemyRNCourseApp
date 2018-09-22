import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as placeActions from '../store/actions/placesActions';
import CityInput from '../components/cityInput';
import CityList from '../components/cityList';
import { View, StyleSheet } from 'react-native';

class CityListContainer extends Component {
  textChanged = (text) => {
    this.props.onTextChange(text);
  }

  buttonPressed = () => {
    if (this.props.placeText.trim() === "") {
      return;
    }

    this.props.onAddPlace();
  }

  render(){
    return(
      <View style={ styles.container }>
        <CityInput textChangeHandler={ this.textChanged }
                   buttonPressHandler={ this.buttonPressed }
                   inputValue={ this.props.placeText } />
        <CityList cities={ this.props.placesList } />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    placeText: state.places.placeText,
    placesList: state.places.placesList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: () => dispatch(placeActions.addPlace()),
    onTextChange: (text) => dispatch(placeActions.updatePlaceText(text))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CityListContainer);
