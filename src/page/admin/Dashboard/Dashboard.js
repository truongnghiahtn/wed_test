import React, { Component } from "react";
import Dashboard2 from "./../Dashboard/Dashboard_2/Dashboard2";
import Project from "./../ProjectAdmin/projectadmin";
import Teamadmin from "./../TeamAdmin/teamadmin";
import AdminDelay from "./../adminDelay/adminDelay";
import Customer from "./../Customeradmin/custommeradmin";
import Blog from "./../BlogAdmin/BlogAdmin";
import Company from "./../Company/CompanyAdmin";
import { NavLink } from "react-router-dom";
import Category from "./../CategoryAdmin/CategoryAdmin";
import Service from "./../ServiceAdmin/serviceAdmin";
import $ from "jquery";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "Dashboard",
      show: false,
      delay: true,
      delay1: false
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        delay: false
      });
    }, 2500);
  }
  showProfile = () => {
    let status = !this.state.show;
    this.setState({
      show: status
    });
  };
  delay1 = () => {
    this.setState({
      delay1: true
    });
    setTimeout(() => {
      this.setState({
        delay1: false
      });
    }, 1500);
  };
  nextPage = data => {
    let dulieu;
    switch (data) {
      case "Dashboard":
        dulieu = "Dashboard";
        break;
      case "User":
        dulieu = "User";
        break;
      case "Course":
        dulieu = "Course";
        break;
      case "chart":
        dulieu = "chart";
        break;
      case "blog":
        dulieu = "blog";
        break;
      case "company":
        dulieu = "company";
        break;
      case "category":
        dulieu = "category";
        break;
      case "service":
        dulieu = "service";
        break;
    }
    this.setState(
      {
        data: dulieu
      },
      () => console.log(this.state.data)
    );
  };

  test = () => {
    $(".page-wrapper").removeClass("toggled");
  };
  test1 = () => {
    $(".page-wrapper").addClass("toggled");
  };
  renderhtml() {
    return (
      <div>
        {this.state.delay1 === true ? (
          <div className="dashboard_fixdelay">
            <AdminDelay />
          </div>
        ) : (
          ""
        )}
        <div className="dashboard">
          {/* <div className="back-ground">
              <Background/>
              </div> */}
          <div className="page-wrapper chiller-theme toggled">
            <a
              id="show-sidebar"
              className="btn btn-sm btn-dark"
              onClick={this.test1}
              href="#"
            >
              <i className="fa fa-bars" aria-hidden="true"></i>
            </a>
            <nav id="sidebar" className="sidebar-wrapper">
              <div className="sidebar-content">
                <div className="sidebar-brand">
                  <a href="#">pro sidebar</a>
                  <div id="close-sidebar" onClick={this.test}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="sidebar-header">
                  <div className="user-pic">
                    <img
                      className="img-responsive img-rounded"
                      src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                      alt="User picture"
                    />
                  </div>
                  <div className="user-info">
                    <span className="user-name">
                      Jhon
                      <strong>Smith</strong>
                    </span>
                    <span className="user-role">Administrator</span>
                    <span className="user-status">
                      <i className="fa fa-circle" />
                      <span>Online</span>
                    </span>
                  </div>
                </div>
                <div className="sidebar-search">
                  <div>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control search-menu"
                        placeholder="Search..."
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="fa fa-search" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar-menu">
                  <ul>
                    <li className="header-menu">
                      <span>General</span>
                    </li>
                    <li
                      className={
                        this.state.data === "Dashboard"
                          ? "sidebar-dropdown nghia active"
                          : "sidebar-dropdown nghia"
                      }
                      onClick={() => {
                        this.nextPage("Dashboard");
                      }}
                    >
                      <a href="#">
                        <i className="fa fa-home" aria-hidden="true"></i>
                        <span>Dashboard</span>
                        <span className="badge badge-pill badge-warning">
                          New
                        </span>
                      </a>
                    </li>
                    <li
                      className={
                        this.state.data === "User"
                          ? "sidebar-dropdown nghia active"
                          : "sidebar-dropdown nghia"
                      }
                      onClick={() => {
                        this.nextPage("User");
                      }}
                    >
                      <a href="#" onClick={this.delay1}>
                        <i className="fa fa-users" aria-hidden="true"></i>
                        <span>Project management</span>
                        <span className="badge badge-pill badge-danger">3</span>
                      </a>
                    </li>
                    <li
                      className={
                        this.state.data === "Course"
                          ? "sidebar-dropdown active"
                          : "sidebar-dropdown"
                      }
                      onClick={() => {
                        this.nextPage("Course");
                      }}
                    >
                      <a href="#" onClick={this.delay1}>
                        <i
                          className="fa fa-calendar-minus-o"
                          aria-hidden="true"
                        ></i>
                        <span>Course management</span>
                      </a>
                    </li>
                    <li
                      className={
                        this.state.data === "chart"
                          ? "sidebar-dropdown active"
                          : "sidebar-dropdown"
                      }
                      onClick={() => {
                        this.nextPage("chart");
                      }}
                    >
                      <a href="#">
                        <i className="fa fa-line-chart" aria-hidden="true"></i>
                        <span>Customer</span>
                      </a>
                    </li>
                    <li
                      className={
                        this.state.data === "blog"
                          ? "sidebar-dropdown active"
                          : "sidebar-dropdown"
                      }
                      onClick={() => {
                        this.nextPage("blog");
                      }}
                    >
                      <a href="#">
                        <i className="fa fa-line-chart" aria-hidden="true"></i>
                        <span>Blog</span>
                      </a>
                    </li>
                    <li
                      className={
                        this.state.data === "company"
                          ? "sidebar-dropdown active"
                          : "sidebar-dropdown"
                      }
                      onClick={() => {
                        this.nextPage("company");
                      }}
                    >
                      <a href="#">
                        <i className="fa fa-line-chart" aria-hidden="true"></i>
                        <span>Company</span>
                      </a>
                    </li>
                    <li
                      className={
                        this.state.data === "category"
                          ? "sidebar-dropdown active"
                          : "sidebar-dropdown"
                      }
                      onClick={() => {
                        this.nextPage("category");
                      }}
                    >
                      <a href="#">
                        <i className="fa fa-line-chart" aria-hidden="true"></i>
                        <span>category</span>
                      </a>
                    </li>
                    <li
                      className={
                        this.state.data === "service"
                          ? "sidebar-dropdown active"
                          : "sidebar-dropdown"
                      }
                      onClick={() => {
                        this.nextPage("service");
                      }}
                    >
                      <a href="#">
                        <i className="fa fa-line-chart" aria-hidden="true"></i>
                        <span>service</span>
                      </a>
                    </li>
                    <li className="sidebar-dropdown">
                      <a href="#">
                        <i className="fa fa-globe" />
                        <span>Maps</span>
                      </a>
                    </li>
                    <li className="header-menu">
                      <span>Extra</span>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-book" />
                        <span>Documentation</span>
                        <span className="badge badge-pill badge-primary">
                          Beta
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-calendar" />
                        <span>Calendar</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-folder" />
                        <span>Examples</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sidebar-footer">
                <a href="#">
                  <i className="fa fa-bell" />
                  <span className="badge badge-pill badge-warning notification">
                    3
                  </span>
                </a>
                <a href="#">
                  <i className="fa fa-envelope" />
                  <span className="badge badge-pill badge-success notification">
                    7
                  </span>
                </a>
                <a href="#">
                  <i className="fa fa-cog" />
                  <span className="badge-sonar" />
                </a>
                <NavLink to="/Trang-chu">
                  <i className="fa fa-power-off" />
                </NavLink>
              </div>
            </nav>
            <main className="page-content">
              <div className="title-dashboard">
                <div className="branch">
                  {" "}
                  <img
                    src="../img/elearninglolo.png"
                    className="img-fluid logo "
                    alt=""
                  />
                </div>

                <div className="icon">
                  <div className="my-profile">
                    {" "}
                    My Profile{" "}
                    <i
                      className="fa fa-caret-down"
                      onClick={this.showProfile}
                      aria-hidden="true"
                    ></i>
                  </div>
                  <i className="fa fa-comments" aria-hidden="true"></i>
                  <i className="fa fa-bell-o" aria-hidden="true"></i>
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
              </div>
              {this.state.show === true ? (
                <ul className="show-profile">
                  <li>
                    <a href="#">
                      <i className="fa fa-user-o fw" /> My account
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope-o fw" /> My inbox
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-question-circle-o fw" /> Help
                    </a>
                  </li>
                  <li role="separator" className="divider" />
                  <li>
                    <a href="#">
                      <i className="fa fa-sign-out" /> Log out
                    </a>
                  </li>
                </ul>
              ) : (
                ""
              )}

              <div className="row">
                {this.state.data === "Dashboard" ? <Dashboard2 /> : ""}
                {this.state.data === "User" ? <Project /> : ""}
                {this.state.data === "Course" ? <Teamadmin /> : ""}
                {this.state.data === "chart" ? <Customer /> : ""}
                {this.state.data === "blog" ? <Blog /> : ""}
                {this.state.data === "company" ? <Company /> : ""}
                {this.state.data === "category" ? <Category /> : ""}
                {this.state.data === "service" ? <Service /> : ""}
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.state.delay === true ? <AdminDelay /> : this.renderhtml()}
      </div>
    );
  }
}
