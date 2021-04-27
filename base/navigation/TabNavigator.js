import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeStack from './HomeStack';
import * as Routes from '../constant/Routes';
import ChatListScreen from "../../chat/screen/ChatListScreen";

const { Navigator, Screen } = createMaterialTopTabNavigator();

export default function TabNavigator() {

  return (
    <Navigator initialRouteName={Routes.HOME} screenOptions={{ headerShown: false }}>
      <Screen name={Routes.HOME} component={HomeStack} />
      <Screen name={Routes.CHAT_LIST} component={ChatListScreen} />
    </Navigator>
  );
};
