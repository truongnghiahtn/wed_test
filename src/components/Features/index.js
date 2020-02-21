import React from "react";
/* import "./style.scss"; */
const Features = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12">
            <div className="features-content-area">
              <span>TÍNH NĂNG CHĂM SÓC</span>
              <h3>Tạo dịch vụ tuyệt vời với các công cụ của chúng tôi</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply
                dummy text of the printing and typesetting industry.
              </p>
              <div className="features-btn">
                <a href="#" className="features-btn-one">
                  Chi tiết
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="single-features-item bg-f1eff8">
                  <div className="icon">
                    <i className="flaticon-seo" />
                  </div>
                  <h3>Tư vấn Seo</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="single-features-item bg-fbe6d4">
                  <div className="icon">
                    <i className="flaticon-analytics" />
                  </div>
                  <h3>Phân tích đối thủ cạnh tranh</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="single-features-item bg-f0fffc">
                  <div className="icon">
                    <i className="flaticon-laptop" />
                  </div>
                  <h3>Tiếp thị truyền thông xã hội</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="single-features-item bg-f8e1eb">
                  <div className="icon">
                    <i className="flaticon-analysis-1" />
                  </div>
                  <h3>Phân tích đối thủ cạnh tranh</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="features-animation">
        <div className="shape-img1">
          <img src="assets/img/shape/8.png" alt="image" />
        </div>
        <div className="shape-img2">
          <img src="assets/img/shape/5.png" alt="image" />
        </div>
      </div>
    </section>
  );
};

export default Features;
