import React, { Component } from 'react';
import PageTitleArea from '../../../components/PageTitleArea/PageTitleArea';
import Subcribe from '../../../components/Subcribe/Subcribe';
import Pricing from '../../../components/Pricing';
export default class TrangThietKeWeb extends Component {
	renderContent = () => {
		return (
			<section className="features-area">
				<div className="container">
					<div className="features-title">
						<span>Thiết kế</span>
						<h3>Thiết kế website giá rẻ</h3>
					</div>
					<div className="row">
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="single-features-item bg-b5a2f8">
								<div className="icon">
									<i className="flaticon-seo" />
								</div>
								<h3>Seo Consultancy</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="single-features-item bg-f27e19">
								<div className="icon">
									<i className="flaticon-analytics" />
								</div>
								<h3>Competitor Analysis</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="single-features-item bg-1db294">
								<div className="icon">
									<i className="flaticon-laptop" />
								</div>
								<h3>Social Media Marketing</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="single-features-item bg-e80d82">
								<div className="icon">
									<i className="flaticon-analysis-1" />
								</div>
								<h3>Skyrocketing Growth</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	};
	render() {
		return (
			<div>
				<PageTitleArea title="Thiết kế website" />
				{this.renderContent()}
				<Pricing />
				<Subcribe />
			</div>
		);
	}
}
