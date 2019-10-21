import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { Ionicons, MaterialIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import { loadResources, loadResourcesFulfilled, loadResourcesRejected } from '../reducer/baseReducer';
import AppLoading from '../component/AppLoading';
import * as Routes from '../constant/Routes';
import Images from '@asset/images';

class AppLoadingScreen extends PureComponent {

  componentDidMount() {
    this.props.loadResourcesAndInitAuth(this.props.isLoadingAsyncResources, 
      this.props.loadAsyncResourcesError, this.props.navigation.navigate);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isLoadingAsyncResources && !nextProps.loadAsyncResourcesError) {
      const userToken = '';
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      this.props.navigation.navigate(userToken ? Routes.APP : Routes.AUTH);
    }
  }

  render() {
    return <AppLoading />;
  }
}

const loadResourcesAndInitAuth = () => {
  return async (dispatch) => {
    loadAsyncResources(dispatch);
    fetchAuthStatus(dispatch);
  }
}

const loadAsyncResources = async (dispatch) => {
  dispatch(loadResources());
  await Promise.all([
    Asset.loadAsync([
      // Load images
      Images.Background,
      Images.Guadalupe,
      Images.Cluster,
      Images.Wolfgang,
      Images.Lito,
      Images.Riley,
      Images.Will,
      Images.Sun,
      Images.Capheus,
      Images.Naomi,
      Images.Kala
    ]),
    Font.loadAsync({
      // Load icon fonts
      ...Ionicons.font,
      ...FontAwesome.font,
      ...MaterialIcons.font,
      ...MaterialCommunityIcons.font
    }),
  ]).catch((error) => {
    dispatch(loadResourcesRejected(error));
  }).then(() => {
    dispatch(loadResourcesFulfilled());
  })
}

const fetchAuthStatus = async (dispatch) => {
  // TODO : dispatch fetch auth from storage
}

const mapStateToProps = (state) => ({
  isLoadingAsyncResources: state.base.loadResources.isLoading,
  loadAsyncResourcesError: state.base.loadResources.error
});

const mapDispatchToProps = {
  loadResourcesAndInitAuth
}

export default connect(mapStateToProps, mapDispatchToProps)(AppLoadingScreen);
