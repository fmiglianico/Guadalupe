import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import * as Routes from '../../base/constant/Routes';
import LoginScreen from "../screen/LoginScreen";
import EmailLoginScreen from "../screen/EmailLoginScreen";
import RegisterScreen from "../screen/RegisterScreen";

const { Navigator, Screen } = createStackNavigator();

export default function AuthStack() {

	return (
		<Navigator
			screenOptions={{ gestureEnabled: false, headerShown: false }}
		>
			<Screen
				name={Routes.LOGIN}
				component={LoginScreen}
			/>
			<Screen
				name={Routes.EMAIL_LOGIN}
				component={EmailLoginScreen}
			/>
			<Screen
				name={Routes.REGISTER}
				component={RegisterScreen}
			/>
		</Navigator>
	);
};