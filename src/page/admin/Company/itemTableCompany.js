import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import * as action from "../../../redux/action/index";
import { connect } from "react-redux";
//icon
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

class itemTable extends Component {
  render() {
    let { company } = this.props;
    console.log(company);
    return (
      <tr>
        <td className="admin-coursesItem ">
          <p className="hidden">{company.name_company}</p>
        </td>
        <td className="admin-coursesItem ">
          {" "}
          <p className="hidden content"> {company.tel_company}</p>
        </td>
        <td className="admin-coursesItem">
          {" "}
          <p className="hidden"> {company.email_company}</p>
        </td>
        <td className="admin-coursesItem">
          {" "}
          <p className="hidden"> {company.address_company}</p>
        </td>
        <td className="admin-coursesItem">
          {" "}
          <p className="hidden"> {company.createdAt}</p>
        </td>
        <td className="admin-coursesItem">
          <Button
            variant="contained"
            color="primary"
            data-toggle="modal"
            data-target="#modelId"
            onClick={() => {
              this.props.editProject(company);
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
    editProject: data => {
      dispatch(action.editTeam(data));
    }
  };
};
export default connect(null, mapDispatchToProps)(itemTable);
