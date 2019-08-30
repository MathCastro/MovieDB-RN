import DetailScreen from './src/view/authorized/detail-screen/DetailScreen';
import ListScreen from './src/view/authorized/list-screen/ListScreen';
import SearchScreen from './src/view/authorized/search-screen/SearchScreen';
import LoginScreen from './src/view/unauthorized/login-screen/LoginScreen';
import RegisterScreen from './src/view/unauthorized/register-screen/RegisterScreen';
import AuthLoadingScreen from './src/view/AuthLoadingScreen';
import Colors from './src/util/color';

import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

const AppStack = createStackNavigator(
  {
    Home: SearchScreen,
    List: ListScreen,
    Detail: DetailScreen,
  },
  {
    headerMode: 'screen',
    defaultNavigationOptions: {
      headerTintColor: '#000',
      headerStyle: {
        backgroundColor: Colors.primaryBlue,
      },
    },
    initialRouteName: 'Home',
  },
);

const AuthStack = createStackNavigator(
  {
    SignIn: LoginScreen,
    Register: RegisterScreen,
  },
  {
    headerMode: 'screen',
    defaultNavigationOptions: {
      headerTintColor: '#000',
      headerStyle: {
        backgroundColor: Colors.primaryBlue,
      },
    },
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
