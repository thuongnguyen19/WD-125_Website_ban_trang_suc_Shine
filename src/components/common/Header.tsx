import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    SearchOutlined,
    UserOutlined,
    ShoppingCartOutlined,
    MenuOutlined,
    CaretDownOutlined,
    HeartOutlined,
} from "@ant-design/icons";
import { Category, fetchCategorys } from "../../Interface/Category";
import { number } from "joi";
import axios from "axios";
import { Avatar, message } from "antd";
import axiosInstance from "../../configs/axios";

const Header: React.FC = () => {
     const navigate = useNavigate();
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [cartCount, setCartCount] = useState<number>(0);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [favoritecount, setFavorite] = useState<number>(0);
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Kiểm tra người dùng đăng nhập
    const [user, setUser] = useState<{ name: string; image: string } | null>(
        null,
    ); // Lưu thông tin người dùng

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem("authToken");

            try {
                const response = await axiosInstance.get(
                    "/listInformationOrder",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );

                setIsAuthenticated(true);
                setUser(response.data.data.user);
            } catch (error) {
                message.error("Lấy thông tin người dùng không thành công!");
            }
        };

        fetchUserData();
    }, []);


    useEffect(() => {
        // Hàm tải danh mục sản phẩm
        const loadCategories = async () => {
            try {
                const data = await fetchCategorys(); // Gọi API để tải danh mục
                setCategories(data);
            } catch (error) {
                console.error("Lỗi khi tải danh mục sản phẩm:", error);
            }
            setLoading(false);
        };

        // Hàm tính tổng số lượng sản phẩm trong giỏ hàng
        const fetchCartCount = () => {
            const cartData = localStorage.getItem("cartItems");
            const favoriteData = localStorage.getItem("favorite");
            if (favoriteData) {
                const favoriteItems = JSON.parse(favoriteData);
                setFavorite(favoriteItems.length);
            }
            if (cartData) {
                const cartItems = JSON.parse(cartData);

                const totalQuantity = cartItems.reduce(
                    (total: number, item: { quantity: number }) =>
                        total + Number(item.quantity),
                    0,
                );

                setCartCount(totalQuantity);
            }
        };

        const token = localStorage.getItem("authToken");
        if (token) {
            setIsLoggedIn(true);
        }

        loadCategories();
        fetchCartCount();

        window.addEventListener("storage", fetchCartCount);

        return () => {
            window.removeEventListener("storage", fetchCartCount);
        };
    }, []);


    // Điều hướng đến trang cá nhân
    const goToProfile = () => {
        navigate("/profile");
    };

    return (
        <header id="header" className="header-default">
            <div className="px_15 lg-px_40">
                <div className="row wrapper-header align-items-center">
                    <div className="col-md-4 col-3 tf-lg-hidden">
                        <a
                            href="#mobileMenu"
                            data-bs-toggle="offcanvas"
                            aria-controls="offcanvasLeft"
                        >
                            <MenuOutlined style={{ fontSize: "24px" }} />
                        </a>
                    </div>

                    <div className="col-xl-3 col-md-4 col-6">
                        <Link to="/" className="logo-header">
                            <img
                                src="/public/duan/Logo. shine.2.png" style={{height : "60px" , width:"60px"}}
                                alt="logo"
                                className="logo"
                            />
                        </Link>
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
                                    <div className="item-link">Danh mục</div>
                                    <div className="sub-menu submenu-default">
                                        <ul className="menu-list">
                                            {categories.map((category) => (
                                                <li key={category.id}>
                                                    <a
                                                        href={`/products?category=${category.id}`}
                                                    >
                                                        {category.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                                <li className="menu-item">
                                    <Link to="/products" className="item-link">
                                        Sản phẩm
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/ser" className="item-link">
                                        Dịch vụ
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/about-us" className="item-link">
                                        Về chúng tôi
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/contact" className="item-link">
                                        Liên hệ
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="col-xl-3 col-md-4 col-3">
                        <ul className="nav-icon d-flex justify-content-end align-items-center gap-20">
                            <li className="nav-search">
                                <a
                                    href="#canvasSearch"
                                    data-bs-toggle="offcanvas"
                                    aria-controls="offcanvasLeft"
                                    className="nav-icon-item"
                                >
                                    <SearchOutlined
                                        style={{ fontSize: "24px" }}
                                    />
                                </a>
                            </li>
                            <li className="nav-cart">
                                <Link to="/favorite" className="nav-icon-item">
                                    <HeartOutlined
                                        style={{ fontSize: "24px" }}
                                    />
                                    <span className="count-box">
                                        {favoritecount}
                                    </span>
                                </Link>
                            </li>

                            <li className="nav-account">
                                {isAuthenticated ? (
                                    <div>
                                        <span
                                            onClick={goToProfile}
                                            style={{
                                                cursor: "pointer",
                                            }}
                                        >
                                            <Avatar
                                                style={{ marginLeft: 10 }}
                                                size={40}
                                                src={user?.image}
                                                alt={user?.name}
                                            />
                                        </span>
                                    </div>
                                ) : (
                                    <Link to="/login" className="nav-icon-item">
                                        <UserOutlined
                                            style={{
                                                fontSize: "24px",
                                            }}
                                        />
                                    </Link>
                                )}
                            </li>

                            <li className="nav-cart">
                                <Link to="/cart" className="nav-icon-item">
                                    <ShoppingCartOutlined
                                        style={{ fontSize: "24px" }}
                                    />
                                    <span className="count-box">
                                        {cartCount}
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

