import React from 'react';
import { createStackNavigator } from 'react-navigation';

import ChatScreen from '../../chat/screen/ChatScreen';
import TabScreen from '../screen/TabScreen';

export default AppStack = createStackNavigator(
	{
		Tab: TabScreen,
		Chat: ChatScreen
	},
	{
		defaultNavigationOptions: {
			header: null
		}
	}
);