import React from 'react';
import { connect } from 'react-redux';
import { Button } from "react-native-elements";

import { facebookLogin, facebookLoginFulfilled } from '../reducer/authReducer';
import * as Colors from '../../base/constant/Colors';

function FacebookLoginButton({ isLoggingIn, facebookLogin, facebookLoginFulfilled }) {

  const buttonPressed = () => {
    facebookLogin('abc');
    setTimeout(() => {
      facebookLoginFulfilled('abc');
    }, 500);
  };

  return (
    <Button
      onPress={() => (isLoggingIn ? null : buttonPressed())}
      loading={isLoggingIn}
      disabled={isLoggingIn}
      title="Connect with Facebook"
      icon={{ 
        type: 'font-awesome', 
        name: 'facebook', 
        color:'white'}}
      buttonStyle={{backgroundColor: Colors.FACEBOOK}}
      disabledStyle={{backgroundColor: Colors.FACEBOOK}}
    />
  );
}

const mapStateToProps = (state) => ({
  isLoggingIn: state.auth.facebook.isLoggingIn
})

export default connect(mapStateToProps, { facebookLogin, facebookLoginFulfilled })(FacebookLoginButton);
