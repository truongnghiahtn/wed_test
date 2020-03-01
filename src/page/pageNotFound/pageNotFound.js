import React, { Component } from "react";
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
                  <button
                    onClick={() =>
                      this.props.history.length > 2
                        ? this.props.history.goBack()
                        : this.props.history.push("/")
                    }
                    className="default-btn-one"
                  >
                    Quay trở lại
                  </button>
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
