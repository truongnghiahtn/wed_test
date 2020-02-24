import React from "react";
/* import "./style.scss"; */
import $ from "jquery";

const Preloader = () => {
  const [state, setstate] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      $(".preloader").fadeOut(450, function() {
        setstate(true);
      });
    }, 500);
  }, []);

  return state ? (
    ""
  ) : (
    <div className="preloader">
      <div className="loader">
        <div className="shadow" />
        <div className="box" />
      </div>
    </div>
  );
};

export default Preloader;
