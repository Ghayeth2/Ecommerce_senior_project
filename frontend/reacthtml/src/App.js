import React from 'react'
import './App.css';
import Home from './Layout/Home';
import Signin_register from './Layout/Signin_register';
import { Route, Routes } from 'react-router-dom';
import Register from './Layout/Register';
import Login_Form from './Components/Login_Form';

export default function App() {
  return (
    <div>
      
      <Routes>
      <Route path='/Home'element={<Home/> }></Route>
      <Route path="/Login" element={<Signin_register/>} />
      <Route path="/Register"element={<Register/>}/>
      <Route path="/Login page"element={<Signin_register/>}/>

    </Routes> 
    </div>
  )
}