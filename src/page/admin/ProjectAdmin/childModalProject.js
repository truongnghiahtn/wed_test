import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../../../redux/action/index";

class childModalProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        id: "",
        name_project: "",
        content_project: "",
        img_project: "",
        link_project: "",
        category_project: "",
        createdAt: "",
        updatedAt: "",
        __v: 0
      },
      errors: {
        name_project: "",
        content_project: "",
        img_project: "",
        link_project: "",
        category_project: ""
      },
      formValid: false,
      name_projectvalid: false,
      content_projectvalid: false,
      img_projectvalid: false,
      link_projectvalid: false,
      category_projectValid: false
    };
  }
  componentDidMount() {
    this.props.getcategory();
  }
  handdleonchange = event => {
    this.setState({
      values: {
        ...this.state.values,
        [event.target.name]: event.target.value
      }
    });
    if (event.target.name === "category_project") {
      this.handleErrors(event);
    }
  };
  handleErrors = event => {
    let { name, value } = event.target;
    let message = value === "" ? "Do not be empty" : "";
    console.log(value);
    let {
      name_projectvalid,
      content_projectvalid,
      img_projectvalid,
      link_projectvalid,
      category_projectValid
    } = this.state;
    switch (name) {
      case "name_project":
        name_projectvalid = message !== "" ? false : true;
        break;
      case "content_project":
        content_projectvalid = message !== "" ? false : true;
        break;
      case "img_project":
        img_projectvalid = message !== "" ? false : true;
        break;
      case "link_project":
        link_projectvalid = message !== "" ? false : true;
        break;
      case "category_project":
        category_projectValid = message !== "" ? false : true;
      default:
        break;
    }
    this.setState(
      {
        errors: { ...this.state.errors, [name]: message },
        name_projectvalid,
        content_projectvalid,
        img_projectvalid,
        link_projectvalid,
        category_projectValid
      },
      () => {
        this.FormValidation();
      }
    );
  };
  FormValidation = () => {
    this.setState({
      formValid:
        this.state.name_projectvalid &&
        this.state.content_projectvalid &&
        this.state.img_projectvalid &&
        this.state.link_projectvalid &&
        this.state.category_projectValid
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.getProject();
    if (this.props.userEdit === null) {
      this.props.addProject(this.state.values);
    } else {
      this.props.ediProject(this.state.values);
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.userEdit) {
      //Update

      this.setState({
        values: {
          ...this.state.values,
          name_project: nextProps.userEdit.name_project,
          content_project: nextProps.userEdit.content_project,
          img_project: nextProps.userEdit.img_project,
          id: nextProps.userEdit._id,
          link_project: nextProps.userEdit.link_project,
          createdAt: nextProps.userEdit.createdAt,
          updatedAt: nextProps.userEdit.updatedAt,
          category_project: nextProps.userEdit.category_project._id
        },
        errors: {
          ...this.state.errors,
          name_project: "",
          content_project: "",
          img_project: "",
          link_project: "",
          category_project: ""
        },

        name_projectvalid: true,
        content_projectvalid: true,
        img_projectvalid: true,
        formValid: true,
        link_projectvalid: true
      });
    } else {
      //ADD
      this.setState({
        values: {
          ...this.state.values,
          name_project: "",
          content_project: "",
          img_project: "",
          link_project: ""
        },
        errors: {
          ...this.state.errors,
          name_project: "",
          content_project: "",
          img_project: "",
          link_project: ""
        },
        name_projectvalid: false,
        content_projectvalid: false,
        img_projectvalid: false,
        formValid: false,
        link_projectvalid: false
      });
    }
  }
  rendertypecategory = () => {
    return this.props.listtype.map((item, index) => {
      return (
        <option key={index} value={item._id}>
          {item.name_category_project}
        </option>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="modal-header">
          {this.props.userEdit === null ? (
            <h5 className="modal-title">ADD PROJECT ADMIN</h5>
          ) : (
            <h5 className="modal-title">EDIT PROJECT ADMIN</h5>
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
              <label>Tên project</label>

              <input
                type="text"
                className="form-control"
                placeholder="Tên project"
                onChange={this.handdleonchange}
                onBlur={this.handleErrors}
                onKeyUp={this.handleErrors}
                name="name_project"
                value={this.state.values.name_project}
              />
              {this.state.errors.name_project !== "" ? (
                <div className="Form_err errform">
                  (*) {this.state.errors.name_project}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label>Nội dung</label>

              <input
                type="text"
                className="form-control"
                placeholder="Nội dung"
                onChange={this.handdleonchange}
                onBlur={this.handleErrors}
                onKeyUp={this.handleErrors}
                name="content_project"
                value={this.state.values.content_project}
              />
              {this.state.errors.content_project !== "" ? (
                <div className="Form_err errform">
                  (*) {this.state.errors.content_project}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="form-group m-0">
              <label>Hình ảnh</label>
              <input
                type="text"
                className="form-control"
                placeholder="Hình ảnh"
                onChange={this.handdleonchange}
                onBlur={this.handleErrors}
                onKeyUp={this.handleErrors}
                name="img_project"
                value={this.state.values.img_project}
              />
            </div>
            <div className="form-group m-0">
              <label>Liên kết</label>
              <input
                type="text"
                className="form-control"
                placeholder="Liên kết"
                onChange={this.handdleonchange}
                onBlur={this.handleErrors}
                onKeyUp={this.handleErrors}
                name="link_project"
                value={this.state.values.link_project}
              />
            </div>
            {this.state.errors.link_project !== "" ? (
              <div className="Form_err errform">
                (*) {this.state.errors.link_project}
              </div>
            ) : (
              ""
            )}
            <div className="form-group">
              <label>Loại Dự án</label>
              <select
                className="form-control"
                name="category_project"
                onChange={this.handdleonchange}
                value={this.state.values.category_project}
              >
                <option value="">Vui lòng chọn</option>
                {this.rendertypecategory()}
              </select>
            </div>
            {this.state.errors.category_project !== "" ? (
              <div className="Form_err errform">
                (*) {this.state.errors.category_project}
              </div>
            ) : (
              ""
            )}

            {this.props.userEdit === null ? (
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
              onClick={() => this.props.loading()}
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
    userEdit: state.deMoReducer.edit,
    listtype: state.deMoReducer.dataCategoryProjects
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addProject: data => {
      dispatch(action.actPostProject(data));
    },
    editProject: data => {
      dispatch(action.actPutProject(data));
    },
    getProject: () => {
      dispatch(action.getProjectsApi());
    },
    loading: () => {
      dispatch(action.getloading());
    },
    getcategory: () => {
      dispatch(action.getCategoryProjectsApi());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(childModalProject);
