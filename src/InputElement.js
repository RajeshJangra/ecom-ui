import React, {Component} from 'react';
import PropTypes from 'prop-types';

class InputElement extends Component {

    render() {
      return (
        <div className="form-group row">
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