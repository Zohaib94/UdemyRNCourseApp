import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CityInput from '../../components/cityInput';
import { connect } from 'react-redux';
import * as placesActions from '../../store/actions/placesActions';

class Share extends Component {
  cityTextChanged = (text) => {
    this.props.onTextChanged(text);
  }

  addButtonPressed = () => {
    if (this.props.placeText.trim() === "") {
      return;
    }

    this.props.onAddPlace();
  }

  render(){
    return(
      <View>
        <CityInput
          textChangeHandler={ this.cityTextChanged }
          buttonPressHandler={ this.addButtonPressed }
          inputValue={ this.props.placeText } />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: () => dispatch(placesActions.addPlace()),
    onTextChanged: (text) => dispatch(placesActions.updatePlaceText(text))
  }
}

const mapStateToProps = state => {
  return {
    placeText: state.places.placeText
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Share);
