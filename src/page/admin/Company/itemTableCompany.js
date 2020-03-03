import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import * as action from "../../../redux/action/index";
import { connect } from "react-redux";
//icon
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ChildModal from "./childModalCompany";
import Modalfather from "./../../../components/modal/fatherModal";
const Modal = Modalfather(ChildModal);

class itemTable extends Component {
  render() {
    let { company } = this.props;
    return (
      <tr>
        <td className="admin-coursesItem ">
          <p className="hidden">{company.name_company}</p>
        </td>
        <td className="admin-coursesItem ">
          <p className="hidden content"> {company.tel_company}</p>
        </td>
        <td className="admin-coursesItem">
          <p className="hidden"> {company.email_company}</p>
        </td>
        <td className="admin-coursesItem">
          <p className="hidden"> {company.address_company}</p>
        </td>
        <td className="admin-coursesItem">
          <p className="hidden"> {company.createdAt}</p>
        </td>
        <td className="admin-coursesItem">
          <Button
            variant="contained"
            color="primary"
            data-toggle="modal"
            data-target="#modelId"
            onClick={() => {
              this.props.editCompany(company);
            }}
          >
            <EditIcon />
          </Button>
          <Modal />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              this.props.deleteCompany(company._id);
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
    editCompany: data => {
      dispatch(action.actGetEditCompany(data));
    },
    deleteCompany: id => dispatch(action.actDeleteCompanyAPI(id))
  };
};
export default connect(null, mapDispatchToProps)(itemTable);
