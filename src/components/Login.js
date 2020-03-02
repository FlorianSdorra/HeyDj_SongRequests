import React from "react";
import { connect } from "react-redux";

class Login extends React.Component {
  render() {
    return (
      <div className="login-container">
        <div className="login">

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {})(Login);