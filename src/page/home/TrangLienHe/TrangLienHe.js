import React, { Component } from "react";
import PageTitleArea from "../../../components/PageTitleArea/PageTitleArea";
import Subcribe from "../../../components/Subcribe/Subcribe";
import { connect } from "react-redux";
import FormContact from "../../../components/FormContact/index";

class TrangLienHe extends Component {
  render() {
    let { infoCompany } = this.props;
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
                      <a href="#">
                        {infoCompany ? infoCompany.tel_company : "#"}
                      </a>
                    </p>
                    <p>
                      <a href="#">
                        {infoCompany ? infoCompany.tel_company : "#"}
                      </a>
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
                      <a href="#">
                        {infoCompany ? infoCompany.email_company : "#"}
                      </a>
                    </p>
                    <p>
                      <a href="#">
                        {infoCompany ? infoCompany.email_company : "#"}
                      </a>
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
                      {infoCompany ? infoCompany.address_company : "#"} Việt Nam
                      Number 1
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="contact-text">
                  <h3>Get in Touch</h3>
                  <p>
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Etiam tempus magna vel
                    turpis pharetra dictum.
                  </p>
                  <p>
                    Sed blandit tempus purus, sed sodales leo rutrum vel. Nam
                    vulputate ipsum ac est congue, eget commodo magna lobortis.
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
                <FormContact id={"contactForm"} className={""} />
              </div>
            </div>
          </div>
        </section>
        <Subcribe />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    infoCompany: state.deMoReducer.company
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TrangLienHe);
