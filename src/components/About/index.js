import React from "react";
import Odometer from "react-odometerjs";
import VisibilitySensor from "react-visibility-sensor";
/* import "./style.scss"; */

const About = () => {
  const [odometerValue, setOdometerValue] = React.useState({
    first: 0,
    second: 0,
    active: true
  });

  React.useEffect(() => {
    setOdometerValue({ ...odometerValue, first: 1165, second: 2665 });
  }, []);

  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setOdometerValue({ ...odometerValue, active: false });
    }
  };

  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-image">
              <img src="assets/img/about-image.png" alt="image" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="about-area-content">
              <span>GIỚI THIỆU VỀ CHÚNG TÔI</span>
              <h3>Chúng tôi là đội ngũ năng động của SEO Agency</h3>
              <strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt labore dolore magna aliqua.
              </strong>
              <VisibilitySensor onChange={onVisibilityChange} delayedCall>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry.
                </p>
              </VisibilitySensor>
            </div>
            <div className="row">
              <div className="col-lg-6 col-6 col--6">
                <div className="single-fun-facts">
                  <h3>
                    <Odometer
                      format="(,ddd).dd"
                      duration={2500}
                      value={odometerValue.active ? 0 : odometerValue.first}
                    />
                    <span className="sign-icon">+</span>
                  </h3>
                  <p>Dự án đã hoàn thành</p>
                </div>
              </div>
              <div className="col-lg-6 col-6 col-6">
                <div className="single-fun-facts">
                  <h3>
                    <Odometer
                      format="(,ddd).dd"
                      duration={2500}
                      value={odometerValue.active ? 0 : odometerValue.second}
                    />
                    <span className="sign-icon">+</span>
                  </h3>
                  <p>Khách hàng hài lòng</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
