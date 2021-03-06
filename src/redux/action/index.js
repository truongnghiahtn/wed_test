import * as Actiontype from "./../constants/actionType";
import { CallAPI } from "../../utils/callApi";
import swal from "sweetalert";

export const actGetListFeatureAPI = () => {
  return dispatch => {
    CallAPI(`feature/api/findAll`, "GET", null, null)
      .then(res =>
        dispatch({
          type: Actiontype.GET_LIST_FEATURE,
          feature: res.data
        })
      )
      .catch(err => console.log(err.response.data));
  };
};

export const getCateServiceApi = () => {
  return dispatch => {
    CallAPI("category-service/api/findAll").then(rs => {
      dispatch({
        type: Actiontype.GET_CATEGORY_SERVICE,
        dataCategoryService: rs.data
      });
    });
  };
};
export const getListServiceApi = () => {
  return dispatch => {
    CallAPI("service/api/findAll")
      .then(rs => {
        dispatch({
          type: Actiontype.GET_SERVICES,
          listService: rs.data
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

export const actGetListCompanyAPI = () => {
  return dispatch => {
    CallAPI(`company/api/findAll`, "GET", null, null)
      .then(res =>
        dispatch({
          type: Actiontype.GET_LIST_COMPANY,
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

  return dispatch => {
    CallAPI(`team/api/update`, "PUT", data, headers)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log("ko dc"));
  };
};
export const deleteTeam = data => {
  let userLocal = JSON.parse(localStorage.getItem("userAdmin"));
  let headers = {
    Authorization: `jwt ${userLocal.message.access_token}`
  };
  console.log(data);
  let data1 = {
    id: data._id
  };

  return dispatch => {
    CallAPI(`team/api/delete`, "DELETE", data1, headers)
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
//Company
export const actAddCompanyAPI = data => {
  let userLocal = JSON.parse(localStorage.getItem("userAdmin"));
  let headers = {
    Authorization: `jwt ${userLocal.message.access_token}`
  };

  return dispatch => {
    CallAPI(`company/api/create`, "POST", data, headers)
      .then(res => {
        setTimeout(() => {
          swal({
            title: "Good job!",
            text: `${res.statusText}!`,
            icon: "success",
            buttons: false,
            timer: 1500
          });
        }, 150);
        dispatch({
          type: Actiontype.ADD_COMPANY_API,
          company: res.data
        });
      })
      .catch(err =>
        setTimeout(() => {
          swal({
            title: "Err",
            text: `${err.response.data.error}!`,
            icon: "error",
            buttons: false,
            timer: 1500
          });
        }, 150)
      );
  };
};

export const actGetEditCompany = company => {
  return {
    type: Actiontype.EDIT_COMPANY,
    editCompany: company
  };
};

export const actOnEditCompany = () => {
  return dispatch => {
    dispatch({ type: Actiontype.EDITCOMPANY, company: null });
  };
};

export const actEditCompanyAPI = data => {
  let userLocal = JSON.parse(localStorage.getItem("userAdmin"));
  let headers = {
    Authorization: `jwt ${userLocal.message.access_token}`
  };

  return dispatch => {
    CallAPI(`company/api/update`, "PUT", data, headers)
      .then(res => {
        setTimeout(() => {
          swal({
            title: "Good job!",
            text: `${res.statusText}!`,
            icon: "success",
            buttons: false,
            timer: 1500
          });
        }, 150);
        dispatch({
          type: Actiontype.EDIT_COMPANY_API,
          company: res.data
        });
      })
      .catch(err =>
        setTimeout(() => {
          swal({
            title: "Creation failed",
            text: `${err.response.data.error}!`,
            icon: "error",
            buttons: false,
            timer: 1500
          });
        }, 150)
      );
  };
};

export const actDeleteCompanyAPI = id => {
  let userLocal = JSON.parse(localStorage.getItem("userAdmin"));
  let headers = {
    Authorization: `jwt ${userLocal.message.access_token}`
  };
  return dispatch => {
    CallAPI(`company/api/delete`, "DELETE", { id }, headers)
      .then(res => {
        setTimeout(() => {
          swal({
            title: "Good job!",
            text: `${res.statusText}!`,
            icon: "success",
            buttons: false,
            timer: 1500
          });
        }, 150);
        dispatch({
          type: Actiontype.DELETE_COMPANY_API,
          _id: res.data._id
        });
      })
      .catch(err =>
        setTimeout(() => {
          swal({
            title: "Delete failed",
            text: `${err.response.data.error}!`,
            icon: "error",
            buttons: false,
            timer: 1500
          });
        }, 150)
      );
  };
};

//Blog
export const actAddBlogAPI = data => {
  let userLocal = JSON.parse(localStorage.getItem("userAdmin"));
  let headers = {
    Authorization: `jwt ${userLocal.message.access_token}`
  };

  return dispatch => {
    CallAPI(`blog/api/create`, "POST", data, headers)
      .then(res => {
        setTimeout(() => {
          swal({
            title: "Good job!",
            text: `${res.statusText}!`,
            icon: "success",
            buttons: false,
            timer: 1500
          });
        }, 150);
        dispatch({
          type: Actiontype.ADD_BLOG_API,
          blog: res.data
        });
      })
      .catch(err => {
        setTimeout(() => {
          swal({
            title: "Creation failed",
            text: `${err.response.data.error}!`,
            icon: "error",
            buttons: false,
            timer: 1500
          });
        }, 150);
      });
  };
};

export const actGetEditBlog = blog => {
  return {
    type: Actiontype.EDIT_BLOG,
    editBlog: blog
  };
};

export const actOnEditBlog = () => {
  return dispatch => {
    dispatch({ type: Actiontype.EDITBLOG, blog: null });
  };
};

export const actEditBlogAPI = data => {
  let userLocal = JSON.parse(localStorage.getItem("userAdmin"));
  let headers = {
    Authorization: `jwt ${userLocal.message.access_token}`
  };

  return dispatch => {
    CallAPI(`blog/api/update`, "PUT", data, headers)
      .then(res => {
        setTimeout(() => {
          swal({
            title: "Good job!",
            text: `${res.statusText}!`,
            icon: "success",
            buttons: false,
            timer: 1500
          });
        }, 150);
        dispatch({
          type: Actiontype.EDIT_BLOG_API,
          blog: res.data
        });
      })
      .catch(err =>
        setTimeout(() => {
          swal({
            title: "Error",
            text: `${err.response.data.error}!`,
            icon: "error",
            buttons: false,
            timer: 1500
          });
        }, 150)
      );
  };
};

export const actDeleteBlogAPI = id => {
  let userLocal = JSON.parse(localStorage.getItem("userAdmin"));
  let headers = {
    Authorization: `jwt ${userLocal.message.access_token}`
  };

  return dispatch => {
    CallAPI(`blog/api/delete`, "DELETE", { id }, headers)
      .then(res => {
        console.log(res, "abc");
        if (res)
          setTimeout(() => {
            swal({
              title: "Good job!",
              text: `${res.statusText}!`,
              icon: "success",
              buttons: false,
              timer: 1500
            });
          }, 150);
        dispatch({
          type: Actiontype.DELETE_BLOG_API,
          _id: res.data._id
        });
      })
      .catch(err => {
        setTimeout(() => {
          swal({
            title: "Error",
            text: `${err.response.data.error}!`,
            icon: "error",
            buttons: false,
            timer: 1500
          });
        }, 150);
      });
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
export const editCategoryProjects = data => {
  return dispatch => {
    dispatch({ type: Actiontype.EDIT_CATEGORY_PROJECTS, editCate: data });
  };
};

export const editCategoryProjectsApi = data => {
  let userLocal = JSON.parse(localStorage.getItem("userAdmin"));
  let headers = {
    Authorization: `jwt ${userLocal.message.access_token}`
  };

  return dispatch => {
    CallAPI(`category-project/api/update`, "PUT", data, headers)
      .then(res => {
        setTimeout(() => {
          swal({
            title: "Good job!",
            text: `${res.statusText}!`,
            icon: "success",
            buttons: false,
            timer: 1500
          });
        }, 150);
        dispatch({
          type: Actiontype.UPDATE_CATEGORY_PROJECTS,
          data: res.data
        });
      })
      .catch(err => console.log("ko dc"));
  };
};

export const editService = data => {
  return dispatch => {
    dispatch({
      type: Actiontype.EDIT_SERVICE,
      editService: data
    });
  };
};

export const addServiceApi = data => {
  let userLocal = JSON.parse(localStorage.getItem("userAdmin"));
  let headers = {
    Authorization: `jwt ${userLocal.message.access_token}`
  };
  return dispatch => {
    CallAPI(`service/api/create`, "POST", data, headers)
      .then(res => {
        setTimeout(() => {
          swal({
            title: "Good job!",
            text: `${res.statusText}!`,
            icon: "success",
            buttons: false,
            timer: 1500
          });
        }, 150);
        dispatch({
          type: Actiontype.ADD_SERVICE,
          service: res.data
        });
      })
      .catch(err => console.log(err.response.data));
  };
};

export const editServiceApi = data => {
  console.log(data);
  let userLocal = JSON.parse(localStorage.getItem("userAdmin"));
  let headers = {
    Authorization: `jwt ${userLocal.message.access_token}`
  };
  return dispatch => {
    CallAPI(`service/api/update`, "PUT", { ...data, id: data._id }, headers)
      .then(rs => {
        console.log(rs);
        setTimeout(() => {
          swal({
            title: "Good job!",
            text: `${rs.statusText}!`,
            icon: "success",
            buttons: false,
            timer: 1500
          });
        }, 150);
        dispatch({
          type: Actiontype.UPDATE_SERVICE,
          service: rs.data
        });
      })
      .catch(err => console.log("ko dc"));
  };
};

export const deleteServiceApi = id => {
  let userLocal = JSON.parse(localStorage.getItem("userAdmin"));
  let headers = {
    Authorization: `jwt ${userLocal.message.access_token}`
  };
  return dispatch => {
    CallAPI("service/api/delete", "DELETE", { id }, headers).then(rs => {
      setTimeout(() => {
        swal({
          title: "Good job!",
          text: `${rs.statusText}!`,
          icon: "success",
          buttons: false,
          timer: 1500
        });
      }, 150);
      dispatch({
        type: Actiontype.DELETE_SERVICE,
        _id: rs.data._id
      });
    });
  };
};

// project
export const actPostProject = data => {
  console.log(data);
};

export const actPutProject = data => {
  console.log(data);
};

export const deleteProject = data => {
  let userLocal = JSON.parse(localStorage.getItem("userAdmin"));
  let headers = {
    Authorization: `jwt ${userLocal.message.access_token}`
  };
  console.log(data);
  let data1 = {
    id: data
  };

  return dispatch => {
    CallAPI(`project/api/delete`, "DELETE", data1, headers)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log("ko dc"));
  };
};
//
export const setloading = () => {
  return dispatch => {
    dispatch({ type: Actiontype.LOADDINGADMIN, loadding: null });
  };
};
export const getloading = () => {
  console.log("memay");
  return dispatch => {
    dispatch({ type: Actiontype.LOADDINGADMIN, loadding: "ok" });
  };
};

//Price
export const actAddPriceAPI = data => {
  let userLocal = JSON.parse(localStorage.getItem("userAdmin"));
  let headers = {
    Authorization: `jwt ${userLocal.message.access_token}`
  };

  return dispatch => {
    CallAPI(`price/api/create`, "POST", data, headers)
      .then(res => {
        setTimeout(() => {
          swal({
            title: "Good job!",
            text: `${res.statusText}!`,
            icon: "success",
            buttons: false,
            timer: 1500
          });
        }, 150);
        dispatch({
          type: Actiontype.ADD_PRICE_API,
          price: res.data
        });
      })
      .catch(err => {
        setTimeout(() => {
          swal({
            title: "Creation failed",
            text: `${err.response.data.error}!`,
            icon: "error",
            buttons: false,
            timer: 1500
          });
        }, 150);
      });
  };
};

export const actGetEditPrice = price => {
  return {
    type: Actiontype.EDIT_PRICE,
    editPrice: price
  };
};

export const actOnEditPrice = () => {
  return dispatch => {
    dispatch({ type: Actiontype.EDITPRICE, price: null });
  };
};

export const actEditPriceAPI = data => {
  let userLocal = JSON.parse(localStorage.getItem("userAdmin"));
  let headers = {
    Authorization: `jwt ${userLocal.message.access_token}`
  };

  return dispatch => {
    CallAPI(`price/api/update`, "PUT", data, headers)
      .then(res => {
        setTimeout(() => {
          swal({
            title: "Good job!",
            text: `${res.statusText}!`,
            icon: "success",
            buttons: false,
            timer: 1500
          });
        }, 150);
        dispatch({
          type: Actiontype.EDIT_PRICE_API,
          price: res.data
        });
      })
      .catch(err => {
        setTimeout(() => {
          swal({
            title: "Error",
            text: `${err.response.data.error}!`,
            icon: "error",
            buttons: false,
            timer: 1500
          });
        }, 150);
      });
  };
};

export const actDeletePriceAPI = id => {
  let userLocal = JSON.parse(localStorage.getItem("userAdmin"));
  let headers = {
    Authorization: `jwt ${userLocal.message.access_token}`
  };

  return dispatch => {
    CallAPI(`price/api/delete`, "DELETE", { id }, headers)
      .then(res => {
        if (res)
          //fix
          setTimeout(() => {
            swal({
              title: "Good job!",
              text: `${res.statusText}!`,
              icon: "success",
              buttons: false,
              timer: 1500
            });
          }, 150);
        dispatch({
          type: Actiontype.DELETE_PRICE_API,
          _id: res.data._id
        });
      })
      .catch(err => {
        setTimeout(() => {
          swal({
            title: "Error",
            text: ` ${err.response.data.error} !`,
            icon: "error",
            buttons: false,
            timer: 1500
          });
        }, 150);
      });
  };
};
