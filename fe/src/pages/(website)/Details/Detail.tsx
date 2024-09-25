import React, { useState } from 'react'

const Detail = () => {
    const [quantity, setQuantity] = useState(1); // Khai báo số lượng
    const [selectedVariant, setSelectedVariant] = useState<string | null>(null); // Khai báo state với kiểu string hoặc null

    const handleQuantityChange = (change: number) => {
        // Cập nhật số lượng với điều kiện không được dưới 1
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
    };

    const handleVariantSelect = (variant: React.SetStateAction<null>) => {
    };

    return (
        <div>
            {/* Breadcrumb */}
            <div className="tf-breadcrumb">
                <div className="container">
                    <div className="tf-breadcrumb-wrap d-flex justify-content-between flex-wrap align-items-center">
                        <div className="tf-breadcrumb-list">
                            <a href="index.html" className="text">
                                Home
                            </a>
                            <i className="icon icon-arrow-right"></i>
                            <a href="#" className="text">
                                Women
                            </a>
                            <i className="icon icon-arrow-right"></i>
                            <span className="text">Cotton jersey top</span>
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
            {/* /breadcrumb */}

            {/* Product Details */}
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
                                                {/* Image Slides */}
                                                {[
                                                    "hmgoepprod31",
                                                    "hmgoepprod",
                                                    "hmgoepprod2",
                                                    "hmgoepprod3",
                                                    "hmgoepprod4",
                                                    "hmgoepprod5",
                                                    "hmgoepprod6",
                                                    "hmgoepprod7",
                                                    "hmgoepprod8",
                                                    "hmgoepprod9",
                                                ].map((img, index) => (
                                                    <div
                                                        className="swiper-slide stagger-item"
                                                        key={index}
                                                    >
                                                        <div className="item">
                                                            <img
                                                                className="lazyload"
                                                                data-src={`images/shop/products/${img}.jpg`}
                                                                src={`images/shop/products/${img}.jpg`}
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
                                                {/* Main Image Slides */}
                                                {[
                                                    "p-d1.png",
                                                    "hmgoepprod.jpg",
                                                    "hmgoepprod2.jpg",
                                                    "hmgoepprod3.jpg",
                                                    "hmgoepprod4.jpg",
                                                    "hmgoepprod5.jpg",
                                                    "hmgoepprod6.jpg",
                                                    "hmgoepprod7.jpg",
                                                    "hmgoepprod8.jpg",
                                                    "hmgoepprod9.jpg",
                                                ].map((img, index) => (
                                                    <div
                                                        className="swiper-slide"
                                                        key={index}
                                                    >
                                                        <a
                                                            href={`../shop/products/${img}`}
                                                            target="_blank"
                                                            className="item"
                                                            data-pswp-width="770px"
                                                            data-pswp-height="1075px"
                                                        >
                                                            <img
                                                                className="tf-image-zoom lazyload"
                                                                data-zoom={`images/shop/products/${img}`}
                                                                data-src={`images/shop/products/${img}`}
                                                                src={`images/shop/products/${img}`}
                                                                alt={`img-${index}`}
                                                            />
                                                        </a>
                                                    </div>
                                                ))}
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
                                            <h5>Cotton jersey top</h5>
                                        </div>
                                        <div className="tf-product-info-badges">
                                            <div className="badges">
                                                Best seller
                                            </div>
                                            <div className="product-status-content">
                                                <i className="icon-lightning"></i>
                                                <p className="fw-6">
                                                    Selling fast! 56 people have
                                                    this in their carts.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="tf-product-info-price">
                                            <div className="price-on-sale">
                                                $8.00
                                            </div>
                                            <div className="compare-at-price">
                                                $10.00
                                            </div>
                                            <div className="badges-on-sale">
                                                <span>20</span>% OFF
                                            </div>
                                        </div>
                                        <div className="tf-product-info-liveview">
                                            <div className="liveview-count">
                                                20
                                            </div>
                                            <p className="fw-6">
                                                People are viewing this right
                                                now
                                            </p>
                                        </div>
                                        <div className="tf-product-info-countdown">
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
                                        </div>
                                        <div className="tf-product-info-variant-picker">
                                            <div className="variant-picker-item">
                                                <div className="variant-picker-label">
                                                    Color:{" "}
                                                    <span className="fw-6 variant-picker-label-value">
                                                        Beige
                                                    </span>
                                                </div>
                                                <div className="variant-picker-values">
                                                    {[
                                                        "Beige",
                                                        "Black",
                                                        "Blue",
                                                        "White",
                                                    ].map((color, index) => (
                                                        <React.Fragment
                                                            key={color}
                                                        >
                                                            <input
                                                                id={`values-${color.toLowerCase()}`}
                                                                type="radio"
                                                                name="color1"
                                                                checked={
                                                                    index === 0
                                                                }
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
                                                            S
                                                        </span>
                                                    </div>
                                                    <a
                                                        href="#find_size"
                                                        data-bs-toggle="modal"
                                                        className="find-size fw-6"
                                                    >
                                                        Find your size
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
                                                                        size ===
                                                                        "S"
                                                                    }
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
                                        <div className="tf-product-info-quantity">
                                            <div className="quantity-title fw-6">
                                                Quantity
                                            </div>
                                            <div className="wg-quantity">
                                                <span className="btn-quantity minus-btn">
                                                    -
                                                </span>
                                                <input
                                                    type="text"
                                                    name="number"
                                                    value="1"
                                                />
                                                <span className="btn-quantity plus-btn">
                                                    +
                                                </span>
                                            </div>
                                        </div>
                                        <div className="tf-product-info-buy-button">
                                            <form>
                                                <a
                                                    href="javascript:void(0);"
                                                    className="tf-btn btn-fill justify-content-center fw-6 fs-16 flex-grow-1 animate-hover-btn btn-add-to-cart"
                                                >
                                                    <span>
                                                        Add to cart -&nbsp;
                                                    </span>
                                                    <span className="tf-qty-price">
                                                        $8.00
                                                    </span>
                                                </a>
                                                <a
                                                    href="javascript:void(0);"
                                                    className="tf-product-btn-wishlist hover-tooltip box-icon bg_white wishlist btn-icon-action"
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
                                                    className="tf-product-btn-wishlist hover-tooltip box-icon bg_white compare btn-icon-action"
                                                >
                                                    <span className="icon icon-compare"></span>
                                                    <span className="tooltip">
                                                        Add to Compare
                                                    </span>
                                                    <span className="icon icon-check"></span>
                                                </a>
                                                <div className="w-100">
                                                    <a
                                                        href="#"
                                                        className="btns-full"
                                                    >
                                                        Buy with{" "}
                                                        <img
                                                            src="images/payments/paypal.png"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="payment-more-option"
                                                    >
                                                        More payment options
                                                    </a>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="tf-product-info-extra-link">
                                            <a
                                                href="#compare_color"
                                                data-bs-toggle="modal"
                                                className="tf-product-extra-icon"
                                            >
                                                <div className="icon">
                                                    <img
                                                        src="images/item/compare.svg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="text fw-6">
                                                    Compare color
                                                </div>
                                            </a>
                                            <a
                                                href="#ask_question"
                                                data-bs-toggle="modal"
                                                className="tf-product-extra-icon"
                                            >
                                                <div className="icon">
                                                    <i className="icon-question"></i>
                                                </div>
                                                <div className="text fw-6">
                                                    Ask a question
                                                </div>
                                            </a>
                                            <a
                                                href="#delivery_return"
                                                data-bs-toggle="modal"
                                                className="tf-product-extra-icon"
                                            >
                                                <div className="icon">
                                                    <svg
                                                        className="d-inline-block"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="22"
                                                        height="18"
                                                        viewBox="0 0 22 18"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M21.7872 10.4724C21.7872 9.73685 21.5432 9.00864 21.1002 8.4217L18.7221 5.27043C18.2421 4.63481 17.4804 4.25532 16.684 4.25532H14.9787V2.54885C14.9787 1.14111 13.8334 0 12.4255 0H9.95745V1.69779H12.4255C12.8948 1.69779 13.2766 2.07962 13.2766 2.54885V14.5957H8.15145C7.80021 13.6052 6.85421 12.8936 5.74468 12.8936C4.63515 12.8936 3.68915 13.6052 3.33792 14.5957H2.55319C2.08396 14.5957 1.70213 14.2139 1.70213 13.7447V2.54885C1.70213 2.07962 2.08396 1.69779 2.55319 1.69779H9.95745V0H2.55319C1.14528 0 0 1.14111 0 2.54885V13.7447C0 15.1526 1.14528 16.2979 2.55319 16.2979H3.33792C3.68915 17.2884 4.63515 18 5.74468 18C6.85421 18 7.80021 17.2884 8.15145 16.2979H13.423C13.7742 17.2884 14.7202 18 15.8297 18C16.9393 18 17.8853 17.2884 18.2365 16.2979H21.7872V10.4724ZM16.684 5.95745C16.9494 5.95745 17.2034 6.08396 17.3634 6.29574L19.5166 9.14894H14.9787V5.95745H16.684ZM5.74468 16.2979C5.27545 16.2979 4.89362 15.916 4.89362 15.4468C4.89362 14.9776 5.27545 14.5957 5.74468 14.5957C6.21392 14.5957 6.59575 14.9776 6.59575 15.4468C6.59575 15.916 6.21392 16.2979 5.74468 16.2979ZM15.8298 16.2979C15.3606 16.2979 14.9787 15.916 14.9787 15.4468C14.9787 14.9776 15.3606 14.5957 15.8298 14.5957C16.299 14.5957 16.6809 14.9776 16.6809 15.4468C16.6809 15.916 16.299 16.2979 15.8298 16.2979ZM18.2366 14.5957C17.8853 13.6052 16.9393 12.8936 15.8298 12.8936C15.5398 12.8935 15.252 12.943 14.9787 13.04V10.8511H20.0851V14.5957H18.2366Z"></path>
                                                    </svg>
                                                </div>
                                                <div className="text fw-6">
                                                    Delivery & Return
                                                </div>
                                            </a>
                                            <a
                                                href="#share_social"
                                                data-bs-toggle="modal"
                                                className="tf-product-extra-icon"
                                            >
                                                <div className="icon">
                                                    <i className="icon-share"></i>
                                                </div>
                                                <div className="text fw-6">
                                                    Share
                                                </div>
                                            </a>
                                        </div>
                                        <div className="tf-product-info-delivery-return">
                                            <div className="row">
                                                <div className="col-xl-6 col-12">
                                                    <div className="tf-product-delivery">
                                                        <div className="icon">
                                                            <i className="icon-delivery-time"></i>
                                                        </div>
                                                        <p>
                                                            Estimate delivery
                                                            times:{" "}
                                                            <span className="fw-7">
                                                                12-26 days
                                                            </span>{" "}
                                                            (International),{" "}
                                                            <span className="fw-7">
                                                                3-6 days
                                                            </span>{" "}
                                                            (United States).
                                                        </p>
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
                                        </div>
                                        <div className="tf-product-info-trust-seal">
                                            <div className="tf-product-trust-mess">
                                                <i className="icon-safe"></i>
                                                <p className="fw-6">
                                                    Guarantee Safe <br />{" "}
                                                    Checkout
                                                </p>
                                            </div>
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
            <div className="tf-sticky-btn-atc">
                <div className="container">
                    <div className="tf-height-observer w-100 d-flex align-items-center">
                        <div className="tf-sticky-atc-product d-flex align-items-center">
                            <div className="tf-sticky-atc-img">
                                <img
                                    className="lazyloaded"
                                    src="images/shop/products/p-d1.png"
                                    alt="Product"
                                />
                            </div>
                            <div className="tf-sticky-atc-title fw-5 d-xl-block d-none">
                                Cotton jersey top
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
                                            Select a variant
                                        </option>{" "}
                                        {/* Tùy chọn mặc định */}
                                        <option value="Beige / S - $8.00">
                                            Beige / S - $8.00
                                        </option>
                                        <option value="Beige / M - $8.00">
                                            Beige / M - $8.00
                                        </option>
                                        <option value="Beige / L - $8.00">
                                            Beige / L - $8.00
                                        </option>
                                        <option value="Beige / XL - $8.00">
                                            Beige / XL - $8.00
                                        </option>
                                        <option value="Black / S - $8.00">
                                            Black / S - $8.00
                                        </option>
                                        <option value="Black / M - $8.00">
                                            Black / M - $8.00
                                        </option>
                                        <option value="Black / L - $8.00">
                                            Black / L - $8.00
                                        </option>
                                        <option value="Black / XL - $8.00">
                                            Black / XL - $8.00
                                        </option>
                                        <option value="Blue / S - $8.00">
                                            Blue / S - $8.00
                                        </option>
                                        <option value="Blue / M - $8.00">
                                            Blue / M - $8.00
                                        </option>
                                        <option value="Blue / L - $8.00">
                                            Blue / L - $8.00
                                        </option>
                                        <option value="Blue / XL - $8.00">
                                            Blue / XL - $8.00
                                        </option>
                                        <option value="White / S - $8.00">
                                            White / S - $8.00
                                        </option>
                                        <option value="White / M - $8.00">
                                            White / M - $8.00
                                        </option>
                                        <option value="White / L - $8.00">
                                            White / L - $8.00
                                        </option>
                                        <option value="White / XL - $8.00">
                                            White / XL - $8.00
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
                                        <span>Add to cart</span>
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
                                            Description
                                        </span>
                                    </li>
                                    <li className="item-title">
                                        <span className="inner">Review</span>
                                    </li>
                                    <li className="item-title">
                                        <span className="inner">Shipping</span>
                                    </li>
                                    <li className="item-title">
                                        <span className="inner">
                                            Return Policies
                                        </span>
                                    </li>
                                </ul>
                                <div className="widget-content-tab">
                                    <div className="widget-content-inner active">
                                        <div>
                                            <p className="mb_30">
                                                Button-up shirt sleeves and a
                                                relaxed silhouette. It’s
                                                tailored with drapey,
                                                crinkle-texture fabric that’s
                                                made from LENZING™ ECOVERO™
                                                Viscose — responsibly sourced
                                                wood-based fibres produced
                                                through a process that reduces
                                                impact on forests, biodiversity
                                                and water supply.
                                            </p>
                                            <div className="tf-product-des-demo">
                                                <div className="right">
                                                    <h3 className="fs-16 fw-5">
                                                        Features
                                                    </h3>
                                                    <ul>
                                                        <li>
                                                            Front button placket
                                                        </li>
                                                        <li>
                                                            Adjustable sleeve
                                                            tabs
                                                        </li>
                                                        <li>
                                                            Babaton embroidered
                                                            crest at placket and
                                                            hem
                                                        </li>
                                                    </ul>
                                                    <h3 className="fs-16 fw-5">
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
                                                    </ul>
                                                </div>
                                                <div className="left">
                                                    <h3 className="fs-16 fw-5">
                                                        Materials Care
                                                    </h3>
                                                    <div className="d-flex gap-10 mb_15 align-items-center">
                                                        <div className="icon">
                                                            <i className="icon-machine"></i>
                                                        </div>
                                                        <span>
                                                            Machine wash max.
                                                            30ºC. Short spin.
                                                        </span>
                                                    </div>
                                                    <div className="d-flex gap-10 mb_15 align-items-center">
                                                        <div className="icon">
                                                            <i className="icon-iron"></i>
                                                        </div>
                                                        <span>
                                                            Iron maximum 110ºC.
                                                        </span>
                                                    </div>
                                                    <div className="d-flex gap-10 mb_15 align-items-center">
                                                        <div className="icon">
                                                            <i className="icon-bleach"></i>
                                                        </div>
                                                        <span>
                                                            Do not
                                                            bleach/bleach.
                                                        </span>
                                                    </div>
                                                    <div className="d-flex gap-10 mb_15 align-items-center">
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-content-inner">
                                        <table className="tf-pr-attrs">
                                            <tbody>
                                                <tr className="tf-attr-pa-color">
                                                    <th className="tf-attr-label">
                                                        Color
                                                    </th>
                                                    <td className="tf-attr-value">
                                                        <p>
                                                            White, Pink, Black
                                                        </p>
                                                    </td>
                                                </tr>
                                                <tr className="tf-attr-pa-size">
                                                    <th className="tf-attr-label">
                                                        Size
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
        </div>
    );
};


export default Detail