import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../../../redux/action/index";

class childModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        _id: "",
        name_category_project: "",
        createdAt: "",
        updatedAt: "",
        __v: 0
      },
      errors: { name_category_project: "" },
      nameValid: false,
      formValid: false
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps && nextProps.editCate) {
      this.setState({
        values: {
          ...this.state.values,
          name_category_project: nextProps.editCate.name_category_project,
          id: nextProps.editCate._id,
          createdAt: nextProps.editCate.createdAt,
          updatedAt: nextProps.editCate.updatedAt
        },
        errors: {
          ...this.state.errors,
          name_category_project: ""
        },
        namevalid: true,
        formValid: true
      });
    }
  }

  handdleonchange = event => {
    this.setState(
      {
        values: {
          ...this.state.values,
          [event.target.name]: event.target.value
        }
      },
      () => {}
    );
  };

  handleErrors = event => {
    let { name, value } = event.target;
    let message = value === "" ? "Do not be empty" : "";
    let { namevalid } = this.state;
    switch (name) {
      case "name_category_project":
        namevalid = message !== "" ? false : true;
        break;
    }
    this.setState(
      {
        errors: { ...this.state.errors, [name]: message },
        namevalid
      },
      () => {
        this.FormValidation();
      }
    );
  };

  FormValidation = () => {
    this.setState(
      {
        formValid: this.state.namevalid
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.editCategoryProjectsApi(this.state.values);
  };
  render() {
    return (
      <div>
        <div className="modal-header">
          {this.props.editCate ? (
            <h5 className="modal-title">EDIT CATEGORY PROJECT</h5>
          ) : (
            ""
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
              <label>Tên Danh Mục</label>

              <input
                type="text"
                className="form-control"
                placeholder="Tên Danh Mục"
                onChange={this.handdleonchange}
                onBlur={this.handleErrors}
                onKeyUp={this.handleErrors}
                name="name_category_project"
                value={this.state.values.name_category_project}
              />
              {this.state.errors.name_category_project ? (
                <div className="Form_err errform">
                  (*) {this.state.errors.name_category_project}
                </div>
              ) : (
                ""
              )}
            </div>
            <label>Thời gian</label>
            <input
              type="text"
              className="form-control"
              placeholder="Thời gian"
              value={this.state.values.createdAt}
              disabled
            />

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
    editCate: state.deMoReducer.editCate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editCategoryProjectsApi: data => {
      dispatch(action.editCategoryProjectsApi(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(childModal);
