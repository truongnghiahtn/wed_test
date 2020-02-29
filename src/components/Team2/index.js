import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { connect } from 'react-redux';
import * as action from '../../redux/action/index';
import './style.scss';

const Team2 = props => {
	React.useEffect(() => {
		props.getListTeam();
	}, []);

	let { listTeam } = props;

	const renderHTML = () => {
		return listTeam.map((item, index) => (
			<div className="testimonial-single-item" key={index}>
				<div className="testimonial-image">
					<img src={item.img} alt="image" />
				</div>
				<div className="testimonial-content-text">
					<h3>{item.name}</h3>
					<span>{item.position}</span>
					<div className="icon">
						<i className="flaticon-quote" />
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Quis ipsum suspendisse gravida.
					</p>
				</div>
			</div>
		));
	};
	return (
		<section className="testimonial-section pb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-4">
						<div className="testimonial-content-area">
							<span>Testimonial</span>
							<h3>What Our Client Say</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
								Risus commodo viverra maecenas accumsan lacus.Lorem is simply dummy text of the printing
								and typesetting industry.
							</p>
						</div>
					</div>
					<div className="col-lg-8">
						<OwlCarousel
							className="testimonial-slides owl-theme"
							loop
							nav
							dots
							smartSpeed={2000}
							margin={30}
							autoplayHoverPause
							autoplay
							responsiveClass
							responsive={{
								0: {
									items: 1,
								},
								576: {
									items: 1,
								},
								768: {
									items: 2,
								},
								1200: {
									items: 2,
								},
							}}
							key={`carousel_${listTeam.length}`}
						>
							{renderHTML()}
						</OwlCarousel>
					</div>
				</div>
			</div>
		</section>
	);
};

const mapStateToProps = state => {
	return {
		listTeam: state.deMoReducer.team,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getListTeam: () => {
			dispatch(action.actGetListTeamAPI());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Team2);
