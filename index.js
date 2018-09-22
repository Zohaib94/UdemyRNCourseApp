import { AppRegistry } from 'react-native';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import React from 'react';

const RootComponentGenerator = () => {
  return(
    <Provider store={configureStore()}>
      <App/>
    </Provider>
  )
}

AppRegistry.registerComponent('UdemyCourseApp', () => RootComponentGenerator);
