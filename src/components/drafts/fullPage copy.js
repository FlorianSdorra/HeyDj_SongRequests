import React from "react";
import { connect } from "react-redux";
import ReactFullpage from "@fullpage/react-fullpage";
import heydjghost03 from "../assets/HeyDjGhost-03.png";
import logo from "../assets/logo.png";
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
                                        <img src={logo} />
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
                                            className="fs24 bold intro-bottom"
                                            onClick={() =>
                                                fullpageApi.moveSectionDown()
                                            }
                                        >
                                            ABOUT
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
                                <div className="container">
                                    <div className="center">
                                        <img
                                            className="picture"
                                            id=""
                                            src={heydjghost03}
                                        ></img>
                                    </div>
                                    <p className="fs24 reg center">
                                        MARK MORIN
                                    </p>
                                    <p className="fs24 reg center">
                                        OBJECTIF :
                                        <strong>
                                            Prendre plus de&nbsp;vacances
                                        </strong>
                                    </p>
                                    <p className="fs18 reg center light">
                                        (et ne travailler que si le Wi-Fi se
                                        rend à la&nbsp;plage).
                                        <br className="del" />
                                        Ce
                                        <i>workaholic</i> notoire saura-t-il
                                        tenir son&nbsp;engagement?
                                    </p>
                                    <div className="center">
                                        <button
                                            className="fs16 white"
                                            onClick={() =>
                                                fullpageApi.moveSectionDown()
                                            }
                                        >
                                            MOI AUSSI!
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
                            </div>
                            <div className="section">
                                <p className="center">Section 3</p>
                                <div className="center">
                                    <button
                                        className="fs16 white"
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
