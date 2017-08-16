import React, {Component} from 'react';
import '../App.css';
import logo from './logo.jpg';

const logoStyle = {
    height: "200px"
};


class Header extends Component {
    render() {
        return (
            <div>
                <h1> Welcome to Titans Ecommerce</h1>
                <p><img src={logo} style={logoStyle}/></p>
            </div>
        );
    }
}

export default Header;