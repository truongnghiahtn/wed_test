import React from "react";
/* import "./style.scss"; */

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="section-title">
          <span>Blog</span>
          <h3>Xem dự án mới nhất của chúng tôi</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="blog-item">
              <div className="blog-image">
                <a href="#">
                  <img src="assets/img/blog/1.png" alt="image" />
                </a>
              </div>
              <div className="single-blog-item">
                <ul className="date">
                  <li>21</li>
                  <li>Tháng 2</li>
                </ul>
                <ul className="blog-list">
                  <li>
                    <a href="#">
                      <i className="fa fa-user-alt" /> Bởi quản trị viên
                    </a>
                  </li>
                  <li>
                    <i className="far fa-comments" /> 3 Bình luận
                  </li>
                </ul>
                <div className="blog-content">
                  <a href="#">
                    <h3>Giải pháp tiếp thị khởi nghiệp cho chủ doanh nghiệp</h3>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod incididunt slice
                  </p>
                </div>
                <div className="blog-btn">
                  <a href="#" className="blog-btn-one">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-item">
              <div className="blog-image">
                <a href="#">
                  <img src="assets/img/blog/2.png" alt="image" />
                </a>
              </div>
              <div className="single-blog-item">
                <ul className="date">
                  <li>21</li>
                  <li>Tháng 2</li>
                </ul>
                <ul className="blog-list">
                  <li>
                    <a href="#">
                      <i className="fa fa-user-alt" /> Bởi quản trị viên
                    </a>
                  </li>
                  <li>
                    <i className="far fa-comments" /> 3 Bình luận
                  </li>
                </ul>
                <div className="blog-content">
                  <a href="#">
                    <h3>
                      Làm thế nào để tăng cường cơ quan tiếp thị kỹ thuật số của
                      bạn
                    </h3>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod incididunt slice
                  </p>
                </div>
                <div className="blog-btn">
                  <a href="#" className="blog-btn-one">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
            <div className="blog-item">
              <div className="blog-image">
                <a href="#">
                  <img src="assets/img/blog/3.png" alt="image" />
                </a>
              </div>
              <div className="single-blog-item">
                <ul className="date">
                  <li>21</li>
                  <li>Tháng 2</li>
                </ul>
                <ul className="blog-list">
                  <li>
                    <a href="#">
                      <i className="fa fa-user-alt" /> Bởi quản trị viên
                    </a>
                  </li>
                  <li>
                    <i className="far fa-comments" /> 3 Bình luận
                  </li>
                </ul>
                <div className="blog-content">
                  <a href="#">
                    <h3>
                      Giải pháp sáng tạo để cải thiện doanh nghiệp của bạn!
                    </h3>
                  </a>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod incididunt slice
                  </p>
                </div>
                <div className="blog-btn">
                  <a href="#" className="blog-btn-one">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
