import React from "react";
import { connect } from "react-redux";
import * as action from "../../redux/action/index";

const Footer = props => {
  React.useEffect(() => {
    props.getInfoCompany();
  }, []);

  let { infoCompany } = props;

  return (
    <section className="footer-section ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="footer-area">
              <div className="footer-heading">
                <h3>{infoCompany.name_company}</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
              </p>
              <ul className="footer-social">
                <li>
                  <a href="#" className="bg-3955bc">
                    <i className="flaticon-facebook-logo" />
                  </a>
                </li>
                <li>
                  <a href="#" className="bg-1da1f2">
                    <i className="flaticon-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" className="bg-004dff">
                    <i className="flaticon-paypal" />
                  </a>
                </li>
                <li>
                  <a href="#" className="bg-0273af">
                    <i className="flaticon-linkedin-letters" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="footer-item-area">
              <div className="footer-heading">
                <h3>Liên kết quan trọng</h3>
              </div>
              <ul className="footer-quick-links">
                <li>
                  <a href="#">Về chúng tôi</a>
                </li>
                <li>
                  <a href="#">Dự án</a>
                </li>
                <li>
                  <a href="#">Dịch vụ</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Liên hệ</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="footer-item-area">
              <div className="footer-heading">
                <h3>Dịch vụ nổi bật</h3>
              </div>
              <ul className="footer-quick-links">
                <li>
                  <a href="#">SEO Marketing</a>
                </li>
                <li>
                  <a href="#">SEO Dịch vụ</a>
                </li>
                <li>
                  <a href="#">Dịch vụ</a>
                </li>
                <li>
                  <a href="#">Trả tiền dựa trên mỗi cú nhập chuột</a>
                </li>
                <li>
                  <a href="#">Truyền thông xã hội</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="footer-heading">
              <h3>Liên hệ</h3>
            </div>
            <div className="footer-info-contact">
              <i className="flaticon-call-answer" />
              <h3>Điện thoại</h3>
              <span>{infoCompany.tel_company}</span>
            </div>
            <div className="footer-info-contact">
              <i className="flaticon-envelope" />
              <h3>Email</h3>
              <span>
                <a href="#">{infoCompany.email_company}</a>
              </span>
            </div>
            <div className="footer-info-contact">
              <i className="flaticon-placeholder-filled-point" />
              <h3>Địa chỉ</h3>
              <span>{infoCompany.address_company}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="default-animation">
        <div className="shape-img1">
          <img src="assets/img/shape/12.svg" alt="image" />
        </div>
        <div className="shape-img2">
          <img src="assets/img/shape/13.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="assets/img/shape/14.png" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="assets/img/shape/15.png" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="assets/img/shape/2.png" alt="image" />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    infoCompany: state.deMoReducer.company
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getInfoCompany: () => {
      dispatch(action.actGetInfoCompanyAPI());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
