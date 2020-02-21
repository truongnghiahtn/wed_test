import React from "react";
/* import "./style.scss"; */

const Team = () => {
  return (
    <section className="team-section ptb-100">
      <div className="container">
        <div className="section-title">
          <span>Team</span>
          <h3>Gặp Team của chúng tôi</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="team-item-area">
              <div className="team-image">
                <img src="assets/img/team/1.png" alt="image" />
              </div>
              <div className="team-content">
                <h3>Edward Bold</h3>
                <span>CEO &amp; Founder</span>
                <ul className="team-social">
                  <li>
                    <a href="#">
                      <i className="flaticon-facebook-logo" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-paypal" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-linkedin-letters" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="team-item-area">
              <div className="team-image">
                <img src="assets/img/team/2.png" alt="image" />
              </div>
              <div className="team-content">
                <h3>Calvin Klein</h3>
                <span>Marketing Support</span>
                <ul className="team-social">
                  <li>
                    <a href="#">
                      <i className="flaticon-facebook-logo" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-paypal" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-linkedin-letters" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
            <div className="team-item-area">
              <div className="team-image">
                <img src="assets/img/team/3.png" alt="image" />
              </div>
              <div className="team-content">
                <h3>Alastair Cook</h3>
                <span>Underwriter</span>
                <ul className="team-social">
                  <li>
                    <a href="#">
                      <i className="flaticon-facebook-logo" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-paypal" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-linkedin-letters" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-animation">
        <div className="shape-img1">
          <img src="assets/img/shape/7.png" alt="image" />
        </div>
        <div className="shape-img2">
          <img src="assets/img/shape/9.png" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="assets/img/shape/7.png" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="assets/img/shape/9.png" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="assets/img/shape/9.png" alt="image" />
        </div>
      </div>
    </section>
  );
};

export default Team;
