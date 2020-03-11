import React from "react";
import { connect } from "react-redux";
import ReactFullpage from "@fullpage/react-fullpage";

class FullPage extends React.Component {
    render() {
        return (
            <ReactFullpage
                //fullpage options
                licenseKey={"YOUR_KEY_HERE"}
                scrollingSpeed={1000}
                loopBottom={true}
                navigation
                navigationPosition={"left"} /* Options here */
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <p>Section 1 (welcome to fullpage.js)</p>
                                {/* <button
                                    onClick={() =>
                                        fullpageApi.moveSectionDown()
                                    }
                                >
                                    Click me to move down
                                </button> */}
                                <div
                                    className="center"
                                    onClick={() =>
                                        fullpageApi.moveSectionDown()
                                    }
                                >
                                    <button>About</button>
                                    <div className="arrow">
                                        <i className="bt-down"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="section">
                                <p>Section 2</p>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, {})(FullPage);
