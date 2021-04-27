import React from 'react';
import { ActivityIndicator } from 'react-native';

import BackgroundImage from './BackgroundImage';
import BigLogo from './BigLogo';

export default function AppLoading() {
  return (
    <BackgroundImage style={{justifyContent:'space-around'}}>
      <BigLogo />
      <ActivityIndicator />
    </BackgroundImage>
  );
}
