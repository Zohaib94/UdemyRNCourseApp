import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as placeActions from '../store/actions/placesActions';
import CityInput from '../components/cityInput';
import CityList from '../components/cityList';
import CityModal from '../components/cityModal';
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

  cityListItemPressed = (index) => {
    this.props.onSelectPlace(index);
  }

  deletePressed = () => {
    this.props.onDeletePlace();
  }

  closePressed = () => {
    this.props.onDeselectPlace();
  }

  render(){
    return(
      <View style={ styles.container }>
        <CityInput textChangeHandler={ this.textChanged }
                   buttonPressHandler={ this.buttonPressed }
                   inputValue={ this.props.placeText } />
        <CityList cities={ this.props.placesList }
                  cityPressHandler={ this.cityListItemPressed } />
        <CityModal deletePressHandler={ this.deletePressed }
                   closePressHandler={ this.closePressed }
                   cityData={ this.props.selectedPlace } />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    placeText: state.places.placeText,
    placesList: state.places.placesList,
    selectedPlace: state.places.currentPlace
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: () => dispatch(placeActions.addPlace()),
    onTextChange: (text) => dispatch(placeActions.updatePlaceText(text)),
    onSelectPlace: (index) => dispatch(placeActions.selectPlace(index)),
    onDeletePlace: () => dispatch(placeActions.removePlace()),
    onDeselectPlace: () => dispatch(placeActions.deselectPlace())
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
