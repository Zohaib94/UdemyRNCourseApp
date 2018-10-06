import * as Types from '../actions/types';

const initialState = {
  placesList: [],
  placeText: ''
}

const places = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
    case Types.ADD_PLACE:
      return ({ ...state,
        placesList: state.placesList.concat(state.placeText),
      });
    case Types.REMOVE_PLACE:
      return ({ ...state,
        placesList: state.placesList.filter((place, index) => {
          return index !== state.currentPlace.keyIndex
        })
      });
    case Types.PLACE_TEXT_UPDATE:
      return ({ ...state,
        placeText: action.placeText
      });
  }
}

export default places;
