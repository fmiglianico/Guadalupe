import { combineReducers } from 'redux';

import baseReducer from './baseReducer';
import authReducer from '../../auth/reducer/authReducer';
import chatReducer from '../../chat/reducer/chatReducer';

export default combineReducers({
    base: baseReducer, 
    auth: authReducer, 
    chat: chatReducer
});