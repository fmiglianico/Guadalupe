import React, { PureComponent } from 'react';
import { ScrollView } from "react-native";
import { ListItem, Icon } from 'react-native-elements';
import { LIST } from '../../__mocks__/ChatListMock';

import * as Routes from '../../base/constant/Routes';

export default class ChatListScreen extends PureComponent {

	static navigationOptions = {
		
		tabBarIcon:({tintColor, focused})=>(  
			<Icon
					name={focused ? 'comment-processing' : 'comment-processing-outline'}
					type='material-community'
					color={tintColor}
					size={25}  
			/>
		)
	};

	render() {
		return (
			<ScrollView>
				{
					LIST.map((l, i) => (
						<ListItem
							key={i}
							leftAvatar={{ source: l.avatar_uri }}
							title={l.name}
							subtitle={l.subtitle}
							bottomDivider
							chevron
							onPress={() => this.props.navigation.navigate(Routes.CHAT)}
						/>
					))
				}
			</ScrollView>
		);
	}
}
