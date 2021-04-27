import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import * as Routes from '../constant/Routes';
import ChatScreen from '../../chat/screen/ChatScreen';
import TabScreen from '../screen/TabScreen';

const { Navigator, Screen } = createStackNavigator();

export default function AppStack() {

	return (
		<Navigator
			screenOptions={{ gestureEnabled: false, headerShown: false }}
		>
			<Screen
				name={Routes.TAB}
				component={TabScreen}
			/>
			<Screen
				name={Routes.CHAT}
				component={ChatScreen}
			/>
		</Navigator>
	);
};