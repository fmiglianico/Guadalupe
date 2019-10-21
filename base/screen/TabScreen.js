import React, { PureComponent } from 'react';
import { View } from "react-native";
import { Icon, Header, Text } from 'react-native-elements';
import TabNavigator from '../navigation/TabNavigator';
import HeaderLogo from '../component/HeaderLogo';

export default class TabScreen extends PureComponent {

	static router = TabNavigator.router;

	render() {
		return (
			<View style={{ flex: 1 }} >
				<Header placement='left'>
					<HeaderLogo />
					<Text style={{color: 'white', fontSize: 19}}>GUADALUPE</Text>
					<Icon name='menu' size={28} color='white' />
				</Header>
				<TabNavigator navigation={this.props.navigation} />
			</View>
		);
	}
}
