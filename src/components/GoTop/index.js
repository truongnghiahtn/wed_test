import React, { Component } from "react";
/* import "./style.scss"; */
import $ from "jquery";

export default class GoTop extends Component {
  state = {
    thePosition: 0
  };
  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        this.setState({ thePosition: true });
      } else {
        this.setState({ thePosition: false });
      }
    });
    $(".go-top").on("click", function() {
      $("html, body").animate({ scrollTop: "0" }, 500);
    });
  }

  render() {
    return (
      <div className={"go-top" + (this.state.thePosition ? " active" : "")}>
        <i className="fas fa-chevron-up" />
        <i className="fas fa-chevron-up" />
      </div>
    );
  }
}
