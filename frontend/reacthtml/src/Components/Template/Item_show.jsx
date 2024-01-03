import React from 'react'
import Topbar from "./Topbar";
import Header from "./Header";
import Footer from "./Footer";
import StarRating from "../../StarRating";

export default function Item_show() {
    return (
        <div>
            <Topbar/>
            <Header/>
            <div className="main">
                <div className="container">
                    {/*// <!-- BEGIN SIDEBAR -->*/}
                    <div className="sidebar col-md-3 col-sm-5">
                        <ul class="list-group margin-bottom-25 sidebar-menu">
                            <li class="list-group-item clearfix"><a href="shop-product-list.html"><i
                                class="fa fa-angle-right"></i> Ladies</a></li>
                            <li class="list-group-item clearfix dropdown active">
                                <a href="shop-product-list.html" class="collapsed">
                                    <i class="fa fa-angle-right"></i>
                                    Mens

                                </a>
                                <ul class="dropdown-menu" style={{display: 'block'}}>
                                    <li class="list-group-item dropdown clearfix active">
                                        <a href="shop-product-list.html" class="collapsed"><i
                                            class="fa fa-angle-right"></i> Shoes </a>
                                        <ul class="dropdown-menu" style={{display: 'block'}}>
                                            <li class="list-group-item dropdown clearfix">
                                                <a href="shop-product-list.html"><i
                                                    class="fa fa-angle-right"></i> Classic </a>
                                                <ul class="dropdown-menu">
                                                    <li><a href="shop-product-list.html"><i
                                                        class="fa fa-angle-right"></i> Classic 1</a></li>
                                                    <li><a href="shop-product-list.html"><i
                                                        class="fa fa-angle-right"></i> Classic 2</a></li>
                                                </ul>
                                            </li>
                                            <li class="list-group-item dropdown clearfix active">
                                                <a href="shop-product-list.html" class="collapsed"><i
                                                    class="fa fa-angle-right"></i> Sport </a>
                                                <ul class="dropdown-menu" style={{display: 'block'}}>
                                                    <li class="active"><a href="shop-product-list.html"><i
                                                        class="fa fa-angle-right"></i> Sport 1</a></li>
                                                    <li><a href="shop-product-list.html"><i
                                                        class="fa fa-angle-right"></i> Sport 2</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="shop-product-list.html"><i class="fa fa-angle-right"></i> Trainers</a>
                                    </li>
                                    <li><a href="shop-product-list.html"><i class="fa fa-angle-right"></i> Jeans</a>
                                    </li>
                                    <li><a href="shop-product-list.html"><i class="fa fa-angle-right"></i> Chinos</a>
                                    </li>
                                    <li><a href="shop-product-list.html"><i class="fa fa-angle-right"></i> T-Shirts</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="list-group-item clearfix"><a href="shop-product-list.html"><i
                                class="fa fa-angle-right"></i> Kids</a></li>
                            <li class="list-group-item clearfix"><a href="shop-product-list.html"><i
                                class="fa fa-angle-right"></i> Accessories</a></li>
                            <li class="list-group-item clearfix"><a href="shop-product-list.html"><i
                                class="fa fa-angle-right"></i> Sports</a></li>
                            <li class="list-group-item clearfix"><a href="shop-product-list.html"><i
                                class="fa fa-angle-right"></i> Brands</a></li>
                            <li class="list-group-item clearfix"><a href="shop-product-list.html"><i
                                class="fa fa-angle-right"></i> Electronics</a></li>
                            <li class="list-group-item clearfix"><a href="shop-product-list.html"><i
                                class="fa fa-angle-right"></i> Home &amp; Garden</a></li>
                            <li class="list-group-item clearfix"><a href="shop-product-list.html"><i
                                class="fa fa-angle-right"></i> Custom Link</a></li>
                        </ul>

                        <div className="sidebar-products clearfix">
                            <h2>Bestsellers</h2>
                            <div className="item">
                                <a href="shop-item.html"><img src="assets/pages/img/products/k1.jpg"
                                                              alt="Some Shoes in Animal with Cut Out"/></a>
                                <h3><a href="shop-item.html">Some Shoes in Animal with Cut Out</a></h3>
                                <div className="price">$31.00</div>
                            </div>
                            <div className="item">
                                <a href="shop-item.html"><img src="assets/pages/img/products/k4.jpg"
                                                              alt="Some Shoes in Animal with Cut Out"/></a>
                                <h3><a href="shop-item.html">Some Shoes in Animal with Cut Out</a></h3>
                                <div className="price">$23.00</div>
                            </div>
                            <div className="item">
                                <a href="shop-item.html"><img src="assets/pages/img/products/k3.jpg"
                                                              alt="Some Shoes in Animal with Cut Out"/></a>
                                <h3><a href="shop-item.html">Some Shoes in Animal with Cut Out</a></h3>
                                <div className="price">$86.00</div>
                            </div>
                        </div>
                    </div>
                    {/*// <!-- END SIDEBAR -->*/}

                    {/*// <!-- BEGIN CONTENT -->*/}
                    <div className="col-md-9 col-sm-7">
                        <div className="product-page">
                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    <div className="col-md-10">
                                        <div className="product-main-image">
                                            <img src="assets/pages/img/products/model7.jpg"
                                                 alt="Cool green dress with red bell" className="img-responsive" data-BigImgsrc="assets/pages/img/products/model7.jpg"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="product-other-images">
                                            <a href="assets/pages/img/products/model3.jpg" className="fancybox-button"
                                               rel="photos-lib"><img alt="Berry Lace Dress"
                                                                     src="assets/pages/img/products/model3.jpg"/></a>
                                            <a href="assets/pages/img/products/model4.jpg" className="fancybox-button"
                                               rel="photos-lib"><img alt="Berry Lace Dress"
                                                                     src="assets/pages/img/products/model4.jpg"/></a>
                                            <a href="assets/pages/img/products/model5.jpg" className="fancybox-button"
                                               rel="photos-lib"><img alt="Berry Lace Dress"
                                                                     src="assets/pages/img/products/model5.jpg"/></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <h1>Cool green dress with red bell</h1>
                                    <div className="price-availability-block clearfix">
                                        <div className="price">
                                            <strong><span>$</span>47.00</strong>
                                            <em>$<span>62.00</span></em>
                                        </div>
                                        <div className="availability">
                                            Availability: <strong>In Stock</strong>
                                        </div>
                                    </div>
                                    <div className="description">
                                        <p>Lorem ipsum dolor ut sit ame dolore adipiscing elit, sed nonumy nibh sed
                                            euismod laoreet dolore magna aliquarm erat volutpat
                                            Nostrud duis molestie at dolore.</p>
                                    </div>
                                    <div className="product-page-options">
                                        <div className="pull-left">
                                            <label className="control-label">Size:</label>
                                            <select className="form-control input-sm-5">
                                                <option>L</option>
                                                <option>M</option>
                                                <option>XL</option>
                                            </select>
                                        </div>
                                        <div className="pull-left">
                                            <label className="control-label">Color:</label>
                                            <select className="form-control input-sm-5">
                                                <option>Red</option>
                                                <option>Blue</option>
                                                <option>Black</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="product-page-cart">
                                        <div className="product-quantity">
                                            <input id="product-quantity" type="text" value="1" readonly
                                                   className="form-control input-sm"/>
                                        </div>
                                        <button className="btn btn-primary" type="submit">Add to cart</button>
                                    </div>
                                    <div className="review">
                                        <StarRating/>
                                        <a href="javascript:;">7 reviews</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a
                                        href="javascript:;">Write a review</a>
                                    </div>
                                    <ul className="social-icons">
                                        <li><a className="facebook" data-original-title="facebook"
                                               href="javascript:;"></a></li>
                                        <li><a className="twitter" data-original-title="twitter"
                                               href="javascript:;"></a></li>
                                        <li><a className="googleplus" data-original-title="googleplus"
                                               href="javascript:;"></a></li>
                                        <li><a className="evernote" data-original-title="evernote"
                                               href="javascript:;"></a></li>
                                        <li><a className="tumblr" data-original-title="tumblr" href="javascript:;"></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="main">
                                    <div className="container">
                                        <div className="product-page-content">
                                            <ul id="myTab" className="nav nav-tabs">

                                                <li><a href="#Information" data-toggle="tab">Information</a></li>
                                                <li className="active"><a href="#Reviews" data-toggle="tab">Reviews
                                                    (2)</a></li>
                                            </ul>
                                            <div id="myTabContent" className="tab-content">

                                                <div classname="tab-pane fade" id="Information">
                                                    <table className="datasheet">
                                                        <tr>
                                                            <th colspan="2">Additional features</th>
                                                        </tr>
                                                        <tr>
                                                            <td className="datasheet-features-type">Value 1</td>
                                                            <td>21 cm</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="datasheet-features-type">Value 2</td>
                                                            <td>700 gr.</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="datasheet-features-type">Value 3</td>
                                                            <td>10 person</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="datasheet-features-type">Value 4</td>
                                                            <td>14 cm</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="datasheet-features-type">Value 5</td>
                                                            <td>plastic</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>


                                        <div classname="tab-pane fade in active" id="Reviews">
                                            {/*// <!--<p>There are no reviews for this product.</p>-->*/}
                                            <div className="review-item clearfix">
                                                <div className="review-item-submitted">
                                                    <strong>Bob</strong>
                                                    <em>30/12/2013 - 07:37</em>
                                                    <div className="rateit" data-rateit-value="5"
                                                         data-rateit-ispreset="true" data-rateit-readonly="true"></div>
                                                </div>
                                                <div className="review-item-content">
                                                    <p>Sed velit quam, auctor id semper a, hendrerit eget justo. Cum
                                                        sociis natoque penatibus et magnis dis parturient montes,
                                                        nascetur ridiculus mus. Duis vel arcu pulvinar dolor tempus
                                                        feugiat id in orci. Phasellus sed erat leo. Donec luctus, justo
                                                        eget ultricies tristique, enim mauris bibendum orci, a sodales
                                                        lectus purus ut lorem.</p>
                                                </div>
                                            </div>
                                            <div className="review-item clearfix">
                                                <div className="review-item-submitted">
                                                    <strong>Mary</strong>
                                                    <em>13/12/2013 - 17:49</em>
                                                    <div classname="rateit" data-rateit-value="2.5"
                                                         data-rateit-ispreset="true" data-rateit-readonly="true"></div>
                                                </div>
                                                <div className="review-item-content">
                                                    <p>Sed velit quam, auctor id semper a, hendrerit eget justo. Cum
                                                        sociis natoque penatibus et magnis dis parturient montes,
                                                        nascetur ridiculus mus. Duis vel arcu pulvinar dolor tempus
                                                        feugiat id in orci. Phasellus sed erat leo. Donec luctus, justo
                                                        eget ultricies tristique, enim mauris bibendum orci, a sodales
                                                        lectus purus ut lorem.</p>
                                                </div>
                                            </div>

                                            {/*// <!-- BEGIN FORM-->*/}
                                            <form action="#" className="reviews-form" role="form">
                                                <h2>Write a review</h2>
                                                <div className="form-group">
                                                    <label for="name">Name <span className="require">*</span></label>
                                                    <input type="text" className="form-control" id="name"/>
                                                </div>
                                                <div classname="form-group">
                                                    <label for="email">Email</label>
                                                    <input type="text" className="form-control" id="email"/>
                                                </div>
                                                <div className="form-group">
                                                    <label for="review">Review <span
                                                        className="require">*</span></label>
                                                    <textarea className="form-control" rows="8" id="review"></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <label for="email">Rating</label>
                                                    <StarRating/>
                                                </div>
                                                <div className="padding-top-20">
                                                    <button type="submit" className="btn btn-primary">Send</button>
                                                </div>
                                            </form>
                                            {/*// <!-- END FORM-->*/}
                                        </div>
                                    </div>
                                </div>

                                <div className="sticker sticker-sale"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main">
                <div className="container">
            {/*// <!-- BEGIN SIMILAR PRODUCTS -->*/}
            <div className="row margin-bottom-40">
                <div className="col-md-12 col-sm-12">
                    <h3>Most popular products</h3>
                    <div classname="owl-carousel owl-carousel4">
                        <div className="col-md-3">
                        <div>
                            <div class="product-item">
                                <div class="pi-img-wrapper">
                                    <img src="assets/pages/img/products/k1.jpg" class="img-responsive" alt="Berry Lace Dress"/>
                                        <div>
                                            <a href="assets/pages/img/products/k1.jpg" class="btn btn-default fancybox-button">Zoom</a>
                                            <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                                        </div>
                                </div>
                                <h3><a href="shop-item.html">Berry Lace Dress</a></h3>
                                <div class="pi-price">$29.00</div>
                                <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
                                <div class="sticker sticker-new"></div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3">
                        <div>
                            <div class="product-item">
                                <div class="pi-img-wrapper">
                                    <img src="assets/pages/img/products/k2.jpg" class="img-responsive" alt="Berry Lace Dress"/>
                                        <div>
                                            <a href="assets/pages/img/products/k2.jpg" class="btn btn-default fancybox-button">Zoom</a>
                                            <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                                        </div>
                                </div>
                                <h3><a href="shop-item.html">Berry Lace Dress2</a></h3>
                                <div class="pi-price">$29.00</div>
                                <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3">
                        <div>
                            <div class="product-item">
                                <div class="pi-img-wrapper">
                                    <img src="assets/pages/img/products/k3.jpg" class="img-responsive" alt="Berry Lace Dress"/>
                                        <div>
                                            <a href="assets/pages/img/products/k3.jpg" class="btn btn-default fancybox-button">Zoom</a>
                                            <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                                        </div>
                                </div>
                                <h3><a href="shop-item.html">Berry Lace Dress3</a></h3>
                                <div class="pi-price">$29.00</div>
                                <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3">
                        <div>
                            <div className="product-item">
                                <div class="pi-img-wrapper">
                                    <img src="assets/pages/img/products/k4.jpg" class="img-responsive" alt="Berry Lace Dress"/>
                                        <div>
                                            <a href="assets/pages/img/products/k4.jpg" class="btn btn-default fancybox-button">Zoom</a>
                                            <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                                        </div>
                                </div>
                                <h3><a href="shop-item.html">Berry Lace Dress4</a></h3>
                                <div class="pi-price">$29.00</div>
                                <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
                                <div class="sticker sticker-sale"></div>
                            </div>
                        </div>
                        </div>


                    </div>
                </div>
            </div>
                </div>
            </div>
            {/*// <!-- END SIMILAR PRODUCTS -->*/}

            {/*// <!-- END CONTENT -->*/}
            <Footer/>

        </div>

    )
}