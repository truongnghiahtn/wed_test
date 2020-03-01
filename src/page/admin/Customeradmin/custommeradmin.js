import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../../../redux/action/index";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ItemTable from "./itemTableCustomer";

 class custommeradmin extends Component {
  componentDidMount() {
    this.props.getCustomer();
  }

  renderTbody = () => {
    let ListCustomer = [...this.props.listcustomer];

    console.log(ListCustomer);
    return ListCustomer.map((item, index) => (
      <ItemTable course={item} key={index} />
    ));
  };
  render() {
    return (
        <div className="content-admin">
      <div className="container">
        <div className="title">Customer</div>
        <div className="admin-top">
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
                <th>Tên khách hàng</th>
                <th>email</th>
                <th>phone</th>
                <th>message </th>
                <th>Hoạt động</th>
              </tr>
            </thead>
            <tbody>{this.renderTbody()}</tbody>
          </table>
        </div>
      </div>
      </div>
    );
  }
}
const MapStateToProps = state => {
  return {
    listcustomer: state.deMoReducer.customer
  };
};
const MapDispatchToProps = Dispatch => {
  return {
    getCustomer: () => {
      Dispatch(action.actGetCustomer());
    }
  };
};
export default connect(MapStateToProps, MapDispatchToProps)(custommeradmin);
