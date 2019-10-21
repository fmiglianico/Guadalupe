import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

import chatStyle from '../style/chatStyle';
import { toggleMessageSelection } from '../reducer/chatReducer';

class ChatBubble extends Component {

  getBubbleStyle = (me, start, end) => {
    if (me && start && end)
      return chatStyle.bubbleRight;
    if (me && start)
      return chatStyle.bubbleRightStart;
    if (me && end)
      return chatStyle.bubbleRightEnd;
    if (me)
      return chatStyle.bubbleRightMiddle;
    if (start && end)
      return chatStyle.bubbleLeft;
    if (start)
      return chatStyle.bubbleLeftStart;
    if (end)
      return chatStyle.bubbleLeftEnd;
    return chatStyle.bubbleLeftMiddle;
  }

  toggleMessageSelection = () => this.props.toggleMessageSelection(this.props.messageId);

  shouldComponentUpdate = (nextProps, nextState) => {
    return this.props.selected !== nextProps.selected;
  }

  render() {
    return (
      <View style={this.props.me ? chatStyle.bubbleContainerRight : chatStyle.bubbleContainerLeft}>

        {/* Left chevron */}
        {!this.props.me && this.props.end ? <View style={chatStyle.bubbleLeftChevron} /> : null }
        
        <View>
          {!this.props.me && this.props.start && 
            // Name of message sender
            <Text 
              style={this.props.end ? chatStyle.nameWithAvatar : chatStyle.nameWithoutAvatar}
            >
              {this.props.name}
            </Text>
          }

          {/* Bubble containing message */}
          <View style={this.getBubbleStyle(this.props.me, this.props.start, this.props.end)}
            onTouchEnd={this.toggleMessageSelection}
          >
            <Text>{this.props.message}</Text>
            
            {/* Date shown on bubble press */}
            {this.props.selected && 
              <Text style={this.props.me ? chatStyle.dateRight : chatStyle.dateLeft}>{this.props.date}</Text>
            }
          </View>
        </View>
        
        {/* Right chevron */}
        {this.props.me && this.props.end ? <View style={chatStyle.bubbleRightChevron} /> : null}

      </View>
    )
  }
}

_toggleMessageSelection = (selectedMessageId) => {
  return (dispatch) => {
    dispatch(toggleMessageSelection(selectedMessageId));
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
  toggleMessageSelection: _toggleMessageSelection
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBubble)
