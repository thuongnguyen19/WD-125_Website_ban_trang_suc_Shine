import React, { useEffect, useState } from "react";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/common/Header";
import { useParams, useNavigate } from "react-router-dom";
import { message } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import axiosInstance from "../../../configs/axios";

// Interfaces
interface Variant {
    id: number;
    import_price: string;
    list_price: string;
    selling_price: string;
    quantity: number;
    image_color: string;
    colors: {
        id: number;
        name: string;
        code: string;
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
    variants: Variant[];
}

interface Combo {
    id: number;
    name: string;
    image: string;
    price: number;
    sum_price: number;
    description: string;
    available_quantity: number;
    products: RelatedProduct[];
}

const ComboDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [combo, setCombo] = useState<Combo | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState<{
        [productId: string]: string;
    }>({});
    const [selectedSize, setSelectedSize] = useState<{
        [productId: string]: string;
    }>({});

    useEffect(() => {
        const fetchComboDetails = async () => {
            setLoading(true);
            const token = localStorage.getItem("authToken");
            try {
                const response = await axiosInstance.get(
                    `/detailCombos/${id}`,
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    },
                );

                const comboData: Combo = response.data.data;
                setCombo(comboData || null);
                if (!comboData) setError("Thông tin combo không khả dụng.");
            } catch {
                setError("Không tìm thấy sản phẩm.");
            } finally {
                setLoading(false);
            }
        };

        fetchComboDetails();
    }, [id]);

    const handleQuantityChange = (change: number) => {
        setQuantity((prev) => {
            const newQuantity = prev + change;
            return newQuantity > 0 &&
                newQuantity <= (combo?.available_quantity || 0)
                ? newQuantity
                : prev;
        });
    };

    const handleColorChange = (color: string, product: RelatedProduct) => {
        const productId = product.id.toString();
        setSelectedColor((prev) => ({ ...prev, [productId]: color }));
        setSelectedSize((prev) => ({ ...prev, [productId]: "" })); // Reset size khi đổi màu
    };

    const handleSizeChange = (size: string, productId: string) => {
        const color = selectedColor[productId];
        const isAvailable = combo?.products
            .find((p) => p.id === parseInt(productId))
            ?.variants.some(
                (variant) =>
                    variant.colors.name === color &&
                    variant.sizes.name === size,
            );
        if (isAvailable) {
            setSelectedSize((prev) => ({ ...prev, [productId]: size }));
        }
    };

    const validateSelections = () => {
        return combo?.products.every((product) => {
            const color = selectedColor[product.id.toString()];
            const size = selectedSize[product.id.toString()];
            return color && size;
        });
    };

    const handleBuyNow = async () => {
        const token = localStorage.getItem("authToken");
        if (!token) {
            message.error("Vui lòng đăng nhập để mua sản phẩm.");
            navigate("/login");
            return;
        }

        if (!validateSelections()) {
            message.error(
                "Vui lòng chọn đầy đủ màu sắc và kích thước cho tất cả sản phẩm.",
            );
            return;
        }

        try {
            const orderData = combo!.products
                .map((product) => {
                    const productId = product.id.toString();
                    const color = selectedColor[productId];
                    const size = selectedSize[productId];
                    const variant = product.variants.find(
                        (v) => v.colors.name === color && v.sizes.name === size,
                    );

                    return {
                        variantId: variant?.id || null,
                        quantity,
                    };
                })
                .filter((item) => item.variantId);

            const params = {
                comboId: combo?.id,
                quantity,
                variantIds: orderData.reduce((acc, curr) => {
                    acc[curr.variantId!] = curr.quantity;
                    return acc;
                }, {}),
            };

            const response = await axiosInstance.get(
                "/listInformationOrderCombo",
                {
                    headers: { Authorization: `Bearer ${token}` },
                    params,
                },
            );

            if (response.data.status) {
                message.success("Lấy thông tin sản phẩm thành công.");
                localStorage.setItem(
                    "orderData",
                    JSON.stringify({ comboId: combo?.id, orderData }),
                );
                navigate("/payCombo", { state: { orderData } });
            } else {
                message.error(response.data.message);
            }
        } catch {
            message.error("Có lỗi xảy ra khi lấy thông tin sản phẩm.");
        }
    };

    if (loading) return <div>Đang tải...</div>;
    if (error) return <div>{error}</div>;
    if (!combo) return <div>Không tìm thấy combo!</div>;

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
                            <span className="text">{combo?.name}</span>
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
                                    <div className="product-images-wrapper">
                                        <Swiper
                                            spaceBetween={20}
                                            slidesPerView={1}
                                            navigation
                                            loop
                                            style={{
                                                width: "100%",
                                                height: "500px",
                                            }}
                                        >
                                            <SwiperSlide>
                                                <img
                                                    src={combo?.image}
                                                    style={{
                                                        width: "100%",
                                                        height: "500px",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="tf-product-info-wrap position-relative">
                                    <div className="tf-product-info-title">
                                        <h5>{combo?.name}</h5>
                                    </div>

                                    <div className="tf-product-info-price">
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <div
                                                className="price-on-sale"
                                                style={{ marginRight: "10px" }}
                                            >
                                                <span
                                                    style={{
                                                        fontWeight: "bold",
                                                        color: "#f00",
                                                    }}
                                                >
                                                    {new Intl.NumberFormat(
                                                        "vi-VN",
                                                        {
                                                            style: "currency",
                                                            currency: "VND",
                                                        },
                                                    ).format(combo?.price)}
                                                </span>
                                            </div>
                                            <div className="price-list">
                                                <span
                                                    style={{
                                                        textDecoration:
                                                            "line-through",
                                                        color: "#999",
                                                    }}
                                                >
                                                    {new Intl.NumberFormat(
                                                        "vi-VN",
                                                        {
                                                            style: "currency",
                                                            currency: "VND",
                                                        },
                                                    ).format(combo?.sum_price)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {combo.products.map((product) => (
                                        <div
                                            className="combo-product"
                                            key={product.id}
                                        >
                                            <h5 className="product-name">
                                                {product.name}
                                            </h5>
                                            <div className="tf-color-selection d-flex align-items-center">
                                                <h6
                                                    style={{
                                                        marginRight: "10px",
                                                    }}
                                                >
                                                    Màu sắc:
                                                </h6>
                                            </div>

                                            <div className="tf-variant-colors d-flex">
                                                {product.variants.map(
                                                    (variant: Variant) => (
                                                        <input
                                                            key={variant.id}
                                                            type="radio"
                                                            name={`color-${product.id}`}
                                                            checked={
                                                                selectedColor[
                                                                    product.id.toString()
                                                                ] ===
                                                                variant.colors
                                                                    .name
                                                            }
                                                            onChange={() =>
                                                                handleColorChange(
                                                                    variant
                                                                        .colors
                                                                        .name,
                                                                    product,
                                                                )
                                                            }
                                                            style={{
                                                                appearance:
                                                                    "none",
                                                                width: "30px",
                                                                height: "30px",
                                                                borderRadius:
                                                                    "50%",
                                                                backgroundColor:
                                                                    variant
                                                                        .colors
                                                                        .code,
                                                                border:
                                                                    selectedColor[
                                                                        product.id.toString()
                                                                    ] ===
                                                                    variant
                                                                        .colors
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

                                            <div className="tf-size-selection mt-3">
                                                <h6>Kích thước:</h6>
                                                <br />
                                                <div className="tf-variant-sizes d-flex flex-wrap">
                                                    {product.variants.map(
                                                        (variant) => (
                                                            <div
                                                                key={
                                                                    variant
                                                                        .sizes
                                                                        .id
                                                                }
                                                                className={`size-box ${selectedSize[product.id.toString()] === variant.sizes.name && variant.colors.name === selectedColor[product.id.toString()] ? "selected" : ""}`}
                                                                onClick={() =>
                                                                    handleSizeChange(
                                                                        variant
                                                                            .sizes
                                                                            .name,
                                                                        product.id.toString(),
                                                                    )
                                                                }
                                                                style={{
                                                                    display:
                                                                        "flex",
                                                                    justifyContent:
                                                                        "center",
                                                                    alignItems:
                                                                        "center",
                                                                    width: "40px",
                                                                    height: "40px",
                                                                    margin: "5px",
                                                                    cursor:
                                                                        variant
                                                                            .colors
                                                                            .name ===
                                                                        selectedColor[
                                                                            product.id.toString()
                                                                        ]
                                                                            ? "pointer"
                                                                            : "not-allowed",
                                                                    border:
                                                                        selectedSize[
                                                                            product.id.toString()
                                                                        ] ===
                                                                            variant
                                                                                .sizes
                                                                                .name &&
                                                                        variant
                                                                            .colors
                                                                            .name ===
                                                                            selectedColor[
                                                                                product.id.toString()
                                                                            ]
                                                                            ? "3px solid #000"
                                                                            : "1px solid #ccc",
                                                                    borderRadius:
                                                                        "5px",
                                                                    opacity:
                                                                        variant
                                                                            .colors
                                                                            .name ===
                                                                        selectedColor[
                                                                            product.id.toString()
                                                                        ]
                                                                            ? 1
                                                                            : 0.5, // Giảm độ sáng cho kích thước không khả dụng
                                                                }}
                                                            >
                                                                {
                                                                    variant
                                                                        .sizes
                                                                        .name
                                                                }
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    <div className="remaining-quantity mt-3">
                                        <p>
                                            Số lượng còn lại:{" "}
                                            <strong>
                                                {combo?.available_quantity}
                                            </strong>
                                        </p>
                                    </div>

                                    <div className="tf-product-info-quantity mt-4">
                                        <div className="wg-quantity">
                                            <span
                                                className="btn-quantity minus-btn"
                                                onClick={() =>
                                                    handleQuantityChange(-1)
                                                }
                                                style={{
                                                    cursor:
                                                        quantity > 1
                                                            ? "pointer"
                                                            : "not-allowed",
                                                    opacity:
                                                        quantity > 1 ? 1 : 0.5,
                                                }}
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
                                                style={{
                                                    cursor:
                                                        quantity <
                                                        (combo?.available_quantity ||
                                                            0)
                                                            ? "pointer"
                                                            : "not-allowed",
                                                    opacity:
                                                        quantity <
                                                        (combo?.available_quantity ||
                                                            0)
                                                            ? 1
                                                            : 0.5,
                                                }}
                                            >
                                                +
                                            </span>
                                        </div>
                                    </div>

                                    <div className="tf-product-info-buy-now-button mt-3">
                                        <button
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
                                        </button>
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

export default ComboDetail;
