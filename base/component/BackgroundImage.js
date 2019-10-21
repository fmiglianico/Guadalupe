import React, { PureComponent } from 'react';
import { ImageBackground } from 'react-native';
import style from '../style/style';
import Images from '@asset/images';

const backgroundImg = Images.Background;

export default class BackgroundImage extends PureComponent {
  render() {
    return (
      <ImageBackground source={backgroundImg} style={[style.backgroundImg, this.props.style]}>
        {this.props.children}
      </ImageBackground>
    );
  }
}
