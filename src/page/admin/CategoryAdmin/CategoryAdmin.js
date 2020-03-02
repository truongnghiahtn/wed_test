import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../../../redux/action/index";
import ItemTable from "./itemTableCategory";
import ChildModal from "./childModalCategory";
import Modalfather from "./../../../components/modal/fatherModal";
const Modal = Modalfather(ChildModal);

class CategoryAdmin extends Component {
  componentDidMount() {
    this.props.getCategoryProjectsApi();
  }

  renderTbody = () => {
    let { dataCategoryProjects } = this.props;

    console.log(dataCategoryProjects);
    return dataCategoryProjects.map((item, index) => (
      <ItemTable course={item} key={index} />
    ));
  };
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="title">Team Management</div>
        <div className="admin-top">
          <div>
            <i className="fa fa-search" aria-hidden="true"></i>{" "}
            <input
              className="input-search"
              type="text"
              name="Search"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="admin-content">
          <table className="table table-striped table-inverse">
            <thead className="thead-inverse">
              <tr>
                <th>Tên Danh Mục</th>
                <th>Ngày tạo</th>
              </tr>
            </thead>
            <tbody>
              {this.props.dataCategoryProjects ? this.renderTbody() : ""}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dataCategoryProjects: state.deMoReducer.dataCategoryProjects
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategoryProjectsApi: () => {
      dispatch(action.getCategoryProjectsApi());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryAdmin);
