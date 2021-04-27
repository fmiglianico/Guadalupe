import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import * as Routes from '../constant/Routes';
import DashboardScreen from "../../feed/screen/DashboardScreen";
import { Icon } from 'react-native-elements';

const { Navigator, Screen } = createStackNavigator();

export default function HomeStack() {

	return (
		<Navigator
			screenOptions={{ gestureEnabled: false, headerShown: false }}
			// navigationOptions= {{
			// 	tabBarIcon:({tintColor, focused})=>(  
			// 		<Icon
			// 				name={focused ? 'view-dashboard' : 'view-dashboard-outline'}
			// 				type='material-community'
			// 				color={tintColor}  
			// 				size={25}
			// 		/>  
			// 	),
			// }}
		>
			<Screen
				name={Routes.DASHBOARD}
				component={DashboardScreen}
			/>
		</Navigator>
	);
};