import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import * as Routes from '../constant/Routes';
import AppLoadingScreen from '../screen/AppLoadingScreen';
import AppStack from './AppStack';
import AuthStack from '../../auth/navigation/AuthStack';

export default createAppContainer(
  createSwitchNavigator({
    AppLoading: AppLoadingScreen,
    Auth: AuthStack,
    App: AppStack
  },{
    initialRouteName: Routes.APP_LOADING
  })
)
