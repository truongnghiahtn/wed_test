import React from "react";
/* import "./style.scss"; */

const CopyRight = () => {
  return (
    <div className="copyright-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <p>
              <i className="far fa-copyright" />
              2019 Crimso. Tất cả các quyền thuộc về{" "}
              <a href="https://envytheme.com/" target="_blank">
                EnvyTheme
              </a>
            </p>
          </div>
          <div className="col-lg-6 col-md-6">
            <ul>
              <li>
                <a href="#">Điều khoản &amp; điều kiện</a>
              </li>
              <li>
                <a href="#">Chính sách bảo mật</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
