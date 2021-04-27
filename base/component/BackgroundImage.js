import React from 'react';
import { ImageBackground } from 'react-native';
import style from '../style/style';
import Images from '@asset/images';

const backgroundImg = Images.Background;

export default function BackgroundImage(props) {
  return (
    <ImageBackground source={backgroundImg} style={[style.backgroundImg, props.style]}>
      {props.children}
    </ImageBackground>
  );
}
