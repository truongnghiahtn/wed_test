import React, { Component } from 'react';
import classnames from 'classnames';
export default class Pricing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					title: 'Cơ Bản',
					gia: 24,
					moTa: ['Chọn mẫu và chỉnh sửa', 'Tặng tên miền Quốc tế', 'Dung lượng: 1200MB', 'Băng thông: 60Gb'],
				},
				{
					title: 'Tiêu chuẩn',
					gia: 59,
					moTa: [
						'Chỉnh sửa theo yêu cầu (02 lần)',
						'Tặng tên miền Quốc tế',
						'Dung lượng: 2800MB',
						'Băng thông: 200Gb',
					],
				},
				{
					title: 'Cao Cấp',
					gia: 89,
					moTa: [
						'Chọn mẫu và chỉnh sửa',
						'Tặng tên miền Quốc tế',
						'Dung lượng: 4500MB',
						'Băng thông: Không giới hạn',
					],
				},
			],
			className: ['bg-f6f5fb', 'bg-ed0678', 'bg-edfbf8'],
		};
	}
	renderPricingWebsite = isMonth => {
		return this.state.data.map((item, index) => {
			return (
				<div className="col-lg-4 col-md-6 col-sm-6" key={index}>
					<div className={classnames(`single-pricing-box ${this.state.className[index]}`)}>
						<div className="pricing-header">
							<h3>{item.title}</h3>
						</div>
						<div className="price">
							<strong>$</strong>
							<span>{isMonth ? item.gia : item.gia * 10}</span>
						</div>
						<ul className="pricing-features">
							{item.moTa.map((item2, index2) => {
								return (
									<li key={index2}>
										<i className="flaticon-check-mark" />
										{item2}
									</li>
								);
							})}
						</ul>
						<div className="price-btn">
							<a href="#" className="price-btn-one">
								Bắt đầu
							</a>
						</div>
					</div>
				</div>
			);
		});
	};
	render() {
		return (
			<section className="pricing-section ptb-100">
				<div className="container">
					<div className="section-title">
						<span>Bảng giá</span>
						<h3>Bảng giá thiết kế website</h3>
					</div>
					<div className="tab pricing-tab">
						<ul className="nav tabs" id="myTab" role="tablist">
							<li className="nav-item">
								<a
									className="nav-link active"
									id="month-tab"
									data-toggle="tab"
									href="#month"
									role="tab"
								>
									Tháng
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" id="year-tab" data-toggle="tab" href="#year" role="tab">
									Năm
								</a>
							</li>
						</ul>
						<div className="tab-content" id="myTabContent">
							<div
								className="tab-pane fade show active"
								id="month"
								role="tabpanel"
								aria-labelledby="month-tab"
							>
								<div className="tabs-item">
									<div className="row">{this.renderPricingWebsite(true)}</div>
								</div>
							</div>
							<div className="tab-pane fade" id="year" role="tabpanel" aria-labelledby="year-tab">
								<div className="tabs-item">
									<div className="row">{this.renderPricingWebsite(false)}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
