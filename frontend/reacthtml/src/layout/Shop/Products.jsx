import React, {Component} from 'react';
import Topbar from "../../Components/Template/Topbar";
import Header from "../../Components/Template/Header";
import Footer from "../../Components/Template/Footer";

class Products extends Component {
    render() {
        return (
            <div>
                <Topbar/>
                <Header/>
                <div>
                    {/* <!-- BEGIN SALE PRODUCT & NEW ARRIVALS --> */}
                    <div className="row margin-bottom-40">
                        {/* <!-- BEGIN SALE PRODUCT --> */}
                        <div className="col-md-12 sale-product">
                            <h2> Products </h2>
                            <div classname="owl-carousel owl-carousel5">

                                {/*start sidepar */}
                                <div className="sidebar col-md-3 col-sm-3">
                                    <ul className="list-group margin-bottom-25 sidebar-menu">
                                        <li className="list-group-item clearfix"><a href="shop-product-list.html"><i
                                            className="fa fa-angle-right"></i> Ladies</a></li>
                                        <li className="list-group-item clearfix dropdown">
                                            <a href="shop-product-list.html">
                                                <i className="fa fa-angle-right"></i>
                                                Mens

                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="list-group-item dropdown clearfix">
                                                    <a href="shop-product-list.html"><i
                                                        className="fa fa-angle-right"></i> Shoes </a>
                                                    <ul className="dropdown-menu">
                                                        <li className="list-group-item dropdown clearfix">
                                                            <a href="shop-product-list.html"><i
                                                                className="fa fa-angle-right"></i> classNameic </a>
                                                            <ul className="dropdown-menu">
                                                                <li><a href="shop-product-list.html"><i
                                                                    className="fa fa-angle-right"></i> classNameic 1</a>
                                                                </li>
                                                                <li><a href="shop-product-list.html"><i
                                                                    className="fa fa-angle-right"></i> classNameic 2</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="list-group-item dropdown clearfix">
                                                            <a href="shop-product-list.html"><i
                                                                className="fa fa-angle-right"></i> Sport </a>
                                                            <ul className="dropdown-menu">
                                                                <li><a href="shop-product-list.html"><i
                                                                    className="fa fa-angle-right"></i> Sport 1</a></li>
                                                                <li><a href="shop-product-list.html"><i
                                                                    className="fa fa-angle-right"></i> Sport 2</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><a href="shop-product-list.html"><i
                                                    className="fa fa-angle-right"></i> Trainers</a></li>
                                                <li><a href="shop-product-list.html"><i
                                                    className="fa fa-angle-right"></i> Jeans</a></li>
                                                <li><a href="shop-product-list.html"><i
                                                    className="fa fa-angle-right"></i> Chinos</a></li>
                                                <li><a href="shop-product-list.html"><i
                                                    className="fa fa-angle-right"></i> T-Shirts</a></li>
                                            </ul>
                                        </li>
                                        <li className="list-group-item clearfix"><a href="shop-product-list.html"><i
                                            className="fa fa-angle-right"></i> Kids</a></li>
                                        <li className="list-group-item clearfix"><a href="shop-product-list.html"><i
                                            className="fa fa-angle-right"></i> Accessories</a></li>
                                        <li className="list-group-item clearfix"><a href="shop-product-list.html"><i
                                            className="fa fa-angle-right"></i> Sports</a></li>
                                        <li className="list-group-item clearfix"><a href="shop-product-list.html"><i
                                            className="fa fa-angle-right"></i> Brands</a></li>
                                        <li className="list-group-item clearfix"><a href="shop-product-list.html"><i
                                            className="fa fa-angle-right"></i> Electronics</a></li>
                                        <li className="list-group-item clearfix"><a href="shop-product-list.html"><i
                                            className="fa fa-angle-right"></i> Home & Garden</a></li>
                                        <li className="list-group-item clearfix"><a href="shop-product-list.html"><i
                                            className="fa fa-angle-right"></i> Custom Link</a></li>
                                    </ul>
                                </div>
                                {/*END sidepar */}

                                <div className="col-md-3">
                                    <div className="product-item">
                                        <div className="pi-img-wrapper">
                                            <img src="assets/pages/img/products/model6.jpg" className="img-responsive"
                                                 alt="Berry Lace Dress"/>
                                            <div>
                                                <a href="assets/pages/img/products/model6.jpg"
                                                   className="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up"
                                                   className="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="shop-item.html">Berry Lace Dress2</a></h3>
                                        <div className="pi-price">$29.00</div>
                                        <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item">
                                        <div className="pi-img-wrapper">
                                            <img src="assets/pages/img/products/model4.jpg" className="img-responsive"
                                                 alt="Berry Lace Dress"/>
                                            <div>
                                                <a href="assets/pages/img/products/model4.jpg"
                                                   className="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up"
                                                   className="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="javascript:;">Berry Lace Dress4</a></h3>
                                        <div className="pi-price">$29.00</div>
                                        <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
                                        <div className="sticker sticker-new"></div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item">
                                        <div className="pi-img-wrapper">
                                            <img src="assets/pages/img/products/model5.jpg" className="img-responsive"
                                                 alt="Berry Lace Dress"/>
                                            <div>
                                                <a href="assets/pages/img/products/model5.jpg"
                                                   className="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up"
                                                   className="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="shop-item.html">Berry Lace Dress5</a></h3>
                                        <div className="pi-price">$29.00</div>
                                        <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
                                    </div>

                                    <div>
                                        <li>
                                        </li>
                                    </div>

                                </div>
                                <div className="col-md-3">
                                    <div className="product-item">
                                    <div className="pi-img-wrapper">
                                            <img src="assets/pages/img/products/model5.jpg" className="img-responsive"
                                                 alt="Berry Lace Dress"/>
                                            <div>
                                                <a href="assets/pages/img/products/model5.jpg"
                                                   className="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up"
                                                   className="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="shop-item.html">Berry Lace Dress5</a></h3>
                                        <div className="pi-price">$29.00</div>
                                        <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="product-item">
                                        <div className="pi-img-wrapper">
                                            <img src="assets/pages/img/products/model1.jpg" className="img-responsive"
                                                 alt="Berry Lace Dress"/>
                                            <div>
                                                <a href="assets/pages/img/products/model1.jpg"
                                                   className="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up"
                                                   className="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="shop-item.html">Berry Lace Dress</a></h3>
                                        <div className="pi-price">$29.00</div>
                                        <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
                                        <div className="sticker sticker-sale"></div>
                                    </div>
                                </div>
                                <div>
                                    <li>

                                    </li>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item">
                                        <div className="pi-img-wrapper">
                                            <img src="assets/pages/img/products/model1.jpg" className="img-responsive"
                                                 alt="Berry Lace Dress"/>
                                            <div>
                                                <a href="assets/pages/img/products/model1.jpg"
                                                   className="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up"
                                                   className="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="shop-item.html">Berry Lace Dress</a></h3>
                                        <div className="pi-price">$29.00</div>
                                        <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
                                        <div className="sticker sticker-sale"></div>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="product-item">
                                        <div className="pi-img-wrapper">
                                            <img src="assets/pages/img/products/model6.jpg" className="img-responsive"
                                                 alt="Berry Lace Dress"/>
                                            <div>
                                                <a href="assets/pages/img/products/model6.jpg"
                                                   className="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up"
                                                   className="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="shop-item.html">Berry Lace Dress2</a></h3>
                                        <div className="pi-price">$29.00</div>
                                        <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item">
                                        <div className="pi-img-wrapper">
                                            <img src="assets/pages/img/products/model4.jpg" className="img-responsive"
                                                 alt="Berry Lace Dress"/>
                                            <div>
                                                <a href="assets/pages/img/products/model4.jpg"
                                                   className="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up"
                                                   className="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="javascript:;">Berry Lace Dress4</a></h3>
                                        <div className="pi-price">$29.00</div>
                                        <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
                                        <div className="sticker sticker-new"></div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item">
                                        <div className="pi-img-wrapper">
                                            <img src="assets/pages/img/products/model5.jpg" className="img-responsive"
                                                 alt="Berry Lace Dress"/>
                                            <div>
                                                <a href="assets/pages/img/products/model5.jpg"
                                                   className="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up"
                                                   className="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="shop-item.html">Berry Lace Dress5</a></h3>
                                        <div className="pi-price">$29.00</div>
                                        <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
                                    </div>

                                </div>
                                <div className="col-md-3">
                                    <div className="product-item">
                                        <div className="pi-img-wrapper">
                                            <img src="assets/pages/img/products/model5.jpg" className="img-responsive"
                                                 alt="Berry Lace Dress"/>
                                            <div>
                                                <a href="assets/pages/img/products/model5.jpg"
                                                   className="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up"
                                                   className="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="shop-item.html">Berry Lace Dress5</a></h3>
                                        <div className="pi-price">$29.00</div>
                                        <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
                                    </div>

                                </div>
                                <div className="col-md-3">
                                    <div className="product-item">
                                        <div className="pi-img-wrapper">
                                            <img src="assets/pages/img/products/model1.jpg" className="img-responsive"
                                                 alt="Berry Lace Dress"/>
                                            <div>
                                                <a href="assets/pages/img/products/model1.jpg"
                                                   className="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up"
                                                   className="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="shop-item.html">Berry Lace Dress</a></h3>
                                        <div className="pi-price">$29.00</div>
                                        <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
                                        <div className="sticker sticker-sale"></div>
                                    </div>
                                </div>
                                <div>
                                    <li>

                                    </li>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item">
                                        <div className="pi-img-wrapper">
                                            <img src="assets/pages/img/products/model6.jpg" className="img-responsive"
                                                 alt="Berry Lace Dress"/>
                                            <div>
                                                <a href="assets/pages/img/products/model6.jpg"
                                                   className="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up"
                                                   className="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="shop-item.html">Berry Lace Dress2</a></h3>
                                        <div className="pi-price">$29.00</div>
                                        <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item">
                                        <div className="pi-img-wrapper">
                                            <img src="assets/pages/img/products/model6.jpg" className="img-responsive"
                                                 alt="Berry Lace Dress"/>
                                            <div>
                                                <a href="assets/pages/img/products/model6.jpg"
                                                   className="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up"
                                                   className="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="shop-item.html">Berry Lace Dress2</a></h3>
                                        <div className="pi-price">$29.00</div>
                                        <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item">
                                        <div className="pi-img-wrapper">
                                            <img src="assets/pages/img/products/model6.jpg" className="img-responsive"
                                                 alt="Berry Lace Dress"/>
                                            <div>
                                                <a href="assets/pages/img/products/model6.jpg"
                                                   className="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up"
                                                   className="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="shop-item.html">Berry Lace Dress2</a></h3>
                                        <div className="pi-price">$29.00</div>
                                        <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item">
                                        <div className="pi-img-wrapper">
                                            <img src="assets/pages/img/products/model6.jpg" className="img-responsive"
                                                 alt="Berry Lace Dress"/>
                                            <div>
                                                <a href="assets/pages/img/products/model6.jpg"
                                                   className="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up"
                                                   className="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="shop-item.html">Berry Lace Dress2</a></h3>
                                        <div className="pi-price">$29.00</div>
                                        <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item">
                                        <div className="pi-img-wrapper">
                                            <img src="assets/pages/img/products/model6.jpg" className="img-responsive"
                                                 alt="Berry Lace Dress"/>
                                            <div>
                                                <a href="assets/pages/img/products/model6.jpg"
                                                   className="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up"
                                                   className="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="shop-item.html">Berry Lace Dress2</a></h3>
                                        <div className="pi-price">$29.00</div>
                                        <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item">
                                        <div className="pi-img-wrapper">
                                            <img src="assets/pages/img/products/model6.jpg" className="img-responsive"
                                                 alt="Berry Lace Dress"/>
                                            <div>
                                                <a href="assets/pages/img/products/model6.jpg"
                                                   className="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up"
                                                   className="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="shop-item.html">Berry Lace Dress2</a></h3>
                                        <div className="pi-price">$29.00</div>
                                        <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
                                    </div>
                                </div>
                                <div>
                                    <li>

                                    </li>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item">
                                        <div className="pi-img-wrapper">
                                            <img src="assets/pages/img/products/model6.jpg" className="img-responsive"
                                                 alt="Berry Lace Dress"/>
                                            <div>
                                                <a href="assets/pages/img/products/model6.jpg"
                                                   className="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up"
                                                   className="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="shop-item.html">Berry Lace Dress2</a></h3>
                                        <div className="pi-price">$29.00</div>
                                        <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item">
                                        <div className="pi-img-wrapper">
                                            <img src="assets/pages/img/products/model6.jpg" className="img-responsive"
                                                 alt="Berry Lace Dress"/>
                                            <div>
                                                <a href="assets/pages/img/products/model6.jpg"
                                                   className="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up"
                                                   className="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="shop-item.html">Berry Lace Dress2</a></h3>
                                        <div className="pi-price">$29.00</div>
                                        <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item">
                                        <div className="pi-img-wrapper">
                                            <img src="assets/pages/img/products/model6.jpg" className="img-responsive"
                                                 alt="Berry Lace Dress"/>
                                            <div>
                                                <a href="assets/pages/img/products/model6.jpg"
                                                   className="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up"
                                                   className="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="shop-item.html">Berry Lace Dress2</a></h3>
                                        <div className="pi-price">$29.00</div>
                                        <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item">
                                        <div className="pi-img-wrapper">
                                            <img src="assets/pages/img/products/model6.jpg" className="img-responsive"
                                                 alt="Berry Lace Dress"/>
                                            <div>
                                                <a href="assets/pages/img/products/model6.jpg"
                                                   className="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up"
                                                   className="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="shop-item.html">Berry Lace Dress2</a></h3>
                                        <div className="pi-price">$29.00</div>
                                        <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item">
                                        <div className="pi-img-wrapper">
                                            <img src="assets/pages/img/products/model6.jpg" className="img-responsive"
                                                 alt="Berry Lace Dress"/>
                                            <div>
                                                <a href="assets/pages/img/products/model6.jpg"
                                                   className="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up"
                                                   className="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="shop-item.html">Berry Lace Dress2</a></h3>
                                        <div className="pi-price">$29.00</div>
                                        <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-item">
                                        <div className="pi-img-wrapper">
                                            <img src="assets/pages/img/products/model6.jpg" className="img-responsive"
                                                 alt="Berry Lace Dress"/>
                                            <div>
                                                <a href="assets/pages/img/products/model6.jpg"
                                                   className="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up"
                                                   className="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="shop-item.html">Berry Lace Dress2</a></h3>
                                        <div className="pi-price">$29.00</div>
                                        <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
                                    </div>
                                </div>

                                {/* Repeat this structure for additional products */}
                            </div>
                        </div>
                        {/* <!-- END SALE PRODUCT --> */}
                    </div>
                    {/* <!-- END SALE PRODUCT & NEW ARRIVALS --> */}
                </div>
                <Footer/>

            </div>
        );
    }
}
export default Products;