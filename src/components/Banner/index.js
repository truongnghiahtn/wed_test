import React from "react";
/* import "./style.scss"; */

const Banner = () => {
  React.useEffect(() => {
    window.$(".popup-youtube").magnificPopup({
      disableOn: 320,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
    if (window.$(".wow").length) {
      var wow = new window.WOW({
        boxClass: "wow", // animated element css class (default is wow)
        animateClass: "animated", // animation css class (default is animated)
        offset: 20, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true // act on asynchronously loaded content (default is true)
      });
      wow.init();
    }
  }, []);

  return (
    <div className="main-banner">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="main-banner-content">
                  <h1>Digital Agency với dịch vụ xuất sắc</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    eiusmod tempor incididunt ut labore.
                  </p>
                  <div className="banner-btn">
                    <a href="#" className="default-btn-one">
                      Về chúng tôi
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=_ysd-zHamjk"
                      className="video-btn popup-youtube"
                    >
                      Xem Video <i className="flaticon-play-button" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="banner-image">
                  <img
                    src="assets/img/saas-image/arrow.png"
                    className="wow fadeInLeft"
                    data-wow-delay="0.6s"
                    alt="arrow"
                  />
                  <img
                    src="assets/img/saas-image/box1.png"
                    className="wow fadeInUp"
                    data-wow-delay="0.6s"
                    alt="box1"
                  />
                  <img
                    src="assets/img/saas-image/boy1.png"
                    className="wow fadeInLeft"
                    data-wow-delay="0.6s"
                    alt="boy1"
                  />
                  <img
                    src="assets/img/saas-image/boy2.png"
                    className="wow zoomIn"
                    data-wow-delay="0.6s"
                    alt="boy2"
                  />
                  <img
                    src="assets/img/saas-image/boy3.png"
                    className="wow bounceIn"
                    data-wow-delay="0.6s"
                    alt="boy3"
                  />
                  <img
                    src="assets/img/saas-image/digital-screen.png"
                    className="wow fadeInDown"
                    data-wow-delay="0.6s"
                    alt="digital-screen"
                  />
                  <img
                    src="assets/img/saas-image/filter1.png"
                    className="wow zoomIn"
                    data-wow-delay="0.6s"
                    alt="filter1"
                  />
                  <img
                    src="assets/img/saas-image/filter2.png"
                    className="wow fadeInUp"
                    data-wow-delay="0.6s"
                    alt="filter2"
                  />
                  <img
                    src="assets/img/saas-image/filter3.png"
                    className="wow rotateIn"
                    data-wow-delay="0.6s"
                    alt="filter3"
                  />
                  <img
                    src="assets/img/saas-image/girl1.png"
                    className="wow fadeInUp"
                    data-wow-delay="0.6s"
                    alt="girl1"
                  />
                  <img
                    src="assets/img/saas-image/girl2.png"
                    className="wow zoomIn"
                    data-wow-delay="0.6s"
                    alt="girl2"
                  />
                  <img
                    src="assets/img/saas-image/monitor.png"
                    className="wow fadeInRight"
                    data-wow-delay="0.6s"
                    alt="monitor"
                  />
                  <img
                    src="assets/img/saas-image/4.png"
                    className="wow zoomIn"
                    data-wow-delay="0.6s"
                    alt={4}
                  />
                  <img
                    src="assets/img/saas-image/7.png"
                    className="wow zoomIn"
                    data-wow-delay="0.6s"
                    alt={7}
                  />
                  <img
                    src="assets/img/saas-image/main-image.png"
                    className="wow zoomIn"
                    data-wow-delay="0.6s"
                    alt="main-image.png"
                  />
                </div>
              </div>
            </div>
            <div className="banner-bg-text">SEO</div>
          </div>
        </div>
      </div>
      <div className="shape-img1">
        <img src="assets/img/shape/1.png" alt="image" />
      </div>
      <div className="shape-img2">
        <img src="assets/img/shape/2.png" alt="image" />
      </div>
      <div className="shape-img3">
        <img src="assets/img/shape/3.png" alt="image" />
      </div>
      <div className="shape-img4">
        <img src="assets/img/shape/4.png" alt="image" />
      </div>
      <div className="shape-img5">
        <img src="assets/img/shape/5.png" alt="image" />
      </div>
      <div className="shape-img6">
        <img src="assets/img/shape/6.png" alt="image" />
      </div>
      <div className="shape-img7">
        <img src="assets/img/shape/2.png" alt="image" />
      </div>
      <div className="shape-img8">
        <img src="assets/img/shape/10.png" alt="image" />
      </div>
      <div className="shape-img9">
        <img src="assets/img/shape/7.png" alt="image" />
      </div>
      <div className="shape-img10">
        <img src="assets/img/shape/5.png" alt="image" />
      </div>
      <div className="shape-img11">
        <img src="assets/img/shape/11.png" alt="image" />
      </div>
    </div>
  );
};

export default Banner;
