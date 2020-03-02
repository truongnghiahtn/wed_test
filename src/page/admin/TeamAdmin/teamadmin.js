import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../../../redux/action/index";
import Button from "@material-ui/core/Button";
//icon
import AddIcon from "@material-ui/icons/Add";
import ItemTable from "./itemTableTeam";
import ChildModal from "./childModalTeam";
import Modalfather from "./../../../components/modal/fatherModal";
const Modal = Modalfather(ChildModal);

class teamadmin extends Component {
  componentDidMount() {
    this.props.getTeam();
  }

  renderTbody = () => {
    let ListTeam = [...this.props.listteam];

    console.log(ListTeam);
    return ListTeam.map((item, index) => (
      <ItemTable course={item} key={index} />
    ));
  };
  render() {
    return (
      <div className="container">
        <div className="title">Team Management</div>
        <div className="admin-top">
          <Button
            variant="contained"
            color="primary"
            data-toggle="modal"
            data-target="#modelId"
            onClick={()=>{this.props.onEdit()}}
          >
            <AddIcon /> Add user
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
                <th>Tên thành viên</th>
                <th>Vị trí</th>
                <th>Avatar</th>
                <th>thời gian </th>
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
    listteam: state.deMoReducer.team
  };
};
const MapDispatchToProps = Dispatch => {
  return {
    getTeam: () => {
      Dispatch(action.actGetListTeamAPI());
    },
    onEdit:()=>{
      Dispatch(action.actOnEdit());
    }
  };
};
export default connect(MapStateToProps, MapDispatchToProps)(teamadmin);
