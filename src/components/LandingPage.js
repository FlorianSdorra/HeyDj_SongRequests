import React from "react";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";


import ReactFullpage from "@fullpage/react-fullpage";
import heydjghost09 from "../assets/HeyDjGhost-04.png";
import heydjghost17 from "../assets/HeyDjGhost-17.png";

import logo from "../assets/logo.png";

import setDirection from '../actions/index'

const LandingPage = ()=>{
        
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
                                    <header className="links">
                                        <img src={logo} alt="" />
                                        <button className="fs16 red">
                                            Login
                                        </button>
                                        {/* <button className="fs16 red">
                                            Logout
                                        </button> */}
                                        {/* <i className="exit fas fa-times"></i> */}
                                        {/* <i className="settings fas fa-cog"></i> */}
                                    </header>

                                    <div className="center">
                                        <img
                                            className="picture"
                                            id=""
                                            src={heydjghost09}
                                            alt=""
                                        ></img>
                                    </div>
                                    {/* <p className="fs24 reg center">
                                        SUCHZEILESUCHZEILE
                                    </p> */}
                                    {/* <div className="custom-input fs24 reg">
                                        <div>
                                            <form>
                                                <label>
                                                    <input
                                                        className="center"
                                                        type="text"
                                                        placeholder="Event, DJ, Date ..."
                                                        name="First_Name"
                                                    />
                                                </label>
                                            </form>
                                        </div>
                                    </div> */}
                                    <div className="logo-section-wrapper fs24 reg">
                                        {/* <h3 className="fs24">
                                            Wish you could hear
                                        </h3> */}
                                        <div className="search-form">
                                            <form>
                                                <label>
                                                    <div className="search-form-input-border">
                                                        <i className="fas fa-search search-icon"></i>
                                                        <input
                                                            className="center search-form-input"
                                                            placeholder="Event, DJ, Date ..."
                                                            type="text"
                                                        ></input>
                                                    </div>
                                                </label>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="center fs16 reg">
                                        <button  className="white"> 
                                            Search
                                        </button>
                                    </div>

                                    <div className="introButton center">
                                        {/* <div
                                            className="fs24 bold intro-bottom"
                                            onClick={() =>
                                                fullpageApi.moveSectionDown()
                                            }
                                        >
                                            ABOUT
                                        </div> */}
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
                            <div className="section bgSunset-orange">
                                <div className="container">
                                    <div className="logo center">
                                        <img src={logo} alt="" />
                                    </div>
                                    <div className="introBox center">
                                        <p className="fs32">
                                            Request your favorite&nbsp;tune!
                                        </p>
                                        <h1 className="fs50">
                                            DISCOVER OUR HEY DJ SONG WISHLISTS
                                        </h1>
                                        <p className="fs30">
                                            Get in touch with your&nbsp;DJ.
                                        </p>
                                    </div>
                                    <div className="introText center">
                                        <h2 className="fs24">
                                            This Page takes the
                                            song&nbsp;request
                                            <br className="del" /> to the
                                            digital level!
                                        </h2>
                                        <p className="fs18">
                                            Be in full control of your event and
                                            the soundtrack of the night.
                                            <br className="del" />
                                            &nbsp;Also for DJs the
                                            go&nbsp;to&nbsp;solution to keep
                                            track.
                                        </p>
                                    </div>

                                    <div className="center">
                                        <button
                                            className="fs16 white"
                                            onClick={() =>
                                                fullpageApi.moveSectionDown()
                                            }
                                        >
                                            Read more?
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
                                <div className="container">
                                    <div className="center">
                                        <img
                                            className="picture"
                                            id=""
                                            src={heydjghost17}
                                            alt=""
                                        ></img>
                                    </div>

                                    <p className="fs24 reg center">
                                        HEY DJ :
                                        <strong>
                                            &nbsp;Search, add and manage
                                            your&nbsp;event
                                        </strong>
                                        !
                                    </p>
                                    <p className="fs18 reg center light">
                                        What are you waiting for? This is the
                                        perfect way to request&nbsp;incognito.
                                        <br className="del" />
                                        &nbsp;Sign up to <i>handle</i> the
                                        incoming wishes?
                                    </p>

                                    <div className="center">
                                        <button
                                            className="fs16 white"
                                            onClick={() =>
                                                fullpageApi.moveSectionDown()
                                            }
                                        >
                                            Get started!
                                        </button>
                                    </div>
                                    <footer className="fs16 center">
                                        <a href="#">Contact &amp; Imprint</a>
                                    </footer>
                                </div>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        );
    }


const mapStateToProps = (state) => {
    return state
};


export default connect(mapStateToProps, {})(LandingPage);
