import * as ActionType from "../constants/actionType";

let initialState = {
  customer: []
};
const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_CUSTOMER:
      state.customer = action.customer.data;
      return { ...state };
    case ActionType.POST_INFO_CUSTOMER:
      state.customer = [...state.customer, action.customer];
      return { ...state };
    default:
      return { ...state };
  }
};
export default customerReducer;
