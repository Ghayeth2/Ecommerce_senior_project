import React, {useState} from 'react'
import Topbar from '../../Components/Template/Topbar'
import Header from '../../Components/Template/Header'
import Footer from '../../Components/Template/Footer'
import {MDBBtn, MDBContainer, MDBInput} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import {useHistory} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {request} from "../../axios_helper";
import UserServices from "../../services/UserServices";


function Register(props) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let user = {firstName: firstName, lastName: lastName
        , email: email, password: password, phoneNumber: phoneNumber}
        console.log(user);

        UserServices.saveUser(user).then((res)=>{
            notifySuccess("Thank you for registering..😊");
        })
            .catch((error) => {
                if (error.response)
                    notifyError("Error occurred ❌, try again later.");

        })
    }

    const notifyError = (message) => {
        toast.error(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const notifySuccess = (message) => {
        toast(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const handleFirstName = (value) => {
        setFirstName(value)
    }
    const handleLastName = (value) => {
        setLastName(value)
    }
    const handleEmail = (value) => {
        setEmail(value)
    }
    const handlePassword = (value) => {
        setPassword(value)
    }
    const handlePhoneNumber = (value) => {
        setPhoneNumber(value)
    }

    // onLogin = (e, firstName, lastName, email, password, phoneNumber) => {
    //     e.preventDefault();
    //     request("POST",
    //         "/app/user",
    //         {
    //             email: email,
    //             password: password,
    //             firstName: firstName,
    //             lastName: lastName,
    //             phoneNumber: phoneNumber
    //         })
    //         .then((response) => {
    //             // window.location.href = 'http://localhost:3000/Registercd ';
    //
    //             // useHistory().push('/');
    //         })
    //         .catch((error) => {
    //             // Handle login error
    //             console.error('Login error:', error);
    //         });
    // };


    return (
        <div>
            <Topbar/>
            <Header/>
            <div className="container">
                <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                    <MDBInput wrapperClass='mb-4' name="firstName" handle label='First Name' id='form1'
                              onChange={(i) => {
                                  handleFirstName(i.target.value)
                              }} type="text"/>
                    <MDBInput wrapperClass='mb-4'
                              onChange={(i) => {
                                  handleLastName(i.target.value)
                              }} label='Last Name' id='form2' type="text"/>
                    <MDBInput wrapperClass='mb-4'
                              onChange={(i)=>{
                                  handleEmail(i.target.value)
                              }} label='Email address' id='form1' type="text"/>
                    <MDBInput wrapperClass='mb-4'
                              onChange={(i)=>{
                                  handlePassword(i.target.value)
                              }} label='Password' id='form2' type="password"/>
                    <MDBInput wrapperClass='mb-4'
                              onChange={(i)=>{
                                  handlePhoneNumber(i.target.value)
                              }} label='phone number' id='form2' type="text"/>
                    <MDBBtn
                        onClick={handleSubmit} className="mb-4">Sign up</MDBBtn>
                </MDBContainer>
            </div>
            <Footer/>
            <ToastContainer />

        </div>
    );


}export default Register;
