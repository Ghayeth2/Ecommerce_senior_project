import React from 'react'
import './App.css';
import Home from './layout/Shop/Home';
import Signin_register from './layout/Shop/Signin_register';
import {BrowserRouter, Switch, Route, Routes} from 'react-router-dom';
import Register from './layout/Shop/Register';
import Profile from "./Components/User/Profile";

export default function App() {
    return (
        <div>

            <Routes>
                <Route path='/Home' element={<Home/>}></Route>
                <Route path='/' element={<Home/>}></Route>
                <Route path="/Login" element={<Signin_register/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/Login page" element={<Signin_register/>}/>
                <Route path="/users/:id" element={<Profile />}/>

            </Routes>
        </div>
    )
}