import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './ListProducts/ProductList'

class App extends Component {
  render() {
    return (
      <div>
        <ProductList />
      </div>
    );
  }
}

export default App;
