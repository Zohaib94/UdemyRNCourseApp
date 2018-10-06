import * as Types from './types';

export const addPlace = () => {
  return {
    type: Types.ADD_PLACE
  }
}

export const removePlace = () => {
  return {
    type: Types.REMOVE_PLACE
  }
}

export const updatePlaceText = (text) => {
  return {
    type: Types.PLACE_TEXT_UPDATE,
    placeText: text
  }
}
