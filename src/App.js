import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/login" className="btn btn-primary">Sign in</Link>
        <Link to="/signup" className="btn btn-primary">Sign up</Link>
      </div>
    );
  }
}

export default App;
