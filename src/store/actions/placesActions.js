import * as Types from './types';

export const addPlace = () => {
  return {
    type: Types.ADD_PLACE
  }
}

export const removePlace = (key) => {
  return {
    type: Types.REMOVE_PLACE,
    key: key
  }
}

export const updatePlaceText = (text) => {
  return {
    type: Types.PLACE_TEXT_UPDATE,
    placeText: text
  }
}
