import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
    isFetching: false,
    error: null
}

export default function userProfilerReducer(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}