import { getActionStatusFunction } from '../../base/action/ActionTypes';

// Login
export const FACEBOOK_LOGIN = getActionStatusFunction('FACEBOOK_LOGIN');
export const GOOGLE_LOGIN = getActionStatusFunction('GOOGLE_LOGIN');
export const EMAIL_LOGIN = getActionStatusFunction('EMAIL_LOGIN');

// Register
export const REGISTER = getActionStatusFunction('REGISTER');