import { createStore, combineReducers, applyMiddleware } from 'redux';
import placesReducer from './reducers/placesReducer';
import { createLogger } from 'redux-logger';

const RootReducer = combineReducers({
  places: placesReducer
});

const configureStore = () => {
  if(__DEV__) {
    return createStore(
      RootReducer,
      applyMiddleware(createLogger())
    );
  } else {
    return createStore(
      RootReducer
    );
  }
}

export default configureStore;
