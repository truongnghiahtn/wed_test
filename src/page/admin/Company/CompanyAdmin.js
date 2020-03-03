import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../../../redux/action/index";
import Button from "@material-ui/core/Button";
//icon
import AddIcon from "@material-ui/icons/Add";
import ItemTable from "./itemTableCompany";
import ChildModal from "./childModalCompany";
import Modalfather from "./../../../components/modal/fatherModal";
import SearchAdmin from "./../../../components/SearchAdmin/index";
const Modal = Modalfather(ChildModal);

//component

class CompanyAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCompany: []
    };
  }
  componentDidMount() {
    this.props.getListCompany();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.listCompany) {
      this.setState({
        listCompany: nextProps.listCompany
      });
    }
  }

  renderTbody = () => {
    return this.state.listCompany.map((item, index) => (
      <ItemTable company={item} key={index} />
    ));
  };

  handleFilter = keyword => {
    let listCompany = this.props.listCompany.filter(
      item =>
        item.name_company.toLowerCase().indexOf(keyword.toLowerCase()) > -1
    );
    this.setState({ listCompany });
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
            onClick={() => {
              this.props.onEditCompany();
            }}
          >
            <AddIcon /> Add Company
          </Button>
          <Modal />
          <SearchAdmin onFilter={this.handleFilter} />
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
    },
    onEditCompany: () => {
      Dispatch(action.actOnEditCompany());
    }
  };
};
export default connect(MapStateToProps, MapDispatchToProps)(CompanyAdmin);
