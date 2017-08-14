import ProductList from './ProductList';
import {shallow} from 'enzyme';
import React, { Component } from 'react';


it('renders ProductList with list of Products', () => {
    var container = shallow(<ProductList />);
});

it('should render the products from ProductService', () => {
  var container = shallow(<ProductList />);
  expect(container.props().id).toEqual("1");
});

it('should render the products from ProductService', () => {
  var container = shallow(<ProductList />);
  expect(container.props().id).toEqual("1");
});