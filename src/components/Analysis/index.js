import React from "react";
import "./style.scss";
const Analysis = () => {
  return (
    <section className="analysis-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="analysis-image">
              <img src="assets/img/analysis-image.png" alt="image" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="analysis-area-content">
              <span>PHÂN TÍCH</span>
              <h3>Nhận phân tích SEO miễn phí</h3>
              <strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </strong>
            </div>
            <form className="contactForm">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Tên của bạn*"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="text"
                      id="text"
                      className="form-control"
                      placeholder="Email*"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      id="phone"
                      className="form-control"
                      placeholder="Điện thoại*"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      id="website"
                      className="form-control"
                      placeholder="Website*"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="send-btn">
                    <button type="submit" className="default-btn-one">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analysis;
