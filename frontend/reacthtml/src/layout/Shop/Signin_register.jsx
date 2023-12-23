import * as  React from 'react';
import className from 'classnames';
import Topbar from '../../Components/Template/Topbar'
import Header from '../../Components/Template/Header'
import Footer from '../../Components/Template/Footer'
import UsersComponent from "../../Components/User/UsersComponent";
import {MDBBtn, MDBCheckbox, MDBContainer, MDBInput} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import { useHistory } from 'react-router-dom';

import {request } from "../../axios_helper";
import UserServices from "../../services/UserServices";

export default class Signin_register extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      users: [],
      email: "",
      password: "",
      onLogin: props.onLogin
    };
  }

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({[name]: value});
  };

  onSubmitLogin = (e) => {
    this.state.onLogin(e,
        this.state.email,
        this.state.password)
  }

  async componentDidMount() {
    try {
      const response = await UserServices.getUsers();

      if (Array.isArray(response)) {
        this.setState({ users: response });
      } else {
        console.error("Data is not in the expected array format:", response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  onLogin  = (e, email, password) => {
    e.preventDefault();
    request("POST",
        "/login",
        {email: email, password: password})
        .then((response) => {
          window.location.href = 'http://localhost:3000/';

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
          <div class="main">
            <div class="container">
              <Topbar />
              <Header />
              {this.state.users.map(user => (
                <UsersComponent id = {user.id} firstName = {user.firstName}
                lastName = {user.lastName} email = {user.email} phoneNumber = {user.phoneNumber} ></UsersComponent>
              ))}
              <div className="container">
                <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                  <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
                  <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>
                  <div className="d-flex justify-content-between mx-3 mb-4">
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                    <a href="!#">Forgot password?</a>
                  </div>
                  <MDBBtn className="mb-4">Sign in</MDBBtn>

                  <div className="text-center">
                    <p>Not a member? <a href="#!"><Link to="/REgister">Register </Link> </a></p>

                    <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>

                    </div>
                  </div>

                </MDBContainer>
              </div>
              <Footer />

            </div>
          </div>
        </div>
    );
  }


}
