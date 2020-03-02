import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../../redux/action/index";
import Button from "@material-ui/core/Button";
//icon
import AddIcon from "@material-ui/icons/Add";
import ItemTable from "./itemTableBlog";
import ChildModal from "./childModalBlog";
import Modalfather from "../../../components/modal/fatherModal";
import SearchAdmin from "../../../components/SearchAdmin/index";
const Modal = Modalfather(ChildModal);

//component

class BlogAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listBlog: []
    };
  }

  componentDidMount() {
    this.props.getlistBlog();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.listBlog) {
      this.setState({
        listBlog: nextProps.listBlog
      });
    }
  }

  renderTbody = () => {
    return this.state.listBlog.map((item, index) => (
      <ItemTable blog={item} key={index} />
    ));
  };

  handleFilter = keyword => {
    let listBlog = this.state.listBlog.filter(
      item => item.title_blog.toLowerCase().indexOf(keyword.toLowerCase()) > -1
    );
    this.setState({ listBlog });
  };

  render() {
    return (
      <div className="container">
        <div className="title">Blog Management</div>
        <div className="admin-top">
          <Button
            variant="contained"
            color="primary"
            data-toggle="modal"
            data-target="#modelId"
            onClick={() => {
              this.props.onEditBlog();
            }}
          >
            <AddIcon /> Add Blog
          </Button>
          <Modal />
          <SearchAdmin onFilter={this.handleFilter} />
        </div>
        <div className="admin-content">
          <table className="table table-striped table-inverse">
            <thead className="thead-inverse">
              <tr>
                <th>Tiêu đề</th>
                <th>Nội dung</th>
                <th>Hình ảnh</th>
              </tr>
            </thead>
            <tbody>{this.renderTbody()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
const MapStateToProps = state => {
  return {
    listBlog: state.deMoReducer.dataBlog
  };
};
const MapDispatchToProps = Dispatch => {
  return {
    getlistBlog: () => {
      Dispatch(action.getBlogApi());
    },
    onEditBlog: () => {
      Dispatch(action.actOnEditBlog());
    }
  };
};
export default connect(MapStateToProps, MapDispatchToProps)(BlogAdmin);
