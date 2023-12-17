import React from 'react'

export default function Towproducts() {
  return (
    <div>
         <div className="row margin-bottom-35 ">
          {/* <!-- BEGIN TWO PRODUCTS --> */}
          <div className="col-md-6 two-items-bottom-items">
            <h2>Two items</h2>
            <div classname="owl-carousel owl-carousel2">
              <div>
              <div className="col-md-6">
                <div className="product-item">
                  <div className="pi-img-wrapper">
                    <img src="assets/pages/img/products/k4.jpg" className="img-responsive" alt="Berry Lace Dress"/>
                    <div>
                      <a href="assets/pages/img/products/k4.jpg" className="btn btn-default fancybox-button">Zoom</a>
                      <a href="#product-pop-up" className="btn btn-default fancybox-fast-view">View</a>
                    </div>
                  </div>
                  <h3><a href="shop-item.html">Berry Lace Dress</a></h3>
                  <div className="pi-price">$29.00</div>
                  <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
                </div>
                </div>
              </div>
              <div>
              <div className="col-md-6">
                <div className="product-item">
                  <div className="pi-img-wrapper">
                    <img src="assets/pages/img/products/k2.jpg" className="img-responsive" alt="Berry Lace Dress"/>
                    <div>
                      <a href="assets/pages/img/products/k2.jpg" className="btn btn-default fancybox-button">Zoom</a>
                      <a href="#product-pop-up" className="btn btn-default fancybox-fast-view">View</a>
                    </div>
                  </div>
                  <h3><a href="shop-item.html">Berry Lace Dress</a></h3>
                  <div className="pi-price">$29.00</div>
                  <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- END TWO PRODUCTS --> */}
          {/* <!-- BEGIN PROMO --> */}
          <div className="col-md-6 shop-index-carousel">
            <div className="content-slider">
              <div id="myCarousel" className="carousel slide" data-ride="carousel">
                {/* <!-- Indicators --> */}
                <ol className="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="item active">
                    <img src="assets/pages/img/index-sliders/slide1.jpg" className="img-responsive" alt="Berry Lace Dress"/>
                  </div>
                  <div className="item">
                    <img src="assets/pages/img/index-sliders/slide2.jpg" className="img-responsive" alt="Berry Lace Dress"/>
                  </div>
                  <div className="item">
                    <img src="assets/pages/img/index-sliders/slide3.jpg" className="img-responsive" alt="Berry Lace Dress"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- END PROMO --> */}
        </div> 
    </div>
  )
}
