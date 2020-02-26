import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Preloader from "../../components/Preloader";
export default class pageNotFound extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Preloader  */}
        <Preloader />
        {/* End Preloader */}
        {/* Start Error Area */}
        <section className="error-area">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="error-content">
                  <img src="assets/img/404.png" alt="error" />
                  <h3>Không tìm thấy trang</h3>
                  <p>
                    Trang bạn đang tìm kiếm có thể đã bị xóa, có tên đã thay đổi
                    hoặc tạm thời không có.
                  </p>
                  <NavLink to="/" className="default-btn-one">
                    Quay trở lại
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Error Area */}
      </React.Fragment>
    );
  }
}
