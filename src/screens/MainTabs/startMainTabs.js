import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

export default startTabs = () => {
  Promise.all(
    [
      Icon.getImageSource('md-map', 30),
      Icon.getImageSource('share-alt', 30),
      Icon.getImageSource("ios-menu", 30)
    ]
  ).then((imageSources) => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Find',
          screen: "UdemyCourseApp.FindScreen",
          title: 'Find Places',
          icon: imageSources[0],
          navigatorButtons: {
            leftButtons: [
              {
                  icon: imageSources[2],
                  title: "Menu",
                  id: "sideDrawerToggle"
              }
            ]
          }
        },
        {
          label: 'Share',
          screen: "UdemyCourseApp.ShareScreen",
          title: 'Share Places',
          icon: imageSources[1],
          navigatorButtons: {
            leftButtons: [
              {
                  icon: imageSources[2],
                  title: "Menu",
                  id: "sideDrawerToggle"
              }
            ]
          }
        }
      ],
      drawer: {
        left: {
            screen: "UdemyCourseApp.SideDrawerScreen"
        }
      }
    });
  });
}

