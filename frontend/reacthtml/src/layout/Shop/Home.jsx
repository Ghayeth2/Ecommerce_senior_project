import React from 'react'
import Topbar from '../../Components/Template/Topbar'
import Header from '../../Components/Template/Header'
import Slider from '../../Components/Template/Slider'
import SaleProduct from '../../Components/Template/SaleProduct'
import SideBar from '../../Components/Template/SideBar'
import Towproducts from '../../Components/Template/Towproducts'
import Brands from '../../Components/Template/Brands'
import Footer from '../../Components/Template/Footer'


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
