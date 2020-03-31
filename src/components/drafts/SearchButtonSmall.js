import React from 'react';

class SearchButtonSmall extends React.Component{
    render(){
        return(
                <form>
                    <label className="small-button-search">
                        <div className="search-form-input-border">
                            <input className="search-form-input" type="text" ></input>
                        </div>
                        <button type="submit" className="small-button"><i className="fas fa-search search-icon-small"></i></button>
                    </label>
                </form>
        )
    }
}

export default SearchButtonSmall