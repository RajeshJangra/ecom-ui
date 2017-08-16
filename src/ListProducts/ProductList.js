import React, { Component } from 'react';
import { ProductService } from '../Services/ProductService';

class ProductList extends Component {
    products = new ProductService();
    productsWithCategory=[];
    productsGrid = [];

    constructor(){
        super();
        this.state = { value:[] };
    }

    render(){
        return (<div> {this.state.value} </div>);
    }

    componentDidMount() {
        var self = this;
        this.products.getProducts()
            .then(products=>{
                self.productsWithCategory = products;
                self.productsWithCategory.forEach(function(product){
                    self.productsGrid.push(self.showOneProduct(product));
                }, this);
                console.log(2);
                self.setState({value: self.productsGrid});
            });
    }


    showOneProduct(product){
    return (
    <div id={product.id} key={product.id} className="row">
        <img name={'imageUrl' + product.id} className="col-xs-3" src={product.imageUrl}/>
        <div className="row">
            <div name={'name'+ product.id} className="col-xs-6"><b>{product.name}</b></div>
            <div name={'description'+product.id} className="col-xs-6"><b>{product.description}</b></div>
            <div name={'avalablequantity'+product.id} className="col-xs-6"><b>{product.availableQuantity}</b></div>
            <div name={'price'+product.id} className="col-xs-6"><b>{product.price}</b></div>
        </div>
    </div>);
    }
}

export default ProductList;