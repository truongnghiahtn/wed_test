import * as ActionType from "../constants/actionType";

let initialState = {
  feature: []
};
const deMoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_FEATURE:
      state.feature = action.feature.data;
      return { ...state };
    default:
      return { ...state };
  }
};
export default deMoReducer;
