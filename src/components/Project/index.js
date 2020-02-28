import React, { Component } from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import * as $ from 'jquery';
import AOS from 'aos';
export default class Project extends Component {
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
			data: [
				{ hinhAnh: 'assets/img/project/1.jpg', name: 'Treem' },
				{ hinhAnh: 'assets/img/project/2.jpg', name: 'khachsan' },
				{ hinhAnh: 'assets/img/project/3.jpg', name: 'caphe' },
				{ hinhAnh: 'assets/img/project/4.jpg', name: 'dulich' },
				{ hinhAnh: 'assets/img/project/5.jpg', name: 'treem' },
				{ hinhAnh: 'assets/img/project/6.jpg', name: 'khachsan' },
			],
			dataShow: [],
		};
	}
	componentDidMount() {
		AOS.init();
		this.setState({
			dataShow: [...this.state.data],
		});
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
		if (name === 'all') {
			this.setState({
				dataShow: [...this.state.data],
			});
		} else {
			let dataShow = this.state.data.filter(item => item.name === name);
			this.setState({
				dataShow,
			});
		}
	};
	renderDataFilter = () => {
		return this.state.dataShow.map((item, index) => {
			return (
				<div key={index} className="col-lg-4 col-md-6" data-aos="zoom-in">
					<div className="single-project-box">
						<img src={item.hinhAnh} alt="image" />
						<div className="project-hover-content">
							<h3>
								<NavLink to="/Chi-tiet-mau-thiet-ke/123"> Xem chi tiết</NavLink>
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
					<div id="Container" className="row">
						{this.renderDataFilter()}
					</div>
				</div>
			</section>
		);
	}
}
