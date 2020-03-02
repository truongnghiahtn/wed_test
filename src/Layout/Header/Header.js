import React, { Fragment } from 'react';
import Sidebar from '../../components/Sidebar/index';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

const Header = props => {
	const [isShowing, setIsShowing] = React.useState(false);
	const [isName, setIsName] = React.useState(false);
	const hideSidebar = hide => {
		setIsShowing(hide);
	};

	React.useEffect(() => {
		// Header Sticky
		$(window).on('scroll', function() {
			if ($(this).scrollTop() > 120) {
				$('.navbar-area').addClass('is-sticky');
			} else {
				$('.navbar-area').removeClass('is-sticky');
			}
		});

		// Search Popup JS
		$('.close-btn').on('click', function() {
			$('.search-overlay').fadeOut();
			$('.search-btn').show();
			$('.close-btn').removeClass('active');
		});
		$('.search-btn').on('click', function() {
			$(this).hide();
			$('.search-overlay').fadeIn();
			$('.close-btn').addClass('active');
		});

		// Mean Menu
		window.jQuery('.mean-menu').meanmenu({
			meanScreenWidth: '991',
		});

		if (props.componentName === 'TrangChu') {
			setIsName(true);
		}
	}, []);

	return (
		<Fragment>
			{/* Start Navbar Area */}
			<div className={'navbar-area' + (isName ? '' : ' navbar-two')}>
				<div className="crimso-responsive-nav">
					<div className="container">
						<div className="crimso-responsive-menu">
							<div className="logo">
								<NavLink to="/">
									<img src="../assets/img/logo.png" alt="logo" />
								</NavLink>
							</div>
						</div>
					</div>
				</div>
				<div className="crimso-nav">
					<div className="container">
						<nav className="navbar navbar-expand-md navbar-light">
							<NavLink className="navbar-brand" to="/">
								<img src="../assets/img/logo.png" alt="logo" />
							</NavLink>
							<div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
								<ul className="navbar-nav">
									<li className="nav-item">
										<NavLink
											to="/"
											activeClassName="active"
											className="nav-link"
											isActive={(match, location) => {
												if (!match) {
													return false;
												}
												return location.pathname === '/Trang-chu' || location.pathname === '/';
											}}
										>
											Trang Chủ
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink to="/Thiet-ke-web" className="nav-link">
											Dịch vụ
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink to="/Mau-thiet-ke" className="nav-link">
											Dự án
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink to="/Blog" className="nav-link">
											Giới thiệu <i class="fa fa-plus" aria-hidden="true"></i>
										</NavLink>
										<ul class="dropdown-menu">
											<li class="nav-item">
												<NavLink to="/Blog" className="nav-link">
													Blog
												</NavLink>
											</li>
											<li class="nav-item">
												<NavLink to="/Ve-chung-toi" className="nav-link">
													Về chúng tôi
												</NavLink>
											</li>
										</ul>
									</li>
									<li className="nav-item">
										<NavLink to="/err-404" className="nav-link">
											Sắp tới
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink to="/Lien-he" className="nav-link">
											Liện hệ
										</NavLink>
									</li>
								</ul>
								<div className="others-options">
									<div className="option-item">
										<i className="search-btn fa fa-search" />
										<i className="close-btn fa fa-times" />
										<div className="search-overlay search-popup">
											<div className="search-box">
												<form className="search-form">
													<input
														className="search-input"
														name="search"
														placeholder="Search"
														type="text"
													/>
													<button className="search-button" type="submit">
														<i className="fas fa-search" />
													</button>
												</form>
											</div>
										</div>
									</div>
									<div className="burger-menu" onClick={() => setIsShowing(true)}>
										<span />
										<span />
										<span />
									</div>
								</div>
							</div>
						</nav>
					</div>
				</div>
			</div>
			{/* End Navbar Area */}
			<Sidebar isShowing={isShowing} hide={hideSidebar} />
		</Fragment>
	);
};

export default Header;