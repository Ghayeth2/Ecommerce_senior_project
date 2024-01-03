    import React from 'react'

    export default function Review(){
        return(
            <div>
                {/*// <!-- BEGIN fast view of a product -->*/}
                <div id="product-pop-up" style={{display: 'none', width: '700px'}}>
                    <div Class="product-page product-pop-up">
                        <div Class="row">
                            <div Class="col-md-6 col-sm-6 col-xs-3">
                                <div Class="product-main-image">
                                    <img src="assets/pages/img/products/model7.jpg" alt="Cool green dress with red bell" Class="img-responsive"/>
                                </div>
                                <div Class="product-other-images">
                                    <a href="javascript:;" Class="active"><img alt="Berry Lace Dress" src="assets/pages/img/products/model3.jpg"/></a>
                                    <a href="javascript:;"><img alt="Berry Lace Dress" src="assets/pages/img/products/model4.jpg"/></a>
                                    <a href="javascript:;"><img alt="Berry Lace Dress" src="assets/pages/img/products/model5.jpg"/></a>
                                </div>
                            </div>
                            <div Class="col-md-6 col-sm-9 col-xs-9">
                                <h2>Cool green dress with red bell</h2>
                                <div Class="price-availability-block clearfix">
                                    <div Class="price">
                                        <strong><span>$</span>47.00</strong>
                                        <em>$<span>62.00</span></em>
                                    </div>
                                    <div Class="availability">
                                        Availability: <strong>In Stock</strong>
                                    </div>
                                </div>
                                <div Class="description">
                                    <p>Lorem ipsum dolor ut sit ame dolore  adipiscing elit, sed nonumy nibh sed euismod laoreet dolore magna aliquarm erat volutpat
                                        Nostrud duis molestie at dolore.</p>
                                </div>
                                <div Class="product-page-options">
                                    <div Class="pull-left">
                                        <label Class="control-label">Size:</label>
                                        <select Class="form-control input-sm-6">
                                            <option>L</option>
                                            <option>M</option>
                                            <option>XL</option>
                                        </select>
                                    </div>
                                    <div Class="pull-left">
                                        <label Class="control-label">Color:</label>
                                        <select Class="form-control input-sm-6 ">
                                            <option>Red</option>
                                            <option>Blue</option>
                                            <option>Black</option>
                                        </select>
                                    </div>
                                </div>

                                <div Class="product-page-cart">
                                    <div Class="product-quantity">
                                        <input id="product-quantity" type="text" value="1" readOnly Class="form-control input-sm" />
                                    </div>
                                    <button Class="btn btn-primary" type="submit">Add to cart</button>
                                    <a href="shop-item.html" Class="btn btn-default">More details</a>
                                </div>
                            </div>

                            <div Class="sticker sticker-sale"></div>
                        </div>
                    </div>
                </div>
                {/*// <!-- END fast view of a product -->*/}
            </div>
        )
    }