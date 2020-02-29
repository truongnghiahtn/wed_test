import React, { Component } from 'react';
import About from '../../../components/About';
import Project from '../../../components/Project';
import Subcribe from '../../../components/Subcribe/Subcribe';
export default class TrangVeChungToi extends Component {
	render() {
		return (
			<div>
				<About />
				<Project />
				<Subcribe />
			</div>
		);
	}
}
