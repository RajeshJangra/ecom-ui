import { shallow } from 'enzyme';
import React from 'react';
import InputSelector from './InputSelector';
import {expect} from 'chai';
import Dropdown from 'react-dropdown';

describe('<InputSelector/>', () => {
    it('should render Dropdown', () => {
        const wrapper = shallow(<InputSelector name="test"/>);
        expect(wrapper.find(Dropdown)).to.have.length(1);
    });


    it('should render Dropdown with params', () => {
        const wrapper = shallow(<InputSelector name="test" 
                options= { [ { value: 'Buyer', label: 'Buyer'} , {value: 'Seller', label: 'Seller'} ] } />);
    });
  });
  