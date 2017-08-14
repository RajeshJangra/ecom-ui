import ProductList from './ProductList';
import {shallow} from 'enzyme';
import React, { Component } from 'react';


it('renders ProductList with list of Products', () => {
  const container = shallow(<ProductList />);
});

// it('should render the products from ProductService', () => {
//   const container = shallow(<ProductList />);
//   expect(container.props().id).toEqual("1");
// });

// it( 'should render the products from ProductService', () => {
//   const container = shallow(<ProductList />);
//   expect(container.props().id).toEqual("1");
//   expect(container.find("div[name='productName']").text()).toEqual("Product 1");
// });

// it( 'should render the product Image is shown from the ProductService', () => {
//   const container = shallow(<ProductList />);
//   expect(container.find("img").props().src).toEqual("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjO4vMxSkwHP4N9i-3FPsbBrJ4oBzYI97LMAHsebHAY_Q_WEL");
// });

//  it( 'should render the product Name & Description is shown to the right of Image', () => {
//    const container = shallow(<ProductList />);
//    expect(container.find("div[name='productDescription']").props().className).toEqual('col-xs-6');
//  });