import React, { useEffect, useState } from "react";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/common/Header";
import axios from "axios";
import { message, Spin } from "antd";
import { useNavigate } from "react-router-dom";

interface CartItem {
    id: number;
    quantity: number;
    variant: {
        product: {
            name: string;
            thumbnail: string;
            description: string;
        };
        colors: {
            name: string;
        };
        sizes: {
            name: string;
        };
        selling_price: string;
        image_color: string;
    } | null;
}

const ListCart: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();
    const [expandedItems, setExpandedItems] = useState<number[]>([]);

    // Fetch sản phẩm trong giỏ hàng khi component được mount
    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (!token) {
            message.error("Bạn chưa đăng nhập.");
            navigate("/login");
            return;
        }

        const fetchCartItems = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8000/api/listCart",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );

                if (response.data.status) {
                    const items = response.data.data;
                    setCartItems(items);
                    calculateTotalPrice(items);
                } else {
                    message.error(response.data.message);
                }
            } catch (error) {
                message.error("Có lỗi xảy ra khi lấy giỏ hàng.");
            } finally {
                setLoading(false);
            }
        };

        fetchCartItems();
    }, [navigate]);

    const calculateTotalPrice = (items: CartItem[]) => {
        const total = items.reduce((sum, item) => {
            return (
                sum +
                parseFloat(item.variant?.selling_price || "0") * item.quantity
            );
        }, 0);
        setTotalPrice(total);
    };

    const toggleDescription = (itemId: number) => {
        if (expandedItems.includes(itemId)) {
            setExpandedItems(expandedItems.filter((id) => id !== itemId));
        } else {
            setExpandedItems([...expandedItems, itemId]);
        }
    };

    const isDescriptionExpanded = (itemId: number) =>
        expandedItems.includes(itemId);

    if (loading) {
        return (
            <div className="loading-spinner">
                <Spin tip="Đang tải giỏ hàng..." />
            </div>
        );
    }

    return (
        <>
            <Header />
            <div id="wrapper">
                <div className="tf-page-title">
                    <div className="container-full">
                        <div className="heading text-center">Giỏ Hàng</div>
                    </div>
                </div>

                <section className="flat-spacing-11">
                    <div className="container">
                        <div className="tf-page-cart-wrap">
                            <div className="cart-container">
                                {/* Bên trái: Danh sách sản phẩm */}
                                <div className="cart-items">
                                    <table className="tf-table-page-cart">
                                        <thead>
                                            <tr>
                                                <th>Sản phẩm</th>
                                                <th>Màu sắc</th>
                                                <th>Kích thước</th>
                                                <th>Giá</th>
                                                <th>Số lượng</th>
                                                <th>Tổng cộng</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartItems.map((item) => (
                                                <tr
                                                    key={item.id}
                                                    className="tf-cart-item"
                                                >
                                                    <td className="tf-cart-item_product">
                                                        <a
                                                            href="product-detail.html"
                                                            className="img-box"
                                                        >
                                                            <img
                                                                src={
                                                                    item.variant
                                                                        ?.image_color
                                                                }
                                                                alt={
                                                                    item.variant
                                                                        ?.product
                                                                        .name
                                                                }
                                                                style={{
                                                                    width: "100px",
                                                                    height: "100px",
                                                                }}
                                                            />
                                                        </a>
                                                        <div className="cart-info">
                                                            <a
                                                                href="product-detail.html"
                                                                className="cart-title link"
                                                            >
                                                                {
                                                                    item.variant
                                                                        ?.product
                                                                        .name
                                                                }
                                                            </a>
                                                            <p>
                                                                {isDescriptionExpanded(
                                                                    item.id,
                                                                )
                                                                    ? item
                                                                          .variant
                                                                          ?.product
                                                                          .description
                                                                    : item.variant?.product.description
                                                                          .split(
                                                                              " ",
                                                                          )
                                                                          .slice(
                                                                              0,
                                                                              3,
                                                                          )
                                                                          .join(
                                                                              " ",
                                                                          ) +
                                                                      "..."}
                                                            </p>
                                                            <a
                                                                onClick={() =>
                                                                    toggleDescription(
                                                                        item.id,
                                                                    )
                                                                }
                                                                className="toggle-description"
                                                                style={{
                                                                    cursor: "pointer",
                                                                }}
                                                            >
                                                                {isDescriptionExpanded(
                                                                    item.id,
                                                                )
                                                                    ? "Ẩn chi tiết"
                                                                    : "Xem chi tiết"}
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {
                                                            item.variant?.colors
                                                                .name
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            item.variant?.sizes
                                                                .name
                                                        }
                                                    </td>
                                                    <td className="tf-cart-item_price">
                                                        {parseFloat(
                                                            item.variant
                                                                ?.selling_price ||
                                                                "0",
                                                        ).toLocaleString(
                                                            "vi-VN",
                                                        )}{" "}
                                                        VND
                                                    </td>
                                                    <td className="tf-cart-item_quantity">
                                                        <div className="cart-quantity">
                                                            <input
                                                                type="text"
                                                                name="number"
                                                                value={
                                                                    item.quantity
                                                                }
                                                                readOnly
                                                                style={{
                                                                    width: "40px",
                                                                    textAlign:
                                                                        "center",
                                                                }}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td className="tf-cart-item_total">
                                                        {(
                                                            parseFloat(
                                                                item.variant
                                                                    ?.selling_price ||
                                                                    "0",
                                                            ) * item.quantity
                                                        ).toLocaleString(
                                                            "vi-VN",
                                                        )}{" "}
                                                        VND
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="tf-cart-summary">
                                    <div className="tf-cart-totals">
                                        <h3>Tổng cộng:</h3>
                                        <span className="total-value">
                                            {totalPrice.toLocaleString("vi-VN")}{" "}
                                            VND
                                        </span>
                                    </div>
                                    <div className="tf-cart-checkout">
                                        <a
                                            href="/checkout"
                                            className="tf-btn w-100 btn-fill animate-hover-btn radius-3 justify-content-center"
                                        >
                                            <span>Thanh toán</span>
                                        </a>
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
