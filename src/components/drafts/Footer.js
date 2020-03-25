import React from "react";
import "../scss/App.scss";
// import FullPage from "./fullPage";
import { connect } from "react-redux";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div>
                    <a href="#">Contact &amp; Imprint</a>
                </div>
            </footer>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, {})(Footer);
