import React from 'react';
import { createStackNavigator } from 'react-navigation';

import DashboardScreen from "../../feed/screen/DashboardScreen";
import { Icon } from 'react-native-elements';

export default HomeStack = createStackNavigator(
	{
		Dashboard: DashboardScreen
	},
	{
		navigationOptions: {
			tabBarIcon:({tintColor, focused})=>(  
				<Icon
						name={focused ? 'view-dashboard' : 'view-dashboard-outline'}
						type='material-community'
						color={tintColor}  
						size={25}
				/>  
			),
		},
    defaultNavigationOptions: {
      header: null
    }
	}
);