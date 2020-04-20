import React from "react";
import { connect } from "react-redux";
import ReactFullpage from "@fullpage/react-fullpage";

import logo from "../assets/logo.png";

class TrackSearch extends React.Component {
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
                                <div className="container ">
                                    <header className="links">
                                        <img src={logo} alt="Hey Dj logo" />
                                        {/* <button className="fs16 red">
                                            Login
                                        </button> */}
                                        {/* <button className="fs16 red">
                                            Logout
                                        </button> */}
                                        <i className="exit fas fa-times"></i>
                                        {/* <i className="settings fas fa-cog"></i> */}
                                    </header>

                                    <div className="logo-section-wrapper fs24 reg">
                                        <div className="event-search">
                                            <form>
                                                <label>
                                                    <div className="search-form-input-border">
                                                        <input
                                                            className="center search-form-input"
                                                            placeholder="Band, Track..."
                                                            type="text"
                                                            defaultValue="The National"
                                                        ></input>
                                                    </div>
                                                </label>
                                            </form>
                                        </div>
                                        <div className="center fs24 reg">
                                            <button className="black">
                                                <i className="fas fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="request-list-wrap">
                                        <div className="request-list-item">
                                            <div className="request-image-container">
                                                <div className="request-image track-search-01"></div>
                                            </div>
                                            <div className="request-info-container">
                                                <p>Light Years</p>
                                                <hr />
                                                <p>The National</p>
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
                                                <div className="request-image track-search-02"></div>
                                            </div>
                                            <div className="request-info-container">
                                                <p>I Need My Girl</p>
                                                <hr />
                                                <p>The National</p>
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
                                                <div className="request-image track-search-03"></div>
                                            </div>
                                            <div className="request-info-container">
                                                <p>Fake Empire</p>
                                                <hr />
                                                <p>The National</p>
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
                                            More results
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
                                    <div className="request-list-wrap">
                                        <div className="request-list-item">
                                            <div className="request-image-container">
                                                <div className="request-image ghost"></div>
                                            </div>
                                            <div className="request-info-container">
                                                <p>title</p>
                                                <hr />
                                                <p>band info</p>
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
                                                <hr />
                                                <p>band info</p>
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
                                                <hr />
                                                <p>band info</p>
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
                                                <hr />
                                                <p>band info</p>
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
                                                <hr />
                                                <p>band info</p>
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

export default connect(mapStateToProps, {})(TrackSearch);
