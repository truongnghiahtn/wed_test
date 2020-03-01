import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import Preloader from "../components/Preloader";
import CopyRight from "../components/CopyRight";
import GoTop from "../components/GoTop";
import { connect } from "react-redux";
import * as action from "../redux/action/index";

const HomeLayout = props => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.location]);

  return (
    <Fragment>
      {/* Preloader  */}
      <Preloader />
      {/* End Preloader */}
      {/* Start Header */}
      <Header componentName={props.children.type.name} />
      {/* End Header */}
      {props.children}
      {/* Start Footer Section */}
      <Footer />
      {/* End Footer Section */}
      {/* Start CopyRight Section */}
      <CopyRight />
      {/* End CopyRight Section */}
      {/* Start Go Top Section  */}
      <GoTop />
      {/* End Go Top Section */}
    </Fragment>
  );
};

function HomeTemplate({ Component, ...props }) {
  /*   React.useEffect(() => {
    props.getInfoCompany();
  }, []); */
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

/* const mapDispatchToProps = dispatch => {
  return {
    getInfoCompany: () => {
      dispatch(action.actGetInfoCompanyAPI());
    }
  };
}; */

export default connect(null, null)(HomeTemplate);
