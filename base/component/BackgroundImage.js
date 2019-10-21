import React, { PureComponent } from 'react';
import { ImageBackground } from 'react-native';
import style from '../style/style';

const backgroundImg = require("../asset/images/tyler-nix-qs0im4pLYbE-unsplash.jpg");

export default class BackgroundImage extends PureComponent {
  render() {
    return (
      <ImageBackground source={backgroundImg} style={[style.backgroundImg, this.props.style]}>
        {this.props.children}
      </ImageBackground>
    );
  }
}
