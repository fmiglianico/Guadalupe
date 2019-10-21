import { TOGGLE_MESSAGE_SELECTION } from '../action/ChatActionTypes';

const initialState = {
	selectedMessageId: null
}

export default function chatReducer(state = initialState, action) {
	switch (action.type) {

		// Chat message selection
		
		case TOGGLE_MESSAGE_SELECTION:
			if (state.selectedMessageId === action.payload)
			{
				return {
					...state,
					selectedMessageId: null
				}
			}
			return {
				...state,
				selectedMessageId: action.payload
			}

		// Default

		default:
			return state;
	}
}

export const toggleMessageSelection = (selectedMessageId) => {
	return {
		type: TOGGLE_MESSAGE_SELECTION,
		payload: selectedMessageId
	}
}
