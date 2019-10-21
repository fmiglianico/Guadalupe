import React, { Component } from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-elements';

import chatStyle from '../style/chatStyle';
import ChatBubble from './ChatBubble';

export default class ChatMessage extends Component {
  
  shouldComponentUpdate = (nextProps, nextState) => {
    return this.props.selected !== nextProps.selected;
  }

  render() {
    return (
      <View style={chatStyle.messageContainer}>
        {/* Avatar only shown when message is not from self */}
        {!this.props.me && this.props.end &&
          <Avatar rounded source={this.props.avatarUri} containerStyle={chatStyle.avatar} />
        }

        {/* Reply icon shown on bubble press */}
        {this.props.me && this.props.selected &&
          <Avatar rounded icon={{
              name: 'reply',
              type: 'material-community',
            }} 
            containerStyle={{
              alignSelf: 'center'
            }}
          />
        }

        {/* Chat bubbles with the same props */}
        <ChatBubble {...this.props} />

        {/* Reply icon shown on bubble press */}
        {!this.props.me && this.props.selected &&
          <Avatar rounded icon={{
              name: 'reply',
              type: 'material-community',
            }} 
            containerStyle={{
              alignSelf: 'center'
            }}
          />
        }
      </View>
    )
  }
}
