import React, { Component } from "react";
import {connect} from "react-redux"
import * as action from "./../../../redux/action/index";

 class childModalTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: { id:"",name: "", position: "", img: "",createdAt:"",updatedAt:"",__v:0 },
      errors: { name: "", position: "", img: "" },
      formValid: false,
      namevalid: false,
      positionvalid: false,
      imgvalid: false
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
   
      }
    );
  };
  handleErrors = event => {
    let { name, value } = event.target;
    let message = value === "" ? "Do not be empty" : "";
    let { namevalid, positionvalid, imgvalid } = this.state;
    switch (name) {
      case "name":
        namevalid = message !== "" ? false : true;
        break;
      case "position":
        positionvalid = message !== "" ? false : true;
        break;
      case "img":
        imgvalid = message !== "" ? false : true;
        break;
      default:
        break;
    }
    this.setState(
      {
        errors: { ...this.state.errors, [name]: message },
        namevalid,
        positionvalid,
        imgvalid
      },
      () => {
        this.FormValidation();
      }
    );
  };
  FormValidation = () => {
    this.setState({
      formValid:
        this.state.namevalid && this.state.positionvalid && this.state.imgvalid
    });
  };
  handleSubmit = event => {
    event.preventDefault();
   
   
    if(this.props.userEdit===null){
      this.props.addUser(this.state.values)
   
    }
    else{
      this.props.editUser(this.state.values)
     
      
    }
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.userEdit) {
      //Update
     
      this.setState({
        values: {
            ...this.state.values,
            name:nextProps.userEdit.name,
            position:nextProps.userEdit.position,
            img:nextProps.userEdit.img,
            id:nextProps.userEdit._id,
            createdAt:nextProps.userEdit.createdAt,
            updatedAt:nextProps.userEdit.updatedAt

          },
          errors: {
            ...this.state.errors,
            name:"",
            position:"",
            img:"",

          },

        namevalid:true,
        positionvalid:true,
        imgvalid:true,
        formValid:true,
      });
    } else {
      //ADD
      this.setState({
        values: {
          ...this.state.values,
          name: "",
          position: "",
          img: ""
        },
        namevalid:false,
        positionvalid:false,
        imgvalid:false,
        formValid:false,
      });
    }
  }
  render() {

    return (
      <div>
        <div className="modal-header">
          {this.props.userEdit===null?(<h5 className="modal-title">ADD USER ADMIN</h5>):(<h5 className="modal-title">EDIT USER ADMIN</h5>)}
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
              <label>Tên Thành viên</label>

              <input
                type="text"
                className="form-control"
                placeholder="Tên thành viên"
                onChange={this.handdleonchange}
                onBlur={this.handleErrors}
                onKeyUp={this.handleErrors}
                name="name"
                value={this.state.values.name}
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
              <label>Vị trí</label>

              <input
                type="text"
                className="form-control"
                placeholder="Vị trí"
                onChange={this.handdleonchange}
                onBlur={this.handleErrors}
                onKeyUp={this.handleErrors}
                name="position"
                value={this.state.values.position}
              />
               {this.state.errors.position !== "" ? (
                  <div className="Form_err errform">
                    (*) {this.state.errors.position}
                  </div>
                ) : (
                  ""
                )}
            </div>
            <div className="form-group m-0">
              <label>Hình nhân vật</label>
              <input
                type="text"
                className="form-control"
                placeholder="Avatar"
                onChange={this.handdleonchange}
                onBlur={this.handleErrors}
                onKeyUp={this.handleErrors}
                name="img"
                value={this.state.values.img}
              />
            </div>
            {this.state.errors.img !== "" ? (
                  <div className="Form_err errform">
                    (*) {this.state.errors.img}
                  </div>
                ) : (
                  ""
                )}
            {this.props.userEdit===null?(""):(  <div>
            <div className="form-group">
            <label>Thời gian</label>
              <input type="text" className="form-control" placeholder="Thời gian" value={this.state.values.createdAt} disabled />
            </div>
            <div className="form-group">
            <label>Thời gian Update</label>
              <input type="text" className="form-control" placeholder="Thời gian Update" value={this.state.values.updatedAt} disabled />
            </div>
            </div>)}
          {/* {this.props.userEdit===null?(<button
              type="submit"
              className="btn btn-success mt-4"
              
              disabled={!this.state.formValid}
              onClick={()=>this.props.addUser(this.state.values)}
            >
              Submit
            </button>):(<button
              type="submit"
              className="btn btn-success mt-4"
              
              disabled={!this.state.formValid}
              onClick={()=>this.props.editUser(this.state.values)}
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
      userEdit: state.deMoReducer.edit
    };
  };
const mapDispatchToProps =dispatch=>{
  return{
    addUser:data=>{
      dispatch(action.actPostTeam(data));
    },
    editUser:data=>{
      dispatch(action.actPutTeam(data));
    },
    getTeam: () => {
      dispatch(action.actGetListTeamAPI());
    }
  }
}
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(childModalTeam);
