import React from "react";
/* import "./style.scss"; */

const Project = () => {
  React.useEffect(() => {
    window.$("#Container").mixItUp();
  }, []);
  return (
    <section className="project-section">
      <div className="container">
        <div className="section-title">
          <span>Dự án</span>
          <h3>Dự án của chúng tôi cho khách hàng</h3>
        </div>
        <ul className="filter-menu">
          <li className="filter active" data-filter="all">
            Tất Cả
          </li>
          <li className="filter" data-filter=".branding">
            Xây Dựng Thương Hiệu
          </li>
          <li className="filter" data-filter=".marketting">
            Marketing
          </li>
          <li className="filter" data-filter=".seo">
            SEO
          </li>
          <li className="filter" data-filter=".web">
            Web
          </li>
        </ul>
        <div id="Container" className="row">
          <div className="col-lg-4 col-md-6 mix branding">
            <div className="single-project-box">
              <img src="assets/img/project/1.jpg" alt="image" />
              <div className="project-hover-content">
                <h3>
                  <a href="#"> Tối ưu hóa công cụ tìm kiếm</a>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mix marketting">
            <div className="single-project-box">
              <img src="assets/img/project/2.jpg" alt="image" />
              <div className="project-hover-content">
                <h3>
                  <a href="#"> Tối ưu hóa công cụ tìm kiếm</a>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mix seo">
            <div className="single-project-box">
              <img src="assets/img/project/3.jpg" alt="image" />
              <div className="project-hover-content">
                <h3>
                  <a href="#"> Tối ưu hóa công cụ tìm kiếm</a>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mix web">
            <div className="single-project-box">
              <img src="assets/img/project/4.jpg" alt="image" />
              <div className="project-hover-content">
                <h3>
                  <a href="#"> Tối ưu hóa công cụ tìm kiếm</a>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mix branding">
            <div className="single-project-box">
              <img src="assets/img/project/5.jpg" alt="image" />
              <div className="project-hover-content">
                <h3>
                  <a href="#"> Tối ưu hóa công cụ tìm kiếm</a>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mix marketting">
            <div className="single-project-box">
              <img src="assets/img/project/6.jpg" alt="image" />
              <div className="project-hover-content">
                <h3>
                  <a href="#"> Tối ưu hóa công cụ tìm kiếm</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
