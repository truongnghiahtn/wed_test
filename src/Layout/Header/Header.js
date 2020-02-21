import React, { Fragment } from "react";
import Sidebar from "../../components/Sidebar/index";
import { NavLink } from "react-router-dom";
import $ from "jquery";

const Header = () => {
  const [isShowing, setIsShowing] = React.useState(false);
  const hideSidebar = hide => {
    setIsShowing(hide);
  };

  React.useEffect(() => {
    // Header Sticky
    $(window).on("scroll", function() {
      if ($(this).scrollTop() > 120) {
        $(".navbar-area").addClass("is-sticky");
      } else {
        $(".navbar-area").removeClass("is-sticky");
      }
    });

    // Search Popup JS
    $(".close-btn").on("click", function() {
      $(".search-overlay").fadeOut();
      $(".search-btn").show();
      $(".close-btn").removeClass("active");
    });
    $(".search-btn").on("click", function() {
      $(this).hide();
      $(".search-overlay").fadeIn();
      $(".close-btn").addClass("active");
    });

    // Mean Menu
    window.jQuery(".mean-menu").meanmenu({
      meanScreenWidth: "991"
    });
  }, []);

  return (
    <Fragment>
      {/* Start Navbar Area */}
      <div className="navbar-area">
        <div className="crimso-responsive-nav">
          <div className="container">
            <div className="crimso-responsive-menu">
              <div className="logo">
                <NavLink to="/">
                  <img src="assets/img/logo.png" alt="logo" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="crimso-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <NavLink className="navbar-brand" to="/">
                <img src="assets/img/logo.png" alt="logo" />
              </NavLink>
              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink to="/Trangchu" className="nav-link active">
                      Trang Chủ <i className="fa fa-plus" />
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="#" className="nav-link active">
                          Trang Chủ Một
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Trang Chủ Hai
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/Chung-toi" className="nav-link">
                      Về chúng tôi
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/Dich-vu" className="nav-link">
                      Dịch vụ <i className="fa fa-plus" />
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="services.html" className="nav-link">
                          Services
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="single-services.html" className="nav-link">
                          Services Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/Mau-thiet-ke" className="nav-link">
                      Dự án <i className="fa fa-plus" />
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="projects.html" className="nav-link">
                          Projects
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="projects-two.html" className="nav-link">
                          Projects Two
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="single-projects.html" className="nav-link">
                          Projects Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/Blog" className="nav-link">
                      Blog <i className="fa fa-plus" />
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="blog-1.html" className="nav-link">
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="single-blog.html" className="nav-link">
                          Blog Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Pages <i className="fa fa-plus" />
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="features.html" className="nav-link">
                          Features
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="team.html" className="nav-link">
                          Team
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pricing.html" className="nav-link">
                          Pricing
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Shop
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="shop.html" className="nav-link">
                              Shop
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="single-product.html" className="nav-link">
                              Single Products
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="cart.html" className="nav-link">
                              Cart
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="checkout.html" className="nav-link">
                              Checkout
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="error-404.html" className="nav-link">
                          404 Error
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="faq.html" className="nav-link">
                          FAQ
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="coming-soon.html" className="nav-link">
                          Coming Soon
                        </a>
                      </li>
                    </ul>
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
                  <div
                    className="burger-menu"
                    onClick={() => setIsShowing(true)}
                  >
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
