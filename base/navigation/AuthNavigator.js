import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import * as Routes from '../constant/Routes';
import AppStack from './AppStack';
import AuthStack from '../../auth/navigation/AuthStack';

const { Navigator, Screen } = createStackNavigator();

const AuthNavigator = ({ isLoggedIn }) => {

  return (
    <Navigator
      screenOptions={{ gestureEnabled: false, headerShown: false }}>
      {isLoggedIn ? (
        <Screen name={Routes.APP} component={AppStack} />
      ) : (
        <Screen name={Routes.AUTH} component={AuthStack} />
      )}
    </Navigator>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: !!state.auth.emailLogin.data 
    || !!state.auth.facebook.data 
    || !!state.auth.google.data,
});

export default connect(mapStateToProps)(AuthNavigator);
