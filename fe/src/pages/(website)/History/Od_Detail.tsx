import React from 'react';
import Footer from '../../../components/common/Footer';
import Header from '../../../components/common/Header';

const Od_Detail = () => {
    return (
        <>
            {/* <Header /> */}
            <section className="flat-spacing-11">
                {/* <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <ul className="my-account-nav">
                                <li>
                                    <a
                                        href="my-account.html"
                                        className="my-account-nav-item "
                                    >
                                        Bảng điều khiển
                                    </a>
                                </li>
                                <li>
                                    <span className="my-account-nav-item active">
                                        Đơn hàng
                                    </span>
                                </li>
                                <li>
                                    <a
                                        href="my-account-address.html"
                                        className="my-account-nav-item"
                                    >
                                        Địa chỉ
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="my-account-edit.html"
                                        className="my-account-nav-item"
                                    >
                                        Thông tin tài khoản
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="my-account-wishlist.html"
                                        className="my-account-nav-item"
                                    >
                                        Danh sách sản phẩm mong muốn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="login.html"
                                        className="my-account-nav-item"
                                    >
                                        Đăng xuất
                                    </a>
                                </li>
                            </ul>
                        </div> */}
                        <div className="col-lg-9">
                            <div className="wd-form-order">
                                <div className="order-head">
                                    <figure className="img-product">
                                        <img
                                            src="https://imgur.com/dOWRKKB.jpg"
                                            alt="product"
                                        />
                                    </figure>
                                    <div className="content">
                                        <div className="badge">
                                            Đang giao hàng
                                        </div>
                                        <h6 className="mt-8 fw-5">
                                            Đơn hàng #17493
                                        </h6>
                                    </div>
                                </div>
                                <div className="tf-grid-layout md-col-2 gap-15">
                                    <div className="item">
                                        <div className="text-2 text_black-2">
                                            Tên mặt hàng
                                        </div>
                                        <div className="text-2 mt_4 fw-6">
                                            Nhẫn kim cương 999k
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="text-2 text_black-2">
                                            Thời gian đặt hàng
                                        </div>
                                        <div className="text-2 mt_4 fw-6">
                                            04 Tháng 9 Năm 2024, 13:30:23
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="text-2 text_black-2">
                                            Họ và tên khách hàng
                                        </div>
                                        <div className="text-2 mt_4 fw-6">
                                            Phạm Phương Anh
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="text-2 text_black-2">
                                            Địa chỉ
                                        </div>
                                        <div className="text-2 mt_4 fw-6">
                                            Thị trấn An Dương, Huyện An Dương,
                                            Thành phố Hải Phòng
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="text-2 text_black-2">
                                            Số điện thoại
                                        </div>
                                        <div className="text-2 mt_4 fw-6">
                                            0123456789
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-tabs style-has-border widget-order-tab">
                                    <ul className="widget-menu-tab">
                                        <li className="item-title">
                                            <span className="inner">
                                                Chi tiết đơn hàng
                                            </span>
                                        </li>

                                        <li className="item-title">
                                            <span className="inner">
                                                Xác nhận giao hàng
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="widget-content-tab">
                                        <div className="widget-content-inner">
                                            <div className="order-head">
                                                <figure className="img-product">
                                                    <img
                                                        src="https://imgur.com/dOWRKKB.jpg"
                                                        alt="product"
                                                    />
                                                </figure>
                                                <div className="content">
                                                    <div className="text-2 fw-6">
                                                        Nhẫn kim cương 999
                                                    </div>
                                                    <div className="mt_4">
                                                        <span className="fw-6">
                                                            Giá :
                                                        </span>{" "}
                                                        1.000.000 VND
                                                    </div>
                                                    <div className="mt_4">
                                                        <span className="fw-6">
                                                            Số lượng :
                                                        </span>{" "}
                                                        2
                                                    </div>
                                                    <div className="mt_4">
                                                        <span className="fw-6">
                                                            Size :
                                                        </span>{" "}
                                                        XL
                                                    </div>
                                                </div>
                                            </div>
                                            <ul>
                                                <li className="d-flex justify-content-between text-2 pb_8 line">
                                                    <span>Tiền tạm tính</span>
                                                    <span className="fw-6">
                                                        1.000.000 VND
                                                    </span>
                                                </li>
                                                <li className="d-flex justify-content-between text-2 mt_4 pb_8 line">
                                                    <span>Phụ phí</span>
                                                    <span className="fw-6">
                                                        0 VND
                                                    </span>
                                                </li>
                                                <li className="d-flex justify-content-between text-2 mt_8 pb_8 line">
                                                    <span>Tổng đơn hàng</span>
                                                    <span className="fw-6">
                                                        1.000.000 VND
                                                    </span>
                                                </li>
                                                <li className="d-flex justify-content-between text-2 mt_8 pb_8 line">
                                                    <span>
                                                        Hình thức thanh toán
                                                    </span>
                                                    <span className="fw-6">
                                                        Thanh toán khi nhận hàng
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="widget-content-inner">
                                            <p className="text-2 text_success">
                                                Cảm ơn bạn. Đơn hàng của bạn đã
                                                được giao thành công.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
            </section>
            {/* <Footer /> */}
        </>
    );
};

export default Od_Detail;