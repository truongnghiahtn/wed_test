import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import * as action from "./../../../redux/action/index";
import { connect } from "react-redux";
//icon
import EditIcon from "@material-ui/icons/Edit";
import ChildModal from "./childModalCategory";
import Modalfather from "./../../../components/modal/fatherModal";

const Modal = Modalfather(ChildModal);
class itemTable extends Component {
  render() {
    let { course } = this.props;
    return (
      <tr>
        <td className="admin-coursesItem ">
          <p className="hidden">{course.name_category_project}</p>
        </td>
        <td className="admin-coursesItem ">
          <p className="hidden content">{course.createdAt}</p>
        </td>
        <td className="admin-coursesItem">
          <Button
            variant="contained"
            color="primary"
            data-toggle="modal"
            data-target="#modelId"
            onClick={() => {
              this.props.editCategoryProjects(course);
            }}
          >
            <EditIcon />
          </Button>
          <Modal />
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editCategoryProjects: data => {
      dispatch(action.editCategoryProjects(data));
    }
  };
};
export default connect(null, mapDispatchToProps)(itemTable);
