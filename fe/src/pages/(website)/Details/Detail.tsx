import React, { useState } from "react";
import Footer from "../../../components/common/Footer";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Header from "../../../components/common/Header";

const Detail = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedVariant, setSelectedVariant] = useState<string | null>(null);

    const handleQuantityChange = (change: number) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
    };

    const handleVariantSelect = (variant: React.SetStateAction<null>) => {};
    const [selectedSize, setSelectedSize] = useState("S");

    const basePrice = 8.0;

    const [totalPrice, setTotalPrice] = useState(basePrice);

    const handleIncrease = () => {
        setQuantity((prevQuantity) => {
            const newQuantity = prevQuantity + 1;
            setTotalPrice(newQuantity * basePrice);
            return newQuantity;
        });
    };

    // Danh sách các màu
    const colors = [
        {
            name: "màu xanh",
            value: "light-green",
            image: "images/products/light-green-1.jpg",
        },
        {
            name: "màu đen",
            value: "black",
            image: "images/products/black-3.jpg",
        },
        {
            name: "xanh nước biển",
            value: "blue-2",
            image: "images/products/blue.jpg",
        },
        {
            name: "xanh đậm",
            value: "dark-blue",
            image: "images/products/dark-blue.jpg",
        },
        {
            name: "màu trắng",
            value: "white",
            image: "images/products/white-6.jpg",
        },
        {
            name: "xanh nhạt",
            value: "light-grey",
            image: "images/products/light-grey.jpg",
        },
    ];

    const handleDecrease = () => {
        setQuantity((prevQuantity) => {
            if (prevQuantity > 1) {
                const newQuantity = prevQuantity - 1;
                setTotalPrice(newQuantity * basePrice);
                return newQuantity;
            }
            return prevQuantity;
        });
    };

    const [selectedColor, setSelectedColor] = useState("Beige");
    return (
        <div>
            <Header />
            {/* Breadcrumb */}
            <div className="tf-breadcrumb">
                <div className="container">
                    <div className="tf-breadcrumb-wrap d-flex justify-content-between flex-wrap align-items-center">
                        <div className="tf-breadcrumb-list">
                            <a href="index.html" className="text">
                                Trang chủ
                            </a>
                            <i className="icon icon-arrow-right"></i>
                            <a href="#" className="text">
                                Trang sức
                            </a>
                            <i className="icon icon-arrow-right"></i>
                            <span className="text">Vòng tay </span>
                        </div>
                        <div className="tf-breadcrumb-prev-next">
                            <a
                                href="#"
                                className="tf-breadcrumb-prev hover-tooltip center"
                            >
                                <i className="icon icon-arrow-left"></i>
                            </a>
                            <a
                                href="#"
                                className="tf-breadcrumb-back hover-tooltip center"
                            >
                                <i className="icon icon-shop"></i>
                            </a>
                            <a
                                href="#"
                                className="tf-breadcrumb-next hover-tooltip center"
                            >
                                <i className="icon icon-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <section className="flat-spacing-4 pt_0">
                <div className="tf-main-product section-image-zoom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="tf-product-media-wrap sticky-top">
                                    <div className="thumbs-slider">
                                        <div
                                            className="swiper tf-product-media-thumbs other-image-zoom"
                                            data-direction="vertical"
                                        >
                                            <div className="swiper-wrapper stagger-wrap">
                                                {[
                                                    "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100004524640783",
                                                    "https://www.example.com/image2.jpg",
                                                    "https://www.example.com/image3.jpg",
                                                    "https://www.example.com/image4.jpg",
                                                    "https://www.example.com/image5.jpg",
                                                    "https://www.example.com/image6.jpg",
                                                    "https://www.example.com/image7.jpg",
                                                    "https://www.example.com/image8.jpg",
                                                    "https://www.example.com/image9.jpg",
                                                    "https://www.example.com/image10.jpg",
                                                ].map((img, index) => (
                                                    <div
                                                        className="swiper-slide stagger-item"
                                                        key={index}
                                                    >
                                                        <div className="item">
                                                            <img
                                                                className="lazyload"
                                                                data-src={img}
                                                                src={img}
                                                                alt={`img-${index}`}
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div
                                            className="swiper tf-product-media-main"
                                            id="gallery-swiper-started"
                                        >
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <a
                                                        href="https://lili.vn/wp-content/uploads/2022/06/Lac-tay-bac-nu-dinh-da-CZ-hinh-bong-hoa-hong-LILI_787759_1-400x400.jpg"
                                                        target="_blank"
                                                        className="item"
                                                        data-pswp-width="770px"
                                                        data-pswp-height="1075px"
                                                    >
                                                        <img
                                                            className="tf-image-zoom lazyload"
                                                            data-zoom="https://lili.vn/wp-content/uploads/2022/06/Lac-tay-bac-nu-dinh-da-CZ-hinh-bong-hoa-hong-LILI_787759_1-400x400.jpg"
                                                            data-src="https://lili.vn/wp-content/uploads/2022/06/Lac-tay-bac-nu-dinh-da-CZ-hinh-bong-hoa-hong-LILI_787759_1-400x400.jpg"
                                                            src="https://lili.vn/wp-content/uploads/2022/06/Lac-tay-bac-nu-dinh-da-CZ-hinh-bong-hoa-hong-LILI_787759_1-400x400.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="swiper-slide">
                                                    <a
                                                        href="images/shop/products/hmgoepprod.jpg"
                                                        target="_blank"
                                                        className="item"
                                                        data-pswp-width="770px"
                                                        data-pswp-height="1075px"
                                                    >
                                                        <img
                                                            className="tf-image-zoom lazyload"
                                                            data-zoom="images/shop/products/hmgoepprod.jpg"
                                                            data-src="images/shop/products/hmgoepprod.jpg"
                                                            src="images/shop/products/hmgoepprod.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="swiper-slide">
                                                    <a
                                                        href="images/shop/products/hmgoepprod2.jpg"
                                                        target="_blank"
                                                        className="item"
                                                        data-pswp-width="770px"
                                                        data-pswp-height="1075px"
                                                    >
                                                        <img
                                                            className="tf-image-zoom lazyload"
                                                            data-zoom="images/shop/products/hmgoepprod2.jpg"
                                                            data-src="images/shop/products/hmgoepprod2.jpg"
                                                            src="images/shop/products/hmgoepprod2.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="swiper-slide">
                                                    <a
                                                        href="images/shop/products/hmgoepprod3.jpg"
                                                        target="_blank"
                                                        className="item"
                                                        data-pswp-width="770px"
                                                        data-pswp-height="1075px"
                                                    >
                                                        <img
                                                            className="tf-image-zoom lazyload"
                                                            data-zoom="images/shop/products/hmgoepprod3.jpg"
                                                            data-src="images/shop/products/hmgoepprod3.jpg"
                                                            src="images/shop/products/hmgoepprod3.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="swiper-slide">
                                                    <a
                                                        href="images/shop/products/hmgoepprod4.jpg"
                                                        target="_blank"
                                                        className="item"
                                                        data-pswp-width="770px"
                                                        data-pswp-height="1075px"
                                                    >
                                                        <img
                                                            className="tf-image-zoom lazyload"
                                                            data-zoom="images/shop/products/hmgoepprod4.jpg"
                                                            data-src="images/shop/products/hmgoepprod4.jpg"
                                                            src="images/shop/products/hmgoepprod4.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="swiper-slide">
                                                    <a
                                                        href="images/shop/products/hmgoepprod5.jpg"
                                                        target="_blank"
                                                        className="item"
                                                        data-pswp-width="770px"
                                                        data-pswp-height="1075px"
                                                    >
                                                        <img
                                                            className="tf-image-zoom lazyload"
                                                            data-zoom="images/shop/products/hmgoepprod5.jpg"
                                                            data-src="images/shop/products/hmgoepprod5.jpg"
                                                            src="images/shop/products/hmgoepprod5.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="swiper-slide">
                                                    <a
                                                        href="images/shop/products/hmgoepprod6.jpg"
                                                        target="_blank"
                                                        className="item"
                                                        data-pswp-width="770px"
                                                        data-pswp-height="1075px"
                                                    >
                                                        <img
                                                            className="tf-image-zoom lazyload"
                                                            data-zoom="images/shop/products/hmgoepprod6.jpg"
                                                            data-src="images/shop/products/hmgoepprod6.jpg"
                                                            src="images/shop/products/hmgoepprod6.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="swiper-slide">
                                                    <a
                                                        href="images/shop/products/hmgoepprod7.jpg"
                                                        target="_blank"
                                                        className="item"
                                                        data-pswp-width="770px"
                                                        data-pswp-height="1075px"
                                                    >
                                                        <img
                                                            className="tf-image-zoom lazyload"
                                                            data-zoom="images/shop/products/hmgoepprod7.jpg"
                                                            data-src="images/shop/products/hmgoepprod7.jpg"
                                                            src="images/shop/products/hmgoepprod7.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="swiper-slide">
                                                    <a
                                                        href="images/shop/products/hmgoepprod8.jpg"
                                                        target="_blank"
                                                        className="item"
                                                        data-pswp-width="770px"
                                                        data-pswp-height="1075px"
                                                    >
                                                        <img
                                                            className="tf-image-zoom lazyload"
                                                            data-zoom="images/shop/products/hmgoepprod8.jpg"
                                                            data-src="images/shop/products/hmgoepprod8.jpg"
                                                            src="images/shop/products/hmgoepprod8.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="swiper-slide">
                                                    <a
                                                        href="images/shop/products/hmgoepprod9.jpg"
                                                        target="_blank"
                                                        className="item"
                                                        data-pswp-width="770px"
                                                        data-pswp-height="1075px"
                                                    >
                                                        <img
                                                            className="tf-image-zoom lazyload"
                                                            data-zoom="images/shop/products/hmgoepprod9.jpg"
                                                            data-src="images/shop/products/hmgoepprod9.jpg"
                                                            src="images/shop/products/hmgoepprod9.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="swiper-button-next button-style-arrow thumbs-next"></div>
                                            <div className="swiper-button-prev button-style-arrow thumbs-prev"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="tf-product-info-wrap position-relative">
                                    <div className="tf-zoom-main"></div>
                                    <div className="tf-product-info-list other-image-zoom">
                                        <div className="tf-product-info-title">
                                            <h5>
                                                {" "}
                                                Vòng tay đính đá ít họa tiết
                                                siêu đẹp{" "}
                                            </h5>
                                        </div>
                                        <div className="tf-product-info-badges">
                                            {/* <div className="product-status-content">
                                                <i className="icon-lightning"></i>
                                                <p className="fw-6">
                                                    Selling fast! 56 people have
                                                    this in their carts.
                                                </p>
                                            </div> */}
                                        </div>
                                        <div className="tf-product-info-price">
                                            <div className="price-on-sale">
                                                800.000 đ
                                            </div>
                                            <div className="compare-at-price">
                                                1.000.000 đ
                                            </div>
                                        </div>

                                        {/* <div className="tf-product-info-countdown">
                                            <div className="countdown-wrap">
                                                <div className="countdown-title">
                                                    <i className="icon-time tf-ani-tada"></i>
                                                    <p>
                                                        HURRY UP! SALE ENDS IN:
                                                    </p>
                                                </div>
                                                <div className="tf-countdown style-1">
                                                    <div
                                                        className="js-countdown"
                                                        data-timer="1007500"
                                                        data-labels="Days :,Hours :,Mins :,Secs"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="tf-product-info-variant-picker">
                                            <div className="variant-picker-item">
                                                <div className="variant-picker-label">
                                                    Color:{" "}
                                                    <span className="fw-6 variant-picker-label-value">
                                                        {selectedColor}
                                                    </span>
                                                </div>
                                                <div className="variant-picker-values">
                                                    {[
                                                        "Beige",
                                                        "Black",
                                                        "Blue",
                                                        "White",
                                                    ].map((color) => (
                                                        <React.Fragment
                                                            key={color}
                                                        >
                                                            <input
                                                                id={`values-${color.toLowerCase()}`}
                                                                type="radio"
                                                                name="color1"
                                                                checked={
                                                                    selectedColor ===
                                                                    color
                                                                }
                                                                onChange={() =>
                                                                    setSelectedColor(
                                                                        color,
                                                                    )
                                                                } // Cập nhật màu sắc khi người dùng chọn
                                                            />
                                                            <label
                                                                className="hover-tooltip radius-60"
                                                                htmlFor={`values-${color.toLowerCase()}`}
                                                                data-value={
                                                                    color
                                                                }
                                                            >
                                                                <span
                                                                    className={`btn-checkbox bg-color-${color.toLowerCase()}`}
                                                                ></span>
                                                                <span className="tooltip">
                                                                    {color}
                                                                </span>
                                                            </label>
                                                        </React.Fragment>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="variant-picker-item">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="variant-picker-label">
                                                        Size:{" "}
                                                        <span className="fw-6 variant-picker-label-value">
                                                            {selectedSize}
                                                        </span>
                                                    </div>
                                                    <a
                                                        href="#find_size"
                                                        data-bs-toggle="modal"
                                                        className="find-size fw-6"
                                                    >
                                                        Kích thước
                                                    </a>
                                                </div>
                                                <div className="variant-picker-values">
                                                    {["S", "M", "L", "XL"].map(
                                                        (size) => (
                                                            <React.Fragment
                                                                key={size}
                                                            >
                                                                <input
                                                                    type="radio"
                                                                    name="size1"
                                                                    id={`values-${size.toLowerCase()}`}
                                                                    checked={
                                                                        selectedSize ===
                                                                        size
                                                                    }
                                                                    onChange={() =>
                                                                        setSelectedSize(
                                                                            size,
                                                                        )
                                                                    } // Cập nhật trạng thái khi người dùng chọn một kích thước khác
                                                                />
                                                                <label
                                                                    className="style-text"
                                                                    htmlFor={`values-${size.toLowerCase()}`}
                                                                    data-value={
                                                                        size
                                                                    }
                                                                >
                                                                    <p>
                                                                        {size}
                                                                    </p>
                                                                </label>
                                                            </React.Fragment>
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="tf-product-info-quantity">
                                                <div className="quantity-title fw-6">
                                                    số lượng
                                                </div>
                                                <div className="wg-quantity">
                                                    <span
                                                        className="btn-quantity minus-btn"
                                                        onClick={handleDecrease}
                                                    >
                                                        -
                                                    </span>
                                                    <input
                                                        type="text"
                                                        name="number"
                                                        value={quantity}
                                                        readOnly
                                                    />
                                                    <span
                                                        className="btn-quantity plus-btn"
                                                        onClick={handleIncrease}
                                                    >
                                                        +
                                                    </span>
                                                </div>

                                                <div className="tf-product-info-buy-button">
                                                    <form>
                                                        <a
                                                            href="javascript:void(0);"
                                                            className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn-add-to-cart"
                                                        >
                                                            <span>
                                                                Thêm vào giỏ
                                                                hàng &nbsp;
                                                            </span>
                                                            <span className="tf-qty-price">
                                                                
                                                                {totalPrice.toFixed(
                                                                    2,
                                                                )}
                                                            </span>
                                                        </a>
                                                    </form>
                                                </div>

                                                <div className="w-100">
                                                    <a
                                                        href="#"
                                                        className="btns-full btn-buy-now"
                                                    >
                                                        mua ngay
                                                    </a>
                                                    {/* <a
                                                        href="#"
                                                        className="payment-more-option"
                                                    >
                                                        More payment options
                                                    </a> */}
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="tf-product-info-delivery-return">
                                            <div className="row">
                                                <div className="col-xl-6 col-12">
                                                    <div className="tf-product-delivery">
                                                        <div className="icon">
                                                            <i className="icon-delivery-time"></i>
                                                        </div>
                                                        <div
                                                            style={{
                                                                textAlign:
                                                                    "center",
                                                            }}
                                                        >
                                                            <ShoppingCartOutlined
                                                                style={{
                                                                    fontSize: 24,
                                                                }}
                                                            />
                                                            <p>
                                                                Ensure the
                                                                quality of
                                                                delivered goods
                                                                is intact
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-12">
                                                    <div className="tf-product-delivery mb-0">
                                                        <div className="icon">
                                                            <i className="icon-return-order"></i>
                                                        </div>
                                                        <p>
                                                            Return within{" "}
                                                            <span className="fw-7">
                                                                30 days
                                                            </span>{" "}
                                                            of purchase. Duties
                                                            & taxes are
                                                            non-refundable.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="tf-product-info-trust-seal">
                                            <div className="tf-product-trust-mess">
                                                <i className="icon-safe"></i>
                                                {/* <p className="fw-6">
                                                    Guarantee Safe <br />{" "}
                                                    Checkout
                                                </p> */}
                                                {/* </div>
                                            <div className="tf-payment">
                                                <img
                                                    src="/images/payments/visa.png"
                                                    alt=""
                                                />
                                                <img
                                                    src="/images/payments/img-1.png"
                                                    alt=""
                                                />
                                                <img
                                                    src="/images/payments/img-2.png"
                                                    alt=""
                                                />
                                                <img
                                                    src="/images/payments/img-3.png"
                                                    alt=""
                                                />
                                                <img
                                                    src="/images/payments/img-4.png"
                                                    alt=""
                                                /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="tf-sticky-btn-atc">
                <div className="container">
                    <div className="tf-height-observer w-100 d-flex align-items-center">
                        <div className="tf-sticky-atc-product d-flex align-items-center">
                            <div className="tf-sticky-atc-img">
                                <img
                                    className="lazyloaded"
                                    src="https://lili.vn/wp-content/uploads/2022/06/Lac-tay-bac-nu-dinh-da-CZ-hinh-bong-hoa-hong-LILI_787759_1-400x400.jpg"
                                    alt="Product"
                                />
                            </div>
                            <div className="tf-sticky-atc-title fw-5 d-xl-block d-none">
                                Vòng tay đính đá ít họa tiết siêu đẹp
                            </div>
                        </div>
                        <div className="tf-sticky-atc-infos">
                            <form>
                                <div className="tf-sticky-atc-variant-price text-center">
                                    <select
                                        className="tf-select"
                                        value={selectedVariant || ""} // Cung cấp giá trị mặc định nếu null
                                        onChange={(e) =>
                                            setSelectedVariant(e.target.value)
                                        } // Cập nhật selectedVariant khi thay đổi
                                    >
                                        <option value="" disabled>
                                            Chọn màu , và size
                                        </option>{" "}
                                        {/* Tùy chọn mặc định */}
                                        <option value="Beige / S - $8.00">
                                            be / S - $8.00
                                        </option>
                                        <option value="Beige / M - $8.00">
                                            be / M - $8.00
                                        </option>
                                        <option value="Beige / L - $8.00">
                                            be / L - $8.00
                                        </option>
                                        <option value="Beige / XL - $8.00">
                                            be / XL - $8.00
                                        </option>
                                        <option value="Black / S - $8.00">
                                            đen / S - $8.00
                                        </option>
                                        <option value="Black / M - $8.00">
                                            đen / M - $8.00
                                        </option>
                                        <option value="Black / L - $8.00">
                                            đen / L - $8.00
                                        </option>
                                        <option value="Black / XL - $8.00">
                                            đen / XL - $8.00
                                        </option>
                                        <option value="Blue / S - $8.00">
                                            xanh biển / S - $8.00
                                        </option>
                                        <option value="Blue / M - $8.00">
                                            xanh biển / M - $8.00
                                        </option>
                                        <option value="Blue / L - $8.00">
                                            xanh biển / L - $8.00
                                        </option>
                                        <option value="Blue / XL - $8.00">
                                            xanh biển / XL - $8.00
                                        </option>
                                        <option value="White / S - $8.00">
                                            Trắng / S - $8.00
                                        </option>
                                        <option value="White / M - $8.00">
                                            Trắng / M - $8.00
                                        </option>
                                        <option value="White / L - $8.00">
                                            Trắng / L - $8.00
                                        </option>
                                        <option value="White / XL - $8.00">
                                            Trắng / XL - $8.00
                                        </option>
                                    </select>
                                </div>

                                {/* Hiển thị variant đã chọn */}
                                {selectedVariant && (
                                    <p>Đã chọn variant: {selectedVariant}</p>
                                )}

                                <div className="tf-sticky-atc-btns">
                                    <div className="tf-product-info-quantity">
                                        <div className="wg-quantity">
                                            <span
                                                className="btn-quantity minus-btn"
                                                onClick={() =>
                                                    handleQuantityChange(-1)
                                                }
                                            >
                                                -
                                            </span>
                                            <input
                                                type="text"
                                                name="number"
                                                value={quantity}
                                                readOnly
                                            />
                                            <span
                                                className="btn-quantity plus-btn"
                                                onClick={() =>
                                                    handleQuantityChange(1)
                                                }
                                            >
                                                +
                                            </span>
                                        </div>
                                    </div>
                                    <a
                                        href="javascript:void(0);"
                                        className="tf-btn btn-fill radius-3 justify-content-center fw-6 fs-14 flex-grow-1 animate-hover-btn btn-add-to-cart"
                                    >
                                        <span>Thêm vào giỏ hàng</span>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <section className="flat-spacing-17 pt_0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="widget-tabs style-has-border">
                                <ul className="widget-menu-tab">
                                    <li className="item-title active">
                                        <span className="inner">
                                            Miêu tả sản phẩm
                                        </span>
                                    </li>
                                    {/* <li className="item-title">
                                        <span className="inner">Review</span>
                                    </li>
                                    <li className="item-title">
                                        <span className="inner">Shipping</span>
                                    </li>
                                    <li className="item-title">
                                        <span className="inner">
                                            Return Policies
                                        </span>
                                    </li> */}
                                </ul>
                                <div className="widget-content-tab">
                                    <div className="widget-content-inner active">
                                        <div>
                                            <p className="mb_30">
                                                Vòng tay đính đá lấp lánh, tôn
                                                lên vẻ đẹp sang trọng và quý
                                                phái, là điểm nhấn hoàn hảo cho
                                                mọi trang phục.Thiết kế tinh tế
                                                với những viên đá quý được gắn
                                                tỉ mỉ, vòng tay mang đến sự cuốn
                                                hút và phong cách thời
                                                thượng.Vòng tay đính đá sáng
                                                bóng, vừa thanh lịch vừa tinh
                                                tế, phù hợp cho những dịp quan
                                                trọng và cả ngày thường
                                            </p>
                                            <div className="tf-product-des-demo">
                                                <div className="right">
                                                    <h3 className="fs-16 fw-5">
                                                        đặc Trưng
                                                    </h3>
                                                    <ul>
                                                        <li>
                                                            Được làm bằng vàng
                                                        </li>
                                                        <li>
                                                            Đính đá siêu đẹp
                                                        </li>
                                                        <li>Nhỏ gọn mềm mại</li>
                                                    </ul>
                                                    {/* <h3 className="fs-16 fw-5">
                                                        Materials Care
                                                    </h3>
                                                    <ul className="mb-0">
                                                        <li>
                                                            Content: 100%
                                                            LENZING™ ECOVERO™
                                                            Viscose
                                                        </li>
                                                        <li>Care: Hand wash</li>
                                                        <li>Imported</li>
                                                    </ul> */}
                                                </div>
                                                <div className="left">
                                                    <h3 className="fs-16 fw-5">
                                                        Chăm sóc vật liệu
                                                    </h3>
                                                    <div className="d-flex gap-10 mb_15 align-items-center">
                                                        <div className="icon">
                                                            <i className="icon-machine"></i>
                                                        </div>
                                                        <span>
                                                            Tránh tiếp xúc với
                                                            hóa chất
                                                        </span>
                                                    </div>
                                                    <div className="d-flex gap-10 mb_15 align-items-center">
                                                        <div className="icon">
                                                            <i className="icon-iron"></i>
                                                        </div>
                                                        <span>
                                                            . Tránh tiếp xúc
                                                            nhiệt độ cao
                                                        </span>
                                                    </div>
                                                    <div className="d-flex gap-10 mb_15 align-items-center">
                                                        <div className="icon">
                                                            <i className="icon-bleach"></i>
                                                        </div>
                                                        <span>
                                                            . Tránh tiếp xúc với
                                                            hóa chất
                                                        </span>
                                                    </div>
                                                    {/* <div className="d-flex gap-10 mb_15 align-items-center">
                                                        <div className="icon">
                                                            <i className="icon-dry-clean"></i>
                                                        </div>
                                                        <span>
                                                            Do not dry clean.
                                                        </span>
                                                    </div>
                                                    <div className="d-flex gap-10 align-items-center">
                                                        <div className="icon">
                                                            <i className="icon-tumble-dry"></i>
                                                        </div>
                                                        <span>
                                                            Tumble dry, medium
                                                            heat.
                                                        </span>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-content-inner">
                                        <table className="tf-pr-attrs">
                                            <tbody>
                                                <tr className="tf-attr-pa-color">
                                                    <th className="tf-attr-label">
                                                        màu
                                                    </th>
                                                    <td className="tf-attr-value">
                                                        <p>Trắng, Hồng , Đen</p>
                                                    </td>
                                                </tr>
                                                <tr className="tf-attr-pa-size">
                                                    <th className="tf-attr-label">
                                                        Kích thước
                                                    </th>
                                                    <td className="tf-attr-value">
                                                        <p>S, M, L, XL</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="widget-content-inner">
                                        <div className="tf-page-privacy-policy">
                                            <div className="title">
                                                The Company Private Limited
                                                Policy
                                            </div>
                                            <p>
                                                The Company Private Limited and
                                                each of their respective
                                                subsidiary, parent and
                                                affiliated companies is deemed
                                                to operate this Website (“we” or
                                                “us”) recognizes that you care
                                                how information about you is
                                                used and shared. We have created
                                                this Privacy Policy to inform
                                                you what information we collect
                                                on the Website, how we use your
                                                information and the choices you
                                                have about the way your
                                                information is collected and
                                                used. Please read this Privacy
                                                Policy carefully. Your use of
                                                the Website indicates that you
                                                have read and accepted our
                                                privacy practices, as outlined
                                                in this Privacy Policy.
                                            </p>
                                            <p>
                                                Please be advised that the
                                                practices described in this
                                                Privacy Policy apply to
                                                information gathered by us or
                                                our subsidiaries, affiliates or
                                                agents: (i) through this
                                                Website, (ii) where applicable,
                                                through our Customer Service
                                                Department in connection with
                                                this Website, (iii) through
                                                information provided to us in
                                                our free standing retail stores,
                                                and (iv) through information
                                                provided to us in conjunction
                                                with marketing promotions and
                                                sweepstakes.
                                            </p>
                                            <p>
                                                We are not responsible for the
                                                content or privacy practices on
                                                any websites.
                                            </p>
                                            <p>
                                                We reserve the right, at our
                                                sole discretion, to change,
                                                modify, add or remove portions
                                                of this Privacy Policy at any
                                                time. We will update the Privacy
                                                Policy as appropriate. Please
                                                check the Privacy Policy
                                                periodically for changes. Your
                                                continued use of the Website
                                                following the posting of changes
                                                to this Privacy Policy will mean
                                                you accept those changes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flat-spacing-1 pt_0">
                <div className="container">
                    <div className="flat-title">
                        <span className="title">
                            Sản phẩm mọi người đã mua nhiều{" "}
                        </span>
                    </div>
                    <div className="hover-sw-nav hover-sw-2">
                        <div
                            className="swiper tf-sw-product-sell wrap-sw-over"
                            data-preview="4"
                            data-tablet="3"
                            data-mobile="2"
                            data-space-lg="30"
                            data-space-md="15"
                            data-pagination="2"
                            data-pagination-md="3"
                            data-pagination-lg="3"
                        >
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="card-product">
                                        <div className="card-product-wrapper">
                                            <a
                                                href="product-detail.html"
                                                className="product-img"
                                            >
                                                <img
                                                    className="lazyload img-product"
                                                    data-src="images/products/orange-1.jpg"
                                                    src="images/products/orange-1.jpg"
                                                    alt="image-product"
                                                />
                                                <img
                                                    className="lazyload img-hover"
                                                    data-src="images/products/white-1.jpg"
                                                    src="images/products/white-1.jpg"
                                                    alt="image-product"
                                                />
                                            </a>
                                            <div className="list-product-btn">
                                                <a
                                                    href="#quick_add"
                                                    data-bs-toggle="modal"
                                                    className="box-icon bg_white quick-add tf-btn-loading"
                                                >
                                                    <ShoppingCartOutlined />
                                                    <span className="tooltip">
                                                       thêm vào giỏ hàng
                                                    </span>
                                                </a>
                                                <a
                                                    href="javascript:void(0);"
                                                    className="box-icon bg_white wishlist btn-icon-action"
                                                >
                                                  <EyeOutlined />
                                                    <span className="tooltip">
                                                        xem chi tiết sản phẩm
                                                    </span>
                                                    <span className="icon icon-delete"></span>
                                                </a>
                                               
                                            </div>
                                            <div className="size-list">
                                                <span>S</span>
                                                <span>M</span>
                                                <span>L</span>
                                                <span>XL</span>
                                            </div>
                                        </div>
                                        <div className="card-product-info">
                                            <a
                                                href="product-detail.html"
                                                className="title link"
                                            >
                                                vòng cổ đính đá
                                            </a>
                                            <span className="price">
                                                1.600.950đ
                                            </span>
                                            <ul className="list-color-product">
                                                {colors.map((color) => (
                                                    <li
                                                        key={color.value}
                                                        className={`list-color-item color-swatch ${selectedColor === color.value ? "active" : ""}`}
                                                        onClick={() =>
                                                            setSelectedColor(
                                                                color.value,
                                                            )
                                                        }
                                                    >
                                                        <span className="tooltip">
                                                            {color.name}
                                                        </span>
                                                        <span
                                                            className={`swatch-value bg_${color.value}`}
                                                        ></span>
                                                        <img
                                                            className="lazyload"
                                                            data-src={
                                                                color.image
                                                            }
                                                            src={color.image}
                                                            alt={`image-product-${color.value}`}
                                                        />
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card-product">
                                        <div className="card-product-wrapper">
                                            <a
                                                href="product-detail.html"
                                                className="product-img"
                                            >
                                                <img
                                                    className="lazyload img-product"
                                                    data-src="images/products/white-3.jpg"
                                                    src="images/products/white-3.jpg"
                                                    alt="image-product"
                                                />
                                                <img
                                                    className="lazyload img-hover"
                                                    data-src="images/products/white-4.jpg"
                                                    src="images/products/white-4.jpg"
                                                    alt="image-product"
                                                />
                                            </a>
                                            <div className="list-product-btn">
                                                <a
                                                    href="#shoppingCart"
                                                    data-bs-toggle="modal"
                                                    className="box-icon bg_white quick-add tf-btn-loading"
                                                >
                                                    <span className="icon icon-bag"></span>
                                                    <span className="tooltip">
                                                        Add to cart
                                                    </span>
                                                </a>
                                                <a
                                                    href="javascript:void(0);"
                                                    className="box-icon bg_white wishlist btn-icon-action"
                                                >
                                                    <span className="icon icon-heart"></span>
                                                    <span className="tooltip">
                                                        Add to Wishlist
                                                    </span>
                                                    <span className="icon icon-delete"></span>
                                                </a>
                                                <a
                                                    href="#compare"
                                                    data-bs-toggle="offcanvas"
                                                    aria-controls="offcanvasLeft"
                                                    className="box-icon bg_white compare btn-icon-action"
                                                >
                                                    <span className="icon icon-compare"></span>
                                                    <span className="tooltip">
                                                        Add to Compare
                                                    </span>
                                                    <span className="icon icon-check"></span>
                                                </a>
                                                <a
                                                    href="#quick_view"
                                                    data-bs-toggle="modal"
                                                    className="box-icon bg_white quickview tf-btn-loading"
                                                >
                                                    <span className="icon icon-view"></span>
                                                    <span className="tooltip">
                                                        Quick View
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="size-list">
                                                <span>S</span>
                                                <span>M</span>
                                                <span>L</span>
                                                <span>XL</span>
                                            </div>
                                        </div>
                                        <div className="card-product-info">
                                            <a
                                                href="product-detail.html"
                                                className="title link"
                                            >
                                                Oversized Printed T-shirt
                                            </a>
                                            <span className="price">
                                                $10.00
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card-product">
                                        <div className="product-container">
                                            <div className="card-product-wrapper">
                                                <a
                                                    href="product-detail.html"
                                                    className="product-img"
                                                >
                                                    <img
                                                        className="lazyload img-product"
                                                        data-src="images/products/white-2.jpg"
                                                        src="images/products/white-2.jpg"
                                                        alt="image-product"
                                                    />
                                                    <img
                                                        className="lazyload img-hover"
                                                        data-src="images/products/pink-1.jpg"
                                                        src="images/products/pink-1.jpg"
                                                        alt="image-product"
                                                    />
                                                </a>
                                                <div className="list-product-btn">
                                                    {/* Nút hành động */}
                                                </div>
                                                <div className="size-list">
                                                    <span>S</span>
                                                    <span>M</span>
                                                    <span>L</span>
                                                    <span>XL</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card-product">
                                        <div className="card-product-wrapper">
                                            <a
                                                href="product-detail.html"
                                                className="product-img"
                                            >
                                                <img
                                                    className="lazyload img-product"
                                                    data-src="images/products/white-3.jpg"
                                                    src="images/products/white-3.jpg"
                                                    alt="image-product"
                                                />
                                                <img
                                                    className="lazyload img-hover"
                                                    data-src="images/products/white-4.jpg"
                                                    src="images/products/white-4.jpg"
                                                    alt="image-product"
                                                />
                                            </a>
                                            <div className="list-product-btn">
                                                <a
                                                    href="#shoppingCart"
                                                    data-bs-toggle="modal"
                                                    className="box-icon bg_white quick-add tf-btn-loading"
                                                >
                                                    <span className="icon icon-bag"></span>
                                                    <span className="tooltip">
                                                        Add to cart
                                                    </span>
                                                </a>
                                                <a
                                                    href="javascript:void(0);"
                                                    className="box-icon bg_white wishlist btn-icon-action"
                                                >
                                                    <span className="icon icon-heart"></span>
                                                    <span className="tooltip">
                                                        Add to Wishlist
                                                    </span>
                                                    <span className="icon icon-delete"></span>
                                                </a>
                                                <a
                                                    href="#compare"
                                                    data-bs-toggle="offcanvas"
                                                    aria-controls="offcanvasLeft"
                                                    className="box-icon bg_white compare btn-icon-action"
                                                >
                                                    <span className="icon icon-compare"></span>
                                                    <span className="tooltip">
                                                        Add to Compare
                                                    </span>
                                                    <span className="icon icon-check"></span>
                                                </a>
                                                <a
                                                    href="#quick_view"
                                                    data-bs-toggle="modal"
                                                    className="box-icon bg_white quickview tf-btn-loading"
                                                >
                                                    <span className="icon icon-view"></span>
                                                    <span className="tooltip">
                                                        Quick View
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="size-list">
                                                <span>S</span>
                                                <span>M</span>
                                                <span>L</span>
                                                <span>XL</span>
                                            </div>
                                        </div>
                                        <div className="card-product-info">
                                            <a
                                                href="product-detail.html"
                                                className="title link"
                                            >
                                                Oversized Printed T-shirt
                                            </a>
                                            <span className="price">
                                                $10.00
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card-product">
                                        <div className="product-container">
                                            <div className="card-product-wrapper">
                                                <a
                                                    href="product-detail.html"
                                                    className="product-img"
                                                >
                                                    <img
                                                        className="lazyload img-product"
                                                        data-src="images/products/white-2.jpg"
                                                        src="images/products/white-2.jpg"
                                                        alt="image-product"
                                                    />
                                                    <img
                                                        className="lazyload img-hover"
                                                        data-src="images/products/pink-1.jpg"
                                                        src="images/products/pink-1.jpg"
                                                        alt="image-product"
                                                    />
                                                </a>
                                                <div className="list-product-btn">
                                                    {/* Nút hành động */}
                                                </div>
                                                <div className="size-list">
                                                    <span>S</span>
                                                    <span>M</span>
                                                    <span>L</span>
                                                    <span>XL</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card-product">
                                        <div className="product-container">
                                            <div className="card-product-wrapper">
                                                <a
                                                    href="product-detail.html"
                                                    className="product-img"
                                                >
                                                    <img
                                                        className="lazyload img-product"
                                                        data-src="images/products/white-2.jpg"
                                                        src="images/products/white-2.jpg"
                                                        alt="image-product"
                                                    />
                                                    <img
                                                        className="lazyload img-hover"
                                                        data-src="images/products/pink-1.jpg"
                                                        src="images/products/pink-1.jpg"
                                                        alt="image-product"
                                                    />
                                                </a>
                                                <div className="list-product-btn">
                                                    {/* Nút hành động */}
                                                </div>
                                                <div className="size-list">
                                                    <span>S</span>
                                                    <span>M</span>
                                                    <span>L</span>
                                                    <span>XL</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card-product">
                                        <div className="card-product-wrapper">
                                            <a
                                                href="product-detail.html"
                                                className="product-img"
                                            >
                                                <img
                                                    className="lazyload img-product"
                                                    data-src="images/products/brown-2.jpg"
                                                    src="images/products/brown-2.jpg"
                                                    alt="image-product"
                                                />
                                                <img
                                                    className="lazyload img-hover"
                                                    data-src="images/products/brown-3.jpg"
                                                    src="images/products/brown-3.jpg"
                                                    alt="image-product"
                                                />
                                            </a>
                                            <div className="size-list">
                                                <span>S</span>
                                                <span>M</span>
                                                <span>L</span>
                                                <span>XL</span>
                                            </div>
                                            <div className="list-product-btn">
                                                <a
                                                    href="#quick_add"
                                                    data-bs-toggle="modal"
                                                    className="box-icon bg_white quick-add tf-btn-loading"
                                                >
                                                    <span className="icon icon-bag"></span>
                                                    <span className="tooltip">
                                                        Quick Add
                                                    </span>
                                                </a>
                                                <a
                                                    href="javascript:void(0);"
                                                    className="box-icon bg_white wishlist btn-icon-action"
                                                >
                                                    <span className="icon icon-heart"></span>
                                                    <span className="tooltip">
                                                        Add to Wishlist
                                                    </span>
                                                    <span className="icon icon-delete"></span>
                                                </a>
                                                <a
                                                    href="#compare"
                                                    data-bs-toggle="offcanvas"
                                                    aria-controls="offcanvasLeft"
                                                    className="box-icon bg_white compare btn-icon-action"
                                                >
                                                    <span className="icon icon-compare"></span>
                                                    <span className="tooltip">
                                                        Add to Compare
                                                    </span>
                                                    <span className="icon icon-check"></span>
                                                </a>
                                                <a
                                                    href="#quick_view"
                                                    data-bs-toggle="modal"
                                                    className="box-icon bg_white quickview tf-btn-loading"
                                                >
                                                    <span className="icon icon-view"></span>
                                                    <span className="tooltip">
                                                        Quick View
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="card-product-info">
                                            <a
                                                href="product-detail.html"
                                                className="title link"
                                            >
                                                V-neck linen T-shirt
                                            </a>
                                            <span className="price">
                                                $114.95
                                            </span>
                                            <ul className="list-color-product">
                                                <li className="list-color-item color-swatch active">
                                                    <span className="tooltip">
                                                        Brown
                                                    </span>
                                                    <span className="swatch-value bg_brown"></span>
                                                    <img
                                                        className="lazyload"
                                                        data-src="images/products/brown-2.jpg"
                                                        src="images/products/brown-2.jpg"
                                                        alt="image-product"
                                                    />
                                                </li>
                                                <li className="list-color-item color-swatch">
                                                    <span className="tooltip">
                                                        White
                                                    </span>
                                                    <span className="swatch-value bg_white"></span>
                                                    <img
                                                        className="lazyload"
                                                        data-src="images/products/white-5.jpg"
                                                        src="images/products/white-5.jpg"
                                                        alt="image-product"
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card-product">
                                        <div className="card-product-wrapper">
                                            <a
                                                href="product-detail.html"
                                                className="product-img"
                                            >
                                                <img
                                                    className="lazyload img-product"
                                                    data-src="images/products/light-green-1.jpg"
                                                    src="images/products/light-green-1.jpg"
                                                    alt="image-product"
                                                />
                                                <img
                                                    className="lazyload img-hover"
                                                    data-src="images/products/light-green-2.jpg"
                                                    src="images/products/light-green-2.jpg"
                                                    alt="image-product"
                                                />
                                            </a>
                                            <div className="list-product-btn absolute-2">
                                                <a
                                                    href="#quick_add"
                                                    data-bs-toggle="modal"
                                                    className="box-icon bg_white quick-add tf-btn-loading"
                                                >
                                                    <span className="icon icon-bag"></span>
                                                    <span className="tooltip">
                                                        Quick Add
                                                    </span>
                                                </a>
                                                <a
                                                    href="javascript:void(0);"
                                                    className="box-icon bg_white wishlist btn-icon-action"
                                                >
                                                    <span className="icon icon-heart"></span>
                                                    <span className="tooltip">
                                                        Add to Wishlist
                                                    </span>
                                                    <span className="icon icon-delete"></span>
                                                </a>
                                                <a
                                                    href="#compare"
                                                    data-bs-toggle="offcanvas"
                                                    aria-controls="offcanvasLeft"
                                                    className="box-icon bg_white compare btn-icon-action"
                                                >
                                                    <span className="icon icon-compare"></span>
                                                    <span className="tooltip">
                                                        Add to Compare
                                                    </span>
                                                    <span className="icon icon-check"></span>
                                                </a>
                                                <a
                                                    href="#quick_view"
                                                    data-bs-toggle="modal"
                                                    className="box-icon bg_white quickview tf-btn-loading"
                                                >
                                                    <span className="icon icon-view"></span>
                                                    <span className="tooltip">
                                                        Quick View
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="card-product-info">
                                            <a
                                                href="product-detail.html"
                                                className="title link"
                                            >
                                                Loose Fit Sweatshirt
                                            </a>
                                            <span className="price">
                                                $10.00
                                            </span>
                                            <ul className="list-color-product">
                                                <li className="list-color-item color-swatch active">
                                                    <span className="tooltip">
                                                        Light Green
                                                    </span>
                                                    <span className="swatch-value bg_light-green"></span>
                                                    <img
                                                        className="lazyload"
                                                        data-src="images/products/light-green-1.jpg"
                                                        src="images/products/light-green-1.jpg"
                                                        alt="image-product"
                                                    />
                                                </li>
                                                <li className="list-color-item color-swatch">
                                                    <span className="tooltip">
                                                        Black
                                                    </span>
                                                    <span className="swatch-value bg_dark"></span>
                                                    <img
                                                        className="lazyload"
                                                        data-src="images/products/black-3.jpg"
                                                        src="images/products/black-3.jpg"
                                                        alt="image-product"
                                                    />
                                                </li>
                                                <li className="list-color-item color-swatch">
                                                    <span className="tooltip">
                                                        Blue
                                                    </span>
                                                    <span className="swatch-value bg_blue-2"></span>
                                                    <img
                                                        className="lazyload"
                                                        data-src="images/products/blue.jpg"
                                                        src="images/products/blue.jpg"
                                                        alt="image-product"
                                                    />
                                                </li>
                                                <li className="list-color-item color-swatch">
                                                    <span className="tooltip">
                                                        Dark Blue
                                                    </span>
                                                    <span className="swatch-value bg_dark-blue"></span>
                                                    <img
                                                        className="lazyload"
                                                        data-src="images/products/dark-blue.jpg"
                                                        src="images/products/dark-blue.jpg"
                                                        alt="image-product"
                                                    />
                                                </li>
                                                <li className="list-color-item color-swatch">
                                                    <span className="tooltip">
                                                        White
                                                    </span>
                                                    <span className="swatch-value bg_white"></span>
                                                    <img
                                                        className="lazyload"
                                                        data-src="images/products/white-6.jpg"
                                                        src="images/products/white-6.jpg"
                                                        alt="image-product"
                                                    />
                                                </li>
                                                <li className="list-color-item color-swatch">
                                                    <span className="tooltip">
                                                        Light Grey
                                                    </span>
                                                    <span className="swatch-value bg_light-grey"></span>
                                                    <img
                                                        className="lazyload"
                                                        data-src="images/products/light-grey.jpg"
                                                        src="images/products/light-grey.jpg"
                                                        alt="image-product"
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="nav-sw nav-next-slider nav-next-product box-icon w_46 round">
                            <span className="icon icon-arrow-left"></span>
                        </div>
                        <div className="nav-sw nav-prev-slider nav-prev-product box-icon w_46 round">
                            <span className="icon icon-arrow-right"></span>
                        </div>
                        <div className="sw-dots style-2 sw-pagination-product justify-content-center"></div>
                    </div>
                </div>
            </section>
            <section className="flat-spacing-4 pt_0">
                <div className="container">
                    <div className="flat-title">
                        <span className="title">Sản phẩm đã xem gần đây</span>
                    </div>
                    <div className="hover-sw-nav hover-sw-2">
                        <div
                            className="swiper tf-sw-recent wrap-sw-over"
                            data-preview="4"
                            data-tablet="3"
                            data-mobile="2"
                            data-space-lg="30"
                            data-space-md="30"
                            data-space="15"
                            data-pagination="1"
                            data-pagination-md="1"
                            data-pagination-lg="1"
                        >
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="card-product">
                                        <div className="card-product-wrapper">
                                            <a
                                                href="product-detail.html"
                                                className="product-img"
                                            >
                                                <img
                                                    className="lazyload img-product"
                                                    data-src="images/products/light-green-1.jpg"
                                                    src="images/products/light-green-1.jpg"
                                                    alt="image-product"
                                                />
                                                <img
                                                    className="lazyload img-hover"
                                                    data-src="images/products/light-green-2.jpg"
                                                    src="images/products/light-green-2.jpg"
                                                    alt="image-product"
                                                />
                                            </a>
                                            <div className="list-product-btn absolute-2">
                                                <a
                                                    href="#quick_add"
                                                    data-bs-toggle="modal"
                                                    className="box-icon bg_white quick-add tf-btn-loading"
                                                >
                                                    <ShoppingCartOutlined />{" "}
                                                    {/* Sử dụng icon Ant Design */}
                                                    <span className="tooltip">
                                                        thêm vào giỏ hàng
                                                    </span>
                                                </a>
                                                {/* <a
                                                    href="javascript:void(0);"
                                                    className="box-icon bg_white wishlist btn-icon-action"
                                                >
                                                    <span className="icon icon-heart"></span>
                                                    <span className="tooltip">
                                                        Add to Wishlist
                                                    </span>
                                                    <span className="icon icon-delete"></span>
                                                </a> */}
                                                {/* <a
                                                    href="#compare"
                                                    data-bs-toggle="offcanvas"
                                                    aria-controls="offcanvasLeft"
                                                    className="box-icon bg_white compare btn-icon-action"
                                                >
                                                    <span className="icon icon-compare"></span>
                                                    <span className="tooltip">
                                                        Add to Compare
                                                    </span>
                                                    <span className="icon icon-check"></span>
                                                </a> */}
                                                <a
                                                    href="#quick_view"
                                                    data-bs-toggle="modal"
                                                    className="box-icon bg_white quickview tf-btn-loading"
                                                >
                                                    <EyeOutlined />{" "}
                                                    {/* Thay thế bằng icon Ant Design */}
                                                    <span className="tooltip">
                                                        Xem chi tiết sản phẩm
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="card-product-info">
                                            <a
                                                href="product-detail.html"
                                                className="title link"
                                            >
                                                Vòng tay đá
                                            </a>
                                            <span className="price">
                                                1.000.000đ
                                            </span>
                                            <ul className="list-color-product">
                                                {colors.map((color) => (
                                                    <li
                                                        key={color.value}
                                                        className={`list-color-item color-swatch ${selectedColor === color.value ? "active" : ""}`}
                                                        onClick={() =>
                                                            setSelectedColor(
                                                                color.value,
                                                            )
                                                        } // Thay đổi trạng thái khi nhấp vào
                                                    >
                                                        <span className="tooltip">
                                                            {color.name}
                                                        </span>
                                                        <span
                                                            className={`swatch-value bg_${color.value}`}
                                                        ></span>
                                                        <img
                                                            className="lazyload"
                                                            data-src={
                                                                color.image
                                                            }
                                                            src={color.image}
                                                            alt={`image-product-${color.value}`}
                                                        />
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card-product">
                                        <div className="card-product-wrapper">
                                            <a
                                                href="product-detail.html"
                                                className="product-img"
                                            >
                                                <img
                                                    className="lazyload img-product"
                                                    data-src="images/products/brown-2.jpg"
                                                    src="images/products/brown-2.jpg"
                                                    alt="image-product"
                                                />
                                                <img
                                                    className="lazyload img-hover"
                                                    data-src="images/products/brown-3.jpg"
                                                    src="images/products/brown-3.jpg"
                                                    alt="image-product"
                                                />
                                            </a>
                                            <div className="size-list">
                                                <span>S</span>
                                                <span>M</span>
                                                <span>L</span>
                                                <span>XL</span>
                                            </div>
                                            <div className="list-product-btn">
                                                <a
                                                    href="#quick_add"
                                                    data-bs-toggle="modal"
                                                    className="box-icon bg_white quick-add tf-btn-loading"
                                                >
                                                    <span className="icon icon-bag"></span>
                                                    <span className="tooltip">
                                                        Quick Add
                                                    </span>
                                                </a>
                                                <a
                                                    href="javascript:void(0);"
                                                    className="box-icon bg_white wishlist btn-icon-action"
                                                >
                                                    <span className="icon icon-heart"></span>
                                                    <span className="tooltip">
                                                        Add to Wishlist
                                                    </span>
                                                    <span className="icon icon-delete"></span>
                                                </a>
                                                <a
                                                    href="#compare"
                                                    data-bs-toggle="offcanvas"
                                                    aria-controls="offcanvasLeft"
                                                    className="box-icon bg_white compare btn-icon-action"
                                                >
                                                    <span className="icon icon-compare"></span>
                                                    <span className="tooltip">
                                                        Add to Compare
                                                    </span>
                                                    <span className="icon icon-check"></span>
                                                </a>
                                                <a
                                                    href="#quick_view"
                                                    data-bs-toggle="modal"
                                                    className="box-icon bg_white quickview tf-btn-loading"
                                                >
                                                    <span className="icon icon-view"></span>
                                                    <span className="tooltip">
                                                        Quick View
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="card-product-info">
                                            <a
                                                href="product-detail.html"
                                                className="title link"
                                            >
                                                V-neck linen T-shirt
                                            </a>
                                            <span className="price">
                                                $114.95
                                            </span>
                                            <ul className="list-color-product">
                                                <li className="list-color-item color-swatch active">
                                                    <span className="tooltip">
                                                        Brown
                                                    </span>
                                                    <span className="swatch-value bg_brown"></span>
                                                    <img
                                                        className="lazyload"
                                                        data-src="images/products/brown-2.jpg"
                                                        src="images/products/brown-2.jpg"
                                                        alt="image-product"
                                                    />
                                                </li>
                                                <li className="list-color-item color-swatch">
                                                    <span className="tooltip">
                                                        White
                                                    </span>
                                                    <span className="swatch-value bg_white"></span>
                                                    <img
                                                        className="lazyload"
                                                        data-src="images/products/white-5.jpg"
                                                        src="images/products/white-5.jpg"
                                                        alt="image-product"
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card-product">
                                        <div className="card-product-wrapper">
                                            <a
                                                href="product-detail.html"
                                                className="product-img"
                                            >
                                                <img
                                                    className="lazyload img-product"
                                                    data-src="images/products/white-2.jpg"
                                                    src="images/products/white-2.jpg"
                                                    alt="image-product"
                                                />
                                                <img
                                                    className="lazyload img-hover"
                                                    data-src="images/products/pink-1.jpg"
                                                    src="images/products/pink-1.jpg"
                                                    alt="image-product"
                                                />
                                            </a>
                                            <div className="list-product-btn">
                                                <a
                                                    href="#quick_add"
                                                    data-bs-toggle="modal"
                                                    className="box-icon bg_white quick-add tf-btn-loading"
                                                >
                                                    <span className="icon icon-bag"></span>
                                                    <span className="tooltip">
                                                        Quick Add
                                                    </span>
                                                </a>
                                                <a
                                                    href="javascript:void(0);"
                                                    className="box-icon bg_white wishlist btn-icon-action"
                                                >
                                                    <span className="icon icon-heart"></span>
                                                    <span className="tooltip">
                                                        Add to Wishlist
                                                    </span>
                                                    <span className="icon icon-delete"></span>
                                                </a>
                                                <a
                                                    href="#compare"
                                                    data-bs-toggle="offcanvas"
                                                    aria-controls="offcanvasLeft"
                                                    className="box-icon bg_white compare btn-icon-action"
                                                >
                                                    <span className="icon icon-compare"></span>
                                                    <span className="tooltip">
                                                        Add to Compare
                                                    </span>
                                                    <span className="icon icon-check"></span>
                                                </a>
                                                <a
                                                    href="#quick_view"
                                                    data-bs-toggle="modal"
                                                    className="box-icon bg_white quickview tf-btn-loading"
                                                >
                                                    <span className="icon icon-view"></span>
                                                    <span className="tooltip">
                                                        Quick View
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="size-list">
                                                <span>S</span>
                                                <span>M</span>
                                                <span>L</span>
                                                <span>XL</span>
                                            </div>
                                        </div>
                                        <div className="card-product-info">
                                            <a
                                                href="product-detail.html"
                                                className="title"
                                            >
                                                Oversized Printed T-shirt
                                            </a>
                                            <span className="price">
                                                $16.95
                                            </span>
                                            <ul className="list-color-product">
                                                <li className="list-color-item color-swatch active">
                                                    <span className="tooltip">
                                                        White
                                                    </span>
                                                    <span className="swatch-value bg_white"></span>
                                                    <img
                                                        className="lazyload"
                                                        data-src="images/products/white-2.jpg"
                                                        src="images/products/white-2.jpg"
                                                        alt="image-product"
                                                    />
                                                </li>
                                                <li className="list-color-item color-swatch">
                                                    <span className="tooltip">
                                                        Pink
                                                    </span>
                                                    <span className="swatch-value bg_purple"></span>
                                                    <img
                                                        className="lazyload"
                                                        data-src="images/products/pink-1.jpg"
                                                        src="images/products/pink-1.jpg"
                                                        alt="image-product"
                                                    />
                                                </li>
                                                <li className="list-color-item color-swatch">
                                                    <span className="tooltip">
                                                        Black
                                                    </span>
                                                    <span className="swatch-value bg_dark"></span>
                                                    <img
                                                        className="lazyload"
                                                        data-src="images/products/black-2.jpg"
                                                        src="images/products/black-2.jpg"
                                                        alt="image-product"
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card-product">
                                        <div className="card-product-wrapper">
                                            <a
                                                href="product-detail.html"
                                                className="product-img"
                                            >
                                                <img
                                                    className="lazyload img-product"
                                                    data-src="images/products/white-3.jpg"
                                                    src="images/products/white-3.jpg"
                                                    alt="image-product"
                                                />
                                                <img
                                                    className="lazyload img-hover"
                                                    data-src="images/products/white-4.jpg"
                                                    src="images/products/white-4.jpg"
                                                    alt="image-product"
                                                />
                                            </a>
                                            <div className="list-product-btn">
                                                <a
                                                    href="#shoppingCart"
                                                    data-bs-toggle="modal"
                                                    className="box-icon bg_white quick-add tf-btn-loading"
                                                >
                                                    <span className="icon icon-bag"></span>
                                                    <span className="tooltip">
                                                        Add to cart
                                                    </span>
                                                </a>
                                                <a
                                                    href="javascript:void(0);"
                                                    className="box-icon bg_white wishlist btn-icon-action"
                                                >
                                                    <span className="icon icon-heart"></span>
                                                    <span className="tooltip">
                                                        Add to Wishlist
                                                    </span>
                                                    <span className="icon icon-delete"></span>
                                                </a>
                                                <a
                                                    href="#compare"
                                                    data-bs-toggle="offcanvas"
                                                    aria-controls="offcanvasLeft"
                                                    className="box-icon bg_white compare btn-icon-action"
                                                >
                                                    <span className="icon icon-compare"></span>
                                                    <span className="tooltip">
                                                        Add to Compare
                                                    </span>
                                                    <span className="icon icon-check"></span>
                                                </a>
                                                <a
                                                    href="#quick_view"
                                                    data-bs-toggle="modal"
                                                    className="box-icon bg_white quickview tf-btn-loading"
                                                >
                                                    <span className="icon icon-view"></span>
                                                    <span className="tooltip">
                                                        Quick View
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="size-list">
                                                <span>S</span>
                                                <span>M</span>
                                                <span>L</span>
                                                <span>XL</span>
                                            </div>
                                        </div>
                                        <div className="card-product-info">
                                            <a
                                                href="product-detail.html"
                                                className="title link"
                                            >
                                                Oversized Printed T-shirt
                                            </a>
                                            <span className="price">
                                                $10.00
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card-product">
                                        <div className="card-product-wrapper">
                                            <a
                                                href="product-detail.html"
                                                className="product-img"
                                            >
                                                <img
                                                    className="lazyload img-product"
                                                    data-src="images/products/brown.jpg"
                                                    src="images/products/brown.jpg"
                                                    alt="image-product"
                                                />
                                                <img
                                                    className="lazyload img-hover"
                                                    data-src="images/products/purple.jpg"
                                                    src="images/products/purple.jpg"
                                                    alt="image-product"
                                                />
                                            </a>
                                            <div className="list-product-btn">
                                                <a
                                                    href="#quick_add"
                                                    data-bs-toggle="modal"
                                                    className="box-icon bg_white quick-add tf-btn-loading"
                                                >
                                                    <span className="icon icon-bag"></span>
                                                    <span className="tooltip">
                                                        Quick Add
                                                    </span>
                                                </a>
                                                <a
                                                    href="javascript:void(0);"
                                                    className="box-icon bg_white wishlist btn-icon-action"
                                                >
                                                    <span className="icon icon-heart"></span>
                                                    <span className="tooltip">
                                                        Add to Wishlist
                                                    </span>
                                                    <span className="icon icon-delete"></span>
                                                </a>
                                                <a
                                                    href="#compare"
                                                    data-bs-toggle="offcanvas"
                                                    aria-controls="offcanvasLeft"
                                                    className="box-icon bg_white compare btn-icon-action"
                                                >
                                                    <span className="icon icon-compare"></span>
                                                    <span className="tooltip">
                                                        Add to Compare
                                                    </span>
                                                    <span className="icon icon-check"></span>
                                                </a>
                                                <a
                                                    href="#quick_view"
                                                    data-bs-toggle="modal"
                                                    className="box-icon bg_white quickview tf-btn-loading"
                                                >
                                                    <span className="icon icon-view"></span>
                                                    <span className="tooltip">
                                                        Quick View
                                                    </span>
                                                </a>
                                            </div>
                                            <div className="size-list">
                                                <span>M</span>
                                                <span>L</span>
                                                <span>XL</span>
                                            </div>
                                            <div className="on-sale-wrap">
                                                <div className="on-sale-item">
                                                    -33%
                                                </div>
                                            </div>
                                            <div className="countdown-box">
                                                <div
                                                    className="js-countdown"
                                                    data-timer="1007500"
                                                    data-labels="d :,h :,m :,s"
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="card-product-info">
                                            <a
                                                href="product-detail.html"
                                                className="title link"
                                            >
                                                Vòng tay vàng
                                            </a>
                                            <span className="price">
                                                180.000
                                            </span>
                                            <ul className="list-color-product">
                                                <li className="list-color-item color-swatch active">
                                                    <span className="tooltip">
                                                        Màu nâu
                                                    </span>
                                                    <span className="swatch-value bg_brown"></span>
                                                    <img
                                                        className="lazyload"
                                                        data-src="images/products/brown.jpg"
                                                        src="images/products/brown.jpg"
                                                        alt="image-product"
                                                    />
                                                </li>
                                                <li className="list-color-item color-swatch">
                                                    <span className="tooltip">
                                                        Tím nhạt
                                                    </span>
                                                    <span className="swatch-value bg_purple"></span>
                                                    <img
                                                        className="lazyload"
                                                        data-src="images/products/purple.jpg"
                                                        src="images/products/purple.jpg"
                                                        alt="image-product"
                                                    />
                                                </li>
                                                <li className="list-color-item color-swatch">
                                                    <span className="tooltip">
                                                        Xanh nhạt
                                                    </span>
                                                    <span className="swatch-value bg_light-green"></span>
                                                    <img
                                                        className="lazyload"
                                                        data-src="images/products/green.jpg"
                                                        src="images/products/green.jpg"
                                                        alt="image-product"
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card-product">
                                        <div className="card-product-wrapper">
                                            <a
                                                href="product-detail.html"
                                                className="product-img"
                                            >
                                                <img
                                                    className="lazyload img-product"
                                                    data-src="images/products/orange-1.jpg"
                                                    src="images/products/orange-1.jpg"
                                                    alt="image-product"
                                                />
                                                <img
                                                    className="lazyload img-hover"
                                                    data-src="images/products/white-1.jpg"
                                                    src="images/products/white-1.jpg"
                                                    alt="image-product"
                                                />
                                            </a>
                                            <div className="list-product-btn">
                                                <a
                                                    href="#quick_add"
                                                    data-bs-toggle="modal"
                                                    className="box-icon bg_white quick-add tf-btn-loading"
                                                >
                                                    <span className="icon icon-bag"></span>
                                                    <span className="tooltip">
                                                        Thêm nhanh
                                                    </span>
                                                </a>
                                                <a
                                                    href="javascript:void(0);"
                                                    className="box-icon bg_white wishlist btn-icon-action"
                                                >
                                                    <span className="icon icon-heart"></span>
                                                    <span className="tooltip">
                                                        Thêm vào danh sách yêu
                                                        thích
                                                    </span>
                                                    <span className="icon icon-delete"></span>
                                                </a>
                                            </div>
                                            <div className="size-list">
                                                <span>S</span>
                                                <span>M</span>
                                                <span>L</span>
                                                <span>XL</span>
                                            </div>
                                        </div>
                                        <div className="card-product-info">
                                            <a
                                                href="product-detail.html"
                                                className="title link"
                                            >
                                                Vòng tay
                                            </a>
                                            <span className="price">
                                                $16.95
                                            </span>
                                            <ul className="list-color-product">
                                                <li className="list-color-item color-swatch active">
                                                    <span className="tooltip">
                                                        cam
                                                    </span>
                                                    <span className="swatch-value bg_orange-3"></span>
                                                    <img
                                                        className="lazyload"
                                                        data-src="images/products/orange-1.jpg"
                                                        src="images/products/orange-1.jpg"
                                                        alt="image-product"
                                                    />
                                                </li>
                                                <li className="list-color-item color-swatch">
                                                    <span className="tooltip">
                                                        Đen
                                                    </span>
                                                    <span className="swatch-value bg_dark"></span>
                                                    <img
                                                        className="lazyload"
                                                        data-src="images/products/black-1.jpg"
                                                        src="images/products/black-1.jpg"
                                                        alt="image-product"
                                                    />
                                                </li>
                                                <li className="list-color-item color-swatch">
                                                    <span className="tooltip">
                                                        Trắng
                                                    </span>
                                                    <span className="swatch-value bg_white"></span>
                                                    <img
                                                        className="lazyload"
                                                        data-src="images/products/white-1.jpg"
                                                        src="images/products/white-1.jpg"
                                                        alt="image-product"
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nav-sw nav-next-slider nav-next-recent box-icon w_46 round">
                            <span className="icon icon-arrow-left"></span>
                        </div>
                        <div className="nav-sw nav-prev-slider nav-prev-recent box-icon w_46 round">
                            <span className="icon icon-arrow-right"></span>
                        </div>
                        <div className="sw-dots style-2 sw-pagination-recent justify-content-center"></div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Detail;
