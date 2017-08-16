import React, { Component } from 'react';
import { ProductService } from '../Services/ProductService';

class ProductList extends Component {
    products = new ProductService();

    render(){
        var productsWithCategory;
        this.products.getProducts().then(x=>{
            productsWithCategory = x.products;
        });
        var productsGrid = [];

        productsWithCategory.forEach(function(product){
            productsGrid.push(this.showOneProduct(product));
        }, this);

        return (<div> {productsGrid} </div>);
    }


    showOneProduct(product){
    return (
    <div id={product.id} className="row">
        <img name={'productImage' + product.id} className="col-xs-3" src={product.imageUrl}/>
        <div className="row">
            <div name={'productName'+ product.id} className="col-xs-6"><b>{product.Name}</b></div>
            <div name={'productDescription'+product.id} className="col-xs-6"><b>{product.Description}</b></div>
        </div>
    </div>);
    }
}

export default ProductList;