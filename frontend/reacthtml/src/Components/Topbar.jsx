import React from 'react'
import { Link } from 'react-router-dom'

export default function Topbar() {
  return (
    <div>
        <div className="pre-header">
        <div className="container">
            <div className="row">
                {/* <!-- BEGIN TOP BAR LEFT PART --> */}
                <div className="col-md-6 col-sm-6 additional-shop-info">
                    <ul className="list-unstyled list-inline">
                        <li><i className="fa fa-phone"></i><span>+1 456 6717</span></li>
                        {/* <!-- BEGIN CURRENCIES --> */}
                        <li className="shop-currencies">
                            <a href="javascript:void(0);">€</a>
                            <a href="javascript:void(0);">£</a>
                            <a href="javascript:void(0);" className="current">$</a>
                        </li>
                        {/* <!-- END CURRENCIES --> */}
                        {/* <!-- BEGIN LANGS --> */}
                        <li className="langs-block">
                            <a href="javascript:void(0);" className="current">English </a>
                            <div className="langs-block-others-wrapper"><div className="langs-block-others">
                              <a href="javascript:void(0);">French</a>
                              <a href="javascript:void(0);">Germany</a>
                              <a href="javascript:void(0);">Turkish</a>
                            </div></div>
                        </li>
                        {/* <!-- END LANGS --> */}
                    </ul>
                </div>
                {/* <!-- END TOP BAR LEFT PART --> */}
                {/* <!-- BEGIN TOP BAR MENU --> */}
                <div className="col-md-6 col-sm-6 additional-nav">
                    <ul className="list-unstyled list-inline pull-right">
                        <li><Link to="/My_Account ">My Account </Link></li>
                        <li><Link to="/My_Wishlist">My Wishlist</Link></li>
                        <li><Link to="/Checkout ">Checkout</Link></li>
                        <li><Link to="/Login">Login</Link></li>
                    </ul>
                </div>
                {/* <!-- END TOP BAR MENU --> */}
            </div>
        </div>        
    </div>
    </div>
  )
}
