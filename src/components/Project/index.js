import React, { Component } from "react";
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import * as $ from "jquery";
import { connect } from "react-redux";
import * as actions from "../../redux/action/index";
class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataShow: []
    };
  }
  componentDidMount() {
    this.props.getProjectsApi();
    this.props.getCategoryProjectsApi();
  }
  componentDidUpdate(nextProps) {
    let { dataProjects } = this.props;
    if (nextProps.dataProjects !== dataProjects) {
      this.setState({
        dataShow: [...this.props.dataProjects]
      });
    }
  }
  renderFilterMenu = () => {
    return this.props.dataCategoryProjects.map((item, index) => {
      return (
        <li
          className={classnames(`filter cate-${item._id}`)}
          key={index}
          onClick={() => {
            this.handleOnSelect(
              `.cate-${item._id}`,
              item.name_category_project
            );
          }}
        >
          {item.name_category_project}
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
    if (id === "cate-all") {
      $(".cate-all").addClass("show");
      this.setState({
        dataShow: [...this.props.dataProjects]
      });
    } else {
      let dataShow = this.props.dataProjects.filter(item =>
        item.category_project
          ? item.category_project.name_category_project === name
          : false
      );
      this.setState({
        dataShow
      });
    }
  };
  renderDataFilter = () => {
    console.log(this.props.dataProjects);
    return this.state.dataShow.map((item, index) => {
      return (
        <div key={index} className="col-lg-4 col-md-6">
          <div className="single-project-box fix-style">
            {/* <img src={item.hinhAnh} alt="image" /> */}
            <img src="./assets/img/services-details-image/1.jpg" />
            <div className="project-content">
              <div>
                <h3>{item.name_project}</h3>
                <p>{item.content_project}</p>
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
    });
  };
  render() {
    return (
      <section className="project-section pt-100">
        <div className="container">
          <div className="section-title">
            <span>Dự án</span>
            <h3>Dự án của chúng tôi</h3>
          </div>
          <ul className="filter-menu">
            <li
              className="filter cate-all show"
              onClick={() => {
                this.handleOnSelect(`cate-all`, null);
              }}
            >
              Tất cả
            </li>
            {this.props.dataCategoryProjects ? this.renderFilterMenu() : ""}
          </ul>
          <div id="Container" className="row e-project">
            {this.props.dataProjects ? this.renderDataFilter() : ""}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    dataProjects: state.deMoReducer.dataProjects,
    dataCategoryProjects: state.deMoReducer.dataCategoryProjects
  };
};

const mapDispatchToprops = dispatch => {
  return {
    getProjectsApi: () => {
      dispatch(actions.getProjectsApi());
    },
    getCategoryProjectsApi: () => {
      dispatch(actions.getCategoryProjectsApi());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToprops)(Project);
