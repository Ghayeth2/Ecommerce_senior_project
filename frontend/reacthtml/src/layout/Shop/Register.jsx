import React from 'react'
import Topbar from '../../Components/Template/Topbar'
import Header from '../../Components/Template/Header'
import Footer from '../../Components/Template/Footer'
import {MDBBtn, MDBContainer, MDBInput} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import {useHistory} from 'react-router-dom';

import {request} from "../../axios_helper";


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
            .then((response) => {
                // window.location.href = 'http://localhost:3000/Registercd ';

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
                    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                        <MDBInput wrapperClass='mb-4' name="firstName" handle label='First Name' id='form1'
                                  type='first name'/>
                        <MDBInput wrapperClass='mb-4' label='Last Name' id='form2' type='last name'/>
                        <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
                        <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>
                        <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form1' type='password'/>
                        <MDBInput wrapperClass='mb-4' label='phone number' id='form2' type='phone'/>
                        <MDBBtn className="mb-4">Sign up</MDBBtn>
                    </MDBContainer>
                </div>
                <Footer/>


            </div>
        );
    }

}
