import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

import store from './base/store/store';
import AuthSwitchNavigator from './base/navigation/AuthSwitchNavigator';

export default class App extends PureComponent { 

  render() {
    return (
      <Provider store={store}>
        <AuthSwitchNavigator />
      </Provider>
    );
  }
}


