import React, { Component } from "react";
import PageTitleArea from "../../../components/PageTitleArea/PageTitleArea";
import Subcribe from "../../../components/Subcribe/Subcribe";
import Pricing from "../../../components/Pricing";
import { connect } from "react-redux";
import * as action from "../../../redux/action/index";
class TrangThietKeWeb extends Component {
  componentDidMount() {
    this.props.getListServiceApi();
  }

  renderContent = () => {
    let color = ["bg-b5a2f8", "bg-f27e19", "bg-1db294", "bg-e80d82"];
    return (
      <section className="features-area">
        <div className="container">
          <div className="features-title">
            <span>Thiết kế</span>
            <h3>Thiết kế website giá rẻ</h3>
          </div>
          <div className="row">
            {this.props.listService.slice(0, 4).map((item, index) => {
              return (
                <div className="col-lg-3 col-md-6 col-sm-6 " key={index}>
                  <div
                    className={`single-features-item fs-tkw ${color[index]}`}
                    style={{ backgroundImage: item.img_service }}
                  >
                    <div className="icon">
                      <i className="flaticon-seo" />
                    </div>
                    <h3>{item.name_service}</h3>
                    <p>{item.content_service}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };
  render() {
    return (
      <div>
        <PageTitleArea title="Thiết kế website" />
        {this.props.listService ? this.renderContent() : ""}
        <Pricing />
        <Subcribe />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listService: state.deMoReducer.listService
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getListServiceApi: () => {
      dispatch(action.getListServiceApi());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TrangThietKeWeb);
