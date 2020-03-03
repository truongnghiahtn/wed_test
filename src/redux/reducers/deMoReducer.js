import * as ActionType from "../constants/actionType";

let initialState = {
  team: [],
  company: [],
  listService: [],
  feature: [],
  ADMIN_LOGIN: "",
  dataProjects: [],
  dataPrices: [],
  dataBlog: [],
  edit: null,
  customer: [],
  editCompany: null,
  editBlog: null,
  dataCategoryProjects: [],
  editCate: "",
  editService: ""
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
    case ActionType.GET_LIST_COMPANY:
      state.company = action.company.data;
      console.log(action.company.data);

      return { ...state };
    case ActionType.EDITTEAM:
      state.edit = action.userTeam;
      return { ...state };
    case ActionType.GETCUSTOMER:
      state.customer = action.customer1;
      return { ...state };
    case ActionType.ADMIN_LOGIN:
      state.ADMIN_LOGIN = action.ADMIN_LOGIN;
      console.log(state.ADMIN_LOGIN);
      return { ...state };
    //Company
    case ActionType.ADD_COMPANY_API:
      state.company = [...state.company, action.company];

      return { ...state };

    case ActionType.EDIT_COMPANY:
      state.editCompany = action.editCompany;
      return { ...state };

    case ActionType.EDIT_COMPANY_API:
      let stt = state.company.findIndex(item => item._id === action.company.id);
      let listCompanyUpdate = state.company;
      if (stt !== -1) {
        listCompanyUpdate[stt] = action.company;
      }

      state.company = [...listCompanyUpdate];
      console.log(stt, state.company);

      return { ...state };
    case ActionType.EDITCOMPANY:
      state.editCompany = action.company;
      return { ...state };

    case ActionType.DELETE_COMPANY_API:
      let company = state.company.filter(item => action.id !== item._id);
      state.company = company;
      return { ...state };
    //Blog
    case ActionType.ADD_BLOG_API:
      state.dataBlog = [...state.dataBlog, action.blog];

      return { ...state };

    case ActionType.EDIT_BLOG:
      state.editBlog = action.editBlog;
      return { ...state };

    case ActionType.EDIT_BLOG_API:
      let index = state.dataBlog.findIndex(item => item._id === action.blog.id);
      let listBlogUpdate = state.dataBlog;
      if (index !== -1) {
        listBlogUpdate[index] = action.blog;
      }

      state.dataBlog = [...listBlogUpdate];
      return { ...state };
    case ActionType.EDITBLOG:
      state.editBlog = action.blog;
      return { ...state };

    case ActionType.DELETE_BLOG_API:
      let blog = state.dataBlog.filter(item => action.id !== item._id);
      state.dataBlog = blog;
    case ActionType.GET_CATEGORY_PROJECTS:
      console.log(action);
      state.dataCategoryProjects = action.dataCategoryProjects;
      return { ...state };
    case ActionType.EDIT_CATEGORY_PROJECTS:
      console.log(action);
      state.editCate = action.editCate;
      return { ...state };
    case ActionType.EDIT_SERVICE:
      state.editService = action.editService;
      return { ...state };
    case ActionType.ADD_SERVICE:
      state.listService = [...state.listService, action.service];
      return { ...state };
    case ActionType.DELETE_SERVICE:
      let listService = [...state.listService];
      let iindex = state.listService.findIndex(item => {
        return item._id === action._id;
      });
      listService.splice(iindex, 1);
      state.listService = listService;
      return { ...state };
    case ActionType.UPDATE_SERVICE:
      let iService = state.listService.findIndex(
        item => item._id === action.service._id
      );
      let listServiceUpdate = state.listService;
      if (iService !== -1) {
        listServiceUpdate[iService] = action.service;
      }

      state.listService = [...listServiceUpdate];
      return { ...state };
    case ActionType.UPDATE_CATEGORY_PROJECTS:
      console.log(action);
      let iCateProject = state.dataCategoryProjects.findIndex(
        item => item._id === action.data._id
      );
      let dataCategoryProjectsUpdate = state.dataCategoryProjects;
      if (iCateProject !== -1) {
        dataCategoryProjectsUpdate[iCateProject] = action.data;
      }

      state.dataCategoryProjects = [...dataCategoryProjectsUpdate];
      return { ...state };
    default:
      return { ...state };
  }
};
export default deMoReducer;
