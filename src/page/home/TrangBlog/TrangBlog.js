import React, { Component, Fragment } from "react";
import Subcribe from "../../../components/Subcribe/Subcribe";
import PageTitleArea from "../../../components/PageTitleArea/PageTitleArea";
import { connect } from "react-redux";
import * as actions from "../../../redux/action/index";
import * as $ from "jquery";
import Moment from "react-moment";

class TrangBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumberCurrent: 1
    };
  }
  componentDidMount() {
    this.props.getBlogApi();
  }
  renderContentBlog = () => {
    return this.props.dataBlog
      .slice(
        6 * (this.state.pageNumberCurrent - 1),
        6 * (this.state.pageNumberCurrent - 1) + 6
      )
      .map((item, index) => {
        return (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className="blog-item fix-style">
              <div className="blog-image">
                <a>
                  {/* <img src={item.img_blog} alt="image" /> */}
                  <img src="assets/img/blog/2.png" alt="image" />
                </a>
              </div>
              <div className="single-blog-item">
                <ul className="date">
                  <li>
                    <Moment format="DD">{item.created_at}</Moment>
                  </li>
                  <li>
                    <Moment format="MMMM">{item.created_at}</Moment>
                  </li>
                </ul>
                <ul className="blog-list">
                  <li>
                    <i class="fa fa-user" aria-hidden="true"></i> By admin
                  </li>
                </ul>
                <div className="blog-content">
                  <h3>{item.title_blog}</h3>
                  <p>{item.content_blog}</p>
                </div>
                <div className="blog-btn">
                  <a className="blog-btn-one">Read More</a>
                </div>
              </div>
            </div>
          </div>
        );
      });
  };
  renderPagination = () => {
    if (this.props.dataBlog && this.props.dataBlog.length > 6) {
      return (
        <div className="col-lg-12 col-md-12">
          <div className="pagination-area">
            <a
              className="prev page-numbers"
              onClick={() => {
                this.handlePageNumber(0);
              }}
            >
              <i className="fas fa-angle-double-left" />
            </a>
            {this.props.dataBlog.map((item, index) => {
              return index % 6 === 0 ? (
                <a
                  className={
                    `page-numbers page-${index} ` +
                    (index === 0 ? "active" : "")
                  }
                  key={index}
                  onClick={() => {
                    this.handlePageNumber(index);
                  }}
                >
                  {index / 6 + 1}
                </a>
              ) : (
                ""
              );
            })}
            <a
              className="next page-numbers"
              onClick={() => {
                this.handlePageNumber(this.props.dataBlog.length - 1);
              }}
            >
              <i className="fas fa-angle-double-right" />
            </a>
          </div>
        </div>
      );
    }
  };
  handlePageNumber = pageNumberCurrent => {
    $(".page-numbers").removeClass("active");
    $(`.page-${pageNumberCurrent}`).addClass("active");
    this.setState({
      pageNumberCurrent: pageNumberCurrent / 6 + 1
    });
  };
  render() {
    return (
      <Fragment>
        <PageTitleArea title="Blog" />
        <section className="blog-page-area ptb-100">
          <div className="container">
            <div className="section-title">
              <span>Blog</span>
              <h3>Xem dự án mới nhất của chúng tôi</h3>
            </div>
            <div className="row">
              {this.renderContentBlog()}
              {this.renderPagination()}
            </div>
          </div>
        </section>
        <Subcribe />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    dataBlog: state.deMoReducer.dataBlog
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBlogApi: () => {
      dispatch(actions.getBlogApi());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TrangBlog);
