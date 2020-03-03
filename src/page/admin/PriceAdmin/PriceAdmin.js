import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../../redux/action/index";
import Button from "@material-ui/core/Button";
//icon
import AddIcon from "@material-ui/icons/Add";
import ItemTable from "./itemTablePrice";
import ChildModal from "./childModalPrice";
import Modalfather from "../../../components/modal/fatherModal";
import SearchAdmin from "../../../components/SearchAdmin/index";
const Modal = Modalfather(ChildModal);

//component

class PriceAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listPrice: []
    };
  }

  componentDidMount() {
    this.props.getListPrice();
    this.props.getListService();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.listPrice) {
      this.setState({
        listPrice: nextProps.listPrice
      });
    }
  }

  renderTbody = () => {
    return this.state.listPrice.map((item, index) => (
      <ItemTable price={item} key={index} />
    ));
  };

  handleFilter = keyword => {
    if (this.props.listPrice) {
      let listPrice = this.props.listPrice.filter(
        item =>
          item.name_service.name_service
            .toLowerCase()
            .indexOf(keyword.toLowerCase()) > -1
      );

      this.setState({ listPrice });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="title">Price Management</div>
        <div className="admin-top">
          <Button
            variant="contained"
            color="primary"
            data-toggle="modal"
            data-target="#modelId"
            onClick={() => {
              this.props.onEditPrice();
            }}
          >
            <AddIcon /> Add Price
          </Button>
          <Modal />
          <SearchAdmin onFilter={this.handleFilter} />
        </div>
        <div className="admin-content">
          <table className="table table-striped table-inverse">
            <thead className="thead-inverse">
              <tr>
                <th>Tên dịch vụ</th>
                <th>Nội dung</th>
                <th>Giá</th>
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
    listPrice: state.deMoReducer.dataPrices
  };
};
const MapDispatchToProps = Dispatch => {
  return {
    getListPrice: () => {
      Dispatch(action.getPricesApi());
    },
    onEditPrice: () => {
      Dispatch(action.actOnEditPrice());
    },
    getListService: () => {
      Dispatch(action.getListServiceApi());
    }
  };
};
export default connect(MapStateToProps, MapDispatchToProps)(PriceAdmin);
