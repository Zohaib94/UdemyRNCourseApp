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
        placesList: state.placesList.filter((place, index) => {
          return index !== state.currentPlace.keyIndex
        }),
        currentPlace: null
      });
    case Types.DESELECT_PLACE:
      return ({ ...state,
        currentPlace: null
      });
    case Types.SELECT_PLACE:
      return ({ ...state,
        currentPlace: {
          city: state.placesList[action.placeIndex],
          keyIndex: action.placeIndex
        }
      });
    case Types.PLACE_TEXT_UPDATE:
      return ({ ...state,
        placeText: action.placeText
      });
  }
}

export default places;
