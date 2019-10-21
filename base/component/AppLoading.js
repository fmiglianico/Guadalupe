import React, { PureComponent } from 'react';
import { View, ActivityIndicator } from 'react-native';

import BackgroundImage from './BackgroundImage';
import BigLogo from './BigLogo';

export default class AppLoading extends PureComponent {
  render() {
    return (
      <BackgroundImage style={{justifyContent:'space-around'}}>
        <BigLogo />
        <ActivityIndicator />
      </BackgroundImage>
    );
  }
}
