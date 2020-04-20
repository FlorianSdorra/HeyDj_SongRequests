import React from "react";
import "normalize.css"; // This adds the normalize.css !
import "../scss/App.scss";

import FullPage from "./LandingPage";
import EventSearchResult from "./EventSearchResult";
import EventOverview from "./Event";
import TrackSearch from "./TrackSearch";
import LoginSignUp from "./LoginSignUp";

import { connect } from "react-redux";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                {/* <FullPage /> */}
                {/* <EventSearchResult /> */}
                {/* <EventOverview /> */}
                {/* <TrackSearch /> */}
                <LoginSignUp />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, {})(App);
