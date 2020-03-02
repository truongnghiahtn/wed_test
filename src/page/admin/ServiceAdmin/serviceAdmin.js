import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../../../redux/action/index";
import Button from "@material-ui/core/Button";
//icon
import AddIcon from "@material-ui/icons/Add";
import ItemTable from "./itemTableService";
import ChildModal from "./childModalService";
import Modalfather from "./../../../components/modal/fatherModal";
const Modal = Modalfather(ChildModal);

class serviceAdmin extends Component {
  componentDidMount() {
    this.props.getListServiceApi();
  }

  renderTbody = () => {
    let listService = [...this.props.listService];

    console.log(listService);
    return listService.map((item, index) => (
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
            onClick={() => {
              this.props.onAdd();
            }}
          >
            <AddIcon /> Add user
          </Button>
          <Modal />
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
                <th>Tên Dịch vụ</th>
                <th>Mô tả</th>
                <th>Hình ảnh</th>
                <th>Danh Mục</th>
                <th>Ngày tạo</th>
              </tr>
            </thead>
            <tbody>{this.renderTbody()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listService: state.deMoReducer.listService
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getListServiceApi: () => {
      dispatch(action.getListServiceApi());
    },
    onAdd: () => {
      dispatch(action.editService(null));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(serviceAdmin);
