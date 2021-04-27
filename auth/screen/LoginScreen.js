import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View } from "react-native";
import { Text, Button } from "react-native-elements";

import BackgroundImage from '../../base/component/BackgroundImage';
import BigLogo from "../../base/component/BigLogo";
import * as Routes from '../../base/constant/Routes';
import FacebookLoginButton from '../component/FacebookLoginButton'
import GoogleLoginButton from '../component/GoogleLoginButton';

const LoginScreen = ({ navigation }) => {
	return (
		<BackgroundImage style={{justifyContent: 'space-evenly'}}>
			<BigLogo />
			<View>
				<Text style={{color: 'white', alignSelf: 'center', fontSize: 24}}>Get in touch with your cluster</Text>
			</View>
			<View>
				<FacebookLoginButton navigation={navigation} />
				<GoogleLoginButton navigation={navigation} />
				<Button 
					title="Sign in with email address"
					type="clear" 
					onPress={() => (navigation.push(Routes.EMAIL_LOGIN))}
				/>
				<Button 
					title="Register"
					type="clear" 
					onPress={() => (navigation.push(Routes.REGISTER))}
				/>
			</View>
		</BackgroundImage>
	);
}

export default connect()(LoginScreen);
