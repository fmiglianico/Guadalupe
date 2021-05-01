import React from 'react';
import { ImageBackground } from 'react-native';
import style from '../style/style';
import Images from '@asset/images';

export default function HeaderLogo() {
  return <ImageBackground source={Images.Guadalupe} style={style.headerLogo} />;
}
