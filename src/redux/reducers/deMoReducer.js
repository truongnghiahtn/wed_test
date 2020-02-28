import * as ActionType from "../constants/actionType";

let initialState = {
  listService: [],
  feature: [],
  ADMIN_LOGIN: ""
};
const deMoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_FEATURE:
      state.feature = action.feature.data;
      return { ...state };
    case ActionType.GET_SERVICES:
      state.listService = action.listService;
      return { ...state };
    case ActionType.ADMIN_LOGIN:
      state.ADMIN_LOGIN = action.ADMIN_LOGIN;
      console.log(state.ADMIN_LOGIN);
      return { ...state };
    default:
      return { ...state };
  }
};
export default deMoReducer;
