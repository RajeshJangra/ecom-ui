import React, {Component} from 'react';
import '../App.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {Link} from 'react-router-dom';

export default class OrderConfirmation extends Component {

    render() {
        return (
            <div>
                <Header/>
                <h2 className="text-center mb20">Order Confirmation</h2>
                <p className="text-center mb20">Your order is successfully placed and the seller will contact you shortly.</p>
                <div className="text-center mb20">
                    <Link to="/products" className="btn btn-primary">Ok</Link>
                </div>
                <Footer/>
            </div>
        );
    }
}