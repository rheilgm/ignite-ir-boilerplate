import { TabNavigator, StackNavigator } from 'react-navigation';

/**
 * ---------------------------------------------------------------------------------------
 * TAB SCREENS
 * ---------------------------------------------------------------------------------------
 */
import HomeScreen from 'Containers/Home'
import SettingsScreen from 'Containers/Settings'

/**
 * ---------------------------------------------------------------------------------------
 * MODALS
 * ---------------------------------------------------------------------------------------
 */
import {
  SampleModal
} from 'Modals/'


/**
 * ---------------------------------------------------------------------------------------
 * MAIN TAB NAVIGATOR
 * ---------------------------------------------------------------------------------------
 */
const TabNav = TabNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen }
}, {
  animationEnabled: true
});

/**
 * ---------------------------------------------------------------------------------------
 * ROOT NAVIGATOR FOR TAB AND MODALS
 * ---------------------------------------------------------------------------------------
 */
export default StackNavigator(
  {
    Main: {
      screen: TabNav
    },
    ProfileModal: {
      screen: SampleModal
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);
