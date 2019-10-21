import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';

import { googleLogin, googleLoginFulfilled } from '../reducer/authReducer';
import * as Colors from '../../base/constant/Colors';
import * as Routes from '../../base/constant/Routes';

class GoogleLoginButton extends PureComponent {
  render() {
    return (
      <Button
        onPress={() => (this.props.isLoggingIn ? null : this.props.buttonPressed(this.props.navigation.navigate))}
        loading={this.props.isLoggingIn}
        disabled={this.props.isLoggingIn}
        title="Connect with Google"
        icon={{ 
          type: 'font-awesome', 
          name: 'google', 
          color:'white' }}
        buttonStyle={{backgroundColor:Colors.GOOGLE}}
        disabledStyle={{backgroundColor: Colors.GOOGLE}}
      />
    )
  }
}

buttonPressed = (navigate) => {
  return (dispatch) => {
    dispatch(googleLogin('abc'));
    setTimeout(() => {
      dispatch(googleLoginFulfilled('abc'));
      navigate(Routes.APP);
    }, 300);
  }
};


const mapStateToProps = (state) => ({
  isLoggingIn: state.auth.google.isLoggingIn
})

const mapDispatchToProps = {
  buttonPressed
}

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(GoogleLoginButton));
