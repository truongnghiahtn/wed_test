import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/action/index";
class Pricing extends Component {
  componentDidMount() {
    this.props.getPricesApi();
  }
  renderPricingWebsite = () => {
    console.log(this.props.dataPrices);
    return this.props.dataPrices.map((item, index) => {
      return (
        <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
          <div className="single-pricing-box bg-f6f5fb">
            <div className="price">
              <strong>$</strong>
              <span>{item.price}</span>
            </div>
            <p>{item.content_price}</p>
            <ul className="pricing-features">
              <li>
                <i className="flaticon-check-mark" />
                <strong>Dịch vụ: {item.name_service.name_service}</strong>
              </li>
              <li>Mô tả: {item.name_service.content_service}</li>
              <li>
                <i className="flaticon-check-mark" />
                <strong>
                  Loại dịch vụ:{" "}
                  {item.name_service.category_service
                    ? item.name_service.category_service.name_category_service
                    : "unknow"}
                </strong>
              </li>
            </ul>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <section className="pricing-section ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Bảng giá</span>
            <h3>Bảng giá thiết kế website</h3>
          </div>
          <div className="tab pricing-tab">
            <div className="tab-content">
              <div className="tab-pane fade show active">
                <div className="tabs-item">
                  <div className="row">{this.renderPricingWebsite()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export const mapStateToProps = state => {
  return {
    dataPrices: state.deMoReducer.dataPrices
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    getPricesApi: () => {
      dispatch(actions.getPricesApi());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pricing);
