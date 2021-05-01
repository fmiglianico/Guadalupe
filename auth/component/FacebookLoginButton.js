import React from 'react';
import { connect } from 'react-redux';
import { Button } from "react-native-elements";
import Constants from 'expo-constants';
import * as Facebook from 'expo-facebook';

import { facebookLogin, facebookLoginFulfilled, facebookLoginRejected } from '../reducer/authReducer';
import * as Colors from '../../base/constant/Colors';
import firebase from '../../base/utils/firebase';


function FacebookLoginButton({ isLoggingIn, facebookLogin, facebookLoginFulfilled }) {

  const appId = Constants.manifest.extra.facebook.appId;

  const buttonPressed = async () => {

    facebookLogin();
    await Facebook.initializeAsync({appId});
    const { type, token } = await Facebook.logInWithReadPermissionsAsync();
    switch (type) {
      case 'success': {
        await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);  // Set persistent auth state
        const credential = firebase.auth.FacebookAuthProvider.credential(token);
        const facebookProfileData = await firebase.auth().signInWithCredential(credential);  // Sign in with Facebook credential
  
        // Do something with Facebook profile data
        // OR you have subscribed to auth state change, authStateChange handler will process the profile data
        
        facebookLoginFulfilled(facebookProfileData);
      }
      case 'cancel': {
        facebookLoginRejected("canceled");
      }
    }
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
