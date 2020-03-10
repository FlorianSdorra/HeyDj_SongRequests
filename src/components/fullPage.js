import React from "react";
import { connect } from "react-redux";

class FullPage extends React.Component {
    render() {
        return (
            <div className="main-container">
                <div className="fullpage"></div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, {})(FullPage);
