import React from 'react'
import Topbar from '../components/Topbar'
import Header from '../components/Header'
import Slider from '../components/Slider'
import NewProduct from '../components/NewProduct'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import TwoProducts from '../components/TwoProducts'
import Brands from '../components/Brands'

function Home() {
  return (
    <div>
      <Topbar />
      <Header />
      <Slider /> 
      <NewProduct />
      <Sidebar />
      <Content />
      <TwoProducts />
      <Brands /> 
      
    </div>

  )
}

export default Home