import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import ProductList from './ListProducts/ProductList'
import logo from './logo.jpg';

const logoStyle = {
    height: "200px"
};

class App extends Component {
    render() {
        return (
            <div className="App container">
                <h1> Welcome to Titans Ecommerce</h1>
                <p><img src={logo} style={logoStyle}/></p>
                <div className="row mb20">
                    <Link to="/login" className="btn btn-primary col-md-12">Sign in</Link>
                </div>
                <div className="row">
                    <Link to="/signup" className="btn btn-primary col-md-12">Sign up</Link>
                </div>

                <div>
                    <ProductList/>
                </div>
            </div>
        );
    }
}

export default App;
