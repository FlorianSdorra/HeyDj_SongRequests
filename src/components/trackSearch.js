import React from "react";
import { connect } from "react-redux";

class TrackSearch extends React.Component {
  render() {
    return (
      <div className="search-form">
           <input className="search-field" type="text" placeholder="Search.."></input>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {})(TrackSearch);