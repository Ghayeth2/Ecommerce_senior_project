import React from 'react'
import './App.css';
import Home from './layout/Shop/Home';
import Signin_register from './layout/Shop/Signin_register';
import { Route, Routes} from 'react-router-dom';
import Register from './layout/Shop/Register';
import Profile from "./Components/User/Profile";
import Products from "./layout/Shop/Products";
import Accoount_page from "./layout/Shop/Accoount_page";

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
                <Route path="/products" element={<Products />}/>
                <Route path="/My_Account" element={<Accoount_page/>}/>
            </Routes>

            {/*<Products/>*/}
        </div>
    );
}