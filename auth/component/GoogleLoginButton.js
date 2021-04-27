import React from 'react';
import { connect } from 'react-redux';
import { Button } from "react-native-elements";

import { googleLogin, googleLoginFulfilled } from '../reducer/authReducer';
import * as Colors from '../../base/constant/Colors';

function GoogleLoginButton({ isLoggingIn, googleLogin, googleLoginFulfilled }) {

  const buttonPressed = () => {
    googleLogin('abc');
    setTimeout(() => {
      googleLoginFulfilled('abc');
    }, 500);
  };

  return (
    <Button
      onPress={() => (isLoggingIn ? null : buttonPressed())}
      loading={isLoggingIn}
      disabled={isLoggingIn}
      title="Connect with Google"
      icon={{ 
        type: 'font-awesome', 
        name: 'google', 
        color:'white'}}
      buttonStyle={{backgroundColor: Colors.GOOGLE}}
      disabledStyle={{backgroundColor: Colors.GOOGLE}}
    />
  );
}

const mapStateToProps = (state) => ({
  isLoggingIn: state.auth.google.isLoggingIn
})

export default connect(mapStateToProps, { googleLogin, googleLoginFulfilled })(GoogleLoginButton);
