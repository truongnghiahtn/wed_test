import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../redux/action/index";
import $ from "jquery";
import "./style.scss";

class FormContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        name: "",
        email: "",
        phone: "",
        message: ""
      },
      errors: {
        name: "",
        email: "",
        phone: ""
      },
      formValid: false,
      nameValid: false,
      emailValid: false,
      phoneValid: false
    };
  }

  handleOnChange = event => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      values: { ...this.state.values, [name]: value }
    });
    document.getElementById("thongbao").style.display = "none";
  };

  handleErrors = event => {
    let { name, value } = event.target;

    let message = !value ? "This field is required." : "";

    let { nameValid, emailValid, phoneValid } = this.state;

    switch (name) {
      case "name":
        nameValid = message ? false : true;
        break;

      case "phone":
        phoneValid = message ? false : true;
        break;

      case "email":
        emailValid = message ? false : true;
        if (value && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
          emailValid = false;
          message = "Địa chỉ email không hợp lệ!";
        }
        break;
      default:
        break;
    }

    this.setState(
      {
        errors: { ...this.state.errors, [name]: message },
        nameValid,
        emailValid,
        phoneValid
      },
      () => this.FormValidation()
    );
  };

  FormValidation = () => {
    this.setState({
      formValid:
        this.state.nameValid && this.state.emailValid && this.state.phoneValid
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addInfoCustomer(this.state.values);
    $(".contactForm").trigger("reset");
    this.setState({
      values: {
        name: "",
        email: "",
        phone: "",
        message: ""
      },
      errors: {
        name: "",
        email: "",
        phone: ""
      },
      formValid: false,
      nameValid: false,
      emailValid: false,
      phoneValid: false
    });
    document.getElementById("thongbao").style.display = "block";
  };
  render() {
    return (
      <form
        id={this.props.id}
        className={this.props.className}
        onSubmit={this.handleSubmit}
      >
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                onChange={this.handleOnChange}
                /* onBlur={this.handleErrors} */
                onKeyUp={this.handleErrors}
                placeholder="Họ và tên*"
              />
              {this.state.errors.name ? (
                <div className="notif-mess">{this.state.errors.name}</div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="form-group">
              <input
                type="text"
                name="email"
                id="email"
                className="form-control"
                onChange={this.handleOnChange}
                /* onBlur={this.handleErrors} */
                onKeyUp={this.handleErrors}
                placeholder="Email liên hệ*"
              />
              {this.state.errors.email ? (
                <div className="notif-mess">{this.state.errors.email}</div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="form-group">
              <input
                type="text"
                name="phone"
                id="phone"
                className="form-control"
                onChange={this.handleOnChange}
                /* onBlur={this.handleErrors} */
                onKeyUp={this.handleErrors}
                placeholder="Điện thoại liên hệ*"
              />
              {this.state.errors.phone ? (
                <div className="notif-mess">{this.state.errors.phone}</div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                onChange={this.handleOnChange}
                /* onBlur={this.handleErrors} */
                onKeyUp={this.handleErrors}
                placeholder="Bạn cần tư vấn thêm về chương trình, vui lòng để lại tin nhắn tại đây..."
                defaultValue={""}
              />
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="send-btn">
              <button
                type="submit"
                className="default-btn-one"
                disabled={!this.state.formValid}
                style={{
                  pointerEvents: !this.state.formValid ? "none" : null
                }}
              >
                Gửi
              </button>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div
              id="thongbao"
              className="thong-bao"
              style={{ display: "none" }}
            >
              Cảm ơn bạn đã đăng ký tư vấn chương trình. Crimso sẽ liên hệ với
              bạn trong thời gian sớm nhất. Thân mến!
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addInfoCustomer: customer => {
      dispatch(action.actPostInfoCustomerAPI(customer));
    }
  };
};

export default connect(null, mapDispatchToProps)(FormContact);
