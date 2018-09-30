import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/AuthScreen/Auth';
import ShareScreen from './src/screens/ShareScreen/Share';
import FindScreen from './src/screens/FindScreen/Find';

Navigation.registerComponent('UdemyCourseApp.AuthScreen', () => AuthScreen);
Navigation.registerComponent('UdemyCourseApp.FindScreen', () => FindScreen);
Navigation.registerComponent('UdemyCourseApp.ShareScreen', () => ShareScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'UdemyCourseApp.AuthScreen',
    title: 'Login',
  },
});
