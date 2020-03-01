import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../../../redux/action/index";
import Button from "@material-ui/core/Button";
//icon
import AddIcon from "@material-ui/icons/Add";
import ItemTable from "./itemTableCompany";
import ChildModal from "./childModalCompany";
import Modalfather from "./../../../components/modal/fatherModal";
const Modal = Modalfather(ChildModal);

//component

class CompanyAdmin extends Component {
  componentDidMount() {
    this.props.getListCompany();
  }

  renderTbody = () => {
    let listCompany = [...this.props.listCompany];

    return listCompany.map((item, index) => (
      <ItemTable company={item} key={index} />
    ));
  };
  render() {
    return (
      <div className="container">
        <div className="title">Company Management</div>
        <div className="admin-top">
          <Button
            variant="contained"
            color="primary"
            data-toggle="modal"
            data-target="#modelId"
          >
            <AddIcon /> Add Company
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
                <th>Tên công ty</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th>Địa chỉ</th>
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
const MapStateToProps = state => {
  return {
    listCompany: state.deMoReducer.company
  };
};
const MapDispatchToProps = Dispatch => {
  return {
    getListCompany: () => {
      Dispatch(action.actGetListCompanyAPI());
    }
  };
};
export default connect(MapStateToProps, MapDispatchToProps)(CompanyAdmin);
