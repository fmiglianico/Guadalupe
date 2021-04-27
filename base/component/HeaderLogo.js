import React from 'react';
import { ImageBackground } from 'react-native';
import style from '../style/style';

const logo = require("../asset/images/Guadalupe.png");

export default function HeaderLogo() {
  return <ImageBackground source={logo} style={style.headerLogo} />;
}
