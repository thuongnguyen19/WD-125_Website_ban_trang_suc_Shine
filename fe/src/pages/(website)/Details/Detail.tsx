import React, { useEffect, useState } from "react";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/common/Header";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "swiper/css";
import { Navigation } from "swiper/modules";

interface Variant {
    id: number;
    import_price: string;
    list_price: string;
    selling_price: string;
    quantity: number;
    colors: {
        id: number;
        name: string;
    };
    sizes: {
        id: number;
        name: string;
    };
}

interface RelatedProduct {
    id: number;
    name: string;
    thumbnail: string;
    variant: Variant[];
}

interface Product {
    id: number;
    name: string;
    thumbnail: string;
    variant: Variant[];
    description: string;
}

const Detail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product | null>(null);
    const [relatedProducts, setRelatedProducts] = useState<RelatedProduct[]>(
        [],
    );
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedColorName, setSelectedColorName] = useState<string | null>(
        null,
    );
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [totalPrice, setTotalPrice] = useState<number | null>(null);
    const [listPrice, setListPrice] = useState<number | null>(null);
    const [remainingQuantity, setRemainingQuantity] = useState<number | null>(
        null,
    );

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8000/api/detailProduct/${id}`,
                );
                const productData: Product = response.data.data;

                if (productData) {
                    setProduct(productData);
                    const firstVariant = productData.variant[0];
                    setSelectedColor(firstVariant.colors.name);
                    setSelectedColorName(firstVariant.colors.name);
                    setSelectedSize(firstVariant.sizes.name);
                    setTotalPrice(parseFloat(firstVariant.selling_price));
                    setListPrice(parseFloat(firstVariant.list_price));
                    setRemainingQuantity(firstVariant.quantity);
                    fetchRelatedProducts(productData.id);
                } else {
                    setError("Giá không khả dụng");
                }

                setLoading(false);
            } catch (err) {
                setError("Không tìm thấy sản phẩm");
                setLoading(false);
            }
        };

        const fetchRelatedProducts = async (categoryId: number) => {
            try {
                const response = await axios.get(
                    `http://localhost:8000/api/relatedProducts/${categoryId}`,
                );
                const relatedProductsData = response.data.data;
                setRelatedProducts(relatedProductsData);
            } catch (err) {
                console.error("Failed to fetch related products", err);
            }
        };

        fetchProductDetails();
    }, [id]);

    const handleQuantityChange = (change: number) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
    };

    const getColorCode = (colorName: string) => {
        const colorMap: { [key: string]: string } = {
            đỏ: "#FF0000",
            xanh: "#0000FF",
            green: "#00FF00",
            black: "#000000",
            white: "#FFFFFF",
            pink: "#FFC0CB",
            vàng: "#FFFF00",
            tím: "#FF00FF",
            trắng: "#FFFFFF",
            hồng: "#FFC0CB",
            đen: "#000000",
        };

        return colorMap[colorName.toLowerCase()] || "#CCCCCC";
    };

    const handleColorChange = (colorName: string) => {
        setSelectedColor(colorName);
        setSelectedColorName(colorName);
        updateRemainingQuantityAndPrice(colorName, selectedSize);
    };

    const handleSizeChange = (sizeName: string) => {
        setSelectedSize(sizeName);
        updateRemainingQuantityAndPrice(selectedColor, sizeName);
    };

    const updateRemainingQuantityAndPrice = (
        colorName: string | null,
        sizeName: string | null,
    ) => {
        if (colorName && sizeName) {
            const selectedVariant = product?.variant.find(
                (variant) =>
                    variant.colors.name === colorName &&
                    variant.sizes.name === sizeName,
            );
            if (selectedVariant) {
                setRemainingQuantity(selectedVariant.quantity);
                setTotalPrice(parseFloat(selectedVariant.selling_price));
                setListPrice(parseFloat(selectedVariant.list_price));
            }
        }
    };

    const handleBuyNow = () => {
        navigate("/pay");
    };

    if (loading) {
        return <div>Đang tải...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!product || !product.name) {
        return <div>Sản phẩm không hợp lệ hoặc không tìm thấy</div>;
    }

    return (
        <div>
            <Header />
            <div className="tf-breadcrumb">
                <div className="container">
                    <div className="tf-breadcrumb-wrap d-flex justify-content-between flex-wrap align-items-center">
                        <div className="tf-breadcrumb-list">
                            <a href="/" className="text">
                                Trang chủ
                            </a>
                            <i className="icon icon-arrow-right"></i>
                            <span className="text">{product?.name}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Detail Section */}
            <section className="flat-spacing-4 pt_0">
                <div className="tf-main-product section-image-zoom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="tf-product-media-wrap sticky-top">
                                    <Swiper>
                                        <SwiperSlide>
                                            <img
                                                src={product?.thumbnail}
                                                alt={product?.name}
                                                style={{ width: "100%" }}
                                            />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="tf-product-info-wrap position-relative">
                                    <div className="tf-product-info-title">
                                        <h5>{product?.name}</h5>
                                    </div>
                                    <div className="tf-product-info-price">
                                        {listPrice !== null &&
                                        totalPrice !== null ? (
                                            <div>
                                                <div className="price-list">
                                                    <span
                                                        style={{
                                                            textDecoration:
                                                                "line-through",
                                                            color: "#999",
                                                        }}
                                                    >
                                                        {listPrice.toLocaleString(
                                                            "vi-VN",
                                                        )}{" "}
                                                        đ
                                                    </span>
                                                </div>
                                                <div className="price-on-sale">
                                                    {totalPrice.toLocaleString(
                                                        "vi-VN",
                                                    )}{" "}
                                                    đ
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="price-unavailable">
                                                Giá không khả dụng
                                            </div>
                                        )}
                                    </div>

                                    {/* Color Variant Selection */}
                                    <div className="tf-color-selection">
                                        <div>
                                            {selectedColorName && (
                                                <h6>
                                                    Tên màu: {selectedColorName}
                                                </h6>
                                            )}
                                        </div>
                                        <div className="tf-variant-colors d-flex">
                                            {product?.variant?.map(
                                                (variant: Variant) => (
                                                    <input
                                                        key={variant.id}
                                                        type="radio"
                                                        name="color"
                                                        checked={
                                                            selectedColor ===
                                                            variant.colors.name
                                                        }
                                                        onChange={() =>
                                                            handleColorChange(
                                                                variant.colors
                                                                    .name,
                                                            )
                                                        }
                                                        style={{
                                                            appearance: "none",
                                                            width: "30px",
                                                            height: "30px",
                                                            borderRadius: "50%",
                                                            backgroundColor:
                                                                getColorCode(
                                                                    variant
                                                                        .colors
                                                                        .name,
                                                                ),
                                                            border:
                                                                selectedColor ===
                                                                variant.colors
                                                                    .name
                                                                    ? "2px solid #000"
                                                                    : "1px solid #ccc",
                                                            margin: "0 10px",
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                ),
                                            )}
                                        </div>
                                    </div>

                                    {/* Size Variant Selection */}
                                    <div className="tf-size-selection mt-3">
                                        <h6>Kích thước:</h6>
                                        <br />
                                        <div className="tf-variant-sizes">
                                            {product?.variant?.map(
                                                (variant: Variant) => (
                                                    <span
                                                        key={variant.id}
                                                        className={`tf-size-option ${
                                                            selectedSize ===
                                                            variant.sizes.name
                                                                ? "active"
                                                                : ""
                                                        }`}
                                                        onClick={() =>
                                                            handleSizeChange(
                                                                variant.sizes
                                                                    .name,
                                                            )
                                                        }
                                                        style={{
                                                            marginRight: "10px",
                                                            cursor: "pointer",
                                                            padding: "8px",
                                                            fontSize: "16px",
                                                            borderRadius: "8px",
                                                            border:
                                                                selectedSize ===
                                                                variant.sizes
                                                                    .name
                                                                    ? "3px solid #000"
                                                                    : "2px solid #ccc",
                                                            transition:
                                                                "background-color 0.3s, color 0.3s, border 0.3s",
                                                            backgroundColor:
                                                                selectedSize ===
                                                                variant.sizes
                                                                    .name
                                                                    ? "#000"
                                                                    : "#fff",
                                                            color:
                                                                selectedSize ===
                                                                variant.sizes
                                                                    .name
                                                                    ? "#fff"
                                                                    : "#000",
                                                        }}
                                                    >
                                                        {variant.sizes.name}
                                                    </span>
                                                ),
                                            )}
                                        </div>
                                    </div>

                                    {/* Show remaining quantity for the selected variant */}
                                    {remainingQuantity !== null && (
                                        <div className="remaining-quantity mt-3">
                                            <p>
                                                Số lượng còn lại:{" "}
                                                <strong>
                                                    {remainingQuantity}
                                                </strong>
                                            </p>
                                        </div>
                                    )}

                                    {/* Quantity Selection */}
                                    <div className="tf-product-info-quantity mt-4">
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

                                    {/* Add to Cart Button */}
                                    <div
                                        className="tf-product-info-buy-button mt-4"
                                        style={{ textAlign: "center" }}
                                    >
                                        <button
                                            className="tf-btn btn-fill"
                                            style={{
                                                width: "60%",
                                                margin: "0 auto",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                height: "50px",
                                            }}
                                        >
                                            Thêm vào giỏ hàng
                                        </button>
                                    </div>

                                    {/* Buy Now Button */}
                                    <div className="tf-product-info-buy-now-button mt-3">
                                        <a
                                            href="#"
                                            className="btns-full btn-buy-now"
                                            onClick={handleBuyNow}
                                            style={{
                                                backgroundColor: "#FFA500",
                                                color: "#fff",
                                                padding: "15px 0",
                                                width: "100%",
                                                textAlign: "center",
                                                display: "block",
                                                fontSize: "18px",
                                                borderRadius: "5px",
                                                marginTop: "20px",
                                            }}
                                        >
                                            Mua ngay
                                        </a>
                                    </div>

                                    {/* Product Description Section */}
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div
                            className="tf-product-description mt-4"
                            style={{
                                fontSize: "18px",
                                padding: "20px",
                                lineHeight: "1.6",
                                backgroundColor: "#f9f9f9",
                                borderRadius: "8px",
                            }}
                        >
                            <h5
                                style={{
                                    fontSize: "24px",
                                    marginBottom: "16px",
                                }}
                            >
                                Mô tả sản phẩm
                            </h5>
                            <p style={{ fontSize: "18px" }}>
                                {product?.description}
                            </p>
                        </div>

                        {/* Related Products Section */}
                        <hr />
                        <div className="tf-product-description mt-4">
                            <h5
                                style={{
                                    textAlign: "center",
                                    fontSize: "24px",
                                    fontWeight: "bold",
                                    marginBottom: "16px",
                                }}
                            >
                                Sản phẩm liên quan
                            </h5>
                            <div className="wrap-carousel">
                                <div className="swiper tf-sw-product-sell-1">
                                    <div className="swiper-wrapper">
                                        <div
                                            className="swiper-button-prev"
                                            style={{ color: "black" }}
                                        >
                                            <LeftOutlined />
                                        </div>
                                        <div
                                            className="swiper-button-next"
                                            style={{ color: "black" }}
                                        >
                                            <RightOutlined />
                                        </div>

                                        <Swiper
                                            modules={[Navigation]}
                                            spaceBetween={20}
                                            slidesPerView={3}
                                            navigation={{
                                                nextEl: ".swiper-button-next",
                                                prevEl: ".swiper-button-prev",
                                            }}
                                            loop={true}
                                            className="swiper-container"
                                        >
                                            {relatedProducts.map(
                                                (relatedProduct) => (
                                                    <SwiperSlide
                                                        key={relatedProduct.id}
                                                    >
                                                        <div className="card-product style-skincare">
                                                            <div className="card-product-wrapper">
                                                                <a
                                                                    href={`/detail/${relatedProduct.id}`}
                                                                    className="product-img"
                                                                >
                                                                    <img
                                                                        className="lazyload img-product"
                                                                        src={
                                                                            relatedProduct.thumbnail
                                                                        }
                                                                        alt={
                                                                            relatedProduct.name
                                                                        }
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="card-product-info text-center">
                                                                <a
                                                                    href={`/product/${relatedProduct.id}`}
                                                                    className="title link"
                                                                >
                                                                    {
                                                                        relatedProduct.name
                                                                    }
                                                                </a>
                                                                {relatedProduct
                                                                    .variant
                                                                    .length >
                                                                    0 && (
                                                                    <div>
                                                                        <span className="price">
                                                                            {/* List Price with strikethrough */}
                                                                            {relatedProduct
                                                                                .variant[0]
                                                                                .list_price && (
                                                                                <span
                                                                                    style={{
                                                                                        textDecoration:
                                                                                            "line-through",
                                                                                        color: "#999",
                                                                                        marginRight:
                                                                                            "10px",
                                                                                    }}
                                                                                >
                                                                                    {relatedProduct.variant[0].list_price.toLocaleString(
                                                                                        "vi-VN",
                                                                                    )}{" "}
                                                                                    đ
                                                                                </span>
                                                                            )}
                                                                            {/* Selling Price */}
                                                                            <span
                                                                                style={{
                                                                                    color: "#f00",
                                                                                    fontWeight:
                                                                                        "bold",
                                                                                }}
                                                                            >
                                                                                {relatedProduct.variant[0].selling_price.toLocaleString(
                                                                                    "vi-VN",
                                                                                )}{" "}
                                                                                đ
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                ),
                                            )}
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Detail;
