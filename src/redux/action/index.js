import * as Actiontype from './../constants/actionType';
import { callApi } from '../../utils/callApi';
export const getListService = () => {
	return dispatch => {
		callApi('service/api/find')
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
