import React, { Component } from 'react';
import PageTitleArea from '../../../components/PageTitleArea/PageTitleArea';
import Subcribe from '../../../components/Subcribe/Subcribe';
import Pricing from '../../../components/Pricing';
import { connect } from 'react-redux';
import * as action from '../../../redux/action/index';
import classnames from 'classnames';
class TrangThietKeWeb extends Component {
	componentDidMount() {
		this.props.getListService();
	}

	renderContent = () => {
		let color = ['bg-b5a2f8', 'bg-f27e19', 'bg-f27e19', 'bg-1db294', 'bg-e80d82'];
		return (
			<section className="features-area">
				<div className="container">
					<div className="features-title">
						<span>Thiết kế</span>
						<h3>Thiết kế website giá rẻ</h3>
					</div>
					<div className="row">
						{this.props.listService.map((item, index) => {
							return (
								<div className="col-lg-3 col-md-6 col-sm-6 " key={index}>
									<div
										className={classnames(`single-features-item fs-tkw ${color[index]}`)}
										style={{ backgroundImage: item.img }}
									>
										<div className="icon">
											<i className="flaticon-seo" />
										</div>
										<h3>{item.title}</h3>
										<p>{item.content}</p>
									</div>
								</div>
							);
						})}
						{/* <div className="col-lg-3 col-md-6 col-sm-6">
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
						</div> */}
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

const mapStateToProps = state => {
	return {
		listService: state.deMoReducer.listService,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		getListService: () => {
			dispatch(action.getListService());
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(TrangThietKeWeb);
