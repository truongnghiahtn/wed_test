import React, { Component } from 'react';
import PageTitleArea from '../../../components/PageTitleArea/PageTitleArea';
import Subcribe from '../../../components/Subcribe/Subcribe';

export default class TrangLienHe extends Component {
	render() {
		return (
			<div>
				<PageTitleArea title="Liên hệ" />
				<section className="contact-area ptb-100">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-4 col-md-12">
								<div className="contact-box">
									<div className="icon">
										<i className="fa fa-phone" />
									</div>
									<div className="content">
										<h4>Số điện thoại / Fax</h4>
										<p>
											<a href="#">(+021) 245522455</a>
										</p>
										<p>
											<a href="#">(+000) 245522455</a>
										</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-12">
								<div className="contact-box">
									<div className="icon">
										<i className="fas fa-envelope" />
									</div>
									<div className="content">
										<h4>E-mail</h4>
										<p>
											<a href="#">hello@crimso.com </a>
										</p>
										<p>
											<a href="#">support@crimso.com</a>
										</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-12">
								<div className="contact-box">
									<div className="icon">
										<i className="fa fa-map-marker" />
									</div>
									<div className="content">
										<h4>Địa chỉ</h4>
										<p>
											11 Ven Kênh, Q.12, <span>Tp. Hồ Chí Minh.</span>
										</p>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-6">
								<div className="contact-text">
									<h3>Get in Touch</h3>
									<p>
										Orci varius natoque penatibus et magnis dis parturient montes, nascetur
										ridiculus mus. Etiam tempus magna vel turpis pharetra dictum.
									</p>
									<p>
										Sed blandit tempus purus, sed sodales leo rutrum vel. Nam vulputate ipsum ac est
										congue, eget commodo magna lobortis.
									</p>
									<ul className="social-links">
										<li>
											<a href="#">
												<i className="fab fa-facebook-f" />
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fab fa-twitter" />
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fab fa-instagram" />
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fab fa-linkedin" />
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fab fa-pinterest" />
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-6 col-md-6">
								<form id="contactForm">
									<div className="row">
										<div className="col-lg-6 col-md-12">
											<div className="form-group">
												<input type="text" className="form-control" placeholder="Họ tên" />
											</div>
										</div>
										<div className="col-lg-6 col-md-12">
											<div className="form-group">
												<input type="email" className="form-control" placeholder="Email" />
											</div>
										</div>
										<div className="col-lg-12 col-md-12">
											<div className="form-group">
												<input type="text" className="form-control" placeholder="Tiêu đề" />
											</div>
										</div>
										<div className="col-lg-12 col-md-12">
											<div className="form-group">
												<textarea
													name="message"
													className="form-control"
													placeholder="Nội dung"
													defaultValue={''}
												/>
											</div>
										</div>
										<div className="col-lg-12 col-md-12">
											<div className="send-btn">
												<button type="submit" className="send-btn-one">
													Gửi
												</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
				<Subcribe />
			</div>
		);
	}
}
