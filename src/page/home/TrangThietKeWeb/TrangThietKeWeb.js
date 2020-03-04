import React, { Component } from "react";
import PageTitleArea from "../../../components/PageTitleArea/PageTitleArea";
import Subcribe from "../../../components/Subcribe/Subcribe";
import Pricing from "../../../components/Pricing";
import { connect } from "react-redux";
import * as action from "../../../redux/action/index";
import * as $ from "jquery";
import { NavLink } from "react-router-dom";
class TrangThietKeWeb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataShow: []
    };
  }
  componentDidMount() {
    this.props.getListServiceApi();
    this.props.getCateServiceApi();
  }
  componentDidUpdate(nextProps) {
    let { listService } = this.props;
    if (nextProps.listService !== listService) {
      this.setState({
        dataShow: [...this.props.listService]
      });
    }
  }
  renderFilterMenu = () => {
    return this.props.dataCategoryService.map((item, index) => {
      return (
        <li
          className={`filter cate-service-${item._id}`}
          key={index}
          onClick={() => {
            this.handleOnSelect(
              `.cate-service-${item._id}`,
              item.name_category_service
            );
          }}
        >
          {item.name_category_service}
        </li>
      );
    });
  };
  handleOnSelect = (id, name) => {
    $(".filter").removeClass("show");
    $(id).addClass("show");
    $(".e-project").addClass("active");
    setTimeout(() => {
      $(".e-project").removeClass("active");
    }, 500);
    if (id === "cate-service-all") {
      $(".cate-service-all").addClass("show");
      this.setState({
        dataShow: [...this.props.listService]
      });
    } else {
      let dataShow = this.props.listService.filter(item =>
        item.category_service
          ? item.category_service.name_category_service === name
          : false
      );
      this.setState({
        dataShow
      });
    }
  };
  renderContent = () => {
    let color = ["bg-b5a2f8", "bg-f27e19", "bg-1db294", "bg-e80d82"];
    return (
      <section className="features-area">
        <div className="container">
          <div className="features-title">
            <span>Thiết kế</span>
            <h3>Thiết kế website giá rẻ</h3>
          </div>
          <ul className="filter-menu">
            <li
              className="filter cate-service-all show"
              onClick={() => {
                this.handleOnSelect(`cate-service-all`, null);
              }}
            >
              Tất cả
            </li>
            {this.props.dataCategoryService ? this.renderFilterMenu() : ""}
          </ul>
          <div className="row e-project">
            {this.state.dataShow.map((item, index) => {
              return (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className="single-project-box fix-style">
                    {/* <img src={item.hinhAnh} alt="image" /> */}
                    <img src="./assets/img/services-details-image/1.jpg" />
                    <div className="project-content">
                      <div>
                        <h3>{item.name_service}</h3>
                        <p>{item.content_service}</p>
                      </div>
                    </div>
                    <div className="project-hover-content">
                      <h3>
                        <NavLink to={`/Chi-tiet-mau-thiet-ke/${item._id}`}>
                          {" "}
                          Xem chi tiết
                        </NavLink>
                      </h3>
                    </div>
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
    listService: state.deMoReducer.listService,
    dataCategoryService: state.deMoReducer.dataCategoryService
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getListServiceApi: () => {
      dispatch(action.getListServiceApi());
    },
    getCateServiceApi: () => {
      dispatch(action.getCateServiceApi());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TrangThietKeWeb);
