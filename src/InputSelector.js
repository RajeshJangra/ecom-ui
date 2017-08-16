import React, {Component} from 'react';

class InputSelector extends Component {
    changeHandler(e) {
        const value = e.target.value;
        this.props.handler(value);
    }

    render() {
        return (  
            <div className="form-group row">
                <label className="control-label col-sm-4" htmlFor={this.props.label}>{this.props.label}:</label>
                <div className="col-sm-8">
                    <select onChange={this.changeHandler.bind(this)}>
                        <option value="">Please select</option>
                        <option value="Buyer">Buyer</option>
                        <option value="Seller">Seller</option>
                    </select>
                </div>
            </div>
        );
    }
}
  
    
export default InputSelector;