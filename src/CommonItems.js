import React, { Component } from 'react';
import InputElement from './InputElement';
import InputSelector from './InputSelector';
import Dropdown from 'react-dropdown';
import Constants from './Constants';

class CommonItems extends Component {
    handler(value) {
      this.props.handler(value);
    }

    render() {
      return (
        <div className="col-md-12">
            <InputElement type="text" label="Name" name={Constants.DISPLAY_NAME} handler={this.props.handler}/>
            <InputElement type="text" label="Email Id" name={Constants.EMAIL_ID} handler={this.props.handler}/>
            <InputElement type="text" label="User Name" name={Constants.USER_NAME} handler={this.props.handler}/>
            <InputElement type="password" label="Password" name={Constants.PASSWORD} handler={this.props.handler}/>
            <InputElement type="password" label="Confirm password" name={Constants.CONFIRM_PASSWORD}  handler={this.props.handler}/>
            <InputElement type="text" label="Address" name={Constants.ADDRESS} handler={this.props.handler}/>
            <InputElement type="text" label="Mobile" max="9999999999" name={Constants.MOBILE} handler={this.props.handler}/>
            <InputSelector label="Type" handler={this.handler.bind(this)}/>
        </div>
      );
    }
  }
  
  export default CommonItems;
