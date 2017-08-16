import {shallow} from 'enzyme';
import React from 'react';
import InputElement from './InputElement';
import {expect} from 'chai';

describe('<InputElement/>', () => {
    it('should render InputElement', () => {
      const wrapper = shallow(<InputElement name="test"/>);
      expect(wrapper.find('input')).to.have.length(1);
    });

    it('should render InputElement based on params', () => {
        const wrapper = shallow(<InputElement type="text" name="username"/>);
        var selector = wrapper.find('input');

        expect(selector).to.have.length(1);

        selector = wrapper.find('label');


        expect(selector).to.have.length(1);
        expect(wrapper.contains(<label>username</label>)).to.equal(true);
      });


  
    // it('should render an form', () => {
    //   const wrapper = shallow(<Registration />);
    //   expect(wrapper.find('form')).to.have.length(1);
    // });

    // it('should have an image to display the gravatar', function () {
    //   const wrapper = shallow(<Registration/>);
    //   expect(wrapper.find('img')).to.have.length(1);
    // });
  
    // it('should render children when passed in', () => {
    //   const wrapper = shallow((
    //     <MyComponent>
    //       <div className="unique" />
    //     </MyComponent>
    //   ));
    //   expect(wrapper.contains(<div className="unique" />)).to.equal(true);
    // });
  
    // it('simulates click events', () => {
    //   const onButtonClick = sinon.spy();
    //   const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
    //   wrapper.find('button').simulate('click');
    //   expect(onButtonClick.calledOnce).to.equal(true);
    // });
  });
  