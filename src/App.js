import React, { Component } from 'react';
import './App.css';
import RollDice from './components/RollDice';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RollDice face='five' />
      </div>
    );
  }
}

export default App;
