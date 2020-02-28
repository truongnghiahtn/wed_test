import React, { Component } from 'react';
import PageTitleArea from '../../../components/PageTitleArea/PageTitleArea';
import Subcribe from '../../../components/Subcribe/Subcribe';
import Project from '../../../components/Project';
import { connect } from 'react-redux';
import * as action from '../../../redux/action/index';
class TrangMauThietKe extends Component {
	componentDidMount() {
		// this.props.getListService();
	}
	render() {
		return (
			<div>
				<PageTitleArea title="Dự án" />
				<Project />
				<Subcribe />
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		listServices: state.deMoReducer.listServices,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		getListService: () => {
			dispatch(action.getListService());
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(TrangMauThietKe);
