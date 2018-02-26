import { StackNavigator } from 'react-navigation';
import SplashScreen from '../components/splash/SplashScreen';
import Menu from '../components/user/Menu';
import SignUp from '../components/user/SignUp';
import Login from '../components/user/Login';
import Home from '../components/home/Home';

export const Router = StackNavigator(
  {
    splash: {
      screen: SplashScreen,
    },
    menu: {
      screen: Menu,
    },
    signup: {
      screen: SignUp,
    },
    login: {
      screen: Login,
    },
    home: {
      screen: Home,
    },
  },
  {
    initialRouteName: 'splash',
  }
);
