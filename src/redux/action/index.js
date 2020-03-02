import * as Actiontype from "./../constants/actionType";
import { CallAPI } from "../../utils/callApi";
import swal from "sweetalert";

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
export const getListServiceApi = () => {
  return dispatch => {
    CallAPI("service/api/findAll")
      .then(rs =>
        dispatch({
          type: Actiontype.GET_SERVICES,
          listService: rs.data
        })
      )
      .catch(err => {
        console.log(err);
      });
  };
};
// admin login
export const actloginAdmin = (user, history) => {
  return dispatch => {
    // if (user.taiKhoan === "admin1531999" && user.matKhau === "00000000") {
    //   localStorage.setItem("userAdmin", JSON.stringify(user));
    //   history.push("/admin-Dashboard");
    //   dispatch({
    //     type: Actiontype.ADMIN_LOGIN,
    //     ADMIN_LOGIN: ""
    //   });
    // } else {
    //   dispatch({
    //     type: Actiontype.ADMIN_LOGIN,
    //     ADMIN_LOGIN: "Dang nhap khong thanh cong"
    //   });
    //   setTimeout(() => {
    //     swal({
    //       title: "The account or password is incorrect!",
    //       text: "See you again!",
    //       icon: "error",
    //       buttons: false,
    //       timer: 1500
    //     });
    //   }, 150);
    // }
    CallAPI(`api/login`, "POST", user, null)
      .then(result => {
        if (result.data.code === 201) {
          localStorage.setItem("userAdmin", JSON.stringify(result.data));
          history.push("admin/dashboard");
          console.log(result.data);
          dispatch({
            type: Actiontype.ADMIN_LOGIN,
            ADMIN_LOGIN: ""
          });
        } else {
          localStorage.removeItem("userAdmin");
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
      })
      .catch(err => {
        console.log(err);
      });
  };
};
// end admin login

export const getProjectsApi = () => {
  return dispatch => {
    CallAPI("project/api/findAll")
      .then(rs => {
        dispatch({
          type: Actiontype.GET_PROJECTS,
          dataProjects: rs.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const getPricesApi = () => {
  return dispatch => {
    CallAPI("price/api/findAll")
      .then(rs => {
        dispatch({
          type: Actiontype.GET_PRICES,
          dataPrices: rs.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const getBlogApi = () => {
  return dispatch => {
    CallAPI("blog/api/findAll")
      .then(rs => {
        dispatch({
          type: Actiontype.GET_BLOG,
          dataBlog: rs.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const actGetListTeamAPI = () => {
  return dispatch => {
    CallAPI(`team/api/findAll`, "GET", null, null)
      .then(res =>
        dispatch({
          type: Actiontype.GET_LIST_TEAM,
          team: res
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
          company: res
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
// admin team
export const editTeam = data => {
  return dispatch => {
    dispatch({ type: Actiontype.EDITTEAM, userTeam: data });
  };
};
export const actOnEdit = () => {
  return dispatch => {
    dispatch({ type: Actiontype.EDITTEAM, userTeam: null });
  };
};
export const actPostTeam = data => {
  return dispatch => {
    CallAPI(`team/api/create`, "POST", data, null)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err.response.data));
  };
};
export const actPutTeam = data => {
  let userLocal = JSON.parse(localStorage.getItem("userAdmin"));
  let headers = {
    Authorization: `jwt ${userLocal.message.access_token}`
  };
  console.log(data);
  console.log(headers);

  return dispatch => {
    CallAPI(`team/api/update`, "PUT", data, headers)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log("ko dc"));
  };
};
// customer
export const actGetCustomer = () => {
  return dispatch => {
    CallAPI(`customer/api/findAll`, "GET", null, null)
      .then(res =>
        dispatch({
          type: Actiontype.GETCUSTOMER,
          customer1: res.data
        })
      )
      .catch(err => console.log(err.response.data));
  };
};

export const getCategoryProjectsApi = () => {
  return dispatch => {
    CallAPI(`category-project/api/findAll`, "GET", null, null)
      .then(res =>
        dispatch({
          type: Actiontype.GET_CATEGORY_PROJECTS,
          dataCategoryProjects: res.data
        })
      )
      .catch(err => console.log(err.response.data));
  };
};
