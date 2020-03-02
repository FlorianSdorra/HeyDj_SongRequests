import React from "react";
import "../scss/App.scss";
import Navigation from "./Navigation";
import Main from "./Main";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <Main></Main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {})(App);
