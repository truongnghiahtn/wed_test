import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import * as action from "./../../../redux/action/index";
import { connect } from "react-redux";
//icon
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ChildModal from "./childModalService";
import Modalfather from "./../../../components/modal/fatherModal";
const Modal = Modalfather(ChildModal);
class itemTable extends Component {
  render() {
    let { course } = this.props;

    return (
      <tr>
        <td className="admin-coursesItem ">
          <p className="hidden">{course.name_service}</p>
        </td>
        <td className="admin-coursesItem ">
          <p className="hidden content">{course.content_service}</p>
        </td>
        <td className="admin-coursesItem ">
          <img src={course.img_service} width="60px" height="60px" />
        </td>
        <td className="admin-coursesItem ">
          {course.category_service ? (
            <p className="hidden">
              {course.category_service.name_category_service}
            </p>
          ) : (
            ""
          )}
        </td>

        <td className="admin-coursesItem">
          <p className="hidden"> {course.createdAt}</p>
        </td>
        <td className="admin-coursesItem">
          <Button
            variant="contained"
            color="primary"
            data-toggle="modal"
            data-target="#modelId"
            onClick={() => {
              this.props.editService(course);
            }}
          >
            <EditIcon />
          </Button>
          <Modal />
          <Button
            variant="contained"
            color="secondary"
            // onClick={() => {
            //   props.deleteCourse(course.maKhoaHoc);
            // }}
          >
            <DeleteIcon />
          </Button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editService: data => {
      dispatch(action.editService(data));
    }
  };
};
export default connect(null, mapDispatchToProps)(itemTable);
