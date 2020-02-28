import React from "react";
import "./style.scss";
import $ from "jquery";

const Boosting = () => {
  React.useEffect(() => {
    $(".tab ul.tabs")
      .addClass("active")
      .find("> li:eq(0)")
      .addClass("current");
    $(".tab ul.tabs li a").on("click", function(g) {
      var tab = $(this).closest(".tab"),
        index = $(this)
          .closest("li")
          .index();
      tab.find("ul.tabs > li").removeClass("current");
      $(this)
        .closest("li")
        .addClass("current");
      tab
        .find(".tab_content")
        .find("div.tabs_item")
        .not("div.tabs_item:eq(" + index + ")")
        .slideUp();
      tab
        .find(".tab_content")
        .find("div.tabs_item:eq(" + index + ")")
        .slideDown();
      g.preventDefault();
    });
  }, []);

  return (
    <section className="tab-section">
      <div className="container">
        <div className="section-title">
          <span>Boosting</span>
          <h3>Outstanding Digital Experience</h3>
        </div>
        <div className="tab boosting-list-tab">
          <ul className="tabs">
            <li>
              <a href="#">
                <i className="flaticon-analysis-2" />
                <span>Real-Time-Analytics</span>
              </a>
            </li>
            <li className="bg-eff7e9">
              <a href="#">
                <i className="flaticon-hand" />
                <span>Pay-Per-Click</span>
              </a>
            </li>
            <li className="bg-fff8f0">
              <a href="#">
                <i className="flaticon-digital-marketing" />
                <span>Online Marketing</span>
              </a>
            </li>
            <li className="bg-ecfaf7">
              <a href="#">
                <i className="flaticon-email" />
                <span>Email Marketing</span>
              </a>
            </li>
            <li className="bg-f2f0fb">
              <a href="#">
                <i className="flaticon-network" />
                <span>Social Marketing</span>
              </a>
            </li>
            <li className="bg-c5ebf9">
              <a href="#">
                <i className="flaticon-analysis-1" />
                <span>Digital Marketing</span>
              </a>
            </li>
          </ul>
          <div className="tab_content">
            <div className="tabs_item">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="tab-image">
                    <img src="assets/img/tab/1.jpg" alt="image" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="content">
                    <h2>Real-Time Analytics</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="tab-text-content">
                        <i className="flaticon-analysis-2" />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="tab-text-content">
                        <i className="flaticon-analysis-2" />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-btn">
                    <a href="#" className="default-btn-one">
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
              <div className="tab-shape">
                <img src="assets/img/tab/shape.png" alt="image" />
              </div>
            </div>
            <div className="tabs_item">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="tab-image">
                    <img src="assets/img/tab/2.jpg" alt="image" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="content">
                    <h2>Pay-Per Click</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="tab-text-content">
                        <i className="flaticon-analysis-2" />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="tab-text-content">
                        <i className="flaticon-analysis-2" />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-btn">
                    <a href="#" className="default-btn-one">
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
              <div className="tab-shape">
                <img src="assets/img/tab/shape.png" alt="image" />
              </div>
            </div>
            <div className="tabs_item">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="tab-image">
                    <img src="assets/img/tab/3.jpg" alt="image" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="content">
                    <h2>Online Marketting</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="tab-text-content">
                        <i className="flaticon-analysis-2" />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="tab-text-content">
                        <i className="flaticon-analysis-2" />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-btn">
                    <a href="#" className="default-btn-one">
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
              <div className="tab-shape">
                <img src="assets/img/tab/shape.png" alt="image" />
              </div>
            </div>
            <div className="tabs_item">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="tab-image">
                    <img src="assets/img/tab/4.jpg" alt="image" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="content">
                    <h2>Email Marketting</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="tab-text-content">
                        <i className="flaticon-analysis-2" />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="tab-text-content">
                        <i className="flaticon-analysis-2" />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-btn">
                    <a href="#" className="default-btn-one">
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
              <div className="tab-shape">
                <img src="assets/img/tab/shape.png" alt="image" />
              </div>
            </div>
            <div className="tabs_item">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="tab-image">
                    <img src="assets/img/tab/5.jpg" alt="image" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="content">
                    <h2>Social Marketting</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="tab-text-content">
                        <i className="flaticon-analysis-2" />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="tab-text-content">
                        <i className="flaticon-analysis-2" />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-btn">
                    <a href="#" className="default-btn-one">
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
              <div className="tab-shape">
                <img src="assets/img/tab/shape.png" alt="image" />
              </div>
            </div>
            <div className="tabs_item">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="tab-image">
                    <img src="assets/img/tab/6.jpg" alt="image" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="content">
                    <h2>Digital Marketting</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="tab-text-content">
                        <i className="flaticon-analysis-2" />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="tab-text-content">
                        <i className="flaticon-analysis-2" />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-btn">
                    <a href="#" className="default-btn-one">
                      Discover More
                    </a>
                  </div>
                </div>
              </div>
              <div className="tab-shape">
                <img src="assets/img/tab/shape.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boosting;
