import React from "react";
import { connect } from "react-redux";

import ReactFullpage from "@fullpage/react-fullpage";
import logo from "../assets/logo.png";
import eventPic from "../assets/eventPic-01.png";

class EventOverview extends React.Component {
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
                                    <header className="links">
                                        <img src={logo} alt="Hey Dj Logo" />
                                        {/* <button className="fs16 red">
                                            Login
                                        </button> */}
                                        {/* <button className="fs16 red">
                                            Logout
                                        </button> */}
                                        {/* <i className="exit fas fa-times"></i> */}
                                        <i className="settings fas fa-cog"></i>
                                    </header>

                                    <div className="center">
                                        <img
                                            className="picture"
                                            id=""
                                            src={eventPic}
                                            alt=""
                                        ></img>
                                    </div>
                                    <div className="center fs16 reg">
                                        <button className="green">
                                            Add song&nbsp;request
                                        </button>
                                    </div>
                                    <div className="eventBox center">
                                        <p className="fs24">
                                            23/04/20 Musik&#38;Frieden
                                        </p>
                                        <h1 className="fs30">Fvck Genre</h1>
                                        <p className="fs24">King Kong Kicks</p>
                                    </div>

                                    <div className="center">
                                        <button
                                            className="fs16 white"
                                            onClick={() =>
                                                fullpageApi.moveSectionDown()
                                            }
                                        >
                                            Wish list
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
                                <div className="container-list">
                                    <div className="center">
                                        <div
                                            className="arrow"
                                            onClick={() =>
                                                fullpageApi.moveSectionUp()
                                            }
                                        >
                                            <i className="bt-up"></i>
                                        </div>
                                    </div>

                                    <div className="request-list-wrap">
                                        <div className="request-list-item">
                                            <div className="request-image-container">
                                                <div className="request-image request-list-01"></div>
                                            </div>
                                            <div className="request-info-container">
                                                <p>bad guy</p>
                                                <p>Billie Eilish</p>
                                                <hr />
                                                <p>Up votes: 14</p>
                                            </div>
                                            <div className="request-heart-container">
                                                <svg
                                                    className="heart"
                                                    viewBox="0 0 32 29.6"
                                                >
                                                    <path
                                                        d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="request-list-item">
                                            <div className="request-image-container">
                                                <div className="request-image request-list-02"></div>
                                            </div>
                                            <div className="request-info-container">
                                                <p>Roller</p>
                                                <p>Apache 207</p>
                                                <hr />
                                                <p>Up votes: 11</p>
                                            </div>
                                            <div className="request-heart-container">
                                                <svg
                                                    className="heart"
                                                    viewBox="0 0 32 29.6"
                                                >
                                                    <path
                                                        d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="request-list-item">
                                            <div className="request-image-container">
                                                <div className="request-image request-list-03"></div>
                                            </div>
                                            <div className="request-info-container">
                                                <p>Kids</p>
                                                <p>Leoniden</p>
                                                <hr />
                                                <p>Up votes: 9</p>
                                            </div>
                                            <div className="request-heart-container">
                                                <svg
                                                    className="heart"
                                                    viewBox="0 0 32 29.6"
                                                >
                                                    <path
                                                        d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="request-list-item">
                                            <div className="request-image-container">
                                                <div className="request-image request-list-04"></div>
                                            </div>
                                            <div className="request-info-container">
                                                <p>100 mg</p>
                                                <p>Giant Rooks</p>
                                                <hr />
                                                <p>Up votes: 9</p>
                                            </div>
                                            <div className="request-heart-container">
                                                <svg
                                                    className="heart"
                                                    viewBox="0 0 32 29.6"
                                                >
                                                    <path
                                                        d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="request-list-item">
                                            <div className="request-image-container">
                                                <div className="request-image request-list-05"></div>
                                            </div>
                                            <div className="request-info-container">
                                                <p>Kein Wort </p>
                                                <p>Juju</p>
                                                <hr />
                                                <p>Up votes: 6</p>
                                            </div>
                                            <div className="request-heart-container">
                                                <svg
                                                    className="heart"
                                                    viewBox="0 0 32 29.6"
                                                >
                                                    <path
                                                        d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="center">
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
                                <div className="container-list">
                                    <div className="center">
                                        <div
                                            className="arrow"
                                            onClick={() =>
                                                fullpageApi.moveSectionUp()
                                            }
                                        >
                                            <i className="bt-up"></i>
                                        </div>
                                    </div>

                                    <div className="request-list-wrap">
                                        <div className="request-list-item">
                                            <div className="request-image-container">
                                                <div className="request-image ghost"></div>
                                            </div>
                                            <div className="request-info-container">
                                                <p>title</p>
                                                <p>band info</p>
                                                <hr />
                                                <p>Up votes: 00</p>
                                            </div>
                                            <div className="request-heart-container">
                                                <svg
                                                    className="heart"
                                                    viewBox="0 0 32 29.6"
                                                >
                                                    <path
                                                        d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="request-list-item">
                                            <div className="request-image-container">
                                                <div className="request-image ghost"></div>
                                            </div>
                                            <div className="request-info-container">
                                                <p>title</p>
                                                <p>band info</p>
                                                <hr />
                                                <p>Up votes: 00</p>
                                            </div>
                                            <div className="request-heart-container">
                                                <svg
                                                    className="heart"
                                                    viewBox="0 0 32 29.6"
                                                >
                                                    <path
                                                        d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="request-list-item">
                                            <div className="request-image-container">
                                                <div className="request-image ghost"></div>
                                            </div>
                                            <div className="request-info-container">
                                                <p>title</p>
                                                <p>band info</p>
                                                <hr />
                                                <p>Up votes: 00</p>
                                            </div>
                                            <div className="request-heart-container">
                                                <svg
                                                    className="heart"
                                                    viewBox="0 0 32 29.6"
                                                >
                                                    <path
                                                        d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="request-list-item">
                                            <div className="request-image-container">
                                                <div className="request-image ghost"></div>
                                            </div>
                                            <div className="request-info-container">
                                                <p>title</p>
                                                <p>band info</p>
                                                <hr />
                                                <p>Up votes: 00</p>
                                            </div>
                                            <div className="request-heart-container">
                                                <svg
                                                    className="heart"
                                                    viewBox="0 0 32 29.6"
                                                >
                                                    <path
                                                        d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="request-list-item">
                                            <div className="request-image-container">
                                                <div className="request-image ghost"></div>
                                            </div>
                                            <div className="request-info-container">
                                                <p>title</p>
                                                <p>band info</p>
                                                <hr />
                                                <p>Up votes: 00</p>
                                            </div>
                                            <div className="request-heart-container">
                                                <svg
                                                    className="heart"
                                                    viewBox="0 0 32 29.6"
                                                >
                                                    <path
                                                        d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="center">
                                        <button
                                            className="fs16 white"
                                            onClick={() =>
                                                fullpageApi.moveSectionDown()
                                            }
                                        >
                                            Back to search
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
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, {})(EventOverview);
