import React, { Component } from "react";
import PageTitleArea from "../../../components/PageTitleArea/PageTitleArea";
import Subcribe from "../../../components/Subcribe/Subcribe";
import classnames from "classnames";
export default class TrangThietKeWeb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: "Cơ Bản",
          gia: 24,
          moTa: [
            "SEO Audits",
            "SEO Management",
            "SEO Copywriting",
            "Link Building",
            "Site Migration"
          ]
        },
        {
          title: "Tiêu chuẩn",
          gia: 59,
          moTa: [
            "SEO Audits",
            "SEO Management",
            "SEO Copywriting",
            "Link Building",
            "Site Migration"
          ]
        },
        {
          title: "Cao Cấp",
          gia: 89,
          moTa: [
            "SEO Audits",
            "SEO Management",
            "SEO Copywriting",
            "Link Building",
            "Site Migration"
          ]
        }
      ],
      className: ["bg-f6f5fb", "bg-ed0678", "bg-edfbf8"]
    };
  }
  renderContent = () => {
    return (
      <section className="features-area">
        <div className="container">
          <div className="features-title">
            <span>Thiết kế</span>
            <h3>Thiết kế website giá rẻ</h3>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features-item bg-b5a2f8">
                <div className="icon">
                  <i className="flaticon-seo" />
                </div>
                <h3>Seo Consultancy</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features-item bg-f27e19">
                <div className="icon">
                  <i className="flaticon-analytics" />
                </div>
                <h3>Competitor Analysis</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features-item bg-1db294">
                <div className="icon">
                  <i className="flaticon-laptop" />
                </div>
                <h3>Social Media Marketing</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features-item bg-e80d82">
                <div className="icon">
                  <i className="flaticon-analysis-1" />
                </div>
                <h3>Skyrocketing Growth</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  renderPricingWebsite = () => {
    return this.state.data.map((item, index) => {
      return (
        <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
          <div
            className={classnames(
              `single-pricing-box ${this.state.className[index]}`
            )}
          >
            <div className="pricing-header">
              <h3>{item.title}</h3>
            </div>
            <div className="price">
              <strong>$</strong>
              <span>{item.gia}</span>
            </div>
            <ul className="pricing-features">
              {item.moTa.map((item2, index2) => {
                return (
                  <li key={index2}>
                    <i className="flaticon-check-mark" />
                    {item2}
                  </li>
                );
              })}
            </ul>
            <div className="price-btn">
              <a href="#" className="price-btn-one">
                Bắt đầu
              </a>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <PageTitleArea title="Thiết kế website" />
        {this.renderContent()}
        <section className="pricing-section ptb-100">
          <div className="container">
            <div className="section-title">
              <span>Bảng giá</span>
              <h3>Bảng giá thiết kế website</h3>
            </div>
            <div className="tab pricing-tab">
              <ul className="tabs">
                <li>
                  <a href="#">Tháng</a>
                </li>
                <li>
                  <a href="#">Năm</a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tabs-item">
                  <div className="row">{this.renderPricingWebsite()}</div>
                </div>
                <div className="tabs-item">
                  <div className="row">{this.renderPricingWebsite()}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Subcribe />
      </div>
    );
  }
}
