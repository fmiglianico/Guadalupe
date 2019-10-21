import React, { PureComponent } from 'react';
import { Header, Text, ButtonGroup, Icon } from 'react-native-elements';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';

import * as Colors from '../constants/Colors';
import * as Routes from '../constants/Routes';

class TabHeader extends PureComponent {

  getTabs = () => {
    const homeButton = () => 
      <Icon 
        name='home'
        type='material'
        onPress={() => this.props.navigation.navigate(Routes.DASHBOARD)} 
        color='white'
        suppressHighlighting={true}
      />;
    const discussionButton = () => 
      <Icon 
        name='chat'
        type='material'
        onPress={() => this.props.navigation.navigate(Routes.DISCUSSION)} 
        color='white'
        suppressHighlighting={true}
      />;
    return [{element: homeButton}, {element: discussionButton}];
  }

  tabPressed = (selectedIndex) => {
    switch(selectedIndex) {
      case 1:
        this.props.navigation.navigate(Routes.DISCUSSION);
        return;
      default:
        this.props.navigation.navigate(Routes.DASHBOARD);
        return;
    }
  }

  render() {
    return (
      <View>
        <Header backgroundColor={Colors.DARK_GREY}>
          <Icon name='menu' type='material' color='white'/>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>GUADALUPE</Text>
        </Header>
        <ButtonGroup
          buttons={this.getTabs()}
          onPress={this.tabPressed}
          containerStyle={{
            height: 60, 
            width:'100%', 
            marginLeft: 0, 
            marginRight: 0, 
            marginTop: 0,
            backgroundColor:Colors.DARK_GREY,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderRadius: 0,
          }}
          innerBorderStyle={{
            color:Colors.GREY
          }}
        />
      </View>
    )
  }
}

export default withNavigation(TabHeader);