import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputElement extends Component {

    render() {
      return (
        <tr>
            <td>
                <label>{this.props.label}</label>
            </td>
            <td>                
                <input type={this.props.type} name={this.props.name} max={this.props.size} onChange={this.props.handler} />
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