import React from 'react'
import Topbar from '../Components/Topbar'
import Header from '../Components/Header'
import Slider from '../Components/Slider'
import SaleProduct from '../Components/SaleProduct'
import SideBar from '../Components/SideBar'
import Towproducts from '../Components/Towproducts'
import Brands from '../Components/Brands'
import Footer from '../Components/Footer'


export default function Home() {
  return (
    
    <div>
    <Topbar />
    <Header />
    <Slider />
    <div class="main">
    <div class="container">
      <SaleProduct /> 
      <SideBar />
      <Towproducts /> 
      <Brands />
      <Footer />
    </div>
    </div>
    
    </div>
    
  )
}
