import React, {Component} from 'react';
import '../App.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {CheckoutService} from "../Services/CheckoutService";
import { Link } from 'react-router-dom';

export default class Checkout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cart: {
                product: {
                    name: "",
                    description: "",
                    price: "",
                    availableQuantity: "",
                    deliveryAddress: ""
                },
                tax: "",
                total: ""
            }
        };
    }

    render() {
        return (
            <div>
                <Header/>
                <h2 className="text-center mb20">Checkout</h2>
                <div className="offset-4">
                    <div className="row">
                        <div className="col-md-4">Item Selected</div>
                        <div className="col-md-8">{this.state.cart.product.name}</div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">Description</div>
                        <div className="col-md-8">{this.state.cart.product.description}</div>
                    </div>
                    <div className="row mb20">
                        <div className="col-md-4">Quantity</div>
                        <div className="col-md-8">{this.state.cart.product.availableQuantity}</div>
                    </div>
                    <div className="row mb20">
                        <div className="col-md-4">Shipping Address</div>
                        <div className="col-md-8">Thoughtworks Technologies, Gachibowli, Hyderabad</div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">Price</div>
                        <div className="col-md-8">{this.state.cart.product.price} ₹</div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">GST</div>
                        <div className="col-md-8">{this.state.cart.tax} ₹</div>
                    </div>
                    <div className="row mb20">
                        <div className="col-md-4">Total</div>
                        <div className="col-md-8">{this.state.cart.total} ₹</div>
                    </div>
                    <div className="row mb20">
                        <Link to="/orderconfirmation" className="btn btn-primary offset-2">Place Order</Link>
                        <Link to="/products" className="btn btn-primary offset-1">Cancel</Link>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }

    componentDidMount() {

        new CheckoutService().getCart(this.props.match.params.productId).then(data => {
            console.log(data);
            this.setState({cart: data})
        })
    }
}