import React from "react";
import "normalize.css"; // This adds the normalize.css !
import "../scss/App.scss";

import EventSearchResult from "./EventSearchResult";
// import ReactFullpage from "@fullpage/react-fullpage";
import { connect } from "react-redux";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <EventSearchResult />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, {})(App);
