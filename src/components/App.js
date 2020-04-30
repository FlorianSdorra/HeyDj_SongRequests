import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "normalize.css"; // This adds the normalize.css !
import "../scss/App.scss";

import LandingPage from "./LandingPage";
import EventSearchResult from "./EventSearchResult";
import EventOverview from "./EventOverview";
import TrackSearch from "./TrackSearch";
import LoginSignUp from "./LoginSignUp";

import { connect } from "react-redux";


class App extends React.Component {
    render() {
        // console.log(this.props)
        return (
            
            <Router>
                <Switch>
                    <div className="App">
                        <Route 
                            exact path="/" 
                            component={LandingPage} 
                        />
                        <Route
                            path="/eventsearch"
                            component={EventSearchResult}
                        />
                        <Route
                            path="/eventoverview"
                            component={EventOverview}
                        />
                        <Route 
                            path="/tracksearch" 
                            component={TrackSearch} 
                        />
                        <Route 
                            path="/login" 
                            component={LoginSignUp} 
                        />
                    </div>
                </Switch>
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, {})(App);
