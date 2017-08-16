import React, {Component} from 'react';
import {ProductService} from '../Services/ProductService';
import '../App.css';

class ProductList extends Component {
    products = new ProductService();
    productsWithCategory = [];
    productsGrid = [];

    constructor() {
        super();
        this.state = {
            value: [],
            pageNumber: 1
        };
    }

    render() {
        return (
            <div className="container-fluid">
                {this.showLabels()}
                {this.state.value}
            </div>);
    }

    componentDidMount() {
        var self = this;
        this.products.getProducts(this.state.pageNumber)
            .then(products => {
                self.productsWithCategory = products.content;
                self.productsWithCategory.forEach(function (product) {
                    self.productsGrid.push(self.showOneProduct(product));
                }, this);
                self.setState({value: self.productsGrid});
            });
    }

    showLabels() {
        return (
            <div id='productLabel' className="row mb20">
                <div className="col-sm-2">Image</div>
                <div className="col-sm-2">Name</div>
                <div className="col-sm-2">Description</div>
                <div className="col-sm-2">Price</div>
                <div className="col-sm-2">Quantity Available</div>
                <div className="col-sm-2">Category</div>
            </div>
        );
    }

    showOneProduct(product) {
        return (
            <div id={product.id} key={product.id} className="row mb20">
                <img name={'imageUrl' + product.id} className="img-responsive" src={product.imageUrl} alt="Image"/>
                <div name={'name' + product.id} className="col-sm-2">{product.name}</div>
                <div name={'description' + product.id} className="col-sm-2">{product.description}</div>
                <div name={'price' + product.id} className="col-sm-2">{product.price}</div>
                <div name={'avalablequantity' + product.id} className="col-sm-2"> {product.availableQuantity}</div>
                <div name={'category' + product.id} className="col-sm-2">{product.category.name}</div>
                <button name={'buy' + product.id} type="button" class="btn btn-primary">Buy</button>
            </div>
        );
    }
}

export default ProductList;