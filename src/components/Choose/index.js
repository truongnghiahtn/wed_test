import React from "react";
import "./style.scss";

const Choose = () => {
  return (
    <section className="choose-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="choose-content-area">
              <span>TẠI SAO CHỌN CHÚNG TÔI</span>
              <h3>Kinh nghiệm kỹ thuật số xuất sắc</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.{" "}
              </p>
              <div className="choose-text">
                <i className="flaticon-check-mark" />
                <h4>Quy trình làm việc đầu tiên</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor abore et dolore magna aliqua.
                </p>
              </div>
              <div className="choose-text">
                <i className="flaticon-check-mark" />
                <h4>Thành viên nhóm chuyên dụng</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor abore et dolore magna aliqua.
                </p>
              </div>
              <div className="choose-text">
                <i className="flaticon-check-mark" />
                <h4>Hỗ trợ 24/7</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor abore et dolore magna aliqua.
                </p>
              </div>
              <div className="choose-btn">
                <a href="#" className="default-btn-one">
                  Khám Phá Nhiều Hơn
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="choose-image">
              <img src="assets/img/choose-image.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
