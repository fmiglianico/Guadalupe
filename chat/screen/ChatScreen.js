import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView } from "react-native";
import { Text, Icon, Avatar, Header } from 'react-native-elements';

import ChatMessage from '../component/ChatMessage';
import { DETAIL } from '../../__mocks__/ChatMock';

const ChatScreen = ({ selectedMessageId, navigation }) => {

	return (
		<View style={{ flex: 1 }} >
			<Header placement='left'>
				<Icon
					type='material'
					name='arrow-back'
					color='white'
					onPress={() => navigation.goBack()}
				/>
				<View style={{flex:1, flexDirection:"row"}}>
					<Avatar
						rounded
						source={DETAIL.avatar_uri}
						containerStyle={{alignSelf: 'center'}}
					/>
					<Text style={{ color: 'white', fontSize: 19, alignSelf: 'center', marginLeft: 10}}>{DETAIL.name}</Text>
				</View>
				<Icon name='menu' size={28} color='white' />
			</Header>
			
			<ScrollView style={{padding:10}}>
				{
					DETAIL.conversation.map((m, i) => {
						const me = m.profile === DETAIL.currentProfile;
						const start = i === 0 || DETAIL.conversation[i - 1].profile !== m.profile;
						const end = i === DETAIL.conversation.length - 1 || DETAIL.conversation[i + 1].profile !== m.profile;
						return <ChatMessage 
							key={i} 
							name={DETAIL.profiles[m.profile].name}
							message={m.message}
							messageId={m.messageId}
							selected={selectedMessageId === m.messageId}
							date={m.date} 
							me={me} 
							start={start} 
							end={end}
							avatarUri={DETAIL.profiles[m.profile].avatar_uri} />;
					})
				}
			</ScrollView>
		</View>
	);
}

const mapStateToProps = (state) => ({
	selectedMessageId: state.chat.selectedMessageId
});

export default connect(mapStateToProps)(ChatScreen);
