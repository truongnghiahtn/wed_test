import React, { Component } from "react";
import "./style.scss";
import FormContact from "../FormContact/index";

export default class Analysis extends Component {
  render() {
    return (
      <section className="analysis-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="analysis-image">
                <img src="assets/img/analysis-image.png" alt="image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="analysis-area-content">
                <span>PHÂN TÍCH</span>
                <h3>Nhận phân tích SEO miễn phí</h3>
                <strong>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </strong>
                <FormContact id={""} className={"contactForm"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
