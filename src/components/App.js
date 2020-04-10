import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "normalize.css"; // This adds the normalize.css !
import "../scss/App.scss";

import LandingPage from "./LandingPage";
import EventSearchResult from "./EventSearchResult";
import EventOverview from "./Event";
import TrackSearch from "./TrackSearch";

import { connect } from "react-redux";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <div className="App">
                        <Route exact path="/" component={LandingPage} /> 
                        <Route path="/eventsearch" component={EventSearchResult} />
                        <Route path="/eventoverview" component={EventOverview} /> 
                        <Route path="/tracksearch" component={TrackSearch} />
                    </div>
                </Switch>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, {})(App);
