import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';

class InputElement extends Component {

    render() {
      return (
        <tr>
            <td>
                <label>{this.props.label}</label>
            </td>
            <td>                
                <input type={this.props.type} name={this.props.name} max={this.props.size} onChange={this.props.handler} />
                {/* <Validation.components.Input value='email@email.com' max={this.props.size} name={this.props.name} validations={['required', 'email']}/> */}
            </td>
        </tr>
      )
    }
  }


  InputElement.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
 }
 
 InputElement.defaultProps = {
    type: "text",
 }
  
  export default InputElement;