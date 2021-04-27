import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import store from './base/store/store';
import AuthNavigator from './base/navigation/AuthNavigator';
import AppLoading from './base/component/AppLoading';
import useCachedResources from './base/hooks/useCachedResources';

export default function App() {

  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <AuthNavigator />
        </NavigationContainer>
      </Provider>
    );
  }
}


