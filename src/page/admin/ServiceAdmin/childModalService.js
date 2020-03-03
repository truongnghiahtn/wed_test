import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../../../redux/action/index";

class childModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        _id: "",
        img_service: "",
        name_service: "",
        content_service: "",
        category_service_id: "",
        createdAt: "",
        updatedAt: "",
        __v: 0
      },
      errors: {
        name_service: "",
        content_service: "",
        category_service_id: "",
        img_service: ""
      },
      formValid: false,
      nameValid: false,
      contentValid: false,
      imgValid: false,
      cateValid: false
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.editService) {
      //Update
      this.setState({
        values: {
          ...this.state.values,
          name_service: nextProps.editService.name_service,
          content_service: nextProps.editService.content_service,
          img_service: nextProps.editService.img_service,
          category_service_id: nextProps.editService.category_service
            ? nextProps.editService.category_service._id
            : "",
          _id: nextProps.editService._id,
          createdAt: nextProps.editService.createdAt,
          updatedAt: nextProps.editService.updatedAt
        },
        errors: {
          ...this.state.errors,
          name_service: "",
          content_service: "",
          category_service_id: "",
          img_service: ""
        },
        formValid: true,
        nameValid: true,
        contentValid: true,
        cateValid: true,
        imgValid: true
      });
    } else {
      //ADD
      this.setState({
        values: {
          ...this.state.values,
          _id: "",
          img_service: "",
          name_service: "",
          content_service: "",
          category_service_id: "",
          createdAt: "",
          updatedAt: ""
        },
        nameValid: false,
        contentValid: false,
        cateValid: false,
        imgValid: false,
        formValid: false
      });
    }
  }
  handdleonchange = event => {
    this.setState({
      values: {
        ...this.state.values,
        [event.target.name]: event.target.value
      }
    });
    if (event.target.name === "category_service_id") {
      this.handleErrors(event);
    }
  };

  handleErrors = event => {
    let { name, value } = event.target;
    let message = value === "" ? "Do not be empty" : "";
    let { nameValid, contentValid, cateValid, imgValid } = this.state;
    switch (name) {
      case "name_service":
        nameValid = message !== "" ? false : true;
        break;
      case "category_service_id":
        cateValid = message !== "" ? false : true;
        break;
      case "content_service":
        contentValid = message !== "" ? false : true;
        break;
      case "img_service":
        imgValid = message !== "" ? false : true;
        break;
      default:
        break;
    }
    this.setState(
      {
        errors: { ...this.state.errors, [name]: message },
        nameValid,
        contentValid,
        cateValid,
        imgValid
      },
      () => {
        this.FormValidation();
      }
    );
  };
  FormValidation = () => {
    this.setState({
      formValid:
        this.state.nameValid &&
        this.state.contentValid &&
        this.state.cateValid &&
        this.state.imgValid
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    !this.props.editService
      ? this.props.addServiceApi(this.state.values)
      : this.props.editServiceApi(this.state.values);
  };

  rendertypecategory = () => {
    return this.props.dataCategoryService.map((item, index) => {
      return (
        <option key={index} value={item._id}>
          {item.name_category_service}
        </option>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="modal-header">
          {this.props.editService === null ? (
            <h5 className="modal-title">ADD SERVICE ADMIN</h5>
          ) : (
            <h5 className="modal-title">EDIT SERVICE ADMIN</h5>
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
              <label>Tên Dịch Vụ</label>

              <input
                type="text"
                className="form-control"
                placeholder="Tên Dịch Vụ"
                onChange={this.handdleonchange}
                onBlur={this.handleErrors}
                onKeyUp={this.handleErrors}
                name="name_service"
                value={this.state.values.name_service}
              />
              {this.state.errors.name !== "" ? (
                <div className="Form_err errform">
                  (*) {this.state.errors.name}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label>Mô Tả</label>

              <input
                type="text"
                className="form-control"
                placeholder="Mô Tả"
                onChange={this.handdleonchange}
                onBlur={this.handleErrors}
                onKeyUp={this.handleErrors}
                name="content_service"
                value={this.state.values.content_service}
              />
              {this.state.errors.content_service !== "" ? (
                <div className="Form_err errform">
                  (*) {this.state.errors.content_service}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label>Hình Ảnh</label>

              <input
                type="text"
                className="form-control"
                placeholder="Hình Ảnh"
                onChange={this.handdleonchange}
                onBlur={this.handleErrors}
                onKeyUp={this.handleErrors}
                name="img_service"
                value={this.state.values.img_service}
              />
              {this.state.errors.img_service !== "" ? (
                <div className="Form_err errform">
                  (*) {this.state.errors.img_service}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label>Loại Dịch vụ</label>
              <select
                className="form-control"
                name="category_service_id"
                onChange={this.handdleonchange}
                value={this.state.values.category_service_id}
              >
                <option value="">Vui lòng chọn</option>
                {this.rendertypecategory()}
              </select>
            </div>
            {this.state.errors.category_service_id !== "" ? (
              <div className="Form_err errform">
                (*) {this.state.errors.category_service_id}
              </div>
            ) : (
              ""
            )}
            {!this.props.editService ? (
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
    editService: state.deMoReducer.editService,
    dataCategoryService: state.deMoReducer.dataCategoryService
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addServiceApi: data => {
      dispatch(action.addServiceApi(data));
    },
    editServiceApi: data => {
      dispatch(action.editServiceApi(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(childModal);
