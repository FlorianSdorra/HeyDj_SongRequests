import React from 'react';

class LandingPage extends React.Component{
    render(){
        return(
            <div className="landing">
                <div className="logo-section-wrapper">
                    <div className="logo-circle"></div>
                    <h3>Wish you could hear</h3>
                    <div className="search-form">
                     <form>
                        <label>
                            <div className="search-form-input-border">
                                <i className="fas fa-search search-icon"></i>
                                <input className="search-form-input" type="text" ></input>
                            </div>
                        </label>
                    </form>
                    </div> 
                </div>
                <div className="action-button-wrap">
                    <button className="action-button"><p>ActionButton</p></button>
                </div>
            </div>
        )
    }
}

export default LandingPage;