import React from "react";
import Event from "../Event";
import { connect } from "react-redux";

class Events extends React.Component {
    render() {
        return (
            <div className="event-container">
                <Event></Event>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, {})(Events);
