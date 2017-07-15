import React, { Component } from 'react';
import _ from 'lodash';

import logo from './logo.svg';
import Picture from './components/Picture';

import data from './datajson.json';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {_.map(data.images, (imageUrl) => (
          <Picture src={imageUrl} geom="implementME" size="medium" types={['border']} />
        ))}
      </div>
    );
  }
}

export default App;
