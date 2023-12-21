import React from 'react'
import Topbar from '../Components/Topbar'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Register_Form from '../Components/Register_Form'
import {MDBBtn, MDBContainer, MDBInput} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import { useHistory } from 'react-router-dom';

import {request} from "../axios_helper";


export default class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            password: "",
            onRegister: props.onRegister
        }
    }

    onChangeHandler = (event) => {
        let name = event.target.value;
        let value = event.target.value;
        this.setState({[name]: value});
    }

    onSubmitRegister = (e) => {
        this.state.onRegister(e,
            this.state.firstName,
            this.state.lastName,
            this.state.email,
            this.state.password,
            this.state.phoneNumber)
    }

    onLogin = (e, firstName, lastName, email, password, phoneNumber) => {
        e.preventDefault();
        request("POST",
            "/app/user",
            {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber
            })
            .then(() => {

                    window.location.href = 'http://localhost:3000/Register';

                // useHistory().push('/');
            })
            .catch((error) => {
                // Handle login error
                console.error('Login error:', error);
            });
    };

    render() {

        return (
            <div>
                <Topbar/>
                <Header/>
                <div className="container">
                    <form onSubmit={this.onSubmitRegister}>
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="firstName"
                                   onChange={this.onChangeHandler}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="lastName"
                                   onChange={this.onChangeHandler}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email"
                                   onChange={this.onChangeHandler}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password"
                                   onChange={this.onChangeHandler}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="phoneNumber"
                                   onChange={this.onChangeHandler}/>
                        </div>

                        <button type="submit" className="btn btn-primary">Sign up</button>
                    </form>
                </div>
                <Footer/>


            </div>
        );
    }

}
