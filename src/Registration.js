import React, {Component} from "react";
import CommonItems from "./CommonItems";
import {Link} from "react-router-dom";
import SkyLight from "react-skylight";

let gender = "";
let dateOfBirth = "";
let commonValues = null;
let panNumber = "";
let experienceInMonths = "";
let experienceInYears = "";
let responseMessage = "default";

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.showMessage = this.showMessage.bind(this);
    }

    handleInputChange(values) {
        this.isBuyer = (values.type === "Buyer");
        this.isSeller = (values.type === "Seller");

        this.setState({
            "type": values.type
        });
        commonValues = values;
    }

    executeAfterModalClose() {
        this.props.history.push('/login');
    }

    showMessage(response) {
        if (response.status >= 400) {
            this.refs.registrationFailedDialog.show();
        }
        else {
            this.refs.registrationSuccessDialog.show();

        }
    }

    handleSubmit(e) {
        e.preventDefault();

        let allValues = {
            gender,
            dateOfBirth,
            experienceInMonths,
            experienceInYears,
            panNumber,
            ...commonValues
        };

        var test = fetch('http://10.136.23.131:8181/user/register', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(allValues)
        })
            .then(function (response) {
                console.log(response);
                this.showMessage(response);

                //return response.json();

            }.bind(this));
        console.log(test);
    }


    handleGenderChange(e) {
        gender = e.target.value;
    }

    handleDOBChange(e) {
        dateOfBirth = e.target.value;
    }


    render() {

        return (

            <div id="RegistrationForm" name="RegistrationForm">

                <h1> New User Registration</h1>

                <div className="row">
                    <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
                        <CommonItems handler={this.handleInputChange.bind(this)}/>

                        {this.isBuyer
                            ? <div className="form-group row">
                                <label className="control-label col-sm-4">Gender</label>
                                <div className="col-sm-8">
                                    <select onChange={this.handleGenderChange.bind(this)}>
                                        <option value="">Please select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                            : null
                        }

                        {this.isBuyer
                            ? <div className="form-group row">
                                <label className="control-label col-sm-4">Date of Birth</label>
                                <div className="col-sm-8">
                                    <input className="form-control" type="datepicker" placeholder="yyyy-mm-dd"
                                           onChange={this.handleDOBChange.bind(this)}/>
                                </div>
                            </div>
                            : null}

                        {this.isSeller
                            ? <div className="form-group row">
                                <label className="control-label col-sm-4">PAN No</label>
                                <div className="col-sm-8">
                                    <input className="form-control" type="text"/>
                                </div>
                            </div>
                            : null}

                        {this.isSeller
                            ? <div className="form-group row">
                                <label className="control-label col-sm-4">Experience</label>
                                <div className="col-sm-8">
                                    <div className="form-row">
                                        <div className="col">
                                            <input className="form-control" type="number"/><span>Years</span>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="col">
                                            <input className="form-control" type="number"/><span>Months</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : null}
                        <div className="form-group row">
                            <div className="col-sm-offset-2 col-sm-4">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                            <div className="col-sm-offset-1 col-sm-1">
                                <Link to="/" className="btn btn-primary">Cancel</Link>
                            </div>
                        </div>
                    </form>
                    <SkyLight hideOnOverlayClicked ref="registrationSuccessDialog" title="Registration success!"
                              afterClose={this.executeAfterModalClose.bind(this)}/>
                    <SkyLight hideOnOverlayClicked ref="registrationFailedDialog" title="Registration failed!"/>
                </div>
            </div>
        );
    }
}

export default Registration;
