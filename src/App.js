import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';

const logoStyle = {
  height: "200px"
};

class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1> Welcome to Titans Ecommerce</h1>
        <p><img src={logo} style={logoStyle} /></p>
        <p>
          <Link to="/login" className="btn btn-primary col-md-2">Sign in</Link>
          <span className="col-md-1"></span>
          <Link to="/signup" className="btn btn-primary col-md-2">Sign up</Link>
        </p>
      </div>
    );
  }
}

export default App;
