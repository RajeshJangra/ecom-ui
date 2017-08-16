import React, {Component} from 'react';
import InputElement from './InputElement';
import InputSelector from './InputSelector';
import Constants from './Constants';

const obj = {
  "displayName": "",
  "email": "",
  "username": "",
  "password": "",
  "confirmPassword": "",
  "address": "",
  "mobileNumber": "",
  "userType": ""
};

class CommonItems extends Component {
  handleUserTypeChange(value) {
      this.setState({userType:value});
      obj.userType = value;
      this.props.handler(obj);
    }
    handleNameChange(e){
      this.setState({displayName:e.target.value});
      obj.displayName = e.target.value;
      this.props.handler(obj);
    }
    handleEmailChange(e){
      this.setState({emailId:e.target.value});
      obj.email = e.target.value;
      this.props.handler(obj);
    }
    handleUserNameChange(e){
      this.setState({userName:e.target.value});
      obj.username = e.target.value;
      this.props.handler(obj);
    }
    handlePasswordChange(e){
      this.setState({password:e.target.value});
      obj.password = e.target.value;
      this.props.handler(obj);
    }
    handleConfirmPasswordChange(e){
      this.setState({confirmPassword:e.target.value});
      obj.confirmPassword = e.target.value;
      this.props.handler(obj);
    }
    handleAddressChange(e){
      this.setState({address:e.target.value});
      obj.address = e.target.value;
      this.props.handler(obj);
    }
    handleMobileChange(e){
      this.setState({mobile:e.target.value});
      obj.mobileNumber = e.target.value;
      this.props.handler(obj);
    }


    render() {
      return (
        <div className="col-md-12">
            <InputElement type="text" label="Name" name={Constants.DISPLAY_NAME} handler={this.handleNameChange.bind(this)}/>
            <InputElement type="text" label="Email Id" name={Constants.EMAIL_ID} handler={this.handleEmailChange.bind(this)}/>
            <InputElement type="text" label="User Name" name={Constants.USER_NAME} handler={this.handleUserNameChange.bind(this)}/>
            <InputElement type="password" label="Password" name={Constants.PASSWORD} handler={this.handlePasswordChange.bind(this)}/>
            <InputElement type="password" label="Confirm password" name={Constants.CONFIRM_PASSWORD}  handler={this.handleConfirmPasswordChange.bind(this)}/>
            <InputElement type="text" label="Address" name={Constants.ADDRESS} handler={this.handleAddressChange.bind(this)}/>
            <InputElement type="text" label="Mobile" max="9999999999" name={Constants.MOBILE} handler={this.handleMobileChange.bind(this)}/>
            <InputSelector label="Type" handler={this.handleUserTypeChange.bind(this)}/>
        </div>
      );
    }
  }
  
  export default CommonItems;
