import React from 'react';
import './App.scss';

import LandingPage from './components/LandingPage';
import SearchResult from './components/SearchResult';
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
      </div>
  );
}

export default App;
