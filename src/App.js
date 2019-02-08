import React, { Component } from 'react';
import rtlStyles from './RtlCssBundleService'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={rtlStyles.toggle}>Toggle RTL</button>
        </header>

        <div>
          <div className="left">LEFT</div>
          <div className="right">RIGHT</div>
          <div className="clear"></div>
        </div>
      </div>
    );
  }
}

export default App;
