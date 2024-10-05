import { Link, Outlet, useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import Header2 from "../components/common/Header2";
import Footer from "../components/common/Footer";
import { Button, message, Modal } from "antd";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Home from "../pages/(website)/home/page";
import { CaretDownOutlined, DownOutlined, MenuOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";


const Layoutweb = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const [messageAPI, contextHolder] = message.useMessage();

    const handleLogout = () => {
        Modal.confirm({
            title: "Xác nhận",
            content: "Bạn có muốn đăng xuất không?",
            okText: "Đăng xuất",
            cancelText: "Hủy",
            onOk: () => {
                localStorage.removeItem("authToken");

                queryClient.clear();

                messageAPI.success("Đã đăng xuất thành công!");

                setTimeout(() => {
                    navigate("/login");
                }, 1000);
            },
        });
    };

    return (
        <>
            {contextHolder}
            <div
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 1000,
                    transition: "top 0.3s",
                }}
            >
                <div>
        <header id="header" className="header-default header-absolute header-white">
            <div className="container-full px_15 lg-px_40">
                <div className="row wrapper-header align-items-center">
                    <div className="col-md-4 col-3 tf-lg-hidden">
                        <a href="#mobileMenu" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft">
                            <MenuOutlined style={{ fontSize: '24px' }} />
                        </a>
                        </div>
                    <div className="col-xl-3 col-md-4 col-6">
                        <a href="index.html" className="logo-header">
                            <img src="images/logo/logo-white@2x.png" alt="logo" className="logo"/>
                        </a>
                    </div>
                    <div className="col-xl-6 tf-md-hidden">
                        <nav className="box-navigation text-center">
                            <ul className="box-nav-ul d-flex align-items-center justify-content-center gap-30">
                                <li className="menu-item">
                                    <Link to="/" className="item-link">
                                        Trang chủ 
                                    </Link>
                                    
                                </li>
                                <li className="menu-item">
                                    <a href="#" className="item-link">Danh mục<CaretDownOutlined /></a>
                                    <div className="sub-menu submenu-default" >
                                        <ul className="menu-list">
                                            <li>
                                                <Link to="/detail" className="item-link">
                                                    Trang chủ 
                                                </Link>
                                                <a href="about-us.html" className="menu-link-text link text_black-2">Nhẫn</a>
                                            </li>
                                            <li>
                                                <a href="about-us.html" className="menu-link-text link text_black-2">Vòng - Lắc</a>
                                            </li>
                                            
                                            <li><a href="view-cart.html" className="menu-link-text link text_black-2 ">Dây chuyền</a></li>

                                            <li><a href="view-cart.html" className="menu-link-text link text_black-2 ">Khuyên tai</a></li>
                                            
                                            <li className="menu-item-2">
                                                <a href="#" className="menu-link-text link text_black-2">Bộ sưu tập</a>
                                                <div className="sub-menu submenu-default">
                                                    <ul className="menu-list">
                                                        <li><a href="my-account.html" className="menu-link-text link text_black-2">Trang sức cưới</a></li>
                                                        <li><a href="my-account-orders.html" className="menu-link-text link text_black-2">Trang sức đôi</a></li>
                                                        <li><a href="my-account-address.html" className="menu-link-text link text_black-2">Trang sức đính đá</a></li>
                                                        
                                                    </ul>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </li>
                                <li className="menu-item">
                                    <Link to="/products" className="item-link">
                                        Sản phẩm 
                                    </Link>
                                    
                                </li>
                                <li className="menu-item position-relative">
                                    <a href="#" className="item-link">Trang <CaretDownOutlined /></a>
                                    <div className="sub-menu submenu-default">
                                        <ul className="menu-list">
                                            <li>
                                                <a href="about-us.html" className="menu-link-text link text_black-2">Về chúng tôi</a>
                                            </li>
                                            <li>
                                                <a href="about-us.html" className="menu-link-text link text_black-2">Liên hệ</a>
                                            </li>
                                            
                                            <li><a href="view-cart.html" className="menu-link-text link text_black-2 position-relative">Xem giỏ hàng</a></li>
                                            
                                            <li className="menu-item-2">
                                                <a href="#" className="menu-link-text link text_black-2">Tài khoản của tôi</a>
                                                <div className="sub-menu submenu-default">
                                                    <ul className="menu-list">
                                                        <li><a href="my-account.html" className="menu-link-text link text_black-2">Tài khoản của tôi</a></li>
                                                        <li><a href="my-account-orders.html" className="menu-link-text link text_black-2">Đơn hàng của tôi</a></li>
                                                        <li><a href="my-account-orders-details.html" className="menu-link-text link text_black-2">Chi tiết đơn hàng</a></li>
                                                        <li><a href="my-account-address.html" className="menu-link-text link text_black-2">Lịch sử mua hàng</a></li>
                                                        
                                                    </ul>
                                                </div>
                                            </li>
                                            <li><a href="invoice.html" className="menu-link-text link text_black-2 position-relative">Hóa đơn</a></li>

                                        </ul>
                                    </div>
                                </li>
                                
                                <li className="menu-item"><a href="https://themeforest.net/item/ecomus-ultimate-html5-template/53417990?s_rank=3" className="item-link">Khuyến mãi</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-xl-3 col-md-4 col-3">
                        <ul className="nav-icon d-flex justify-content-end align-items-center gap-20">
                <li className="nav-search">
                  <a href="#canvasSearch" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="nav-icon-item">
                    <SearchOutlined style={{ fontSize: '24px' }} />
                  </a>
                </li>
                <li className="nav-cart">
                  <Link to="/login" className="nav-icon-item">
                    <UserOutlined style={{ fontSize: '24px' }} />
                    
                  </Link>
                </li>
                <li className="nav-cart">
                  <Link to="/cart" className="nav-icon-item">
                    <ShoppingCartOutlined style={{ fontSize: '24px' }} />
                    <span className="count-box">0</span>
                  </Link>
                </li>
              </ul>
                    </div>
                </div>
            </div>
        </header>
        <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
        <span className="icon-close icon-close-popup" data-bs-dismiss="offcanvas" aria-label="Close"></span>
        <div className="mb-canvas-content">
            <div className="mb-body">
                <ul className="nav-ul-mb" id="wrapper-menu-navigation">
                    <li className="nav-mb-item">
                        <a href="#dropdown-menu-one" className="collapsed mb-menu-link current" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dropdown-menu-one">
                            <span>Trang chủ</span>
                            <span className="btn-open-sub"></span>
                        </a>
                      
                        
                    </li>
                    <li className="nav-mb-item">
                        <a href="#dropdown-menu-two" className="collapsed mb-menu-link current" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dropdown-menu-two">
                            <span>Danh mục</span>
                            <span className="btn-open-sub"></span>
                        </a>
                        <div id="dropdown-menu-two" className="collapse">
                            <ul className="sub-nav-menu" id="sub-menu-navigation">
                                <li><a href="#sub-shop-one" className="sub-nav-link collapsed"  data-bs-toggle="collapse" aria-expanded="true" aria-controls="sub-shop-one">
                                        <span>Shop layouts</span>
                                        <span className="btn-open-sub"></span>
                                    </a>
                                    <div id="sub-shop-one" className="collapse">
                                        <ul className="sub-nav-menu sub-menu-level-2">
                                            <li><a href="shop-default.html" className="sub-nav-link">Default</a></li>
                                            <li><a href="shop-left-sidebar.html" className="sub-nav-link">Left sidebar</a></li>
                                            <li><a href="shop-right-sidebar.html" className="sub-nav-link">Right sidebar</a></li>
                                            <li><a href="shop-fullwidth.html" className="sub-nav-link">Fullwidth</a></li>
                                            <li><a href="shop-collection-sub.html" className="sub-nav-link">Sub collection</a></li>
                                            <li><a href="shop-collection-list.html" className="sub-nav-link">Collections list</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="#sub-shop-two" className="sub-nav-link collapsed"  data-bs-toggle="collapse" aria-expanded="true" aria-controls="sub-shop-two">
                                        <span>Features</span>
                                        <span className="btn-open-sub"></span>
                                    </a>
                                    <div id="sub-shop-two" className="collapse">
                                        <ul className="sub-nav-menu sub-menu-level-2">
                                            <li><a href="shop-link.html" className="sub-nav-link">Pagination links</a></li>
                                            <li><a href="shop-loadmore.html" className="sub-nav-link">Pagination loadmore</a></li>
                                            <li><a href="shop-infinite-scrolling.html" className="sub-nav-link">Pagination infinite scrolling</a></li>
                                            <li><a href="shop-filter-sidebar.html" className="sub-nav-link">Filter sidebar</a></li>
                                            <li><a href="shop-filter-hidden.html" className="sub-nav-link">Filter hidden</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="#sub-shop-three" className="sub-nav-link collapsed"  data-bs-toggle="collapse" aria-expanded="true" aria-controls="sub-shop-three">
                                        <span>Product styles</span>
                                        <span className="btn-open-sub"></span>
                                    </a>
                                    <div id="sub-shop-three" className="collapse">
                                        <ul className="sub-nav-menu sub-menu-level-2">
                                            <li><a href="product-style-list.html" className="sub-nav-link">Product style list</a></li>
                                            <li><a href="product-style-01.html" className="sub-nav-link">Product style 01</a></li>
                                            <li><a href="product-style-02.html" className="sub-nav-link">Product style 02</a></li>
                                            <li><a href="product-style-03.html" className="sub-nav-link">Product style 03</a></li>
                                            <li><a href="product-style-04.html" className="sub-nav-link">Product style 04</a></li>
                                            <li><a href="product-style-05.html" className="sub-nav-link">Product style 05</a></li>
                                            <li><a href="product-style-06.html" className="sub-nav-link">Product style 06</a></li>
                                            <li><a href="product-style-07.html" className="sub-nav-link">Product style 07</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-mb-item">
                        <a href="#dropdown-menu-three" className="collapsed mb-menu-link current" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dropdown-menu-three">
                            <span>Products</span>
                            <span className="btn-open-sub"></span>
                        </a>
                    
                    </li>
                    <li className="nav-mb-item">
                        <a href="#dropdown-menu-four" className="collapsed mb-menu-link current" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dropdown-menu-four">
                            <span>Pages</span>
                            <span className="btn-open-sub"></span>
                        </a>
                        <div id="dropdown-menu-four" className="collapse">
                            <ul className="sub-nav-menu" id="sub-menu-navigation">
                                <li><a href="about-us.html" className="sub-nav-link">About us</a></li>
                                <li><a href="brands.html" className="sub-nav-link line-clamp">Brands<div className="demo-label"><span className="demo-new">New</span></div></a></li>
                                <li><a href="brands-v2.html" className="sub-nav-link">Brands V2</a></li>
                                <li><a href="contact-1.html" className="sub-nav-link">Contact 1</a></li>
                                <li><a href="contact-2.html" className="sub-nav-link">Contact 2</a></li>
                               
                                <li><a href="#sub-account" className="sub-nav-link collapsed"  data-bs-toggle="collapse" aria-expanded="true" aria-controls="sub-account">
                                    <span>My Account</span>
                                    <span className="btn-open-sub"></span>
                                    </a>
                                    <div id="sub-account" className="collapse">
                                        <ul className="sub-nav-menu sub-menu-level-2">
                                            <li><a href="my-account.html" className="sub-nav-link">My account</a></li>
                                            <li><a href="my-account-orders.html" className="sub-nav-link">My order</a></li>
                                            <li><a href="my-account-orders-details.html" className="sub-nav-link">My order details</a></li>
                                            <li><a href="my-account-address.html" className="sub-nav-link">My address</a></li>
                                            <li><a href="my-account-edit.html" className="sub-nav-link">My account details</a></li>
                                            <li><a href="my-account-wishlist.html" className="sub-nav-link">My wishlist</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a href="invoice.html" className="sub-nav-link line-clamp">Invoice</a></li>
                                <li><a href="404.html" className="sub-nav-link line-clamp">404</a></li>
                            </ul>
                        </div>
                        
                    </li>
                    <li className="nav-mb-item">
                        <a href="#dropdown-menu-five" className="collapsed mb-menu-link current" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dropdown-menu-five">
                            <span>Blog</span>
                            <span className="btn-open-sub"></span>
                        </a>
                        <div id="dropdown-menu-five" className="collapse">
                            <ul className="sub-nav-menu" >
                                <li><a href="blog-grid.html" className="sub-nav-link">Grid layout</a></li>
                                <li><a href="blog-sidebar-left.html" className="sub-nav-link">Left sidebar</a></li>
                                <li><a href="blog-sidebar-right.html" className="sub-nav-link">Right sidebar</a></li>
                                <li><a href="blog-list.html" className="sub-nav-link">Blog list</a></li>
                                <li><a href="blog-detail.html" className="sub-nav-link">Single Post</a></li>
                            </ul>
                        </div>
                        
                    </li>
                    <li className="nav-mb-item">
                        <a href="https://themeforest.net/item/ecomus-ultimate-html5-template/53417990?s_rank=3" className="mb-menu-link">Buy now</a>
                    </li>
                </ul>
                <div className="mb-other-content">
                    <div className="d-flex group-icon">
                        <a href="wishlist.html" className="site-nav-icon"><i className="icon icon-heart"></i>Wishlist</a>
                        <a href="home-search.html" className="site-nav-icon"><i className="icon icon-search"></i>Search</a>
                    </div>
                    <div className="mb-notice">
                        <a href="contact-1.html" className="text-need">Need help ?</a>
                    </div>
                    <ul className="mb-info">
                        <li>Address: 1234 Fashion Street, Suite 567, <br/> New York, NY 10001</li>
                        <li>Email: <b>info@fashionshop.com</b></li>
                        <li>Phone: <b>(212) 555-1234</b></li>
                    </ul>
                </div>
            </div>
            <div className="mb-bottom">
                <a href="login.html" className="site-nav-icon"><i className="icon icon-account"></i>Login</a>
                <div className="bottom-bar-language">
                    <div className="tf-currencies">
                        <select className="image-select center style-default type-currencies">
                            <option data-thumbnail="images/country/fr.svg">EUR <span>€ | France</span></option>
                            <option data-thumbnail="images/country/de.svg">EUR <span>€ | Germany</span></option>
                            <option selected data-thumbnail="images/country/us.svg">USD <span>$ | United States</span></option>
                            <option data-thumbnail="images/country/vn.svg">VND <span>₫ | Vietnam</span></option>
                        </select>
                    </div>
                    <div className="tf-languages">
                        <select className="image-select center style-default type-languages">
                            <option>English</option>
                            <option>العربية</option>
                            <option>简体中文</option>
                            <option>اردو</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>       
    </div>
    </div>
         
                <Header2 />

                <Home />

                <Footer />
            </div>
            
            <div style={{ padding: "10px", textAlign: "right" }}>
                <Button type="primary" onClick={handleLogout}>
                    Đăng xuất
                </Button>
            </div>
        </>
    );
};

export default Layoutweb;
