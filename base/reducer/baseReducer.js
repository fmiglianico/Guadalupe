import * as ActionTypes from '../action/ActionTypes';

const initialState = {
	loadResources: {
		isLoading: true,
		error: null
	}
}

export default function baseReducer(state = initialState, action) {
	switch (action.type) {

		// Load Resources

		case ActionTypes.LOAD_ASYNC_RESOURCES(ActionTypes.PENDING):
			return {
				...state,
				loadResources: {
					...state.loadResources,
					isLoading: true,
					error: null
				}
			}
		case ActionTypes.LOAD_ASYNC_RESOURCES(ActionTypes.REJECTED):
			return {
				...state,
				loadResources: {
					...state.loadResources,
					isLoading: false,
					error: action.payload
				}
			}
		case ActionTypes.LOAD_ASYNC_RESOURCES(ActionTypes.FULFILLED):
			return {
				...state,
				loadResources: {
					...state.loadResources,
					isLoading: false,
					error: null
				}
			}

		// Default

		default:
			return state;
	}
}

// Load resources function
export const loadResources = () => {
	return {
		type: ActionTypes.LOAD_ASYNC_RESOURCES(ActionTypes.PENDING),
		payload: null
	}
}

export const loadResourcesFulfilled = () => {
	return {
		type: ActionTypes.LOAD_ASYNC_RESOURCES(ActionTypes.FULFILLED),
		payload: null
	}
}

export const loadResourcesRejected = (error) => {
	return {
		type: ActionTypes.LOAD_ASYNC_RESOURCES(ActionTypes.REJECTED),
		payload: error
	}
}
