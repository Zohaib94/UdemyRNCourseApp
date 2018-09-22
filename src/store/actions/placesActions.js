import * as Types from './types';

export const addPlace = (placeName) => {
  return {
    type: Types.ADD_PLACE,
    newPlace: placeName
  }
}

export const removePlace = () => {
  return {
    type: Types.REMOVE_PLACE
  }
}

export const deselectPlace = () => {
  return {
    type: Types.DESELECT_PLACE
  }
}

export const selectPlace = (index) => {
  return {
    type: Types.SELECT_PLACE,
    placeIndex: index
  }
}

export const updatePlaceText = (text) => {
  return {
    type: Types.PLACE_TEXT_UPDATE,
    placeText: text
  }
}
