import React, { PureComponent } from 'react';
import { ImageBackground } from 'react-native';

const logo = require("../asset/images/Guadalupe.png");

export default class BigLogo extends PureComponent {
  render() {
    return (
      <ImageBackground source={logo} style={{width: 200, height: 200, alignSelf: "center"}}  />
    );
  }
}
