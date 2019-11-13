import React from 'react';
import bg from './images/homeBg.png';
import './App.css';

function App() {
  return (
    <div className="App-container">
      <img src={bg} alt="background for the website" className="homeBg" />
        <div className="top-header">
          <h1 className="display-1">Generating Poetry from Images</h1>
        </div>
        <div className="list-of-images">
          <p className="lead">The application that will generate poetry based on a selected image!</p>
          <p className="lead">Please select from the list of images below for which you would like a poem to be created</p>

        </div>
    </div>
  );
}

export default App;
