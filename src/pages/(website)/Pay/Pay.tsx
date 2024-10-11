import Header from '../../../components/common/Header'
import Footer from '../../../components/common/Footer';
import { Link } from 'react-router-dom';

const Pay = () => {
    return (
        <>
            {/* <Header /> */}
            <div>
                <div className="tf-page-title">
                    <div className="container-full">
                        <div className="heading text-center">Thanh Toán</div>
                    </div>
                </div>
                <section className="flat-spacing-11">
                    <div className="container">
                        <div className="tf-page-cart-wrap layout-2">
                            <div className="tf-page-cart-item">
                                <h5 className="fw-5 mb_20">
                                    Chi tiết thanh toán
                                </h5>
                                <form className="form-checkout">
                                    <div className="box grid-2">
                                        <fieldset className="fieldset">
                                            <label htmlFor="first-name">
                                                Họ Và Tên
                                            </label>
                                            <input
                                                type="text"
                                                id="first-name"
                                                placeholder="Nguyễn Văn A"
                                            />
                                        </fieldset>
                                    </div>

                                    <fieldset className="box fieldset">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" />
                                    </fieldset>

                                    <fieldset className="box fieldset">
                                        <label htmlFor="city">
                                            Số điện thoại
                                        </label>
                                        <input type="number" id="phonenumber" />
                                    </fieldset>

                                    <fieldset className="box fieldset">
                                        <label htmlFor="address">Địa chỉ</label>
                                        <input type="text" id="address" />
                                    </fieldset>

                                    <fieldset className="box fieldset">
                                        <label htmlFor="note">
                                            Ghi chú đơn hàng (Tuỳ chọn)
                                        </label>
                                        <textarea
                                            name="note"
                                            id="note"
                                            defaultValue={""}
                                        />
                                    </fieldset>
                                </form>
                            </div>

                            <div className="tf-page-cart-footer">
                                <div className="tf-cart-footer-inner">
                                    <h5 className="fw-5 mb_20">
                                        Đơn hàng của bạn
                                    </h5>
                                    <form className="tf-page-cart-checkout widget-wrap-checkout">
                                        <ul className="wrap-checkout-product">
                                            <li className="checkout-product-item">
                                                <figure className="img-product">
                                                    <img
                                                        src="https://imgur.com/NIuwqji.jpg"
                                                        alt="product"
                                                    />
                                                    <span className="quantity">
                                                        1
                                                    </span>
                                                </figure>
                                                <div className="content">
                                                    <div className="info">
                                                        <p className="name">
                                                            Nhẫn vàng 900KR
                                                        </p>
                                                        <span className="variant">
                                                            Vàng / M
                                                        </span>
                                                    </div>
                                                    <span className="price">
                                                        1.500.000 VND
                                                    </span>
                                                </div>
                                            </li>
                                            <li className="checkout-product-item">
                                                <figure className="img-product">
                                                    <img
                                                        src="https://imgur.com/NIuwqji.jpg"
                                                        alt="product"
                                                    />
                                                    <span className="quantity">
                                                        1
                                                    </span>
                                                </figure>
                                                <div className="content">
                                                    <div className="info">
                                                        <p className="name">
                                                            Vòng kiềng đám cưới
                                                        </p>
                                                    </div>
                                                    <span className="price">
                                                        500.000 VND
                                                    </span>
                                                </div>
                                            </li>

                                            <li className="checkout-product-item">
                                                <figure className="img-product">
                                                    <img
                                                        src="https://imgur.com/NIuwqji.jpg"
                                                        alt="product"
                                                    />
                                                    <span className="quantity">
                                                        1
                                                    </span>
                                                </figure>
                                                <div className="content">
                                                    <div className="info">
                                                        <p className="name">
                                                            Vòng tay đôi
                                                        </p>
                                                        <span className="variant">
                                                            Vàng / S
                                                        </span>
                                                    </div>
                                                    <span className="price">
                                                        999.000 VND
                                                    </span>
                                                </div>
                                            </li>

                                            <li className="checkout-product-item">
                                                <figure className="img-product">
                                                    <img
                                                        src="https://imgur.com/NIuwqji.jpg"
                                                        alt="product"
                                                    />
                                                    <span className="quantity">
                                                        3
                                                    </span>
                                                </figure>
                                                <div className="content">
                                                    <div className="info">
                                                        <p className="name">
                                                            Nhẫn vàng hồng ngọc
                                                        </p>
                                                        <span className="variant">
                                                            Vàng / S
                                                        </span>
                                                    </div>
                                                    <span className="price">
                                                        10.000.000 VND
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="coupon-box">
                                            <input
                                                type="text"
                                                placeholder="Mã giảm giá"
                                            />
                                            <a
                                                href="#"
                                                className="tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn"
                                            >
                                                Áp dụng
                                            </a>
                                        </div>
                                        <div className="d-flex justify-content-between line pb_20">
                                            <h6 className="fw-5">Tổng cộng</h6>
                                            <h6 className="total fw-5">
                                                1.000.000.000 VND
                                            </h6>
                                        </div>
                                        <div className="wd-check-payment">
                                            <div className="fieldset-radio mb_20">
                                                <input
                                                    type="radio"
                                                    name="payment"
                                                    id="bank"
                                                    className="tf-check"
                                                    defaultChecked
                                                />
                                                <label htmlFor="bank">
                                                    Chuyển khoản ngân hàng trực
                                                    tiếp
                                                </label>
                                            </div>
                                            <div className="fieldset-radio mb_20">
                                                <input
                                                    type="radio"
                                                    name="payment"
                                                    id="delivery"
                                                    className="tf-check"
                                                />
                                                <label htmlFor="delivery">
                                                    Thanh toán khi nhận hàng
                                                </label>
                                            </div>
                                        </div>
                                        <Link to={"/success"}>
                                            <button className="tf-btn radius-3 btn-fill btn-icon animate-hover-btn justify-content-center">
                                                Đặt hàng
                                            </button>
                                        </Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Pay;