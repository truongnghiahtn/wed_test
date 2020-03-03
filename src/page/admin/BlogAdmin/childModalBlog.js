import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../../redux/action/index";

class childModalBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        id: "",
        img_blog: "",
        title_blog: "",
        content_blog: "",
        created_at: "",
        updated_at: "",
        __v: 0
      },
      errors: {
        img_blog: "",
        title_blog: "",
        content_blog: ""
      },
      formValid: false,
      img_blogValid: false,
      title_blogValid: false,
      content_blogValid: false
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
      img_blogValid,
      title_blogValid,
      content_blogValid,
      Valid
    } = this.state;
    switch (name) {
      case "img_blog":
        img_blogValid = message !== "" ? false : true;
        break;
      case "title_blog":
        title_blogValid = message !== "" ? false : true;
        break;
      case "content_blog":
        content_blogValid = message !== "" ? false : true;
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
        img_blogValid,
        title_blogValid,
        content_blogValid,
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
        this.state.img_blogValid &&
        this.state.title_blogValid &&
        this.state.content_blogValid
    });
  };
  handleSubmit = event => {
    event.preventDefault();

    if (this.props.editInfoBlog === null) {
      this.props.addBlog(this.state.values);
      console.log("add");
      console.log(this.state.values);
    } else {
      this.props.editBlog(this.state.values);
      console.log(this.state.values);
      console.log("update");
    }
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.editInfoBlog) {
      //Update
      console.log(nextProps.editInfoBlog);

      this.setState({
        values: {
          ...this.state.values,
          img_blog: nextProps.editInfoBlog.img_blog,
          title_blog: nextProps.editInfoBlog.title_blog,
          content_blog: nextProps.editInfoBlog.content_blog,
          id: nextProps.editInfoBlog._id,
          created_at: nextProps.editInfoBlog.created_at,
          updated_at: nextProps.editInfoBlog.updated_at
        },
        errors: {
          ...this.state.errors,
          img_blog: "",
          title_blog: "",
          content_blog: ""
        },

        img_blogValid: true,
        title_blogValid: true,
        content_blogValid: true,
        formValid: true
      });
    } else {
      //ADD
      this.setState({
        values: {
          ...this.state.values,
          img_blog: "",
          title_blog: "",
          content_blog: ""
        },
        img_blogValid: false,
        title_blogValid: false,
        content_blogValid: false,
        formValid: false
      });
    }
  }

  render() {
    return (
      <div>
        <div className="modal-header">
          {this.props.editInfoBlog === null ? (
            <h5 className="modal-title">ADD Blog</h5>
          ) : (
            <h5 className="modal-title">EDIT Blog</h5>
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
              <label>Tiêu đề</label>
              <input
                type="text"
                className="form-control"
                placeholder="Tiêu đề"
                onChange={this.handdleonchange}
                onBlur={this.handleErrors}
                onKeyUp={this.handleErrors}
                name="title_blog"
                value={this.state.values.title_blog}
              />
              {this.state.errors.title_blog !== "" ? (
                <div className="Form_err errform">
                  (*) {this.state.errors.title_blog}
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
                name="content_blog"
                value={this.state.values.content_blog}
              />
              {this.state.errors.content_blog !== "" ? (
                <div className="Form_err errform">
                  (*) {this.state.errors.content_blog}
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
                name="img_blog"
                value={this.state.values.img_blog}
              />
            </div>
            {this.state.errors.img_blog !== "" ? (
              <div className="Form_err errform">
                (*) {this.state.errors.img_blog}
              </div>
            ) : (
              ""
            )}
            {this.props.editInfoBlog === null ? (
              ""
            ) : (
              <div>
                <div className="form-group">
                  <label>Thời gian</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Thời gian"
                    value={this.state.values.created_at}
                    disabled
                  />
                </div>
                <div className="form-group">
                  <label>Thời gian Update</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Thời gian Update"
                    value={this.state.values.updated_at}
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
    editInfoBlog: state.deMoReducer.editBlog
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addBlog: data => {
      dispatch(action.actAddBlogAPI(data));
    },
    editBlog: data => {
      dispatch(action.actEditBlogAPI(data));
    },
    getListBlog: () => {
      dispatch(action.getBlogApi());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(childModalBlog);
