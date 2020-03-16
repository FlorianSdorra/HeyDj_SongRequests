import React from 'react';
import './App.scss';

import LandingPage from './components/LandingPage';
import SearchResult from './components/SearchResult';
import SearchButtonSmall from './components/SearchButtonSmall';

function App() {
  return (
    <div className="App">
        <LandingPage></LandingPage>
        <div className="result-list-wrap">
          <SearchResult></SearchResult>
          <SearchResult></SearchResult>
          <SearchResult></SearchResult>
          <SearchResult></SearchResult>
          <SearchResult></SearchResult>
          <SearchResult></SearchResult>
        </div>
        <div className="small-button-wrap">
          <SearchButtonSmall></SearchButtonSmall>
        </div>

      </div>
  );
}

export default App;
