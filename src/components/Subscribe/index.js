import React from "react";
/* import "./style.scss"; */

const Subscribe = () => {
  return (
    <section className="subscribe-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="subscribe-content">
              <h2>Đăng ký để nhận Bản Tin</h2>
              <span className="sub-title">
                Và Nhận Giảm Giá 40% Cho Dự Án Đầu Tiên
              </span>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <form className="newsletter-form">
              <input
                type="email"
                className="input-newsletter"
                placeholder="Nhập email của bạn"
                name="EMAIL"
                required
                autoComplete="off"
              />
              <button type="submit">Theo dõi ngay</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
