import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <section className="flat-spacing-9 bg_grey-6 flat-spacing-26">
            <div className="container">
                <div className="flat-tab-store flat-animate-tab overflow-unset">
                    <ul className="widget-tab-3 d-flex justify-content-center flex-wrap wow fadeInUp" data-wow-delay="0s" role="tablist">
                        <li className="nav-tab-item" role="presentation">   
                            <a href="#essentials" className="active" data-bs-toggle="tab">Essentials</a>
                        </li>
                        <li className="nav-tab-item" role="presentation">
                            <a href="#gift_sets"  data-bs-toggle="tab">Gift Sets</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active show" id="essentials" role="tabpanel">
                            <div className="wrap-carousel">
                                <div className="swiper tf-sw-product-sell-1" data-preview="4" data-tablet="3" data-mobile="2" data-space-lg="30" data-space-md="15" data-pagination="2" data-pagination-md="3" data-pagination-lg="3">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide" >
                                            <div className="card-product style-skincare">
                                                <div className="card-product-wrapper">
                                                    <a href="product-detail.html" className="product-img">
                                                        <img className="lazyload img-product" data-src="images/products/skincare-1.jpg" src="images/products/skincare-1.jpg" alt="image-product"/>
                                                        <img className="lazyload img-hover" data-src="images/products/skincare-2.jpg" src="images/products/skincare-2.jpg" alt="image-product"/>
                                                    </a>
                                                    <div className="list-product-btn">
                                                        <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                                            <span className="icon icon-heart"></span>
                                                            <span className="tooltip">Add to Wishlist</span>
                                                            <span className="icon icon-delete"></span>
                                                        </a>
                                                        <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                                            <span className="icon icon-compare"></span>
                                                            <span className="tooltip">Add to Compare</span>
                                                            <span className="icon icon-check"></span>
                                                        </a>
                                                        <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                                            <span className="icon icon-view"></span>
                                                            <span className="tooltip">Quick View</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-product-info text-center">
                                                    <Link to="/detail" className="title link">
                                                        Natural Moisturizing Factors
                                                    </Link>
                                                    <span className="price">$32.00</span>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" >
                                            <div className="card-product style-skincare">
                                                <div className="card-product-wrapper">
                                                    <a href="product-detail.html" className="product-img">
                                                        <img className="lazyload img-product" data-src="images/products/skincare-3.jpg" src="images/products/skincare-3.jpg" alt="image-product"/>
                                                        <img className="lazyload img-hover" data-src="images/products/skincare-4.jpg" src="images/products/skincare-4.jpg" alt="image-product"/>
                                                    </a>
                                                    <div className="list-product-btn">
                                                        <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                                            <span className="icon icon-heart"></span>
                                                            <span className="tooltip">Add to Wishlist</span>
                                                            <span className="icon icon-delete"></span>
                                                        </a>
                                                        <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                                            <span className="icon icon-compare"></span>
                                                            <span className="tooltip">Add to Compare</span>
                                                            <span className="icon icon-check"></span>
                                                        </a>
                                                        <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                                            <span className="icon icon-view"></span>
                                                            <span className="tooltip">Quick View</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-product-info text-center">
                                                    <Link to="/detail" className="title link">
                                                        Anhydrous Solution Pore Serum
                                                    </Link>
                                                    <span className="price">From $65.00</span>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" >
                                            <div className="card-product style-skincare">
                                                <div className="card-product-wrapper">
                                                    <a href="product-detail.html" className="product-img">
                                                        <img className="lazyload img-product" data-src="images/products/skincare-5.jpg" src="images/products/skincare-5.jpg" alt="image-product"/>
                                                        <img className="lazyload img-hover" data-src="images/products/skincare-6.jpg" src="images/products/skincare-6.jpg" alt="image-product"/>
                                                    </a>
                                                    <div className="list-product-btn">
                                                        <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                                            <span className="icon icon-heart"></span>
                                                            <span className="tooltip">Add to Wishlist</span>
                                                            <span className="icon icon-delete"></span>
                                                        </a>
                                                        <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                                            <span className="icon icon-compare"></span>
                                                            <span className="tooltip">Add to Compare</span>
                                                            <span className="icon icon-check"></span>
                                                        </a>
                                                        <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                                            <span className="icon icon-view"></span>
                                                            <span className="tooltip">Quick View</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-product-info text-center">
                                                     <Link to="/detail" className="title link">
                                                        Serum for Hair Density
                                                    </Link>
                                                    <span className="price">$65.00</span>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" >
                                            <div className="card-product style-skincare">
                                                <div className="card-product-wrapper">
                                                    <a href="product-detail.html" className="product-img">
                                                        <img className="lazyload img-product" data-src="images/products/skincare-7.jpg" src="images/products/skincare-7.jpg" alt="image-product"/>
                                                        <img className="lazyload img-hover" data-src="images/products/skincare-8.jpg" src="images/products/skincare-8.jpg" alt="image-product"/>
                                                    </a>
                                                    <div className="list-product-btn">
                                                        <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                                            <span className="icon icon-heart"></span>
                                                            <span className="tooltip">Add to Wishlist</span>
                                                            <span className="icon icon-delete"></span>
                                                        </a>
                                                        <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                                            <span className="icon icon-compare"></span>
                                                            <span className="tooltip">Add to Compare</span>
                                                            <span className="icon icon-check"></span>
                                                        </a>
                                                        <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                                            <span className="icon icon-view"></span>
                                                            <span className="tooltip">Quick View</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-product-info text-center">
                                                     <Link to="/detail" className="title link">
                                                        Anhydrous Solution Pore Serum
                                                    </Link>
                                                    <span className="price">$22.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" >
                                            <div className="card-product style-skincare">
                                                <div className="card-product-wrapper">
                                                    <a href="product-detail.html" className="product-img">
                                                        <img className="lazyload img-product" data-src="images/products/skincare-9.jpg" src="images/products/skincare-9.jpg" alt="image-product"/>
                                                        <img className="lazyload img-hover" data-src="images/products/skincare-10.jpg" src="images/products/skincare-10.jpg" alt="image-product"/>
                                                    </a>
                                                    <div className="list-product-btn">
                                                        <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                                            <span className="icon icon-heart"></span>
                                                            <span className="tooltip">Add to Wishlist</span>
                                                            <span className="icon icon-delete"></span>
                                                        </a>
                                                        <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                                            <span className="icon icon-compare"></span>
                                                            <span className="tooltip">Add to Compare</span>
                                                            <span className="icon icon-check"></span>
                                                        </a>
                                                        <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                                            <span className="icon icon-view"></span>
                                                            <span className="tooltip">Quick View</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-product-info text-center">
                                                     <Link to="/detail" className="title link">
                                                        Anhydrous Solution Pore Serum
                                                    </Link>
                                                    <span className="price"><span className="fw-4 text-sale">$62.00</span> <span className="text_primary">$52.00</span></span>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" >
                                            <div className="card-product style-skincare">
                                                <div className="card-product-wrapper">
                                                    <a href="product-detail.html" className="product-img">
                                                        <img className="lazyload img-product" data-src="images/products/skincare-11.jpg" src="images/products/skincare-11.jpg" alt="image-product"/>
                                                        <img className="lazyload img-hover" data-src="images/products/skincare-12.jpg" src="images/products/skincare-12.jpg" alt="image-product"/>
                                                    </a>
                                                    <div className="list-product-btn">
                                                        <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                                            <span className="icon icon-heart"></span>
                                                            <span className="tooltip">Add to Wishlist</span>
                                                            <span className="icon icon-delete"></span>
                                                        </a>
                                                        <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                                            <span className="icon icon-compare"></span>
                                                            <span className="tooltip">Add to Compare</span>
                                                            <span className="icon icon-check"></span>
                                                        </a>
                                                        <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                                            <span className="icon icon-view"></span>
                                                            <span className="tooltip">Quick View</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-product-info text-center">
                                                     <Link to="/detail" className="title link">
                                                        Anhydrous Solution Pore Serum
                                                    </Link>
                                                    <span className="price"><span className="fw-4 text-sale">$62.00</span> <span className="text_primary">$52.00</span></span>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" >
                                            <div className="card-product style-skincare">
                                                <div className="card-product-wrapper">
                                                    <a href="product-detail.html" className="product-img">
                                                        <img className="lazyload img-product" data-src="images/products/skincare-13.jpg" src="images/products/skincare-13.jpg" alt="image-product"/>
                                                        <img className="lazyload img-hover" data-src="images/products/skincare-14.jpg" src="images/products/skincare-14.jpg" alt="image-product"/>
                                                    </a>
                                                    <div className="list-product-btn">
                                                        <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                                            <span className="icon icon-heart"></span>
                                                            <span className="tooltip">Add to Wishlist</span>
                                                            <span className="icon icon-delete"></span>
                                                        </a>
                                                        <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                                            <span className="icon icon-compare"></span>
                                                            <span className="tooltip">Add to Compare</span>
                                                            <span className="icon icon-check"></span>
                                                        </a>
                                                        <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                                            <span className="icon icon-view"></span>
                                                            <span className="tooltip">Quick View</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-product-info text-center">
                                                     <Link to="/detail" className="title link">
                                                        Anhydrous Solution Pore Serum
                                                    </Link>
                                                    <span className="price">$65.00</span>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" >
                                            <div className="card-product style-skincare">
                                                <div className="card-product-wrapper">
                                                    <a href="product-detail.html" className="product-img">
                                                        <img className="lazyload img-product" data-src="images/products/skincare-15.jpg" src="images/products/skincare-15.jpg" alt="image-product"/>
                                                        <img className="lazyload img-hover" data-src="images/products/skincare-16.jpg" src="images/products/skincare-16.jpg" alt="image-product"/>
                                                    </a>
                                                    <div className="list-product-btn">
                                                        <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                                            <span className="icon icon-heart"></span>
                                                            <span className="tooltip">Add to Wishlist</span>
                                                            <span className="icon icon-delete"></span>
                                                        </a>
                                                        <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                                            <span className="icon icon-compare"></span>
                                                            <span className="tooltip">Add to Compare</span>
                                                            <span className="icon icon-check"></span>
                                                        </a>
                                                        <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                                            <span className="icon icon-view"></span>
                                                            <span className="tooltip">Quick View</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-product-info text-center">
                                                     <Link to="/detail" className="title link">
                                                        Anhydrous Solution Pore Serum
                                                    </Link>
                                                    <span className="price">$65.00</span>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="nav-sw style-not-line nav-next-slider nav-next-sell-1 box-icon w_46 round"><span className="icon icon-arrow-left"></span></div>
                                <div className="nav-sw style-not-line nav-prev-slider nav-prev-sell-1 box-icon w_46 round"><span className="icon icon-arrow-right"></span></div>
                                <div className="sw-dots style-2 sw-pagination-sell-1 justify-content-center"></div>
                            </div>
                        </div>
                        <div className="tab-pane" id="gift_sets" role="tabpanel">
                            <div className="wrap-carousel">
                                <div className="swiper tf-sw-product-sell" data-preview="4" data-tablet="3" data-mobile="2" data-space-lg="30" data-space-md="15" data-pagination="2" data-pagination-md="3" data-pagination-lg="3">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide" >
                                            <div className="card-product style-skincare">
                                                <div className="card-product-wrapper">
                                                    <a href="product-detail.html" className="product-img">
                                                        <img className="lazyload img-product" data-src="images/products/skincare-1.jpg" src="images/products/skincare-1.jpg" alt="image-product"/>
                                                        <img className="lazyload img-hover" data-src="images/products/skincare-2.jpg" src="images/products/skincare-2.jpg" alt="image-product"/>
                                                    </a>
                                                    <div className="list-product-btn">
                                                        <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                                            <span className="icon icon-heart"></span>
                                                            <span className="tooltip">Add to Wishlist</span>
                                                            <span className="icon icon-delete"></span>
                                                        </a>
                                                        <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                                            <span className="icon icon-compare"></span>
                                                            <span className="tooltip">Add to Compare</span>
                                                            <span className="icon icon-check"></span>
                                                        </a>
                                                        <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                                            <span className="icon icon-view"></span>
                                                            <span className="tooltip">Quick View</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-product-info text-center">
                                                    <Link to="/detail" className="title link">
                                                        Anhydrous Solution Pore Serum
                                                    </Link>
                                                    <span className="price">$32.00</span>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" >
                                            <div className="card-product style-skincare">
                                                <div className="card-product-wrapper">
                                                    <a href="product-detail.html" className="product-img">
                                                        <img className="lazyload img-product" data-src="images/products/skincare-3.jpg" src="images/products/skincare-3.jpg" alt="image-product"/>
                                                        <img className="lazyload img-hover" data-src="images/products/skincare-4.jpg" src="images/products/skincare-4.jpg" alt="image-product"/>
                                                    </a>
                                                    <div className="list-product-btn">
                                                        <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                                            <span className="icon icon-heart"></span>
                                                            <span className="tooltip">Add to Wishlist</span>
                                                            <span className="icon icon-delete"></span>
                                                        </a>
                                                        <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                                            <span className="icon icon-compare"></span>
                                                            <span className="tooltip">Add to Compare</span>
                                                            <span className="icon icon-check"></span>
                                                        </a>
                                                        <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                                            <span className="icon icon-view"></span>
                                                            <span className="tooltip">Quick View</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-product-info text-center">
                                                     <Link to="/detail" className="title link">
                                                        Anhydrous Solution Pore Serum
                                                    </Link>
                                                    <span className="price">From $65.00</span>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="card-product style-skincare">
                                                <div className="card-product-wrapper">
                                                    <a href="product-detail.html" className="product-img">
                                                        <img className="lazyload img-product" data-src="images/products/skincare-5.jpg" src="images/products/skincare-5.jpg" alt="image-product"/>
                                                        <img className="lazyload img-hover" data-src="images/products/skincare-6.jpg" src="images/products/skincare-6.jpg" alt="image-product"/>
                                                    </a>
                                                    <div className="list-product-btn">
                                                        <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                                            <span className="icon icon-heart"></span>
                                                            <span className="tooltip">Add to Wishlist</span>
                                                            <span className="icon icon-delete"></span>
                                                        </a>
                                                        <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                                            <span className="icon icon-compare"></span>
                                                            <span className="tooltip">Add to Compare</span>
                                                            <span className="icon icon-check"></span>
                                                        </a>
                                                        <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                                            <span className="icon icon-view"></span>
                                                            <span className="tooltip">Quick View</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-product-info text-center">
                                                    <a href="product-detail.html" className="title link">Serum for Hair Density</a>
                                                    <span className="price">$65.00</span>
                                                    <div className="tf-size-list">
                                                        <span className="tf-size-list-item fw-6 radius-3">40ml</span>
                                                        <span className="tf-size-list-item fw-6 radius-3">50ml</span>
                                                    </div>
                                                    <div className="tf-product-btns">
                                                        <a href="#quick_add" data-bs-toggle="modal" className="tf-btn style-3 radius-3 btn-fill animate-hover-btn">Quick add</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" >
                                            <div className="card-product style-skincare">
                                                <div className="card-product-wrapper">
                                                    <a href="product-detail.html" className="product-img">
                                                        <img className="lazyload img-product" data-src="images/products/skincare-7.jpg" src="images/products/skincare-7.jpg" alt="image-product"/>
                                                        <img className="lazyload img-hover" data-src="images/products/skincare-8.jpg" src="images/products/skincare-8.jpg" alt="image-product"/>
                                                    </a>
                                                    <div className="list-product-btn">
                                                        <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                                            <span className="icon icon-heart"></span>
                                                            <span className="tooltip">Add to Wishlist</span>
                                                            <span className="icon icon-delete"></span>
                                                        </a>
                                                        <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                                            <span className="icon icon-compare"></span>
                                                            <span className="tooltip">Add to Compare</span>
                                                            <span className="icon icon-check"></span>
                                                        </a>
                                                        <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                                            <span className="icon icon-view"></span>
                                                            <span className="tooltip">Quick View</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-product-info text-center">
                                                    <a href="product-detail.html" className="title link">Mini Confidence in a Cleanser</a>
                                                    <span className="price">$22.00</span>
                                                    <div className="tf-size-list">
                                                        <span className="tf-size-list-item fw-6 radius-3">50ml</span>
                                                        <span className="tf-size-list-item fw-6 radius-3">80ml</span>
                                                    </div>
                                                    <div className="tf-product-btns">
                                                        <a href="#quick_add" data-bs-toggle="modal" className="tf-btn style-3 radius-3 btn-fill animate-hover-btn">Quick add</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" >
                                            <div className="card-product style-skincare">
                                                <div className="card-product-wrapper">
                                                    <a href="product-detail.html" className="product-img">
                                                        <img className="lazyload img-product" data-src="images/products/skincare-9.jpg" src="images/products/skincare-9.jpg" alt="image-product"/>
                                                        <img className="lazyload img-hover" data-src="images/products/skincare-10.jpg" src="images/products/skincare-10.jpg" alt="image-product"/>
                                                    </a>
                                                    <div className="list-product-btn">
                                                        <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                                            <span className="icon icon-heart"></span>
                                                            <span className="tooltip">Add to Wishlist</span>
                                                            <span className="icon icon-delete"></span>
                                                        </a>
                                                        <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                                            <span className="icon icon-compare"></span>
                                                            <span className="tooltip">Add to Compare</span>
                                                            <span className="icon icon-check"></span>
                                                        </a>
                                                        <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                                            <span className="icon icon-view"></span>
                                                            <span className="tooltip">Quick View</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-product-info text-center">
                                                     <Link to="/detail" className="title link">
                                                        Anhydrous Solution Pore Serum
                                                    </Link>
                                                    <span className="price"><span className="fw-4 text-sale">$62.00</span> <span className="text_primary">$52.00</span></span>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" >
                                            <div className="card-product style-skincare">
                                                <div className="card-product-wrapper">
                                                    <a href="product-detail.html" className="product-img">
                                                        <img className="lazyload img-product" data-src="images/products/skincare-11.jpg" src="images/products/skincare-11.jpg" alt="image-product"/>
                                                        <img className="lazyload img-hover" data-src="images/products/skincare-12.jpg" src="images/products/skincare-12.jpg" alt="image-product"/>
                                                    </a>
                                                    <div className="list-product-btn">
                                                        <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                                            <span className="icon icon-heart"></span>
                                                            <span className="tooltip">Add to Wishlist</span>
                                                            <span className="icon icon-delete"></span>
                                                        </a>
                                                        <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                                            <span className="icon icon-compare"></span>
                                                            <span className="tooltip">Add to Compare</span>
                                                            <span className="icon icon-check"></span>
                                                        </a>
                                                        <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                                            <span className="icon icon-view"></span>
                                                            <span className="tooltip">Quick View</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-product-info text-center">
                                                     <Link to="/detail" className="title link">
                                                        Anhydrous Solution Pore Serum
                                                    </Link>
                                                    <span className="price"><span className="fw-4 text-sale">$62.00</span> <span className="text_primary">$52.00</span></span>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" >
                                            <div className="card-product style-skincare">
                                                <div className="card-product-wrapper">
                                                    <a href="product-detail.html" className="product-img">
                                                        <img className="lazyload img-product" data-src="images/products/skincare-13.jpg" src="images/products/skincare-13.jpg" alt="image-product"/>
                                                        <img className="lazyload img-hover" data-src="images/products/skincare-14.jpg" src="images/products/skincare-14.jpg" alt="image-product"/>
                                                    </a>
                                                    <div className="list-product-btn">
                                                        <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                                            <span className="icon icon-heart"></span>
                                                            <span className="tooltip">Add to Wishlist</span>
                                                            <span className="icon icon-delete"></span>
                                                        </a>
                                                        <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                                            <span className="icon icon-compare"></span>
                                                            <span className="tooltip">Add to Compare</span>
                                                            <span className="icon icon-check"></span>
                                                        </a>
                                                        <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                                            <span className="icon icon-view"></span>
                                                            <span className="tooltip">Quick View</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-product-info text-center">
                                                    <a href="product-detail.html" className="title link">Mini Skin Perfecting Exfoliant</a>
                                                    <span className="price">$65.00</span>
                                                    <div className="tf-size-list">
                                                        <span className="tf-size-list-item fw-6 radius-3">40ml</span>
                                                        <span className="tf-size-list-item fw-6 radius-3">50ml</span>
                                                    </div>
                                                    <div className="tf-product-btns">
                                                        <a href="#quick_add" data-bs-toggle="modal" className="tf-btn style-3 radius-3 btn-fill animate-hover-btn">Quick add</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" >
                                            <div className="card-product style-skincare">
                                                <div className="card-product-wrapper">
                                                    <a href="product-detail.html" className="product-img">
                                                        <img className="lazyload img-product" data-src="images/products/skincare-15.jpg" src="images/products/skincare-15.jpg" alt="image-product"/>
                                                        <img className="lazyload img-hover" data-src="images/products/skincare-16.jpg" src="images/products/skincare-16.jpg" alt="image-product"/>
                                                    </a>
                                                    <div className="list-product-btn">
                                                        <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                                            <span className="icon icon-heart"></span>
                                                            <span className="tooltip">Add to Wishlist</span>
                                                            <span className="icon icon-delete"></span>
                                                        </a>
                                                        <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                                            <span className="icon icon-compare"></span>
                                                            <span className="tooltip">Add to Compare</span>
                                                            <span className="icon icon-check"></span>
                                                        </a>
                                                        <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                                            <span className="icon icon-view"></span>
                                                            <span className="tooltip">Quick View</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="card-product-info text-center">
                                                    <a href="product-detail.html" className="title link">Mini Skin Perfecting Exfoliant</a>
                                                    <span className="price">$65.00</span>
                                                    <div className="tf-size-list">
                                                        <span className="tf-size-list-item fw-6 radius-3">40ml</span>
                                                        <span className="tf-size-list-item fw-6 radius-3">50ml</span>
                                                    </div>
                                                    <div className="tf-product-btns">
                                                        <a href="#quick_add" data-bs-toggle="modal" className="tf-btn style-3 radius-3 btn-fill animate-hover-btn">Quick add</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="nav-sw nav-next-slider nav-next-product box-icon w_46 round"><span className="icon icon-arrow-left"></span></div>
                                <div className="nav-sw nav-prev-slider nav-prev-product box-icon w_46 round"><span className="icon icon-arrow-right"></span></div>
                                <div className="sw-dots style-2 sw-pagination-product justify-content-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        <section className="tf-slideshow slider-video position-relative">
            <div className="banner-wrapper">
                <img className="lazyload" data-src="images/collections/banner-collection-1.jpg" src="images/collections/banner-collection-1.jpg" alt="image-collection" />
                <div className="box-content text-center">
                    <div className="container">
                        <p className="subheading text-white fw-7">ULTRA-PREMIUM SILK</p>
                        <h1 className="heading text-white">Silk Blouses Shirts</h1>
                        <p className="description text-white">Shop our luxury silk button-up blouses made with ultra-soft, washable silk.</p>
                        <div className="wow fadeInUp" data-wow-delay="0s">
                             <Link to="/product" className="tf-btn btn-md btn-light-icon btn-icon radius-3 animate-hover-btn" >
                                <span/>Shop collection
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        <div className="tf-marquee marquee-sm bg_dark">
            <div className="wrap-marquee speed-1">
                <div className="marquee-item">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none"><path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white"></path></svg>
                    </div>
                    <p className="text text-white text-uppercase fw-6">LIMITED TIME OFFER: FASHION SALE YOU CAN'T RESIST</p>
                </div>
                <div className="marquee-item">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none"><path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white"></path></svg>
                    </div>
                    <p className="text text-white text-uppercase fw-6">FREE SHIPPING AND RETURN</p>
                </div>
                <div className="marquee-item">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none"><path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white"></path></svg>
                    </div>
                    <p className="text text-white text-uppercase fw-6">NEW SEASON, NEW STYLES: FASHION SALE YOU CAN'T MISS</p>
                </div>
                <div className="marquee-item">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none"><path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white"></path></svg>
                    </div>
                    <p className="text text-white text-uppercase fw-6">LIMITED TIME OFFER: FASHION SALE YOU CAN'T RESIST</p>
                </div>
                <div className="marquee-item">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none"><path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white"></path></svg>
                    </div>
                    <p className="text text-white text-uppercase fw-6">FREE SHIPPING AND RETURN</p>
                </div>
                <div className="marquee-item">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none"><path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white"></path></svg>
                    </div>
                    <p className="text text-white text-uppercase fw-6">NEW SEASON, NEW STYLES: FASHION SALE YOU CAN'T MISS</p>
                </div>
                <div className="marquee-item">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none"><path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white"></path></svg>
                    </div>
                    <p className="text text-white text-uppercase fw-6">LIMITED TIME OFFER: FASHION SALE YOU CAN'T RESIST</p>
                </div>
                <div className="marquee-item">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none"><path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white"></path></svg>
                    </div>
                    <p className="text text-white text-uppercase fw-6">FREE SHIPPING AND RETURN</p>
                </div>
                <div className="marquee-item">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none"><path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white"></path></svg>
                    </div>
                    <p className="text text-white text-uppercase fw-6">NEW SEASON, NEW STYLES: FASHION SALE YOU CAN'T MISS</p>
                </div>
                <div className="marquee-item">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none"><path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white"></path></svg>
                    </div>
                    <p className="text text-white text-uppercase fw-6">LIMITED TIME OFFER: FASHION SALE YOU CAN'T RESIST</p>
                </div>
                <div className="marquee-item">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none"><path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white"></path></svg>
                    </div>
                    <p className="text text-white text-uppercase fw-6">FREE SHIPPING AND RETURN</p>
                </div>
                <div className="marquee-item">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="6" viewBox="0 0 7 6" fill="none"><path d="M3.5 0L6.53109 5.25H0.468911L3.5 0Z" fill="white"></path></svg>
                    </div>
                    <p className="text text-white text-uppercase fw-6">NEW SEASON, NEW STYLES: FASHION SALE YOU CAN'T MISS</p>
                </div>
            </div>
        </div>
        
        <section className="flat-spacing-9">
            <div className="container">
                <div className="tf-grid-layout md-col-2 tf-img-video-text">
                    <div className="content-wrap bg_orange radius-20">
                        <div className="heading text-white wow fadeInUp" data-wow-delay="0s">How to Use</div>
                        <p className="text-white fs-16 wow fadeInUp" data-wow-delay="0s">EASY USE WITH 4 STEPS</p>
                        <ul>
                            <li>
                                <div className="number text-white">1</div>
                                <div className="text text-white">Unscrew cap of 4EVERBTL™ and fill with water. Screw cap back on.</div>
                            </li>
                            <li>
                                <div className="number text-white">2</div>
                                <div className="text text-white">Peel-off one blister individual seal and place tablet in the palm of your hand.</div>
                            </li>
                            <li>
                                <div className="number text-white">3</div>
                                <div className="text text-white">Add 3-8 drops of water and mix until tablet is fully dissolved.</div>
                            </li>
                            <li>
                                <div className="number text-white">4</div>
                                <div className="text text-white">Apply on clean skin like any liquid serum!</div>
                            </li>
                        </ul>
                    </div>
                    <div className="video-wrap">
                        <video
                        className="radius-20"
                        src="images/slider/video-1.mp4"
                        playsInline
                        controls
                        onLoadedMetadata={(event) => {
                            const videoElement = event.currentTarget;
                            console.log('Video duration:', videoElement.duration);
                            console.log('Video dimensions:', videoElement.videoWidth, videoElement.videoHeight);
                        }}
                        />
                    </div>
                </div>
            </div>
        </section>
        
        <section className="flat-spacing-9">
            <div className="container">
                <div className="flat-tab-store flat-animate-tab overflow-unset">
                    <ul className="widget-tab-3 d-flex justify-content-center flex-wrap" role="tablist">
                        <li className="nav-tab-item" role="presentation">   
                            <a href="#organic" className="active" data-bs-toggle="tab">Organic Ingredients</a>
                        </li>
                        <li className="nav-tab-item" role="presentation">
                            <a href="#cruelty"  data-bs-toggle="tab">Cruelty-Free</a>
                        </li>
                        <li className="nav-tab-item" role="presentation">
                            <a href="#sustainable"  data-bs-toggle="tab">Sustainable</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active show" id="organic" role="tabpanel">
                            <div className="widget-card-store radius-20 overflow-hidden type-1 align-items-center tf-grid-layout md-col-2">
                                <div className="store-img">
                                    <img className="lazyload" data-src="images/shop/store/ourstore4.jpg" src="images/shop/store/ourstore4.jpg" alt="store-img"/>
                                </div>
                                <div className="store-item-info text-center">
                                    <h5 className="store-heading text-white">Organic Ingredients</h5>
                                    <div className="description">
                                        <p className="text-white">Use certified organic ingredients to assure consumers that the product is free from synthetic <br/> pesticides and fertilizers.</p>
                                    </div>
                                    <div className="wow fadeInUp" data-wow-delay="0s">
                                        <Link to="/product" className="tf-btn btn-md btn-light-icon btn-icon radius-3 animate-hover-btn" >
                                <span/>Shop collection
                            </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="cruelty" role="tabpanel">
                            <div className="widget-card-store radius-20 overflow-hidden type-1 align-items-center tf-grid-layout md-col-2">
                                <div className="store-img">
                                    <img className="lazyload" data-src="images/shop/store/ourstore5.jpg" src="images/shop/store/ourstore5.jpg" alt="store-img"/>
                                </div>
                                <div className="store-item-info text-center">
                                    <h5 className="store-heading text-white">Our Verified Cruelty-Free</h5>
                                    <div className="description">
                                        <p className="text-white">Get full-size, verified cruelty-free and vegan products in every box! We work directly with <br/> brands to bring you huge discounts.</p>
                                    </div>
                                    <div className="wow fadeInUp" data-wow-delay="0s">
                                        <Link to="/product" className="tf-btn btn-md btn-light-icon btn-icon radius-3 animate-hover-btn" >
                                <span/>Shop collection
                            </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="sustainable" role="tabpanel">
                            <div className="widget-card-store radius-20 overflow-hidden type-1 align-items-center tf-grid-layout md-col-2">
                                <div className="store-img">
                                    <img className="lazyload" data-src="images/shop/store/ourstore6.jpg" src="images/shop/store/ourstore6.jpg" alt="store-img"/>
                                </div>
                                <div className="store-item-info text-center">
                                    <h5 className="store-heading text-white">Sustainable expansion</h5>
                                    <div className="description">
                                        <p className="text-white">With steadily increasing demand, the authors suggest that a major opportunity exists for <br/> environmentally and socially sustainable expansion</p>
                                    </div>
                                    <div className="wow fadeInUp" data-wow-delay="0s">
                                        <Link to="/product" className="tf-btn btn-md btn-light-icon btn-icon radius-3 animate-hover-btn" >
                                <span/>Shop collection
                            </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="flat-spacing-9 bg_grey-6">
            <div className="container">
                <div className="flat-title wow fadeInUp" data-wow-delay="0s">
                    <span className="title">Exclusive Kits</span>
                </div>
                <div className="wrap-carousel">
                    <div className="swiper tf-sw-recent" data-preview="4" data-tablet="3" data-mobile="2" data-space-lg="30" data-space-md="15" data-space="15" data-pagination="2" data-pagination-md="3" data-pagination-lg="3">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide" >
                                <div className="card-product style-skincare">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/skincare-1.jpg" src="images/products/skincare-1.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/skincare-2.jpg" src="images/products/skincare-2.jpg" alt="image-product"/>
                                        </a>
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Add to Wishlist</span>
                                                <span className="icon icon-delete"></span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                                <span className="icon icon-compare"></span>
                                                <span className="tooltip">Add to Compare</span>
                                                <span className="icon icon-check"></span>
                                            </a>
                                            <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                                <span className="icon icon-view"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card-product-info text-center">
                                        <Link to="/detail" className="title link">
                                            Anhydrous Solution Pore Serum
                                        </Link>
                                        <span className="price">$32.00</span>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide" >
                                <div className="card-product style-skincare">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/skincare-3.jpg" src="images/products/skincare-3.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/skincare-4.jpg" src="images/products/skincare-4.jpg" alt="image-product"/>
                                        </a>
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Add to Wishlist</span>
                                                <span className="icon icon-delete"></span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                                <span className="icon icon-compare"></span>
                                                <span className="tooltip">Add to Compare</span>
                                                <span className="icon icon-check"></span>
                                            </a>
                                            <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                                <span className="icon icon-view"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card-product-info text-center">
                                        <a href="product-detail.html" className="title link">Anhydrous Solution Pore Serum</a>
                                        <span className="price">From $65.00</span>
                                        <div className="tf-size-list">
                                            <span className="tf-size-list-item fw-6 radius-3">30ml</span>
                                            <span className="tf-size-list-item fw-6 radius-3">60ml</span>
                                        </div>
                                        <div className="tf-product-btns">
                                            <a href="#quick_add" data-bs-toggle="modal" className="tf-btn style-3 radius-3 btn-fill animate-hover-btn">Quick add</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide" >
                                <div className="card-product style-skincare">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/skincare-5.jpg" src="images/products/skincare-5.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/skincare-6.jpg" src="images/products/skincare-6.jpg" alt="image-product"/>
                                        </a>
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Add to Wishlist</span>
                                                <span className="icon icon-delete"></span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                                <span className="icon icon-compare"></span>
                                                <span className="tooltip">Add to Compare</span>
                                                <span className="icon icon-check"></span>
                                            </a>
                                            <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                                <span className="icon icon-view"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card-product-info text-center">
                                        <a href="product-detail.html" className="title link">Serum for Hair Density</a>
                                        <span className="price">$65.00</span>
                                        <div className="tf-size-list">
                                            <span className="tf-size-list-item fw-6 radius-3">40ml</span>
                                            <span className="tf-size-list-item fw-6 radius-3">50ml</span>
                                        </div>
                                        <div className="tf-product-btns">
                                            <a href="#quick_add" data-bs-toggle="modal" className="tf-btn style-3 radius-3 btn-fill animate-hover-btn">Quick add</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide" >
                                <div className="card-product style-skincare">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/skincare-7.jpg" src="images/products/skincare-7.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/skincare-8.jpg" src="images/products/skincare-8.jpg" alt="image-product"/>
                                        </a>
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Add to Wishlist</span>
                                                <span className="icon icon-delete"></span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                                <span className="icon icon-compare"></span>
                                                <span className="tooltip">Add to Compare</span>
                                                <span className="icon icon-check"></span>
                                            </a>
                                            <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                                <span className="icon icon-view"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card-product-info text-center">
                                        <a href="product-detail.html" className="title link">Mini Confidence in a Cleanser</a>
                                        <span className="price">$22.00</span>
                                        <div className="tf-size-list">
                                            <span className="tf-size-list-item fw-6 radius-3">50ml</span>
                                            <span className="tf-size-list-item fw-6 radius-3">80ml</span>
                                        </div>
                                        <div className="tf-product-btns">
                                            <a href="#quick_add" data-bs-toggle="modal" className="tf-btn style-3 radius-3 btn-fill animate-hover-btn">Quick add</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="card-product style-skincare">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/skincare-9.jpg" src="images/products/skincare-9.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/skincare-10.jpg" src="images/products/skincare-10.jpg" alt="image-product"/>
                                        </a>
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Add to Wishlist</span>
                                                <span className="icon icon-delete"></span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                                <span className="icon icon-compare"></span>
                                                <span className="tooltip">Add to Compare</span>
                                                <span className="icon icon-check"></span>
                                            </a>
                                            <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                                <span className="icon icon-view"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card-product-info text-center">
                                         <Link to="/detail" className="title link">
                                                        Anhydrous Solution Pore Serum
                                                    </Link>
                                        <span className="price"><span className="fw-4 text-sale">$62.00</span> <span className="text_primary">$52.00</span></span>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide" >
                                <div className="card-product style-skincare">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/skincare-11.jpg" src="images/products/skincare-11.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/skincare-12.jpg" src="images/products/skincare-12.jpg" alt="image-product"/>
                                        </a>
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Add to Wishlist</span>
                                                <span className="icon icon-delete"></span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                                <span className="icon icon-compare"></span>
                                                <span className="tooltip">Add to Compare</span>
                                                <span className="icon icon-check"></span>
                                            </a>
                                            <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                                <span className="icon icon-view"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card-product-info text-center">
                                         <Link to="/detail" className="title link">
                                                        Anhydrous Solution Pore Serum
                                                    </Link>
                                        <span className="price"><span className="fw-4 text-sale">$62.00</span> <span className="text_primary">$52.00</span></span>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide" >
                                <div className="card-product style-skincare">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/skincare-13.jpg" src="images/products/skincare-13.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/skincare-14.jpg" src="images/products/skincare-14.jpg" alt="image-product"/>
                                        </a>
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Add to Wishlist</span>
                                                <span className="icon icon-delete"></span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                                <span className="icon icon-compare"></span>
                                                <span className="tooltip">Add to Compare</span>
                                                <span className="icon icon-check"></span>
                                            </a>
                                            <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                                <span className="icon icon-view"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card-product-info text-center">
                                        <a href="product-detail.html" className="title link">Mini Skin Perfecting Exfoliant</a>
                                        <span className="price">$65.00</span>
                                        <div className="tf-size-list">
                                            <span className="tf-size-list-item fw-6 radius-3">40ml</span>
                                            <span className="tf-size-list-item fw-6 radius-3">50ml</span>
                                        </div>
                                        <div className="tf-product-btns">
                                            <a href="#quick_add" data-bs-toggle="modal" className="tf-btn style-3 radius-3 btn-fill animate-hover-btn">Quick add</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide" >
                                <div className="card-product style-skincare">
                                    <div className="card-product-wrapper">
                                        <a href="product-detail.html" className="product-img">
                                            <img className="lazyload img-product" data-src="images/products/skincare-15.jpg" src="images/products/skincare-15.jpg" alt="image-product"/>
                                            <img className="lazyload img-hover" data-src="images/products/skincare-16.jpg" src="images/products/skincare-16.jpg" alt="image-product"/>
                                        </a>
                                        <div className="list-product-btn">
                                            <a href="javascript:void(0);" className="box-icon bg_white wishlist btn-icon-action">
                                                <span className="icon icon-heart"></span>
                                                <span className="tooltip">Add to Wishlist</span>
                                                <span className="icon icon-delete"></span>
                                            </a>
                                            <a href="#compare" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="box-icon bg_white compare btn-icon-action">
                                                <span className="icon icon-compare"></span>
                                                <span className="tooltip">Add to Compare</span>
                                                <span className="icon icon-check"></span>
                                            </a>
                                            <a href="#quick_view" data-bs-toggle="modal" className="box-icon bg_white quickview tf-btn-loading">
                                                <span className="icon icon-view"></span>
                                                <span className="tooltip">Quick View</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card-product-info text-center">
                                        <a href="product-detail.html" className="title link">Mini Skin Perfecting Exfoliant</a>
                                        <span className="price">$65.00</span>
                                        <div className="tf-size-list">
                                            <span className="tf-size-list-item fw-6 radius-3">40ml</span>
                                            <span className="tf-size-list-item fw-6 radius-3">50ml</span>
                                        </div>
                                        <div className="tf-product-btns">
                                            <a href="#quick_add" data-bs-toggle="modal" className="tf-btn style-3 radius-3 btn-fill animate-hover-btn">Quick add</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nav-sw style-not-line nav-next-slider nav-next-recent box-icon w_46 round"><span className="icon icon-arrow-left"></span></div>
                    <div className="nav-sw style-not-line nav-prev-slider nav-prev-recent box-icon w_46 round"><span className="icon icon-arrow-right"></span></div>
                    <div className="sw-dots style-2 sw-pagination-recent justify-content-center"></div>
                </div>
            </div>
        </section>
        
        <section className="flat-spacing-12">
            <div className="container">
                <div className="wrapper-thumbs-testimonial-v2 type-1 flat-thumbs-testimonial">
                    <div className="box-left wow fadeInUp" data-wow-delay="0s">
                        <div className="swiper tf-sw-tes-2" data-preview="1" data-space-lg="40" data-space-md="30">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="testimonial-item lg lg-2">
                                        <div className="icon">
                                            <img className="lazyload" data-src="images/item/quote.svg" alt="img" src="images/item/quote.svg"/>
                                        </div>
                                        <div className="heading fs-12 mb_18">OUR CUSTOMER'S REVIEWS</div>
                                        <div className="rating">
                                            <i className="icon-start"></i>
                                            <i className="icon-start"></i>
                                            <i className="icon-start"></i>
                                            <i className="icon-start"></i>
                                            <i className="icon-start"></i>
                                        </div>
                                        <p className="text">
                                            Love love love! This product is so easy to use!   I absolutely love the Alpha Arbutin product.  It has made such a difference with my hyperpigmentation spots!  I feel so much more confident without makeup on where as before I would never leave the house
                                        </p>
                                        <div className="author box-author">
                                            <div className="box-img d-md-none rounded-0">
                                                <img className="lazyload img-product" data-src="images/slider/te4.jpg" src="images/slider/te4.jpg" alt="image-product"/>
                                            </div>
                                            <div className="content">
                                                <div className="name">Robert smith</div>
                                                <a href="product-detail.html" className="metas link">Purchase item : <span>100% Organic Cold-Pressed Oil</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-item lg lg-2">
                                        <div className="icon">
                                            <img className="lazyload" data-src="images/item/quote.svg" alt="" src="images/item/quote.svg"/>
                                        </div>
                                        <div className="heading fs-12 mb_18">PEOPLE ARE TALKING</div>
                                        <div className="rating">
                                            <i className="icon-start"></i>
                                            <i className="icon-start"></i>
                                            <i className="icon-start"></i>
                                            <i className="icon-start"></i>
                                            <i className="icon-start"></i>
                                        </div>
                                        <p className="text">
                                            "The shipping is always fast and the customer service team is friendly and helpful. I highly recommend this site to anyone looking for affordable clothing."
                                        </p>
                                        <div className="author box-author">
                                            <div className="box-img d-md-none rounded-0">
                                                <img className="lazyload img-product" data-src="images/slider/te6.jpg" src="images/slider/te6.jpg" alt="image-product"/>
                                            </div>
                                            <div className="content">
                                                <div className="name">Jenifer Unix</div>
                                                <a href="product-detail.html" className="metas link">Purchase item : <span> Sweetheart-neckline Top</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-md-flex d-none box-sw-navigation">
                            <div className="nav-sw nav-next-slider nav-next-tes-2"><span className="icon icon-arrow-left"></span></div>
                            <div className="nav-sw nav-prev-slider nav-prev-tes-2"><span className="icon icon-arrow-right"></span></div>
                        </div>
                        <div className="d-md-none sw-dots style-2 sw-pagination-tes-2"></div>
                    </div>
                    <div className="box-right wow fadeInUp" data-wow-delay="0s">
                        <div className="swiper tf-thumb-tes" data-preview="1" data-space="30">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="grid-img-group style-ter-1">
                                        <div className="box-img item-1 hover-img">
                                            <div className="img-style">
                                                <img className="lazyload" data-src="images/slider/te8.jpg" src="images/slider/te8.jpg" alt="img-slider"/>
                                            </div>
                                        </div>
                                        <div className="box-img item-2 hover-img">
                                            <div className="img-style">
                                                <img className="lazyload" data-src="images/slider/te7.jpg" src="images/slider/te7.jpg" alt="img-slider"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="grid-img-group style-ter-1">
                                        <div className="box-img item-1 hover-img">
                                            <div className="img-style">
                                                <img className="lazyload" data-src="images/slider/te10.jpg" src="images/slider/te10.jpg" alt="img-slider"/>
                                            </div>
                                        </div>
                                        <div className="box-img item-2 hover-img">
                                            <div className="img-style">
                                                <img className="lazyload" data-src="images/slider/te9.jpg" src="images/slider/te9.jpg" alt="img-slider"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="flat-spacing-3 pb_0">
            <div className="container">
                <div className="flat-title wow fadeInUp" data-wow-delay="0s">
                    <span className="title">Before and after use our products</span>
                    <p className="sub-title">Witness the transformative power of our skincare solutions as they unveil a radiant new you</p>
                </div>
                <div id="image-compare" className="wow fadeInUp" data-wow-delay="0s">
                    <img className="lazyload" data-src="images/shop/file/skincare_before.jpg" src="images/shop/file/skincare_before.jpg" alt="" />
                    <img className="lazyload" data-src="images/shop/file/skincare_after.jpg" src="images/shop/file/skincare_after.jpg" alt="" />
                </div>
            </div>
        </section>
        
        <section className="flat-spacing-1 flat-iconbox">
            <div className="container">
                <div className="wrap-carousel wrap-mobile wow fadeInUp" data-wow-delay="0s">
                    <div className="swiper tf-sw-mobile" data-preview="1" data-space="15">
                        <div className="swiper-wrapper wrap-iconbox">
                            <div className="swiper-slide">
                                <div className="tf-icon-box style-row">
                                    <div className="icon">
                                        <i className="icon-shipping"></i>
                                    </div>
                                    <div className="content">
                                        <div className="title fw-4">Free Shipping</div>
                                        <p>Free shipping over order $120</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="tf-icon-box style-row">
                                    <div className="icon">
                                        <i className="icon-payment fs-22"></i>
                                    </div>
                                    <div className="content">
                                        <div className="title fw-4">Flexible Payment</div>
                                        <p>Pay with Multiple Credit Cards</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="tf-icon-box style-row">
                                    <div className="icon">
                                        <i className="icon-return fs-20"></i>
                                    </div>
                                    <div className="content">
                                        <div className="title fw-4">14 Day Returns</div>
                                        <p>Within 30 days for an exchange</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="tf-icon-box style-row">
                                    <div className="icon">
                                        <i className="icon-suport"></i>
                                    </div>
                                    <div className="content">
                                        <div className="title fw-4">Premium Support</div>
                                        <p>Outstanding premium support</p>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                    </div>
                    <div className="sw-dots style-2 sw-pagination-mb justify-content-center"></div>
                </div>
            </div>
        </section>
        
        <div className="container"><div className="line"></div></div>
        
        <section className="flat-spacing-1">
            <div className="container">
                <div className="flat-title wow fadeInUp" data-wow-delay="0s">
                    <span className="title">Shop Gram</span>
                    <p className="sub-title">Inspire and let yourself be inspired, from one unique fashion to another.</p>
                </div>
                <div className="wrap-carousel wrap-shop-gram">
                    <div className="swiper tf-sw-shop-gallery" data-preview="5" data-tablet="3" data-mobile="2" data-space-lg="7" data-space-md="7">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="gallery-item hover-img wow fadeInUp" data-wow-delay="0s">
                                <div className="img-style">
                                    <img className="lazyload img-hover" data-src="images/shop/gallery/gallery-9.jpg" src="images/shop/gallery/gallery-9.jpg" alt="image-gallery"/>
                                </div>
                                <a href="#quick_add" data-bs-toggle="modal" className="box-icon"><span className="icon icon-bag"></span> <span className="tooltip">Quick Add</span></a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="gallery-item hover-img wow fadeInUp" data-wow-delay=".1s">
                                <div className="img-style">
                                    <img className="lazyload img-hover" data-src="images/shop/gallery/gallery-10.jpg" src="images/shop/gallery/gallery-10.jpg" alt="image-gallery"/>
                                </div>
                                <a href="#quick_add" data-bs-toggle="modal" className="box-icon"><span className="icon icon-bag"></span> <span className="tooltip">Quick Add</span></a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="gallery-item hover-img wow fadeInUp" data-wow-delay=".2s">
                                <div className="img-style">
                                    <img className="lazyload img-hover" data-src="images/shop/gallery/gallery-11.jpg" src="images/shop/gallery/gallery-11.jpg" alt="image-gallery"/>
                                </div>
                                <a href="#quick_add" data-bs-toggle="modal" className="box-icon"><span className="icon icon-bag"></span> <span className="tooltip">Quick Add</span></a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="gallery-item hover-img wow fadeInUp" data-wow-delay=".3s">
                                <div className="img-style">
                                    <img className="lazyload img-hover" data-src="images/shop/gallery/gallery-12.jpg" src="images/shop/gallery/gallery-12.jpg" alt="image-gallery"/>
                                </div>
                                <a href="product-detail.html" className="box-icon"><span className="icon icon-bag"></span> <span className="tooltip">View product</span></a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="gallery-item hover-img wow fadeInUp" data-wow-delay=".4s">
                                <div className="img-style">
                                    <img className="lazyload img-hover" data-src="images/shop/gallery/gallery-13.jpg" src="images/shop/gallery/gallery-13.jpg" alt="image-gallery"/>
                                </div>
                                <a href="product-detail.html" className="box-icon"><span className="icon icon-bag"></span> <span className="tooltip">View product</span></a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="gallery-item hover-img wow fadeInUp" data-wow-delay=".4s">
                                <div className="img-style">
                                    <img className="lazyload img-hover" data-src="images/shop/gallery/gallery-14.jpg" src="images/shop/gallery/gallery-14.jpg" alt="image-gallery"/>
                                </div>
                                <a href="product-detail.html" className="box-icon"><span className="icon icon-bag"></span> <span className="tooltip">View product</span></a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="gallery-item hover-img wow fadeInUp" data-wow-delay=".4s">
                                <div className="img-style">
                                    <img className="lazyload img-hover" data-src="images/shop/gallery/gallery-15.jpg" src="images/shop/gallery/gallery-15.jpg" alt="image-gallery"/>
                                </div>
                                <a href="product-detail.html" className="box-icon"><span className="icon icon-bag"></span> <span className="tooltip">View product</span></a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="gallery-item hover-img wow fadeInUp" data-wow-delay=".4s">
                                <div className="img-style">
                                    <img className="lazyload img-hover" data-src="images/shop/gallery/gallery-16.jpg" src="images/shop/gallery/gallery-16.jpg" alt="image-gallery"/>
                                </div>
                                <a href="product-detail.html" className="box-icon"><span className="icon icon-bag"></span> <span className="tooltip">View product</span></a>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="sw-dots sw-pagination-gallery justify-content-center"></div>
                </div>
            </div>
        </section>
          
        </>
    );
};

export default Home;
