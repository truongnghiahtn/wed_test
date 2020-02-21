import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import Preloader from "../components/Preloader";
import CopyRight from "../components/CopyRight";

const HomeLayout = props => {
  return (
    <Fragment>
      {/* Preloader  */}
      <Preloader />
      {/* End Preloader */}
      <Header />
      {props.children}
      {/* Start Footer Section */}
      <Footer />
      {/* End Footer Section */}
      {/* Start CopyRight Section */}
      <CopyRight />
      {/* End CopyRight Section */}
    </Fragment>
  );
};

export default function HomeTemplate({ Component, ...props }) {
  const loadjsFunction = () => {
    window.$(".Container").mixItUp();
    console.log(123);
  };
  return (
    <Route
      {...props}
      onEnter={loadjsFunction()}
      render={propsComponent => {
        return (
          <HomeLayout>
            <Component {...propsComponent} />
          </HomeLayout>
        );
      }}
    />
  );
}
