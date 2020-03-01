import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../../../redux/action/index";
import Button from "@material-ui/core/Button";
//icon
import AddIcon from "@material-ui/icons/Add";
import ItemTable from "./itemTableProject";
import ChildModal from "./childModalProject";
import Modalfather from "./../../../components/modal/fatherModal";
const Modal = Modalfather(ChildModal);

//component

class projectadmin extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  renderTbody = () => {
    let ListProject = [...this.props.listProject];

    console.log(ListProject);
    return ListProject.map((item, index) => (
      <ItemTable course={item} key={index} />
    ));
  };
  render() {
    return (
      <div className="container">
        <div className="title">Project Management</div>
        <div className="admin-top">
          <Button
            variant="contained"
            color="primary"
            data-toggle="modal"
            data-target="#modelId"
          >
            <AddIcon /> Add Courses
          </Button>
          <Modal/>
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
                <th>Tên dự án</th>
                <th>Nội dung</th>
                <th>Hình ảnh</th>
                <th>Liên kết </th>
                <th>Hoạt động</th>
              </tr>
            </thead>
            <tbody>{this.renderTbody()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
const MapStateToProps = state => {
  return {
    listProject: state.deMoReducer.dataProjects
  };
};
const MapDispatchToProps = Dispatch => {
  return {
    getProjects: () => {
      Dispatch(action.getProjectsApi());
    }
  };
};
export default connect(MapStateToProps, MapDispatchToProps)(projectadmin);
