import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';

class InputElement extends Component {

    render() {
      return (
        // <tr>
        //     <td>
        //         <label>{this.props.label}</label>
        //     </td>
        //     <td>                
        //         <input type={this.props.type} name={this.props.name} max={this.props.size} onChange={this.props.handler} />
        //         {/* <Validation.components.Input value='email@email.com' max={this.props.size} name={this.props.name} validations={['required', 'email']}/> */}

                
        //     </td>
        // </tr>


        <div className="form-group">
        <label className="control-label col-sm-4" htmlFor={this.props.label}>{this.props.label}:</label>
        <div className="col-sm-8">
            <input
                type={this.props.type}
                className="form-control" 
                id={this.props.name} 
                name={this.props.name}
                value={this.props.value}
                onChange={this.props.handler} />
        </div>
        </div>
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