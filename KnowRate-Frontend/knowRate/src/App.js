import React, { Component } from 'react';
import './App.sass';

import Header from './components/header/header.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
