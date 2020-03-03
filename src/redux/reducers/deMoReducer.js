import * as ActionType from "../constants/actionType";

let initialState = {
  team: [],
  company: {},
  listService: [],
  feature: [],
  ADMIN_LOGIN: "",
  dataProjects: [],
  dataPrices: [],
  dataBlog: [],
  edit: null,
  customer: [],
  dataCategoryProjects: [],
  loading: null
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
    case ActionType.GET_INFO_COMPANY:
      state.company = action.company.data[0];
      return { ...state };
    case ActionType.EDITTEAM:
      state.edit = action.userTeam;
      return { ...state };
    case ActionType.LOADDINGADMIN:
      state.loading = action.loadding;
      return { ...state };
    case ActionType.GETCUSTOMER:
      state.customer = action.customer1;
      return { ...state };
    case ActionType.ADMIN_LOGIN:
      state.ADMIN_LOGIN = action.ADMIN_LOGIN;
      console.log(state.ADMIN_LOGIN);
      return { ...state };
    case ActionType.GET_CATEGORY_PROJECTS:
      console.log(action);
      state.dataCategoryProjects = action.dataCategoryProjects;
      return { ...state };
    default:
      return { ...state };
  }
};
export default deMoReducer;
