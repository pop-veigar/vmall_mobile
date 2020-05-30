import React, { Component } from 'react';
import '../src/css/App.css';
import RouterIndex from './routers/RouterIndex';

class App extends Component {
  render() {
    return (
      <div className="App">
      <RouterIndex />
      </div>
    );
  }
}

export default App;
