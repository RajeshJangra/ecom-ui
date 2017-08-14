import React, { Component } from 'react';
import InputElement from './InputElement';
import Dropdown from 'react-dropdown';

class InputSelector extends Component {
    render() {
        return (
          <tr>
              <td>
                  <label>{this.props.name}</label>
              </td>
              <td>                
                  <Dropdown options={this.props.options} placeholder="Select an option" />
              </td>
          </tr>
        )
      }
    }
  
    
export default InputSelector;