import React, { Component } from 'react';
import PageTitleArea from '../../../components/PageTitleArea/PageTitleArea';
import classnames from 'classnames';
import Subcribe from '../../../components/Subcribe/Subcribe';
export default class TrangMauThietKe extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: [
				{ text: 'Tất cả', dataFilter: 'all' },
				{ text: 'Trẻ em', dataFilter: '.Treem' },
				{ text: 'Khách sạn', dataFilter: '.khachsan' },
				{ text: 'Cà phê', dataFilter: '.caphe' },
				{ text: 'Du lịch', dataFilter: '.dulich' },
			],
			data: [
				{ hinhAnh: 'assets/img/project/1.jpg', link: '#', category: 'Treem' },
				{ hinhAnh: 'assets/img/project/2.jpg', link: '#', category: 'khachsan' },
				{ hinhAnh: 'assets/img/project/3.jpg', link: '#', category: 'caphe' },
				{ hinhAnh: 'assets/img/project/4.jpg', link: '#', category: 'dulich' },
				{ hinhAnh: 'assets/img/project/5.jpg', link: '#', category: 'Treem' },
				{ hinhAnh: 'assets/img/project/6.jpg', link: '#', category: 'khachsan' },
			],
		};
	}
	renderFilterMenu = () => {
		return this.state.filter.map((item, index) => {
			return (
				<li
					className={classnames('filter', {
						active: index === 0,
					})}
					data-filter={item.dataFilter}
					key={index}
				>
					{item.text}
				</li>
			);
		});
	};
	renderDataFilter = () => {
		return this.state.data.map((item, index) => {
			return (
				<div key={index} className={classnames(`col-lg-4 col-md-6 mix ${item.category}`)} >
					<div className="single-project-box">
						<img src={item.hinhAnh} alt="image" />
						<div className="project-hover-content">
							<h3>
								<a href="#"> Xem chi tiết</a>
							</h3>
						</div>
					</div>
				</div>
			);
		});
	};
	render() {
		return (
			<div>
				<PageTitleArea title="Mẫu thiết kế" />
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
				<Subcribe />
			</div>
		);
	}
}
