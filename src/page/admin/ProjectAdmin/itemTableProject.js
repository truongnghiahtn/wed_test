import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import * as action from "./../../../redux/action/index";
import { connect } from "react-redux";
//icon
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ChildModal from "./childModalProject";
import Modalfather from "./../../../components/modal/fatherModal";

 class itemTable extends Component {
  render() {
    let { course } = this.props;
    console.log(course);
    return (
      <tr>
        <td className="admin-coursesItem ">
        <p className="hidden">{course.name_project}</p>
        </td>
    <td className="admin-coursesItem "><p className="hidden content">{course.content_project}</p></td>
        <td className="admin-coursesItem "> <p className="hidden"> {course.img_project}</p></td>
        <td className="admin-coursesItem"> <p className="hidden"> {course.link_project}</p></td>
        <td className="admin-coursesItem">
          <Button
            variant="contained"
            color="primary"
            data-toggle="modal"
            data-target="#modelId"
            onClick={() => {
              this.props.editProject(course);
            }}
            // data-toggle="modal"
            // data-target="#EditCourse"
            // onClick={() => {
            //   props.editCourse(course);
            // }}
          >
            <EditIcon />
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              this.props.deleteproject(course._id);
            }}
          >
            <DeleteIcon />
          </Button>
        </td>
      </tr>
    );
  }
}
const mapDispatchToProps =dispatch=>{
  return{
    editProject:(data)=>{
      dispatch(action.editTeam(data))
    },
    deleteproject:(data)=>{
      dispatch(action.deleteProject(data))
    }
  }
}
export default connect (null,mapDispatchToProps)(itemTable);
