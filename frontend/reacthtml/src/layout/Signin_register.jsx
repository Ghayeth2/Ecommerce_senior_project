import * as  React from 'react';
import className from 'classnames';
import Topbar from '../Components/Topbar'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Login_Form from '../Components/Login_Form'
import UsersComponent from "../Components/UsersComponent";
import {MDBBtn, MDBCheckbox, MDBContainer, MDBInput} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import { useHistory } from 'react-router-dom';

import {request} from "../axios_helper";

export default class Signin_register extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
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

  onLogin  = (e, email, password) => {
    e.preventDefault();
    request("POST",
        "/login",
        {email: email, password: password})
        .then(() => {

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
              <UsersComponent/>
              <div className="container">
                <Link to="/Register"><a>Register</a></Link>
                <form onSubmit={this.onSubmitLogin}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="email"
                           onChange={this.onChangeHandler} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="password"
                           onChange={this.onChangeHandler} />
                  </div>
                  <button type="submit" className="btn btn-primary">Login</button>
                </form>
              </div>
              <Footer />

            </div>
          </div>
        </div>
    );
  }


}
