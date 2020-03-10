import React from "react";
import "../scss/App.scss";
// import FullPage from "./fullPage";
import { connect } from "react-redux";

class App extends React.Component {
    render() {
        return <div className="App"></div>;
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, {})(App);
