import React from 'react';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from "../screen/LoginScreen";
import EmailLoginScreen from "../screen/EmailLoginScreen";
import RegisterScreen from "../screen/RegisterScreen";

export default AuthStack = createStackNavigator(
	{
		Login: LoginScreen,
		EmailLogin: EmailLoginScreen,
		Register: RegisterScreen
	},
	{
		defaultNavigationOptions: {
			header: null
		}
	}
);