import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as placeActions from '../store/actions/placesActions';
import CityInput from '../components/cityInput';
import { View } from 'react-native';

class CityListContainer extends Component {
  textChanged = (text) => {
    this.props.onTextChange(text);
  }

  buttonPressed = () => {
    if (this.props.placeText.trim() === "") {
      return;
    }

    this.props.onAddPlace(this.props.placeText);
  }

  render(){
    return(
      <View>
        <CityInput textChangeHandler={ this.textChanged }
                   buttonPressHandler={ this.buttonPressed }
                   inputValue={ this.props.placeText } />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    placeText: state.placeText
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(placeActions.addPlace(name)),
    onTextChange: (text) => dispatch(placeActions.updatePlaceText(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityListContainer);
