import React from "react";
import { connect } from "react-redux";
import ReactFullpage from "@fullpage/react-fullpage";
// import LandingPage from "./LandingPage";

class FullPage extends React.Component {
    render() {
        return (
            <ReactFullpage
                //full page options
                licenseKey={"YOUR_KEY_HERE"}
                scrollingSpeed={1000}
                loopBottom={true}
                navigation
                navigationPosition={"left"} /* Options here */
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <div className="container">
                                    <header className="logo center">
                                        <img />
                                    </header>
                                    <div className="introBox center">
                                        <p className="fs32">RELEVEZ LE DÉFI!</p>
                                        <h1 className="fs50">
                                            DÉCOUVREZ NOS RÉSOLUTIONS 2018
                                        </h1>
                                        <p className="fs30">
                                            pour une année plus&nbsp;sereine
                                        </p>
                                    </div>
                                    <div className="introText center">
                                        <h2 className="fs24">
                                            Choisissez la résolution qui
                                            <br className="del" />
                                            &nbsp;vous interpelle le plus et
                                            faites équipe avec nous!
                                        </h2>
                                        <p className="fs18">
                                            Vous aurez droit à des mots
                                            d’encouragement et des anecdotes
                                            <br className="del" />
                                            cocasses durant la
                                            nouvelle&nbsp;année.
                                        </p>
                                    </div>
                                    <div className="introButton center">
                                        <div
                                            className="fs24 bold"
                                            className="intro-bottom"
                                            onClick={() =>
                                                fullpageApi.moveSectionDown()
                                            }
                                        >
                                            DÉCOUVREZ
                                        </div>
                                        <div
                                            className="arrow"
                                            onClick={() =>
                                                fullpageApi.moveSectionDown()
                                            }
                                        >
                                            <i className="down"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section">
                                <p className="center">Section 2</p>
                                <div className="center">
                                    <button
                                        onClick={() =>
                                            fullpageApi.moveSectionDown()
                                        }
                                    >
                                        About
                                    </button>
                                    <div
                                        className="arrow"
                                        onClick={() =>
                                            fullpageApi.moveSectionDown()
                                        }
                                    >
                                        <i className="bt-down"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="section">
                                <p>Section 3</p>
                                <div className="center">
                                    <button
                                        onClick={() =>
                                            fullpageApi.moveSectionDown()
                                        }
                                    >
                                        About
                                    </button>
                                    <div
                                        className="arrow"
                                        onClick={() =>
                                            fullpageApi.moveSectionDown()
                                        }
                                    >
                                        <i className="bt-down"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="section">
                                <p>Section 4</p>
                                <div className="center">
                                    <button
                                        onClick={() =>
                                            fullpageApi.moveSectionDown()
                                        }
                                    >
                                        About
                                    </button>
                                    <div
                                        className="arrow"
                                        onClick={() =>
                                            fullpageApi.moveSectionDown()
                                        }
                                    >
                                        <i className="bt-down"></i>
                                    </div>
                                </div>
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
