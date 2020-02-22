import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
export default class PageTitleArea extends Component {
	render() {
		return (
			<div className="page-title-area" style={{ backgroundImage: "url('./assets/img/page-title-bg.jpg')" }}>
				<div className="d-table">
					<div className="d-table-cell">
						<div className="container">
							<div className="page-title-content">
								{this.props.title ? <h2>{this.props.title}</h2> : ''}
								<ul>
									<li>
										<NavLink to="/">Trang chủ</NavLink>
									</li>
									<li>{this.props.title ? this.props.title : ''}</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
