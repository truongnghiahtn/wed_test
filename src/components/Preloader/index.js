import React from "react";
/* import "./style.scss"; */
import $ from "jquery";

const Preloader = () => {
  React.useEffect(() => {
    $(".preloader").fadeOut(1000);
  }, []);
  return (
    <div className="preloader">
      <div className="loader">
        <div className="shadow" />
        <div className="box" />
      </div>
    </div>
  );
};

export default Preloader;
