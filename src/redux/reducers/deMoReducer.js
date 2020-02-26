import * as ActionType from '../constants/actionType';

let initialState = {
	listService: [],
};
const deMoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.GET_SERVICES:
			state.listService = action.listService;
			return { ...state };
		default:
			return { ...state };
	}
};
export default deMoReducer;
