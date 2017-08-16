import React, {Component} from 'react';
import CommonItems from './CommonItems';
import {Link} from 'react-router-dom';
import Header from './header/Header'
import Footer from './footer/Footer'

let gender = "";
let dateOfBirth = "";
let commonValues = null;
let panNumber = "";
let experienceInMonths = "";
let experienceInYears = "";

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleInputChange(values) {
        this.isBuyer = (values.userType === "Buyer");
        this.isSeller = (values.userType === "Seller");

        this.setState({
            "UserType": values.userType
        });

        commonValues = values;
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

        // Making ajax call to server
        fetch("http://10.136.23.101:8181/user/register",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(allValues)
            })
            .then(function (res) {
                console.log(res)
            })
            .catch(function (res) {
                console.log(res)
            })
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
                <Header/>
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
                                    <input className="form-control" type="datepicker" placeholder="dd/mm/yyyy"
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


                        {this.isBuyer
                            ? <div className="form-group row">
                                <label className="control-label col-sm-4">Date of Birth</label>
                                <div className="col-sm-8">
                                    <input className="form-control" type="datepicker" placeholder="dd/mm/yyyy"/>
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
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Registration;

