import React from "react";
import { connect } from "react-redux";
import * as action from "../../redux/action/index";
/* import "./style.scss"; */
const Features = props => {
  React.useEffect(() => {
    props.getListFeature();
  }, []);

  let { listFeature } = props;

  const dataBgStyle = ["bg-f1eff8", "bg-fbe6d4", "bg-f0fffc", "bg-f8e1eb"];

  const renderFeature = key => {
    return listFeature.slice(0, key).map((item, index) => (
      <div className="col-lg-6 col-md-6 col-sm-6" key={index}>
        <div className={"single-features-item " + dataBgStyle[index]}>
          <div className="icon">
            <i className={`flaticon-${item.img}`} />
          </div>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      </div>
    ));
  };
  return (
    <section className="features-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12">
            <div className="features-content-area">
              <span>TÍNH NĂNG CHĂM SÓC</span>
              <h3>Tạo dịch vụ tuyệt vời với các công cụ của chúng tôi</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply
                dummy text of the printing and typesetting industry.
              </p>
              <div className="features-btn">
                <a href="#" className="features-btn-one">
                  Chi tiết
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="row">{renderFeature(4)}</div>
          </div>
        </div>
      </div>
      <div className="features-animation">
        <div className="shape-img1">
          <img src="assets/img/shape/8.png" alt="image" />
        </div>
        <div className="shape-img2">
          <img src="assets/img/shape/5.png" alt="image" />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    listFeature: state.deMoReducer.feature
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getListFeature: () => {
      dispatch(action.actGetListFeatureAPI());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Features);
