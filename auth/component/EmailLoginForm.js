import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button, Input, Card } from 'react-native-elements';

import * as Colors from '../../base/constant/Colors';
import { emailLogin, emailLoginFulfilled } from '../reducer/authReducer';

class EmailLoginForm extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      email: null,
      password: null
    }
  }

  togglePasswordVisibility = () => {
    this.setState({showPassword: !this.state.showPassword});
  };

  render() {
    return (
        <Card title='SIGN IN WITH YOUR EMAIL ADDRESS'
          containerStyle={{height: 350, opacity: 0.87}}
          wrapperStyle={{flex:1, justifyContent: 'space-around'}}
        >
          <Input
            placeholder="email@example.com" 
            label="Your email address"
            leftIcon={{ name: 'email', type: 'material-community' }}
            leftIconContainerStyle={{marginLeft: 0, marginRight: 10}}
            keyboardType="email-address"
            returnKeyType="next"
            ref={ref => this._email = ref}
            onSubmitEditing={() => this._password.focus()}
            onChangeText={(email) => this.setState({email})}
          />
          <Input 
            placeholder="Password" 
            label="Password"
            secureTextEntry={!this.state.showPassword}
            leftIcon={{ name: 'lock', type: 'material-community' }} 
            leftIconContainerStyle={{marginLeft: 0, marginRight: 10}}
            rightIcon={{ 
              name: (this.state.showPassword ? 'eye-off' : 'eye'), 
              type: 'material-community', 
              color: Colors.GREY, 
              onPress: this.togglePasswordVisibility
            }}
            ref={ref => this._password = ref}
            onSubmitEditing={(() => this.props.signIn(this.state.email, this.state.password))}
            onChangeText={(password) => this.setState({password})}
            keyboardType="default"
          />
          <Button
            title="Sign in"
            buttonStyle={{backgroundColor: Colors.ORANGE}}
            onPress={(() => this.props.signIn(this.state.email, this.state.password))}
          />
        </Card>
    )
  }
}

signIn = (email, password) => {
  return (dispatch) => {
    dispatch(emailLogin({email, password}));
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  signIn
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailLoginForm);