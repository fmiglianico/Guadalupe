import { PENDING, FULFILLED, REJECTED } from '../../base/action/ActionTypes';
import { EMAIL_LOGIN, FACEBOOK_LOGIN, GOOGLE_LOGIN, REGISTER } from '../action/AuthActionTypes';

const initialState = {
	emailLogin: {
		email: null,
		password: null,
		isLoggingIn: false,
		error: null,
		data: null
	},
	facebook: {
		isLoggingIn: false,
		error: null,
		data: null
	},
	google: {
		isLoggingIn: false,
		error: null,
		data: null
	}
}

export default function authReducer(state = initialState, action) {
	switch (action.type) {

		// Email

		case EMAIL_LOGIN(PENDING):
			return {
				...state,
				emailLogin: {
					...state.emailLogin,
					email: action.payload.email,
					password: action.payload.password,
					isLoggingIn: true
				}
			}
		case EMAIL_LOGIN(REJECTED):
			return {
				...state,
				emailLogin: {
					...state.emailLogin,
					password: null,
					isLoggingIn: false,
					error: action.payload
				}
			}
		case EMAIL_LOGIN(FULFILLED):
			return {
				...state,
				emailLogin: {
					...state.emailLogin,
					password: null,
					isLoggingIn: false,
					data: action.payload
				}
			}

		// Facebook

		case FACEBOOK_LOGIN(PENDING):
			return {
				...state,
				facebook: {
					...state.facebook,
					isLoggingIn: true,
					error: null,
					data: null
				},
				google: {
					...state.google,
					isLoggingIn: false,
					error: null,
					data: null
				}
			}
		case FACEBOOK_LOGIN(REJECTED):
			return {
				...state,
				facebook: {
					...state.facebook,
					isLoggingIn: false,
					error: action.payload,
					data: null
				}
			}
		case FACEBOOK_LOGIN(FULFILLED):
			return {
				...state,
				facebook: {
					...state.facebook,
					isLoggingIn: false,
					error: null,
					data: action.payload
				}
			}

		// Google
		
		case GOOGLE_LOGIN(PENDING):
			return {
				...state,
				google: {
					...state.google,
					isLoggingIn: true,
					error: null,
					data: null
				},
				facebook: {
					...state.facebook,
					isLoggingIn: false,
					error: null,
					data: null
				}
			}
		case GOOGLE_LOGIN(REJECTED):
			return {
				...state,
				google: {
					...state.google,
					isLoggingIn: false,
					error: action.payload,
					data: null
				}
			}
		case GOOGLE_LOGIN(FULFILLED):
			return {
				...state,
				google: {
					...state.google,
					isLoggingIn: false,
					error: null,
					data: action.payload
				}
			}
		default:
			return state;
	}
}

// Email Login functions
export const emailLogin = (credentials) => {
	return {
		type: EMAIL_LOGIN(PENDING),
		payload: credentials
	}
}

export const emailLoginFulfilled = (data) => {
	return {
		type: EMAIL_LOGIN(FULFILLED),
		payload: data
	}
}

export const emailLoginRejected = (error) => {
	return {
		type: EMAIL_LOGIN(REJECTED),
		payload: error
	}
}

// Google login functions 
export const googleLogin = (userInfo) => {
	return {
			type: GOOGLE_LOGIN(PENDING),
			payload: userInfo
	}
}

export const googleLoginFulfilled = (data) => {
	return {
			type: GOOGLE_LOGIN(FULFILLED),
			payload: data
	}
}

export const googleLoginRejected = (error) => {
	return {
			type: GOOGLE_LOGIN(REJECTED),
			payload: error
	}
}

// Facebook login functions
export const facebookLogin = (userInfo) => {
	return {
		type: FACEBOOK_LOGIN(PENDING),
		payload: userInfo
	}
}

export const facebookLoginFulfilled = (data) => {
	return {
		type: FACEBOOK_LOGIN(FULFILLED),
		payload: data
	}
}

export const facebookLoginRejected = (error) => {
	return {
		type: FACEBOOK_LOGIN(REJECTED),
		payload: error
	}
}