import React from "react";
import "../scss/App.scss";
// import FullPage from "./fullPage";
import { connect } from "react-redux";
import logo from "../assets/logo.png";
import banner from "../assets/banner.png";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header>
                    <div className="logo-heydj">
                        <img src={logo} alt="logo hey dj"></img>
                    </div>
                    <div className="header-right-wrap">
                        <button className="login-button">Login</button>
                        {/* <i className="exit fas fa-times"></i> */}
                        {/* <i className="settings fas fa-cog"></i> */}
                    </div>
                </header>
                <main>
                    <div className="banner">
                        <img src={banner}></img>
                    </div>
                    <section className="description-event">
                        <p>
                            Fvck Genre, King Kong Kicks, 27.3.3030, Musik und
                            Frieden{" "}
                        </p>
                        <p>Everything your heart desires.</p>
                        <br></br>
                    </section>
                    <section className="add-your-song">
                        <h1>Add your song to the request list.</h1>
                        <button className="add-song-button">+</button>
                        <br></br>
                        <button className="add-button-wishlist">+</button>
                    </section>
                </main>
                <footer>
                    <div>
                        <a href="#">Contact &amp; Imprint</a>
                    </div>
                </footer>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, {})(App);
