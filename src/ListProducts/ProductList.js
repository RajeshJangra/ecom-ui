import React, {Component} from 'react';
import {ProductService} from '../Services/ProductService';
import '../App.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {CategoryService} from "../Services/CategoryService";

class ProductList extends Component {
    products = new ProductService();
    productsWithCategory = [];
    productsGrid = [];
    categories = new CategoryService();

    constructor() {
        super();
        this.state = {
            value: [],
            pageNumber: 0,
            categories: []
        };
    }

    render() {
        return (
            <div className="container-fluid">
                <Header/>
                <div className="row mb20">
                    <label>Category</label>
                    <select onChange={this.handleCategoryChange.bind(this)}>
                        <option value="">Select category</option>
                        {
                            this.state.categories.map(x => <option key={x.id} value={x.id}>{x.name}</option>)
                        }
                    </select>
                </div>
                <table className="table table-striped">
                    <thead className="thead-inverse">
                    {this.showLabels()}
                    </thead>
                    <tbody>
                    {this.state.value}
                    </tbody>
                </table>
                <Footer/>
            </div>);
    }

    handleCategoryChange(e) {
        const category = e.target.value;
        const self = this;

        this.products.getProducts(0, category).then(x => x.content).then(products => {
            const p = products.map(p => self.showOneProduct(p));

            // products.forEach(function (product) {
            //     self.productsGrid.push(self.showOneProduct(product));
            // }, this);
            self.setState({value: p});
        });
    }

    componentDidMount() {
        console.log("Component did mount called");

        var self = this;
        this.products.getProducts(this.state.pageNumber)
            .then(products => {
                self.productsWithCategory = products.content;
                self.productsWithCategory.forEach(function (product) {
                    self.productsGrid.push(self.showOneProduct(product));
                }, this);
                self.setState({value: self.productsGrid});
            });

        this.categories.getCategories().then(data => this.setState({categories: data}));
    }

    showLabels() {
        return (
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Category</th>
                <th>Action</th>
            </tr>
        );
    }

    showOneProduct(product) {
        return (
            <tr id={product.id} key={product.id}>
                <td>
                    <img name={'imageUrl' + product.id} src={product.imageUrl} alt="Image"/>
                </td>
                <td name={'name' + product.id}>{product.name}</td>
                <td name={'description' + product.id}>{product.description}</td>
                <td name={'price' + product.id}>{product.price}</td>
                <td name={'avalablequantity' + product.id}> {product.availableQuantity}</td>
                <td name={'category' + product.id}>{product.category.name}</td>
                <td>
                    <button name={'buy' + product.id} type="button" className="btn btn-primary">Buy</button>
                </td>
            </tr>
        );
    }
}

export default ProductList;