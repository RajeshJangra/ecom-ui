import React, {Component} from 'react';
import '../App.css';
import {createBrowserHistory} from 'history';
import {Link} from 'react-router-dom';
import Header from '../header/Header'
import Footer from "../footer/Footer";
import { AppSecurityService } from '../Services/AppSecurityService';

// const browserHistory = createBrowserHistory();

class Login extends Component {
    appSecurityService = new AppSecurityService();
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            pwd: '',
        };


        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }


    handleSubmit(event) {
        console.log("here");
        event.preventDefault();

        this.appSecurityService
            .login(this.state.username, this.state.pwd)
            .then(status => {
                if(status === true){
                    this.props.history.push('/products');
                }     
                else
                    this.showErrorMessage();
        }, this);
    }

    showErrorMessage(){
        alert("Login Failed!! Invalid Username/Password");
    }

    render() {
        return (
            <div className="App">
                <Header/>

                <div className="row">
                    <div className="col-sm-4">
                    </div>
                    <div className="col-sm-4">

                        <form className="form-horizontal"  onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="username">Username:</label>
                                <div className="col-sm-8">
                                    <input
                                        type="username"
                                        className="form-control"
                                        id="username"
                                        placeholder="Enter User Name"
                                        name="username"
                                        value={this.state.username}
                                        onChange={this.handleInputChange}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
                                <div className="col-sm-8">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="pwd"
                                        placeholder="Enter password"
                                        name="pwd"
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-5">
                                    <div className="checkbox">
                                        <label><input type="checkbox" name="remember"/> Remember me</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-1">
                                    <button className="btn btn-primary">Submit</button>
                                </div>
                                <div className="col-sm-offset-2 col-sm-1">
                                    <Link to="/" className="btn btn-primary">Cancel</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-4">
                    </div>
                </div>
                <Footer/>

            </div>


        );
    }
}

export default Login;
