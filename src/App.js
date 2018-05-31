import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './component/nav';

import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
      </div>
    );
  }
}

export default App;
