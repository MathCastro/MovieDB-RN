import DetailScreen from './src/view/authorized/detail-screen/DetailScreen';
import ListScreen from './src/view/authorized/list-screen/ListScreen';
import SearchScreen from './src/view/authorized/search-screen/SearchScreen';
import LoginScreen from './src/view/unauthorized/login-screen/LoginScreen';
import RegisterScreen from './src/view/unauthorized/register-screen/RegisterScreen';
import AuthLoadingScreen from './src/view/AuthLoadingScreen';

import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator(
  {
    Home: SearchScreen,
    List: ListScreen,
    Detail: DetailScreen,
  },
  {
    initialRouteName: 'Home',
  },
);
const AuthStack = createStackNavigator(
  {
    SignIn: LoginScreen,
    Register: RegisterScreen,
  },
  {
    initialRouteName: 'SignIn',
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
