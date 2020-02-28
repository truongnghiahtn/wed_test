import * as Actiontype from './../constants/actionType';
import { CallAPI } from '../../utils/callApi';
import swal from "sweetalert";

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
		CallAPI(`feature/api/find`, 'GET', null, null)
			.then(res =>
				dispatch({
					type: Actiontype.GET_LIST_FEATURE,
					feature: res.data,
				})
			)
			.catch(err => console.log(err.response.data));
	};
};
export const getListService = () => {
	return dispatch => {
		CallAPI('service/api/find')
			.then(rs => {
				dispatch({
					type: Actiontype.GET_SERVICES,
					listService: rs.data.data,
				});
			})
			.catch(err => {
				console.log(err);
			});
	};
};
// admin login
export const actloginAdmin = (user, history) => {
	return dispatch => {
		  if (user.taiKhoan === "admin1531999"&& user.matKhau==="00000000") {
			localStorage.setItem("userAdmin", JSON.stringify(user));
			history.push("admin/dashboard");
			dispatch({
				type: Actiontype.ADMIN_LOGIN,
				ADMIN_LOGIN: ""
			  });
		  } else {
			dispatch({
				type: Actiontype.ADMIN_LOGIN,
				ADMIN_LOGIN: "Dang nhap khong thanh cong"
			  });
			setTimeout(() => {
				swal({
				  title: "The account or password is incorrect!",
				  text: "See you again!",
				  icon: "error",
				  buttons: false,
				  timer: 1500
				});
			  }, 150);
		  }
	};
  };
// end admin login
