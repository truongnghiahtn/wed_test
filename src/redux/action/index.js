import * as Actiontype from './../constants/actionType';
import { CallAPI } from '../../utils/callApi';

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

export const getProjectsApi = () => {
	return dispatch => {
		CallAPI('project/api/findAll')
			.then(rs => {
				dispatch({
					type: Actiontype.GET_PROJECTS,
					dataProjects: rs.data.data,
				});
			})
			.catch(err => {
				console.log(err);
			});
	};
};

export const getPricesApi = () => {
	return dispatch => {
		CallAPI('price/api/findAll')
			.then(rs => {
				dispatch({
					type: Actiontype.GET_PRICES,
					dataPrices: rs.data.data,
				});
			})
			.catch(err => {
				console.log(err);
			});
	};
};

export const getBlogApi = () => {
	return dispatch => {
		CallAPI('blog/api/findAll')
			.then(rs => {
				dispatch({
					type: Actiontype.GET_BLOG,
					dataBlog: rs.data.data,
				});
			})
			.catch(err => {
				console.log(err);
			});
	};
};
