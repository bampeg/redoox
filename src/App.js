import React, { Component } from 'react';
import Green from './components/Green'
import Red from './components/Red'
import Blue from './components/Blue'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Green/>
        <Red/>
        <Blue/>
      </div>
    );
  }
}

export default App;
