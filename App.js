import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/AuthScreen/Auth';

Navigation.registerComponent('UdemyCourseApp.AuthScreen', () => AuthScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'UdemyCourseApp.AuthScreen',
    title: 'Login',
  },
});
