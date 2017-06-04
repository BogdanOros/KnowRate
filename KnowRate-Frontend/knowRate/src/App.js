import React, { Component } from 'react';
import './App.sass';

import Landing from "./components/landing/landing.component";

import Header from './components/header/header.component';

import MainHeader from './components/main/MainHeader.component';

import EventEmitter from './emitter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorized: false
    };
    EventEmitter.on('logout', this.unAuthorize);
    EventEmitter.on('login', this.authorize);
  }

  unAuthorize = () => {
    this.setState({authorized: false});
  };
  authorize = () => {
    console.log("hello");
    this.setState({authorized: true});
  };

  render() {
    return (
      <div className="App">
          {!this.state.authorized && <Header />}
          {!this.state.authorized && <Landing />}
          {this.state.authorized &&<MainHeader />}
      </div>
    );
  }
}

export default App;
