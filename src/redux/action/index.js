import * as Actiontype from "./../constants/actionType";
import { CallAPI } from "../../utils/CallAPI";

/* export const actGetListFeatureAPI = () => {
  return dispatch => {
    CallAPI("feature/api/find", "GET", null, null).then(res =>
      dispatch({
        type: Actiontype.GET_LIST_FEATURE,
        feature: res.data
      }).catch(err => console.log(err))
    );
  };
}; */

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
