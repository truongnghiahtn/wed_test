import * as Actiontype from "./../constants/actionType";
import { CallAPI } from "../../utils/CallAPI";

export const actGetListFeatureAPI = () => {
  return dispatch => {
    CallAPI(`feature/api/find`, "GET", null, null)
      .then(res =>
        dispatch({
          type: Actiontype.GET_LIST_FEATURE,
          feature: res.data
        })
      )
      .catch(err => console.log(err.response.data));
  };
};

export const actGetListTeamAPI = () => {
  return dispatch => {
    CallAPI(`team/api/findAll`, "GET", null, null)
      .then(res =>
        dispatch({
          type: Actiontype.GET_LIST_TEAM,
          team: res.data
        })
      )
      .catch(err => console.log(err.response.data));
  };
};

export const actGetInfoCompanyAPI = () => {
  return dispatch => {
    CallAPI(`company/api/findAll`, "GET", null, null)
      .then(res =>
        dispatch({
          type: Actiontype.GET_INFO_COMPANY,
          company: res.data
        })
      )
      .catch(err => console.log(err.response.data));
  };
};

export const actPostInfoCustomerAPI = data => {
  return dispatch => {
    CallAPI(`customer/api/create`, "POST", data, null)
      .then(res =>
        dispatch(
          {
            type: Actiontype.POST_INFO_CUSTOMER,
            customer: data
          },
          console.log(data)
        )
      )
      .catch(err => console.log(err.response.data));
  };
};
