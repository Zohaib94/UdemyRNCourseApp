import * as Types from '../actions/types';

const initialState = {
  placesList: [],
  currentPlace: null,
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
        placesList: state.placesList.filter((place) => { place.key !== state.currentPlace.key }),
        currentPlace: null
      });
    case Types.DESELECT_PLACE:
      return ({ ...state,
        currentPlace: null
      });
    case Types.SELECT_PLACE:
      return ({ ...state,
        currentPlace: state.placesList.filter((place) => { place.key === action.index })
      });
    case Types.PLACE_TEXT_UPDATE:
      return ({ ...state,
        placeText: action.placeText
      });
  }
}

export default places;
