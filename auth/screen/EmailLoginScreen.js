import React, { PureComponent } from 'react';
import { Keyboard, Animated } from 'react-native';
import { Header, Icon } from "react-native-elements";

import BackgroundImage from '../../base/component/BackgroundImage';
import BigLogo from '../../base/component/BigLogo';
import EmailLoginForm from '../component/EmailLoginForm';

export default class EmailLoginScreen extends PureComponent {

	constructor(props) {
    super(props);

		this.translateY = new Animated.Value(0);
  }
	
	componentDidMount() {
		this.keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", this.keyboardDidShow);
		this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
	}

	componentWillUnmount() {
		this.keyboardDidShowListener.remove();
		this.keyboardDidHideListener.remove();
	}

	keyboardDidShow = (event) => {
		Animated.timing(this.translateY, {
			duration: 100,
			toValue: 100 - event.endCoordinates.height,
			useNativeDriver: true
		}).start();
	}

	keyboardDidHide = () => {
		Animated.timing(this.translateY, {
			duration: 100,
			toValue: 0,
			useNativeDriver: true
		}).start();
	}

	// const { State: TextInputState } = TextInput;
	// handleKeyboardDidShow = (event) => {
  //   const { height: windowHeight } = Dimensions.get('window');
  //   const keyboardHeight = event.endCoordinates.height;
  //   const currentlyFocusedField = TextInputState.currentlyFocusedField();
  //   UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
  //     const fieldHeight = height;
  //     const fieldTop = pageY;
  //     const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight);
  //     if (gap >= 0) {
  //       return;
  //     }
  //     Animated.timing(
  //       this.state.shift,
  //       {
  //         toValue: gap,
  //         duration: 1000,
  //         useNativeDriver: true,
  //       }
  //     ).start();
  //   });
  // }

	render({ navigation }) {
		return (
			<BackgroundImage>	
				<Header backgroundColor='transparent' containerStyle={{zIndex: 1}}>
						<Icon
							name="arrow-back"
							color="white"
							onPress={() => navigation.goBack()}
						/>
				</Header>

				<Animated.View style={{
						flex: 1,
						justifyContent: 'flex-start',
						transform: [{translateY: this.translateY}]
					}}
				>
					<BigLogo />
					<EmailLoginForm />
				</Animated.View>
			</BackgroundImage>
		)
	}
}
