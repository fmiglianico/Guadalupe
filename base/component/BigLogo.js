import React from 'react';
import { ImageBackground } from 'react-native';

import Images from '@asset/images';

const logo = Images.Guadalupe;

export default function BigLogo() {
  return (
    <ImageBackground source={logo} style={{width: 200, height: 200, alignSelf: "center"}}  />
  );
}
