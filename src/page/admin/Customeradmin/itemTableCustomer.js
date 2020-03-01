import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import * as action from "./../../../redux/action/index";
import { connect } from "react-redux";

//
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

export default class itemTableCustomer extends Component {
  render() {
    let { course } = this.props;
    return (

        <tr>
          <td className="admin-coursesItem ">
            <p className="hidden">{course.name}</p>
          </td>
          <td className="admin-coursesItem ">
            <p className="hidden content">{course.email}</p>
          </td>
          <td className="admin-coursesItem ">
            <p className="hidden content">{course.phone}</p>
          </td>
          <td className="admin-coursesItem">
            {" "}
            <p className=" content"> {course.message}</p>
          </td>
          <td className="admin-coursesItem">
        
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
