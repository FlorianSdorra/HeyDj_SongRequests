import React from "react";
import "../scss/App.scss";
// import FullPage from "./fullPage";
import ReactFullpage from "@fullpage/react-fullpage";
import { connect } from "react-redux";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <ReactFullpage
                    //fullpage options
                    licenseKey={"YOUR_KEY_HERE"}
                    scrollingSpeed={1000}
                    navigation
                    navigationPosition={"left"} /* Options here */
                    render={({ state, fullpageApi }) => {
                        return (
                            <ReactFullpage.Wrapper>
                                <div className="section">
                                    <p>Section 1 (welcome to fullpage.js)</p>
                                    <button
                                        onClick={() =>
                                            fullpageApi.moveSectionDown()
                                        }
                                    >
                                        Click me to move down
                                    </button>
                                </div>
                                <div className="section">
                                    <p>Section 2</p>
                                </div>
                            </ReactFullpage.Wrapper>
                        );
                    }}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, {})(App);
