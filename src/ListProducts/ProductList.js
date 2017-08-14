import React, { Component } from 'react';
import { ProductService } from '../Services/ProductService';

class ProductList extends Component {
    products = new ProductService();

    render(){
       return this.m1();
    }


    m1(){
    var productsWithCategory = this.products.getProducts();
    console.log(productsWithCategory[0].Name);
    return (<div id={productsWithCategory[0].id}> {productsWithCategory[0].Name }
        </div>);
    }
}

export default ProductList;