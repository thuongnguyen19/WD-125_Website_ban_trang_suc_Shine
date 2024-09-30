import Footer from "../../../components/common/Footer";
import Header from "../../../components/common/Header";

const ListCart = () => {
    return (
        <>
            <Header />
            {/* preload */}
            <div className="preload preload-container">
                <div className="preload-logo">
                    <div className="spinner" />
                </div>
            </div>
            {/* /preload */}
            <div id="wrapper">
                {/* page-title */}
                <div className="tf-page-title">
                    <div className="container-full">
                        <div className="heading text-center">Giỏ Hàng</div>
                    </div>
                </div>
                {/* /page-title */}
                {/* page-cart */}
                <section className="flat-spacing-11">
                    <div className="container">
                        <div className="tf-cart-countdown">
                            <div className="title-left">
                                {/* <svg
                                    className="d-inline-block"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={24}
                                    viewBox="0 0 16 24"
                                    fill="rgb(219 18 21)"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10.0899 24C11.3119 22.1928 11.4245 20.2409 10.4277 18.1443C10.1505 19.2691 9.64344 19.9518 8.90645 20.1924C9.59084 18.2379 9.01896 16.1263 7.19079 13.8576C7.15133 16.2007 6.58824 17.9076 5.50148 18.9782C4.00436 20.4517 4.02197 22.1146 5.55428 23.9669C-0.806588 20.5819 -1.70399 16.0418 2.86196 10.347C3.14516 11.7228 3.83141 12.5674 4.92082 12.8809C3.73335 7.84186 4.98274 3.54821 8.66895 0C8.6916 7.87426 11.1062 8.57414 14.1592 12.089C17.4554 16.3071 15.5184 21.1748 10.0899 24Z"
                                    />
                                </svg> */}
                                {/* <p>
                                    Những sản phẩm này có số lượng hạn chế, hãy
                                    thanh toán trong vòng{" "}
                                </p> */}
                            </div>
                            {/* <div
                                className="js-countdown timer-count"
                                data-timer={600}
                                data-labels="d:,h:,m:,s"
                            /> */}
                        </div>
                        <div className="tf-page-cart-wrap">
                            <div className="tf-page-cart-item">
                                <form>
                                    <table className="tf-table-page-cart">
                                        <thead>
                                            <tr>
                                                <th>Sản phẩm</th>
                                                <th>Giá</th>
                                                <th>Số lượng</th>
                                                <th>Tổng cộng</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="tf-cart-item file-delete">
                                                <td className="tf-cart-item_product">
                                                    <a
                                                        href="product-detail.html"
                                                        className="img-box"
                                                    >
                                                        <img
                                                            src="https://imgur.com/DBX8wZd.jpg"
                                                            alt="img-product"
                                                        />
                                                    </a>
                                                    <div className="cart-info">
                                                        <a
                                                            href="product-detail.html"
                                                            className="cart-title link"
                                                        >
                                                            Oversized Printed
                                                            T-shirt
                                                        </a>
                                                        <div className="cart-meta-variant">
                                                            Trắng / M
                                                        </div>
                                                        <span className="remove-cart link remove">
                                                            Xoá
                                                        </span>
                                                    </div>
                                                </td>
                                                <td
                                                    className="tf-cart-item_price"
                                                    cart-data-title="Price"
                                                >
                                                    <div className="cart-price">
                                                        180.000 VND
                                                    </div>
                                                </td>
                                                <td
                                                    className="tf-cart-item_quantity"
                                                    cart-data-title="Quantity"
                                                >
                                                    <div className="cart-quantity">
                                                        <div className="wg-quantity">
                                                            <span className="btn-quantity minus-btn">
                                                                <svg
                                                                    className="d-inline-block"
                                                                    width={9}
                                                                    height={1}
                                                                    viewBox="0 0 9 1"
                                                                    fill="currentColor"
                                                                >
                                                                    <path d="M9 1H5.14286H3.85714H0V1.50201e-05H3.85714L5.14286 0L9 1.50201e-05V1Z" />
                                                                </svg>
                                                            </span>
                                                            <input
                                                                type="text"
                                                                name="number"
                                                                defaultValue={1}
                                                            />
                                                            <span className="btn-quantity plus-btn">
                                                                <svg
                                                                    className="d-inline-block"
                                                                    width={9}
                                                                    height={9}
                                                                    viewBox="0 0 9 9"
                                                                    fill="currentColor"
                                                                >
                                                                    <path d="M9 5.14286H5.14286V9H3.85714V5.14286H0V3.85714H3.85714V0H5.14286V3.85714H9V5.14286Z" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td
                                                    className="tf-cart-item_total"
                                                    cart-data-title="Total"
                                                >
                                                    <div className="cart-total">
                                                        180.000 VND
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="tf-cart-item file-delete">
                                                <td className="tf-cart-item_product">
                                                    <a
                                                        href="product-detail.html"
                                                        className="img-box"
                                                    >
                                                        <img
                                                            src="https://imgur.com/CMyAuha.jpg"
                                                            alt="img-product"
                                                        />
                                                    </a>
                                                    <div className="cart-info">
                                                        <a
                                                            href="product-detail.html"
                                                            className="cart-title link"
                                                        >
                                                            Ribbed Tank Top
                                                        </a>
                                                        <div className="cart-meta-variant">
                                                            Cam / S
                                                        </div>
                                                        <span className="remove-cart link remove">
                                                            Xoá
                                                        </span>
                                                    </div>
                                                </td>
                                                <td
                                                    className="tf-cart-item_price"
                                                    cart-data-title="Price"
                                                >
                                                    <div className="cart-price">
                                                        180.000 VND
                                                    </div>
                                                </td>
                                                <td
                                                    className="tf-cart-item_quantity"
                                                    cart-data-title="Quantity"
                                                >
                                                    <div className="cart-quantity">
                                                        <div className="wg-quantity">
                                                            <span className="btn-quantity minus-btn">
                                                                <svg
                                                                    className="d-inline-block"
                                                                    width={9}
                                                                    height={1}
                                                                    viewBox="0 0 9 1"
                                                                    fill="currentColor"
                                                                >
                                                                    <path d="M9 1H5.14286H3.85714H0V1.50201e-05H3.85714L5.14286 0L9 1.50201e-05V1Z" />
                                                                </svg>
                                                            </span>
                                                            <input
                                                                type="text"
                                                                name="number"
                                                                defaultValue={1}
                                                            />
                                                            <span className="btn-quantity plus-btn">
                                                                <svg
                                                                    className="d-inline-block"
                                                                    width={9}
                                                                    height={9}
                                                                    viewBox="0 0 9 9"
                                                                    fill="currentColor"
                                                                >
                                                                    <path d="M9 5.14286H5.14286V9H3.85714V5.14286H0V3.85714H3.85714V0H5.14286V3.85714H9V5.14286Z" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td
                                                    className="tf-cart-item_total"
                                                    cart-data-title="Total"
                                                >
                                                    <div className="cart-total">
                                                        180.000 VND
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="tf-cart-item file-delete">
                                                <td className="tf-cart-item_product">
                                                    <a
                                                        href="product-detail.html"
                                                        className="img-box"
                                                    >
                                                        <img
                                                            src="https://imgur.com/NIuwqji.jpg"
                                                            alt="img-product"
                                                        />
                                                    </a>
                                                    <div className="cart-info">
                                                        <a
                                                            href="product-detail.html"
                                                            className="cart-title link"
                                                        >
                                                            Regular Fit Oxford
                                                            Shirt
                                                        </a>
                                                        <div className="cart-meta-variant">
                                                            Đen / L
                                                        </div>
                                                        <span className="remove-cart link remove">
                                                            Xoá
                                                        </span>
                                                    </div>
                                                </td>
                                                <td
                                                    className="tf-cart-item_price"
                                                    cart-data-title="Price"
                                                >
                                                    <div className="cart-price">
                                                        180.000 VND
                                                    </div>
                                                </td>
                                                <td
                                                    className="tf-cart-item_quantity"
                                                    cart-data-title="Quantity"
                                                >
                                                    <div className="cart-quantity">
                                                        <div className="wg-quantity">
                                                            <span className="btn-quantity minus-btn">
                                                                <svg
                                                                    className="d-inline-block"
                                                                    width={9}
                                                                    height={1}
                                                                    viewBox="0 0 9 1"
                                                                    fill="currentColor"
                                                                >
                                                                    <path d="M9 1H5.14286H3.85714H0V1.50201e-05H3.85714L5.14286 0L9 1.50201e-05V1Z" />
                                                                </svg>
                                                            </span>
                                                            <input
                                                                type="text"
                                                                name="number"
                                                                defaultValue={1}
                                                            />
                                                            <span className="btn-quantity plus-btn">
                                                                <svg
                                                                    className="d-inline-block"
                                                                    width={9}
                                                                    height={9}
                                                                    viewBox="0 0 9 9"
                                                                    fill="currentColor"
                                                                >
                                                                    <path d="M9 5.14286H5.14286V9H3.85714V5.14286H0V3.85714H3.85714V0H5.14286V3.85714H9V5.14286Z" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td
                                                    className="tf-cart-item_total"
                                                    cart-data-title="Total"
                                                >
                                                    <div className="cart-total">
                                                        180.000 VND
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="tf-page-cart-note">
                                        <label htmlFor="cart-note">
                                            Thêm ghi chú đơn hàng
                                        </label>
                                        <textarea
                                            name="note"
                                            id="cart-note"
                                            placeholder="Chúng tôi có thể giúp bạn những gì?"
                                            defaultValue={""}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="tf-page-cart-footer">
                                <div className="tf-cart-footer-inner">
                                    <div className="tf-free-shipping-bar">
                                        <div className="tf-progress-bar">
                                            <span style={{ width: "50%" }}>
                                                <div className="progress-car">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={21}
                                                        height={14}
                                                        viewBox="0 0 21 14"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M0 0.875C0 0.391751 0.391751 0 0.875 0H13.5625C14.0457 0 14.4375 0.391751 14.4375 0.875V3.0625H17.3125C17.5867 3.0625 17.845 3.19101 18.0104 3.40969L20.8229 7.12844C20.9378 7.2804 21 7.46572 21 7.65625V11.375C21 11.8582 20.6082 12.25 20.125 12.25H17.7881C17.4278 13.2695 16.4554 14 15.3125 14C14.1696 14 13.1972 13.2695 12.8369 12.25H7.72563C7.36527 13.2695 6.39293 14 5.25 14C4.10706 14 3.13473 13.2695 2.77437 12.25H0.875C0.391751 12.25 0 11.8582 0 11.375V0.875ZM2.77437 10.5C3.13473 9.48047 4.10706 8.75 5.25 8.75C6.39293 8.75 7.36527 9.48046 7.72563 10.5H12.6875V1.75H1.75V10.5H2.77437ZM14.4375 8.89937V4.8125H16.8772L19.25 7.94987V10.5H17.7881C17.4278 9.48046 16.4554 8.75 15.3125 8.75C15.0057 8.75 14.7112 8.80264 14.4375 8.89937ZM5.25 10.5C4.76676 10.5 4.375 10.8918 4.375 11.375C4.375 11.8582 4.76676 12.25 5.25 12.25C5.73323 12.25 6.125 11.8582 6.125 11.375C6.125 10.8918 5.73323 10.5 5.25 10.5ZM15.3125 10.5C14.8293 10.5 14.4375 10.8918 14.4375 11.375C14.4375 11.8582 14.8293 12.25 15.3125 12.25C15.7957 12.25 16.1875 11.8582 16.1875 11.375C16.1875 10.8918 15.7957 10.5 15.3125 10.5Z"
                                                        />
                                                    </svg>
                                                </div>
                                            </span>
                                        </div>
                                        <div className="tf-progress-msg">
                                            Mua{" "}
                                            <span className="price fw-6">
                                                thêm
                                            </span>{" "}
                                            750.000 VND để được{" "}
                                            <span className="fw-6">
                                                Miễn phí vận chuyển
                                            </span>
                                        </div>
                                    </div>
                                    <div className="tf-page-cart-checkout">
                                        <div className="shipping-calculator">
                                            <summary
                                                className="accordion-shipping-header d-flex justify-content-between align-items-center collapsed"
                                                data-bs-target="#shipping"
                                                data-bs-toggle="collapse"
                                                aria-controls="shipping"
                                            >
                                                <span className="shipping-calculator_accordion-icon" />
                                            </summary>
                                        </div>
                                        <div className="cart-checkbox">
                                            {/* <input
                                                type="checkbox"
                                                className="tf-check"
                                                id="cart-gift-checkbox"
                                            /> */}
                                            {/* <label
                                                htmlFor="cart-gift-checkbox"
                                                className="fw-4"
                                            >
                                                <span>
                                                    Bạn có muốn gói quà không?{" "}
                                                </span>
                                                Chỉ{" "}
                                                <span className="fw-5">
                                                    50.000 VND
                                                </span>
                                            </label> */}
                                        </div>
                                        <div className="tf-cart-totals-discounts">
                                            <h3>Tổng phụ</h3>
                                            <span className="total-value">
                                                2.000.000 VND
                                            </span>
                                        </div>

                                        <div className="cart-checkbox">
                                            {/* <input
                                                type="checkbox"
                                                className="tf-check"
                                                id="check-agree"
                                            />
                                            <label
                                                htmlFor="check-agree"
                                                className="fw-4"
                                            >
                                                Tôi đồng ý với{" "}
                                                <a href="terms-conditions.html">
                                                    các điều khoản và điều kiện
                                                </a>
                                            </label> */}
                                        </div>
                                        <div className="cart-checkout-btn">
                                            <a
                                                href="checkout.html"
                                                className="tf-btn w-100 btn-fill animate-hover-btn radius-3 justify-content-center"
                                            >
                                                <span>Thanh toán</span>
                                            </a>
                                        </div>
                                        <div className="tf-page-cart_imgtrust">
                                            <p className="text-center fw-6">
                                                Đảm bảo thanh toán an toàn
                                            </p>
                                            <div className="cart-list-social">
                                                <div className="payment-item"></div>
                                                <div className="payment-item"></div>
                                                <div className="payment-item"></div>
                                                <div className="payment-item"></div>
                                                <div className="payment-item">
                                                    <img
                                                        src="https://static.mservice.io/img/logo-momo.png"
                                                        alt="Momo"
                                                        className="momo-logo"
                                                        aria-labelledby="pi-momo"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export default ListCart;
