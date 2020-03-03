import React, { Component } from "react";
import PageTitleArea from "../../../components/PageTitleArea/PageTitleArea";
import Subcribe from "../../../components/Subcribe/Subcribe";
import { connect } from "react-redux";
import FormContact from "../../../components/FormContact/index";

class TrangLienHe extends Component {
  render() {
    let { infoCompany } = this.props;

    const renderHTML = info => {
      return infoCompany.slice(0, 2).map((item, index) => {
        switch (info) {
          case "tel":
            return (
              <p key={index}>
                <a href="#">{item.tel_company}</a>
              </p>
            );
          case "email":
            return (
              <p key={index}>
                <a href="#">{item.email_company}</a>
              </p>
            );
          case "address":
            return <p key={index}>{item.address_company}</p>;

          default:
            break;
        }
      });
    };

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
                    {infoCompany.length ? renderHTML("tel") : "#"}
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
                    {infoCompany.length > 0 ? renderHTML("email") : "#"}
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
                    {infoCompany.length ? renderHTML("address") : "#"}
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
