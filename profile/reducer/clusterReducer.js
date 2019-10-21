import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
    profiles: {
        isFetching: false,
        error: null
    }
}

export default function clusterReducer(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}