import React, { Component } from 'react';
import PageTitleArea from '../../../components/PageTitleArea/PageTitleArea';
import Subcribe from '../../../components/Subcribe/Subcribe';
import Project from '../../../components/Project';
export default class TrangMauThietKe extends Component {
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
