import {shallow} from 'enzyme';
import React from 'react';
import Registration from './Registration';
import {expect} from 'chai';

describe('<Registration/>', () => {
    it('should render Registration form', () => {
      const wrapper = shallow(<Registration/>);
      expect(wrapper.find('#RegistrationForm')).to.have.length(1);
    });
  
    it('should render an form', () => {
      const wrapper = shallow(<Registration />);
      expect(wrapper.find('form')).to.have.length(1);
    });

    it('should have an image to display the gravatar', function () {
      const wrapper = shallow(<Registration/>);
      expect(wrapper.find('img')).to.have.length(1);
    });
  
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
  