import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../../redux/action/index";

class childModalPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        id: "",
        content_price: "",
        price: "",
        service_id: "",
        createdAt: "",
        updatedAt: "",
        __v: 0
      },
      errors: {
        content_price: "",
        price: "",
        service_id: ""
      },
      formValid: false,
      content_priceValid: false,
      priceValid: false,
      service_idValid: false
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
    let { content_priceValid, priceValid, service_idValid, Valid } = this.state;
    switch (name) {
      case "content_price":
        content_priceValid = message !== "" ? false : true;
        break;
      case "price":
        priceValid = message !== "" ? false : true;
        break;
      case "service_id":
        service_idValid = message !== "" ? false : true;
        break;
      case "":
        Valid = message !== "" ? false : true;
        break;
      default:
        break;
    }
    this.setState(
      {
        errors: { ...this.state.errors, [name]: message },
        content_priceValid,
        priceValid,
        service_idValid,
        Valid
      },
      () => {
        this.FormValidation();
      }
    );
  };
  FormValidation = () => {
    this.setState({
      formValid:
        this.state.content_priceValid &&
        this.state.priceValid &&
        this.state.service_idValid
    });
  };
  handleSubmit = event => {
    event.preventDefault();

    if (this.props.editPrice === null) {
      this.props.addPrice(this.state.values);
      console.log("add");
      console.log(this.state.values);
    } else {
      this.props.editInfoPrice(this.state.values);
      console.log(this.state.values);
      console.log("update");
    }
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.editPrice) {
      //Update
      console.log(nextProps.editPrice);

      this.setState({
        values: {
          ...this.state.values,
          content_price: nextProps.editPrice.content_price,
          price: nextProps.editPrice.price,
          service_id: nextProps.editPrice.service_id,
          id: nextProps.editPrice._id,
          createdAt: nextProps.editPrice.createdAt,
          updatedAt: nextProps.editPrice.updatedAt
        },
        errors: {
          ...this.state.errors,
          content_price: "",
          price: "",
          service_id: ""
        },
        content_priceValid: true,
        priceValid: true,
        service_idValid: true,
        formValid: true
      });
    } else {
      //ADD
      this.setState({
        values: {
          ...this.state.values,
          content_price: "",
          price: "",
          service_id: ""
        },
        content_priceValid: false,
        priceValid: false,
        service_idValid: false,
        formValid: false
      });
    }
  }

  renderNameServiceHTML() {
    let { listService } = this.props;
    console.log(listService);

    if (listService) {
      if (this.props.editPrice) {
        if (this.props.editPrice.name_service) {
          listService = listService.filter(
            item => item._id !== this.props.editPrice.name_service._id
          );
        }
      }
      console.log(listService);

      return listService.map((item, index) => {
        return (
          <option value={item._id} key={index}>
            {item.name_service}
          </option>
        );
      });
    }
  }

  render() {
    let { editPrice } = this.props;
    console.log(this.state.values);

    return (
      <div>
        <div className="modal-header">
          {this.props.editPrice === null ? (
            <h5 className="modal-title">ADD PRICE</h5>
          ) : (
            <h5 className="modal-title">EDIT PRICE</h5>
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
              <label>Tên dịch vụ</label>
              <select
                type="text"
                className="form-control"
                name="service_id"
                onChange={this.handdleonchange}
                onBlur={this.handleErrors}
                onKeyUp={this.handleErrors}
                value={this.state.values.service_id}
              >
                {editPrice ? (
                  <option value={editPrice.name_service._id} selected>
                    {editPrice.name_service
                      ? editPrice.name_service.name_service
                      : null}
                  </option>
                ) : null}
                {this.renderNameServiceHTML()}
              </select>
            </div>
            {this.state.errors.service_id !== "" ? (
              <div className="Form_err errform">
                (*) {this.state.errors.service_id}
              </div>
            ) : (
              ""
            )}
            <div className="form-group">
              <label>Nội dụng</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nội dung"
                onChange={this.handdleonchange}
                onBlur={this.handleErrors}
                onKeyUp={this.handleErrors}
                name="content_price"
                value={this.state.values.content_price}
              />
            </div>
            {this.state.errors.content_price !== "" ? (
              <div className="Form_err errform">
                (*) {this.state.errors.content_price}
              </div>
            ) : (
              ""
            )}
            <div className="form-group">
              <label>Giá</label>
              <input
                type="text"
                className="form-control"
                placeholder="Giá"
                onChange={this.handdleonchange}
                onBlur={this.handleErrors}
                onKeyUp={this.handleErrors}
                name="price"
                value={this.state.values.price}
              />
              {this.state.errors.price !== "" ? (
                <div className="Form_err errform">
                  (*) {this.state.errors.price}
                </div>
              ) : (
                ""
              )}
            </div>

            {this.props.editPrice === null ? (
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
            {/* {this.props.editBlog===null?(<button
              type="submit"
              className="btn btn-success mt-4"
              
              disabled={!this.state.formValid}
              onClick={()=>this.props.addBlog(this.state.values)}
            >
              Submit
            </button>):(<button
              type="submit"
              className="btn btn-success mt-4"
              
              disabled={!this.state.formValid}
              onClick={()=>this.props.editBlog(this.state.values)}
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
    editPrice: state.deMoReducer.editPrice,
    listService: state.deMoReducer.listService
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addPrice: data => {
      dispatch(action.actAddPriceAPI(data));
    },
    editInfoPrice: data => {
      dispatch(action.actEditPriceAPI(data));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(childModalPrice);
