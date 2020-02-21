import React, { Component } from 'react';

export default class Subcribe extends Component {
	render() {
		return (
			<section className="subscribe-section" style={{ backgroundImage: "url('assets/img/subscribe-bg.jpg')" }}>
				<div className="container-fluid">
					<div className="subscribe-area-content">
						<div className="subscribe-content">
							<span className="sub-title">Bắt đầu ngay!</span>
							<h2>Nhận bản cập nhật mới duy nhất từ ​​bản tin này</h2>
							<form className="newsletter-form">
								<input
									type="email"
									className="input-newsletter"
									placeholder="Nhập Email của bạn"
									name="EMAIL"
									required
									autoComplete="off"
								/>
								<button type="submit">Theo dõi</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
