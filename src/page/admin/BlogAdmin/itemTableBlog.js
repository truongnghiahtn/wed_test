import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import * as action from "../../../redux/action/index";
import { connect } from "react-redux";
//icon
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ChildModal from "./childModalBlog";
import Modalfather from "../../../components/modal/fatherModal";
const Modal = Modalfather(ChildModal);

class itemTable extends Component {
  render() {
    let { blog } = this.props;
    return (
      <tr>
        <td className="admin-coursesItem ">
          <p className="hidden">{blog.title_blog}</p>
        </td>
        <td className="admin-coursesItem ">
          <p className="hidden content"> {blog.content_blog}</p>
        </td>
        <td className="admin-coursesItem">
          <p className="hidden"> {blog.img_blog}</p>
        </td>
        <td className="admin-coursesItem">
          <p className="hidden"> {blog.createdAt}</p>
        </td>
        <td className="admin-coursesItem">
          <Button
            variant="contained"
            color="primary"
            data-toggle="modal"
            data-target="#modelId"
            onClick={() => {
              this.props.editBlog(blog);
            }}
          >
            <EditIcon />
          </Button>
          <Modal />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              this.props.deleteBlog(blog._id);
            }}
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
    editBlog: data => {
      dispatch(action.actGetEditBlog(data));
    },
    deleteBlog: id => dispatch(action.actDeleteBlogAPI(id))
  };
};
export default connect(null, mapDispatchToProps)(itemTable);
