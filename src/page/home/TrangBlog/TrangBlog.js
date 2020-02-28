import React, { Component, Fragment } from 'react';
import Subcribe from '../../../components/Subcribe/Subcribe';
import PageTitleArea from '../../../components/PageTitleArea/PageTitleArea';
import { connect } from 'react-redux';
import * as actions from '../../../redux/action/index';
class TrangBlog extends Component {
	componentDidMount() {
		this.props.getBlogApi();
	}
	renderContentBlog = () => {
		return this.props.dataBlog.map((item, index) => {
			return (
				<div className="col-lg-4 col-md-6" key={index}>
					<div className="blog-item fix-style">
						<div className="blog-image">
							<a href="#">
								{/* <img src={item.img_blog} alt="image" /> */}
								<img src="assets/img/blog/2.png" alt="image" />
							</a>
						</div>
						<div className="single-blog-item">
							<ul className="date">
								<li>21</li>
								<li>November</li>
							</ul>
							<ul className="blog-list">
								<li>
									<a href="#">
										<i className="fa fa-user-alt" /> By admin
									</a>
								</li>
								<li>
									<i className="far fa-comments" /> 3 Comments
								</li>
							</ul>
							<div className="blog-content">
								<a href="#">
									<h3>{item.title_blog}</h3>
								</a>
								<p>{item.content_blog}</p>
							</div>
							<div className="blog-btn">
								<a href="#" className="blog-btn-one">
									Read More
								</a>
							</div>
						</div>
					</div>
				</div>
			);
		});
	};
	render() {
		return (
			<Fragment>
				<PageTitleArea title="Blog" />
				<section className="blog-page-area ptb-100">
					<div className="container">
						<div className="section-title">
							<span>Blog</span>
							<h3>Xem dự án mới nhất của chúng tôi</h3>
						</div>
						<div className="row">
							{this.renderContentBlog()}
							<div className="col-lg-12 col-md-12">
								<div className="pagination-area">
									<a href="#" className="prev page-numbers">
										<i className="fas fa-angle-double-left" />
									</a>
									<a href="#" className="page-numbers">
										1
									</a>
									<span className="page-numbers current" aria-current="page">
										2
									</span>
									<a href="#" className="page-numbers">
										3
									</a>
									<a href="#" className="page-numbers">
										4
									</a>
									<a href="#" className="next page-numbers">
										<i className="fas fa-angle-double-right" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
				<Subcribe />
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		dataBlog: state.deMoReducer.dataBlog,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getBlogApi: () => {
			dispatch(actions.getBlogApi());
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(TrangBlog);
