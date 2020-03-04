import React from "react";
import { connect } from "react-redux";

class Event extends React.Component {
  render() {
    return (
      <div className="event">
        <div> I am an event</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {})(Event);
