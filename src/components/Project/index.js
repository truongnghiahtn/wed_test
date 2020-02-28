import React, { Component } from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import * as $ from 'jquery';
import { connect } from 'react-redux';
import * as actions from '../../redux/action/index';
class Project extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: [
				{ text: 'Tất cả', name: 'all' },
				{ text: 'Trẻ em', name: 'treem' },
				{ text: 'Khách sạn', name: 'khachsan' },
				{ text: 'Cà phê', name: 'caphe' },
				{ text: 'Du lịch', name: 'dulich' },
			],
			dataShow: [],
		};
	}
	componentDidMount() {
		this.props.getProjectsApi();
	}
	componentDidUpdate(nextProps) {
		let { dataProjects } = this.props;
		if (nextProps.dataProjects !== dataProjects) {
			this.setState({
				dataShow: [...this.props.dataProjects],
			});
		}
	}
	renderFilterMenu = () => {
		return this.state.filter.map((item, index) => {
			return (
				<li
					className={classnames(`filter ${item.name}`, {
						show: index === 0,
					})}
					key={index}
					onClick={() => {
						this.handleOnSelect(item.name);
					}}
				>
					{item.text}
				</li>
			);
		});
	};
	handleOnSelect = name => {
		$('.filter').removeClass('show');
		$(`.${name}`).addClass('show');
		$('.e-project').addClass('active');
		setTimeout(() => {
			$('.e-project').removeClass('active');
		}, 500);
		if (name === 'all') {
			this.setState({
				dataShow: [...this.props.dataProjects],
			});
		} else {
			let dataShow = this.state.data.filter(item => item.name === name);
			this.setState({
				dataShow,
			});
		}
	};
	renderDataFilter = () => {
		console.log(this.props.dataProjects);
		return this.state.dataShow.map((item, index) => {
			return (
				<div key={index} className="col-lg-4 col-md-6">
					<div className="single-project-box fix-style">
						{/* <img src={item.hinhAnh} alt="image" /> */}
						<img src="./assets/img/services-details-image/1.jpg" />
						<div className="project-content">
							<div>
								<h3>{item.name_project}</h3>
								<p>{item.content_project}</p>
							</div>
						</div>
						<div className="project-hover-content">
							<h3>
								<NavLink to={`/Chi-tiet-mau-thiet-ke/${item._id}`}> Xem chi tiết</NavLink>
							</h3>
						</div>
					</div>
				</div>
			);
		});
	};
	render() {
		return (
			<section className="project-section pt-100">
				<div className="container">
					<div className="section-title">
						<span>Dự án</span>
						<h3>Dự án của chúng tôi</h3>
					</div>
					<ul className="filter-menu">{this.renderFilterMenu()}</ul>
					<div id="Container" className="row e-project">
						{this.renderDataFilter()}
					</div>
				</div>
			</section>
		);
	}
}

const mapStateToProps = state => {
	return {
		dataProjects: state.deMoReducer.dataProjects,
	};
};

const mapDispatchToprops = dispatch => {
	return {
		getProjectsApi: () => {
			dispatch(actions.getProjectsApi());
		},
	};
};
export default connect(mapStateToProps, mapDispatchToprops)(Project);
