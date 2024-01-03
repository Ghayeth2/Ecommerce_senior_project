import React from 'react'
import './App.css';
import Home from './layout/Shop/Home';
import Signin_register from './layout/Shop/Signin_register';
import { Route, Routes} from 'react-router-dom';
import Register from './layout/Shop/Register';
import Profile from "./Components/User/Profile";
import Products from "./layout/Shop/Products";
import Accoount_page from "./layout/Shop/Accoount_page";
import Checkout_page from "./layout/Shop/Checkout_page";
import Review from "./Components/Template/Review";
import ItemShow from "./Components/Template/Item_show";
import StarRating from "./StarRating";
// import ItemShowPage from "./layout/Shop/item_show_page";
// import 'rsuite/dist/styles/rsuite-default.css';
// import { Rate } from 'rsuite';
export default function App() {
    return (
        <div>

            <Routes>
                <Route path='/Home' element={<Home/>}></Route>
                <Route path='/' element={<Home/>}></Route>
                <Route path="/Login" element={<Signin_register/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/Login page" element={<Signin_register/>}/>
                <Route path="/users/:id" element={<Profile/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/My_Account" element={<Accoount_page/>}/>
                <Route path="/Checkout" element={<Checkout_page/>}/>
                <Route path="/shop-item.html" element={<ItemShow/>}/>
                {/*<Route path="<ItemShowPage/>" element={<ItemShow/>}/>*/}

            </Routes>
            <StarRating/>
            <Review/>



        </div>
    );
}