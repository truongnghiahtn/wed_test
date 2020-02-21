import React from "react";
/* import "./style.scss"; */

const Sidebar = props => {
  let { isShowing, hide } = props;
  return (
    <React.Fragment>
      <div className={"sidebar-modal" + (isShowing ? " active" : "")}>
        <div className="sidebar-modal-inner">
          <div className="sidebar-about-area">
            <div className="title">
              <h2>Về chúng tôi</h2>
              <p>
                Chúng tôi tin rằng tương tác thương hiệu là chìa khóa trong giao
                tiếp. Những đổi mới thực sự và trải nghiệm khách hàng tích cực
                là trái tim của giao tiếp thành công. Không có sản phẩm và dịch
                vụ giả mạo. Khách hàng là thượng đế, cuộc sống và nhu cầu của họ
                là nguồn cảm hứng.
              </p>
            </div>
          </div>
          <div className="sidebar-instagram-feed">
            <h2>Instagram</h2>
            <ul>
              <li>
                <a href="#">
                  <img src="assets/img/instagram-image/1.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/instagram-image/2.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/instagram-image/3.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/instagram-image/4.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/instagram-image/5.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/instagram-image/6.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/instagram-image/7.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/instagram-image/8.jpg" alt="image" />
                </a>
              </li>
            </ul>
          </div>
          <div className="sidebar-contact-area">
            <div className="contact-info">
              <div className="contact-info-content">
                <h2>
                  <a href="tel:+0881306298615">+088 130 629 8615</a>
                  <span>OR</span>
                  <a href="mailto:crimso@gmail.com">crimso@gmail.com</a>
                </h2>
                <ul className="social">
                  <li>
                    <a href="#" target="_blank">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <span
            className="close-btn sidebar-modal-close-btn"
            onClick={() => hide(false)}
          >
            <i className="fa fa-times" />
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
