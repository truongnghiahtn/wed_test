import React, { Component } from "react";
import Banner from "../../../components/Banner";
import Features from "../../../components/Features";
import Choose from "../../../components/Choose";
import Services from "../../../components/Services";
import Boosting from "../../../components/Boosting";
import Project from "../../../components/Project";
/* import Team from "../../../components/Team"; */
import Team2 from "../../../components/Team2";
import Analysis from "../../../components/Analysis";

export default class TrangChu extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Start Main Banner Area */}
        <Banner />
        {/* End Main Banner Area */}
        {/* Start Features Section */}
        <Features />
        {/* End Features Section */}
        {/* Start Choose Section */}
        <Choose />
        {/* End Choose Section */}
        {/* Start Services Section */}
        <Services />
        {/* End Services Section */}
        {/* Start Tab Section */}
        <Boosting />
        {/* End Tab Section */}
        {/* Start Project Section */}
        <Project />
        {/* End Project Section */}
        {/* Start Team Section */}
        <Team2 />
        {/* End Team Section */}
        {/* Start Analysis Section */}
        <Analysis />
        {/* End Analysis Section */}
      </React.Fragment>
    );
  }
}
