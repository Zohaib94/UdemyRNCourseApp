import React, { Component } from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const deleteIcon = (<Icon name="trash" size={30} color="#900" />)
import { connect } from 'react-redux';
import * as placesActions from '../../store/actions/placesActions';

class Detail extends Component {
  deletePressHandler = () => {
    this.props.deletePlace(this.props.cityData.key);
    this.props.navigator.pop();
  }

  render() {
    return(
      <View>
        <Image
          source={ { uri: 'https://pbs.twimg.com/profile_images/491404645000962049/0n-I-pl-_400x400.png' } }
          style={ { width: 400, height: 400 } } />

        <Text>{ this.props.cityData.city }</Text>

        <TouchableOpacity onPress={this.deletePressHandler}>
          {deleteIcon}
        </TouchableOpacity>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePlace: (key) => dispatch(placesActions.removePlace(key))
  }
}

export default connect(null, mapDispatchToProps)(Detail);
