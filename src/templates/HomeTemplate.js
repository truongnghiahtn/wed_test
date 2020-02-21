import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "../Layout/Header/Header";
import Preloader from "../components/Preloader";

const HomeLayout = props => {
  return (
    <Fragment>
      {/* Preloader  */}
      <Preloader />
      {/* End Preloader */}
      <Header />
      {props.children}
    </Fragment>
  );
};

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
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
