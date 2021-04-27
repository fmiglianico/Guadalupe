import React, { PureComponent } from 'react';
import { ScrollView } from "react-native";
import { ListItem, Avatar } from 'react-native-elements';
import { LIST } from '../../__mocks__/ChatListMock';

import * as Routes from '../../base/constant/Routes';

export default function ChatListScreen({ navigation }) {

	return (
		<ScrollView>
			{
				LIST.map((l, i) => (
					<ListItem
						key={i}
						onPress={() => navigation.navigate(Routes.CHAT)}
						bottomDivider
					>
						<Avatar source={l.avatar_uri} rounded />
						<ListItem.Content>
							<ListItem.Title>{l.name}</ListItem.Title>
							<ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
						</ListItem.Content>
						<ListItem.Chevron/>
					</ListItem>
				))
			}
		</ScrollView>
	);
}
