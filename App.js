import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/AuthScreen/Auth';
import ShareScreen from './src/screens/ShareScreen/Share';
import FindScreen from './src/screens/FindScreen/Find';
import DetailScreen from './src/screens/DetailScreen/Detail';
import SideDrawerScreen from './src/screens/SideDrawer/SideDrawer';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
const store = configureStore();

Navigation.registerComponent('UdemyCourseApp.AuthScreen', () => AuthScreen, store, Provider);
Navigation.registerComponent('UdemyCourseApp.FindScreen', () => FindScreen, store, Provider);
Navigation.registerComponent('UdemyCourseApp.ShareScreen', () => ShareScreen, store, Provider);
Navigation.registerComponent('UdemyCourseApp.DetailScreen', () => DetailScreen, store, Provider);
Navigation.registerComponent('UdemyCourseApp.SideDrawerScreen', () => SideDrawerScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'UdemyCourseApp.AuthScreen',
    title: 'Login',
  },
});
