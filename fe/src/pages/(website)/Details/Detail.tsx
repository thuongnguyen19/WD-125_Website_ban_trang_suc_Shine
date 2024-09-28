import React, { useState } from 'react'
import Footer from '../../../components/common/Footer';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Header from '../../../components/common/Header';

const Detail = () => {
    const [quantity, setQuantity] = useState(1); 
    const [selectedVariant, setSelectedVariant] = useState<string | null>(null); 

    const handleQuantityChange = (change: number) => {
      
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
    };

    const handleVariantSelect = (variant: React.SetStateAction<null>) => {
    };
  const [selectedSize, setSelectedSize] = useState("S");
  
  const basePrice = 8.00;

 
  const [totalPrice, setTotalPrice] = useState(basePrice); 

 
  const handleIncrease = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      setTotalPrice(newQuantity * basePrice);
      return newQuantity;
    });
  };

  
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
            <Header/>
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
                                            <div className="swiper-wrapper stagger-wrap">
                                                {[
                                                    "https://via.placeholder.com/300.jpg",
                                                    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
                                                    "https://www.example.com/image3.jpg",
                                                    "https://www.example.com/image4.jpg",
                                                    "https://www.example.com/image5.jpg",
                                                ].map((img, index) => (
                                                    <div
                                                        className="swiper-slide stagger-item"
                                                        key={index}
                                                    >
                                                        <div className="item">
                                                            <img
                                                                src={img}
                                                                alt={`img-${index}`}
                                                                style={{
                                                                    width: "100%",
                                                                    height: "auto",
                                                                }}
                                                            />
                                                        </div>
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
                                                    Quantity
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
                                                                Add to cart
                                                                -&nbsp;
                                                            </span>
                                                            <span className="tf-qty-price">
                                                                $
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
                                                        Buy Now
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
                                        <div className="tf-product-info-extra-link">
                                            <a
                                                href="#compare_color"
                                                data-bs-toggle="modal"
                                                className="tf-product-extra-icon"
                                            >
                                                <div
                                                    className="icon-text-container"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    {/* Dấu lớn và bé */}
                                                    <span
                                                        style={{
                                                            fontSize: "24px",
                                                            color: "orange",
                                                            marginRight: "8px",
                                                        }}
                                                    >
                                                        &gt;
                                                    </span>
                                                    <span
                                                        style={{
                                                            fontSize: "24px",
                                                            color: "orange",
                                                            marginRight: "8px",
                                                        }}
                                                    >
                                                        &lt;
                                                    </span>
                                                    <span className="text fw-6">
                                                        Compare color
                                                    </span>
                                                </div>
                                            </a>
                                            {/* <a
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
                                            </a> */}
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
                                            {/* <a
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
                                            </a> */}
                                        </div>
                                        <div className="tf-product-info-delivery-return">
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

            <section className="flat-spacing-1 pt_0">
                <div className="container">
                    <div className="flat-title">
                        <span className="title">People Also Bought</span>
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
                                                className="title link"
                                            >
                                                Ribbed Tank Top
                                            </a>
                                            <span className="price">
                                                $16.95
                                            </span>
                                            <ul className="list-color-product">
                                                <li className="list-color-item color-swatch active">
                                                    <span className="tooltip">
                                                        Orange
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
                                                        Black
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
                                                        White
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
                                                Ribbed modal T-shirt
                                            </a>
                                            <span className="price">
                                                From $18.95
                                            </span>
                                            <ul className="list-color-product">
                                                <li className="list-color-item color-swatch active">
                                                    <span className="tooltip">
                                                        Brown
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
                                                        Light Purple
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
                                                        Light Green
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
                        <span className="title">Recently Viewed</span>
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
                                                <a
                                                    href="#compare"
                                                    data-bs-toggle="offcanvas"
                                                    aria-controls="offcanvasLeft"
                                                    className="box-icon bg_white compare btn-icon-action"
                                                >
                                                    <span className="icon icon-compare"></span>
                                                    <span className="tooltip">
                                                        Thêm vào so sánh
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
                                                        Xem nhanh
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


export default Detail