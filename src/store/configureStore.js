import { createStore, combineReducers } from 'redux';
import placesReducer from './reducers/placesReducer';

const RootReducer = combineReducers({
  places: placesReducer
});

const configureStore = () => {
  return createStore(RootReducer);
}

export default configureStore;
