import React, { PureComponent } from 'react';
import { Header, Text, ButtonGroup, Icon } from 'react-native-elements';
import { View } from 'react-native';

import * as Colors from '../constants/Colors';
import * as Routes from '../constants/Routes';

export default class TabHeader extends PureComponent {

  getTabs = (navigation) => {
    const homeButton = () => 
      <Icon 
        name='home'
        type='material'
        onPress={() => navigation.navigate(Routes.DASHBOARD)} 
        color='white'
        suppressHighlighting={true}
      />;
    const discussionButton = () => 
      <Icon 
        name='chat'
        type='material'
        onPress={() => navigation.navigate(Routes.DISCUSSION)} 
        color='white'
        suppressHighlighting={true}
      />;
    return [{element: homeButton}, {element: discussionButton}];
  }

  tabPressed = (navigation) =>  (selectedIndex) => {
    switch(selectedIndex) {
      case 1:
        navigation.navigate(Routes.DISCUSSION);
        return;
      default:
        navigation.navigate(Routes.DASHBOARD);
        return;
    }
  }

  render({ navigation }) {
    return (
      <View>
        <Header backgroundColor={Colors.DARK_GREY}>
          <Icon name='menu' type='material' color='white'/>
          <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>GUADALUPE</Text>
        </Header>
        <ButtonGroup
          buttons={this.getTabs(navigation)}
          onPress={this.tabPressed(navigation)}
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