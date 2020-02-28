import * as ActionType from "../constants/actionType";

let initialState = {
  feature: [],
  team: [],
  company: {}
};
const deMoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_FEATURE:
      state.feature = action.feature.data;
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
