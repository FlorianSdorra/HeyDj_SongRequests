import React from "react";
import { connect } from "react-redux";

class Event extends React.Component {
    render() {
        return (
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
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, {})(Event);
