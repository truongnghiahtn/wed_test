import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../../redux/action/index";

class childModalCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        id: "",
        name_company: "",
        tel_company: "",
        email_company: "",
        address_company: "",
        createdAt: "",
        updatedAt: "",
        __v: 0
      },
      errors: {
        name_company: "",
        tel_company: "",
        email_company: "",
        address_company: ""
      },
      formValid: false,
      name_companyValid: false,
      tel_companyValid: false,
      email_companyValid: false,
      address_companyValid: false
    };
  }
  handdleonchange = event => {
    this.setState(
      {
        values: {
          ...this.state.values,
          [event.target.name]: event.target.value
        }
      },
      () => {
        console.log(this.state);
      }
    );
  };
  handleErrors = event => {
    let { name, value } = event.target;
    let message = value === "" ? "Do not be empty" : "";
    let {
      name_companyValid,
      tel_companyValid,
      email_companyValid,
      address_companyValid
    } = this.state;
    switch (name) {
      case "name_company":
        name_companyValid = message !== "" ? false : true;
        break;
      case "tel_company":
        tel_companyValid = message !== "" ? false : true;
        break;
      case "email_company":
        email_companyValid = message !== "" ? false : true;
        break;
      case "address_company":
        address_companyValid = message !== "" ? false : true;
        break;
      default:
        break;
    }
    this.setState(
      {
        errors: { ...this.state.errors, [name]: message },
        name_companyValid,
        tel_companyValid,
        email_companyValid,
        address_companyValid
      },
      () => {
        this.FormValidation();
      }
    );
  };
  FormValidation = () => {
    this.setState({
      formValid:
        this.state.name_companyValid &&
        this.state.tel_companyValid &&
        this.state.email_companyValid &&
        this.state.address_companyValid
    });
  };
  handleSubmit = event => {
    event.preventDefault();

    if (this.props.editInfoCompany === null) {
      this.props.addCompany(this.state.values);
      console.log("add");
      console.log(this.state.values);
    } else {
      this.props.editCompany(this.state.values);
      console.log(this.state.values);
      console.log("update");
    }
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.editInfoCompany) {
      //Update
      console.log(nextProps.editInfoCompany);

      this.setState({
        values: {
          ...this.state.values,
          name_company: nextProps.editInfoCompany.name_company,
          tel_company: nextProps.editInfoCompany.tel_company,
          email_company: nextProps.editInfoCompany.email_company,
          address_company: nextProps.editInfoCompany.address_company,
          id: nextProps.editInfoCompany._id,
          createdAt: nextProps.editInfoCompany.createdAt,
          updatedAt: nextProps.editInfoCompany.updatedAt
        },
        errors: {
          ...this.state.errors,
          name_company: "",
          tel_company: "",
          email_company: "",
          address_company: ""
        },

        name_companyValid: true,
        tel_companyValid: true,
        email_companyValid: true,
        address_companyValid: true,
        formValid: true
      });
    } else {
      //ADD
      this.setState({
        values: {
          ...this.state.values,
          name_company: "",
          tel_company: "",
          email_company: "",
          address_company: ""
        },
        name_companyValid: false,
        tel_companyValid: false,
        email_companyValid: false,
        address_companyValid: false,
        formValid: false
      });
    }
  }

  render() {
    return (
      <div>
        <div className="modal-header">
          {this.props.editInfoCompany === null ? (
            <h5 className="modal-title">ADD COMPANY</h5>
          ) : (
            <h5 className="modal-title">EDIT COMPANY</h5>
          )}
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Tên công ty</label>
              <input
                type="text"
                className="form-control"
                placeholder="Tên công ty"
                onChange={this.handdleonchange}
                onBlur={this.handleErrors}
                onKeyUp={this.handleErrors}
                name="name_company"
                value={this.state.values.name_company}
              />
              {this.state.errors.name_company !== "" ? (
                <div className="Form_err errform">
                  (*) {this.state.errors.name_company}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label>Số điện thoại</label>

              <input
                type="text"
                className="form-control"
                placeholder="Số điện thoại"
                onChange={this.handdleonchange}
                onBlur={this.handleErrors}
                onKeyUp={this.handleErrors}
                name="tel_company"
                value={this.state.values.tel_company}
              />
              {this.state.errors.tel_company !== "" ? (
                <div className="Form_err errform">
                  (*) {this.state.errors.tel_company}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="form-group m-0">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                onChange={this.handdleonchange}
                onBlur={this.handleErrors}
                onKeyUp={this.handleErrors}
                name="email_company"
                value={this.state.values.email_company}
              />
            </div>
            {this.state.errors.email_company !== "" ? (
              <div className="Form_err errform">
                (*) {this.state.errors.email_company}
              </div>
            ) : (
              ""
            )}
            <div className="form-group m-0">
              <label>Địa chỉ</label>
              <input
                type="text"
                className="form-control"
                placeholder="Địa chỉ"
                onChange={this.handdleonchange}
                onBlur={this.handleErrors}
                onKeyUp={this.handleErrors}
                name="address_company"
                value={this.state.values.address_company}
              />
            </div>
            {this.state.errors.address_company !== "" ? (
              <div className="Form_err errform">
                (*) {this.state.errors.address_company}
              </div>
            ) : (
              ""
            )}
            {this.props.editInfoCompany === null ? (
              ""
            ) : (
              <div>
                <div className="form-group">
                  <label>Thời gian</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Thời gian"
                    value={this.state.values.createdAt}
                    disabled
                  />
                </div>
                <div className="form-group">
                  <label>Thời gian Update</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Thời gian Update"
                    value={this.state.values.updatedAt}
                    disabled
                  />
                </div>
              </div>
            )}
            {/* {this.props.editCompany===null?(<button
              type="submit"
              className="btn btn-success mt-4"
              
              disabled={!this.state.formValid}
              onClick={()=>this.props.addCompany(this.state.values)}
            >
              Submit
            </button>):(<button
              type="submit"
              className="btn btn-success mt-4"
              
              disabled={!this.state.formValid}
              onClick={()=>this.props.editCompany(this.state.values)}
            >
              Update
            </button>)} */}
            <button
              type="submit"
              className="btn btn-success mt-4"
              disabled={!this.state.formValid}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    editInfoCompany: state.deMoReducer.editCompany
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addCompany: data => {
      dispatch(action.actAddCompanyAPI(data));
    },
    editCompany: data => {
      dispatch(action.actEditCompanyAPI(data));
    },
    getListCompany: () => {
      dispatch(action.actGetListCompanyAPI());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(childModalCompany);
