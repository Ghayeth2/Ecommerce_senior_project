import React from 'react'
import Topbar from '../Components/Topbar'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Login_Form from '../Components/Login_Form'

export default function Signin_register() {
  return (
    <div>
      <div class="main">
    <div class="container">
      <Topbar />
      <Header /> 
      <Login_Form/>
      <Footer /> 
      
      </div>
    </div>
    </div>
  )
}
