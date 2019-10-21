import React, { PureComponent } from 'react';
import { ImageBackground } from 'react-native';
import style from '../style/style';

const logo = require("../asset/images/Guadalupe.png");

export default class HeaderLogo extends PureComponent {
  render() {
    return <ImageBackground source={logo} style={style.headerLogo} />;
  }
}
