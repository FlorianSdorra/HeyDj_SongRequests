import React from "react";
import "../scss/App.scss";
import "normalize.css"; // This adds the normalize.css !

import FullPage from "./fullPage";
// import ReactFullpage from "@fullpage/react-fullpage";
import { connect } from "react-redux";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <FullPage />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, {})(App);
