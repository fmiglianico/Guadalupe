import React, { PureComponent } from 'react';
import { View } from "react-native";
import { Text } from 'react-native-elements';

export default class DashboardScreen extends PureComponent {

	render() {
		return (
			<View style={{flex: 1, justifyContent: "center", alignSelf: "center"}}>
				<Text>Dashboard</Text>
			</View>
		);
	}
}
