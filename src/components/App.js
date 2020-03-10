import React from "react";
import "../scss/App.scss";
// import FullPage from "./fullPage";
import { connect } from "react-redux";
import logo from '../assets/logo.png';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="logo"><img src={logo} alt="logo hey dj"></img></div>
          <button className="login-button">Login</button>
        </header>
        
        <footer>
          <p>Contact &amp; Imprint</p>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {})(App);
