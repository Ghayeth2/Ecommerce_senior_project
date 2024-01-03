import React from 'react';

export default function SaleProduct() {
  return (
    <div>
      {/* <!-- BEGIN SALE PRODUCT & NEW ARRIVALS --> */}
      <div className="row margin-bottom-40">
        {/* <!-- BEGIN SALE PRODUCT --> */}
        <div className="col-md-12 sale-product">
          <h2>New </h2>
          <div classname="owl-carousel owl-carousel5">
            <div className="col-md-3">
            <div className="product-item">
                  <div className="pi-img-wrapper">
                    <img src="assets/pages/img/products/model1.jpg" className="img-responsive" alt="Berry Lace Dress"/>
                    <div>
                      <a href="assets/pages/img/products/model1.jpg" className="btn btn-default fancybox-button">Zoom</a>
                      <a href="#product-pop-up" className="btn btn-default fancybox-fast-view">View</a>
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
                    <img src="assets/pages/img/products/model6.jpg" className="img-responsive" alt="Berry Lace Dress"/>
                    <div>
                      <a href="assets/pages/img/products/model6.jpg" className="btn btn-default fancybox-button">Zoom</a>
                      <a href="#product-pop-up" className="btn btn-default fancybox-fast-view">View</a>
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
                      <img src="assets/pages/img/products/model4.jpg" className="img-responsive" alt="Berry Lace Dress"/>
                      <div>
                        <a href="assets/pages/img/products/model4.jpg" className="btn btn-default fancybox-button">Zoom</a>
                        <a href="#product-pop-up" className="btn btn-default fancybox-fast-view">View</a>
                      </div>
                    </div>
                    <h3><a href="shop-item.html">Berry Lace Dress4</a></h3>
                    <div className="pi-price">$29.00</div>
                    <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
                    <div className="sticker sticker-new"></div>
                  </div>
            </div>
            <div className="col-md-3">
            <div className="product-item">
                  <div className="pi-img-wrapper">
                    <img src="assets/pages/img/products/model5.jpg" className="img-responsive" alt="Berry Lace Dress"/>
                    <div>
                      <a href="assets/pages/img/products/model5.jpg" className="btn btn-default fancybox-button">Zoom</a>
                      <a href="#product-pop-up" className="btn btn-default fancybox-fast-view">View</a>
                    </div>
                  </div>
                  <h3><a href="shop-item.html">Berry Lace Dress5</a></h3>
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
  );
}
