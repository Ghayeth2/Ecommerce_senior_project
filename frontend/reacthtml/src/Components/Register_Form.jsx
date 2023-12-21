import React from 'react'
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
export default function Register_Form() {
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

    <MDBInput wrapperClass='mb-4' label='First Name' id='form1' type='first name'/>
    <MDBInput wrapperClass='mb-4' label='Last Name' id='form2' type='last name'/>
    <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
    <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>
    <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form1' type='password'/>
    <MDBInput wrapperClass='mb-4' label='phone number' id='form2' type='phone'/>

    <MDBBtn className="mb-4">Register</MDBBtn>
    <MDBBtn className="mb-4"><Link to="/Login page">Return to Login</Link></MDBBtn>

  

  </MDBContainer>
  )
}
