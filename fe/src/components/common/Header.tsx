import React from 'react';
import { Link } from 'react-router-dom';
import { SearchOutlined, UserOutlined, ShoppingCartOutlined, MenuOutlined, DownOutlined, CaretDownOutlined } from '@ant-design/icons';

const Header = () => {
  return (
    <div>
      <header id="header" className="header-default">
        <div className="px_15 lg-px_40">
          <div className="row wrapper-header align-items-center">
            <div className="col-md-4 col-3 tf-lg-hidden">
              <a href="#mobileMenu" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft">
                <MenuOutlined style={{ fontSize: '24px' }} />
              </a>
            </div>
            <div className="col-xl-3 col-md-4 col-6">
              <a href="index.html" className="logo-header">
                <img src="images/logo/logo@2x.png" alt="logo" className="logo" />
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
                    <a href="#" className="item-link">Danh mục <CaretDownOutlined /></a>
                    <div className="sub-menu submenu-default">
                      <ul className="menu-list">
                        <li>
                          <a href="about-us.html" className="menu-link-text link text_black-2">Nhẫn</a>
                        </li>
                        <li>
                          <a href="about-us.html" className="menu-link-text link text_black-2">Vòng - Lắc</a>
                        </li>
                        <li><a href="view-cart.html" className="menu-link-text link text_black-2">Dây chuyền</a></li>
                        <li><a href="view-cart.html" className="menu-link-text link text_black-2">Khuyên tai</a></li>
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
                    <Link to="/product" className="item-link">
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
    </div>
  );
};

export default Header;
