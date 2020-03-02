import React from "react";
import Events from "./Events";
import { connect } from "react-redux";

function Main() {
  return (
    <div className="main">
      <Events></Events>
      <div className="getting-started">
        <button className="btn-start">GET STARTED</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {})(Main);
