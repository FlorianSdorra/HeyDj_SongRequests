import React from "react";
import { connect } from "react-redux";
import ReactFullpage from "@fullpage/react-fullpage";

import logo from "../assets/logo.png";

class LoginSignUp extends React.Component {
    render() {
        return (
            console.log(this.props.direction),
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
                                        <div id="login" className="center">
                                            <form>
                                                <div className="row flex-revcol-left">
                                                    <input
                                                        name="email"
                                                        type="text"
                                                        id="email"
                                                        required
                                                    />
                                                    <label htmlFor="email">
                                                        Email
                                                    </label>
                                                </div>
                                                <div className="row flex-revcol-left">
                                                    <input
                                                        name="password"
                                                        type="password"
                                                        id="password"
                                                        required
                                                    />
                                                    <label htmlFor="password">
                                                        Password
                                                    </label>
                                                </div>
                                                <input
                                                    type="submit"
                                                    value="Login"
                                                />
                                            </form>
                                        </div>
                                    </div>
                                    <div className="center">
                                        <div
                                            className="fs16"
                                            onClick={() =>
                                                fullpageApi.moveSectionDown()
                                            }
                                        >
                                            Sign up here!
                                        </div>
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
                                        <div
                                            className="fs16"
                                            onClick={() =>
                                                fullpageApi.moveSectionUp()
                                            }
                                        >
                                            Back to Login
                                        </div>
                                    </div>
                                    <div className="logo-section-wrapper fs24 reg">
                                        <div id="login" className="center">
                                            <form>
                                                <div className="row flex-revcol-left">
                                                    <input
                                                        name="email"
                                                        type="text"
                                                        id="email"
                                                        required
                                                    />
                                                    <label htmlFor="email">
                                                        Email
                                                    </label>
                                                </div>
                                                <div className="row flex-revcol-left">
                                                    <input
                                                        name="password"
                                                        type="password"
                                                        id="password"
                                                        required
                                                    />
                                                    <label htmlFor="password">
                                                        Password
                                                    </label>
                                                </div>
                                                <div className="row flex-revcol-left">
                                                    <input
                                                        name="password"
                                                        type="password"
                                                        id="password"
                                                        required
                                                    />
                                                    <label htmlFor="password">
                                                        Password
                                                    </label>
                                                </div>
                                                <input
                                                    type="submit"
                                                    value="Signup"
                                                />
                                            </form>
                                        </div>
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

export default connect(mapStateToProps, {})(LoginSignUp);
