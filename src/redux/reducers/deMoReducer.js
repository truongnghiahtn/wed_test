import * as ActionType from '../constants/actionType';

let initialState = {
	team: [],
	company: {},
	listService: [],
	feature: [],
	dataProjects: [],
	dataPrices: [],
	dataBlog: [],
};
const deMoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.GET_LIST_FEATURE:
			state.feature = action.feature.data;
			return { ...state };
		case ActionType.GET_SERVICES:
			state.listService = action.listService;
			return { ...state };
		case ActionType.GET_PROJECTS:
			state.dataProjects = action.dataProjects;
			return { ...state };
		case ActionType.GET_PRICES:
			state.dataPrices = action.dataPrices;
			return { ...state };
		case ActionType.GET_BLOG:
			state.dataBlog = action.dataBlog;
			return { ...state };
		case ActionType.GET_LIST_TEAM:
			state.team = action.team.data;
			return { ...state };
		case ActionType.GET_INFO_COMPANY:
			state.company = action.company.data[0];
			return { ...state };
		default:
			return { ...state };
	}
};
export default deMoReducer;
