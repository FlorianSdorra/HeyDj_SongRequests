import React from "react";
import "../scss/App.scss";
import { connect } from "react-redux";
import logo from "../assets/logo.png";

class App extends React.Component {
    render() {
        return (
            <header>
                <div className="logo-heydj">
                    <img src={logo} alt="logo hey dj"></img>
                </div>
                <div className="header-right-wrap">
                    <button className="login-button">Login</button>
                    {/* <i className="exit fas fa-times"></i> */}
                    {/* <i className="settings fas fa-cog"></i> */}
                </div>
            </header>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, {})(App);
