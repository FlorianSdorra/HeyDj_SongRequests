import React from "react";
import { connect } from "react-redux";

import MidSection from "./components/MidSection";
import SearchResult from "./components/SearchResult";
import SearchButtonSmall from "./components/SearchButtonSmall";

class FloS extends React.Component {
    render() {
        return (
            <>
                <MidSection />
                <div className="result-list-wrap">
                    <SearchResult></SearchResult>
                    <SearchResult></SearchResult>
                    <SearchResult></SearchResult>
                    <SearchResult></SearchResult>
                    <SearchResult></SearchResult>
                    <SearchResult></SearchResult>
                </div>
                <div className="small-button-wrap">
                    <SearchButtonSmall></SearchButtonSmall>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, {})(FloS);
