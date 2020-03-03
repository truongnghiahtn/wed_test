import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import * as action from "../../../redux/action/index";
import { connect } from "react-redux";
//icon
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ChildModal from "./childModalPrice";
import Modalfather from "../../../components/modal/fatherModal";
const Modal = Modalfather(ChildModal);

class itemTable extends Component {
  render() {
    let { price } = this.props;
    console.log(price);

    return (
      <tr>
        <td className="admin-coursesItem ">
          <p className="hidden">
            {price.name_service ? price.name_service.name_service : ""}
          </p>
        </td>
        <td className="admin-coursesItem ">
          <p className="hidden content"> {price.content_price}</p>
        </td>
        <td className="admin-coursesItem">
          <p className="hidden"> {price.price}</p>
        </td>
        <td className="admin-coursesItem">
          <p className="hidden"> {price.createdAt}</p>
        </td>
        <td className="admin-coursesItem">
          <Button
            variant="contained"
            color="primary"
            data-toggle="modal"
            data-target="#modelId"
            onClick={() => {
              this.props.editPrice(price);
            }}
          >
            <EditIcon />
          </Button>
          <Modal />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              this.props.deletePrice(price._id);
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
    editPrice: data => {
      dispatch(action.actGetEditPrice(data));
    },
    deletePrice: id => dispatch(action.actDeletePriceAPI(id))
  };
};
export default connect(null, mapDispatchToProps)(itemTable);
