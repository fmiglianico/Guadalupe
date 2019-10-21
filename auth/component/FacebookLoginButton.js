import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';

import { facebookLogin, facebookLoginFulfilled } from '../reducer/authReducer';
import * as Colors from '../../base/constant/Colors';
import * as Routes from '../../base/constant/Routes';

class FacebookLoginButton extends PureComponent {
  render() {
    return (
      <Button
        onPress={() => (this.props.isLoggingIn ? null : this.props.buttonPressed(this.props.navigation.navigate))}
        loading={this.props.isLoggingIn}
        disabled={this.props.isLoggingIn}
        title="Connect with Facebook"
        icon={{ 
          type: 'font-awesome', 
          name: 'facebook', 
          color:'white'}}
        buttonStyle={{backgroundColor: Colors.FACEBOOK}}
        disabledStyle={{backgroundColor: Colors.FACEBOOK}}
      />
    )
  }
}

buttonPressed = (navigate) => {
  return (dispatch) => {
    dispatch(facebookLogin('abc'));
    setTimeout(() => {
      dispatch(facebookLoginFulfilled('abc'));
      navigate(Routes.APP);
    }, 0);
  }
};

const mapStateToProps = (state) => ({
  isLoggingIn: state.auth.facebook.isLoggingIn
})

const mapDispatchToProps = {
  buttonPressed
}

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(FacebookLoginButton));
