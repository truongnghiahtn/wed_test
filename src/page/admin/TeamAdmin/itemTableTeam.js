import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import * as action from "./../../../redux/action/index";
import { connect } from "react-redux";
//icon
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ChildModal from "./childModalTeam";
import Modalfather from "./../../../components/modal/fatherModal";
const Modal = Modalfather(ChildModal);

 class itemTable extends Component {

  render() {
    let { course } = this.props;

    return (
      <tr>
        <td className="admin-coursesItem ">
        <p className="hidden">{course.name}</p>
        </td>
    <td className="admin-coursesItem "><p className="hidden content">{course.position}</p></td>
        <td className="admin-coursesItem "> <img src={course.img} width="60px" height="60px"/></td>
        <td className="admin-coursesItem"> <p className="hidden"> {course.createdAt}</p></td>
        <td className="admin-coursesItem">
          <Button
            variant="contained"
            color="primary"
            data-toggle="modal"
            data-target="#modelId"
            onClick={() => {
              this.props.editTeam(course);
            }}
          >
            <EditIcon />
          </Button>
          <Modal/>
          {/* <Button
            variant="contained"
            color="secondary"
            onClick={this.delete}
            onClick={()=>this.props.loading()}
          >
            <DeleteIcon />
          </Button> */}
   
          <button className="btn btn-danger delete" onClick={()=>{this.props.deleteTeamAd(course)}} >
          <DeleteIcon onClick={()=>this.props.loading()} />
          </button>
     
        </td>
      </tr>
    );
  }
}
const mapDispatchToProps =dispatch=>{
  return{
    editTeam:(user)=>{
      dispatch(action.editTeam(user))
    },
    deleteTeamAd:(data)=>{
     dispatch(action.deleteTeam(data))
   },
    loading:()=>{
      dispatch(action.getloading());
    }
  }
}
export default connect (null,mapDispatchToProps)(itemTable);

