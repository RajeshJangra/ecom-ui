import React, {Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Header from './header/Header'
import Footer from './footer/Footer'

class App extends Component {
    render() {
        return (
            <div className="App container">
                <Header/>
                <div className="row mb20">
                    <Link to="/login" className="btn btn-primary col-md-12">Sign in</Link>
                </div>
                <div className="row mb20">
                    <Link to="/signup" className="btn btn-primary col-md-12">Sign up</Link>
                </div>

                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
