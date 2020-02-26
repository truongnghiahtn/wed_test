import React, { Component } from "react";
import Banner from "../../../components/Banner";
import Features from "../../../components/Features";
import About from "../../../components/About";
import Services from "../../../components/Services";
import Choose from "../../../components/Choose";
import Project from "../../../components/Project";
import Team from "../../../components/Team";
import Analysis from "../../../components/Analysis";
import GoTop from "../../../components/GoTop";

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
        {/* Start About Section */}
        <About />
        {/* End About Section */}
        {/* Start Services Section */}
        <Services />
        {/* End Services Section */}
        {/* Start Choose Section */}
        <Choose />
        {/* End Choose Section */}
        {/* Start Project Section */}
        <Project />
        {/* End Project Section */}
        {/* Start Team Section */}
        <Team />
        {/* End Team Section */}
        {/* Start Analysis Section */}
        <Analysis />
        {/* End Analysis Section */}
        {/* Start Go Top Section  */}
        <GoTop />
        {/* End Go Top Section */}
      </React.Fragment>
    );
  }
}
