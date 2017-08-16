import React, { Component } from 'react';
import CommonItems from './CommonItems';
import Constants from './Constants';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleInputChange = this.handleInputChange.bind(this);
  }


  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

    render() {
      return (
        <div id="RegistrationForm" name="RegistrationForm">
          <h1> This is Jai</h1>
          <form onSubmit={this.handleSubmit} className="form">
              <CommonItems handler={this.handleInputChange}/>
              <div className="submitButtons">
              <input type="submit" value="Submit" className="btn btn-primary"/><span className="gap"></span>
              <input type="submit" value="Cancel" className="btn btn-primary"/>
              </div>
          </form>
        </div>
      );
    }
  }
  
  export default Registration;

