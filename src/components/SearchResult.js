import React from 'react';

class SearchResult extends React.Component{
    render(){
        return(
            <div className="result-list-item">
            <div className="result-image-container">
                <div className="result-image"></div>
            </div>
            <div className="result-info-container">
                <p>This is a result</p>
                <hr/>
                <p>Some info</p>
            </div>
        </div>
        )
    }
}

export default SearchResult;