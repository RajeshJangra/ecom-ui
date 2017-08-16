import React, { Component } from 'react';
import CommonItems from './CommonItems';
import Constants from './Constants';
import { Link } from 'react-router-dom';

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
    console.log(this.state);
  }

    render() {
      return (
        <div id="RegistrationForm" name="RegistrationForm" className="visible-lg bg-success">
          <h1> This is Jai</h1>

          <div className="row">
          <div className="col-sm-4">
          </div>
          <div className="col-sm-4">
          
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <CommonItems handler={this.handleInputChange}/>
                <div className="form-group">        
                <div className="col-sm-offset-2 col-sm-1">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                <div className="col-sm-offset-1 col-sm-1">
                    <Link to="/" className="btn btn-primary">Cancel</Link>
                </div>
                </div>
            </form>
          </div>

          </div>
        </div>
      );
    }
  }
  
  export default Registration;

