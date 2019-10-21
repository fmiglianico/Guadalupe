import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';

import HomeStack from './HomeStack';
import * as Routes from '../constant/Routes';
import * as Colors from '../constant/Colors';
import ChatListScreen from "../../chat/screen/ChatListScreen";

export default TabNavigator = createMaterialTopTabNavigator(
  {
    Home: HomeStack,
    ChatList: ChatListScreen
  },
  {
    initialRouteName: Routes.HOME,
    tabBarOptions: {
      activeTintColor: 'white',
      showIcon: true,
      showLabel: true,
      style: {
        backgroundColor: Colors.DARK_GREY
      },
      labelStyle: {
        fontWeight: 'bold'
      }
    }
  }
);
