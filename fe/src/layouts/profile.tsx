import React from "react";
import { Modal, message } from "antd";
import { useNavigate, Outlet, Link, useLocation } from "react-router-dom"; // Import useLocation
import { useQueryClient } from "@tanstack/react-query";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const Profile = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const location = useLocation(); // Get the current location
    const [messageAPI, contextHolder] = message.useMessage();

    const handleLogout = () => {
        Modal.confirm({
            title: "Xác nhận",
            content: "Bạn có muốn đăng xuất không?",
            okText: "Đăng xuất",
            cancelText: "Hủy",
            onOk: () => {
                localStorage.removeItem("authToken");
                queryClient.clear();
                messageAPI.success("Đã đăng xuất thành công!");
                setTimeout(() => {
                    navigate("/login");
                }, 1000);
            },
        });
    };

    // Determine if the current path is "od_histori"
    const pageTitle = location.pathname.includes("od_histori")
        ? "Lịch sử đơn hàng của bạn"
        : "Trang của tôi";

    return (
        <div>
            <Header />
            {contextHolder} {/* For displaying message API */}
            <div className="col-xl-3 col-md-4 col-3">
                <ul className="nav-icon d-flex justify-content-end align-items-center gap-20">
                    <li className="nav-search">
                        <a
                            href="#canvasSearch"
                            data-bs-toggle="offcanvas"
                            aria-controls="offcanvasLeft"
                            className="nav-icon-item"
                        >
                            <i className="icon icon-search"></i>
                        </a>
                    </li>
                    <li className="nav-account">
                        <a
                            href="#login"
                            data-bs-toggle="modal"
                            className="nav-icon-item"
                        >
                            <i className="icon icon-account"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="tf-page-title">
                <div className="container-full">
                    <div className="heading text-center">{pageTitle}</div>{" "}
                    {/* Dynamic title */}
                </div>
            </div>
            <section className="flat-spacing-11">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <ul className="my-account-nav">
                                <li>
                                    <Link
                                        to="/profile"
                                        className={`my-account-nav-item ${location.pathname === "/profile" ? "active" : ""}`}
                                        style={{ cursor: "pointer" }}
                                    >
                                        Bảng điều khiển người dùng
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="od_histori"
                                        className={`my-account-nav-item ${location.pathname.includes("od_histori") ? "active" : ""}`}
                                        style={{ cursor: "pointer" }}
                                    >
                                        Đơn hàng
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="my-account-address.html"
                                        className="my-account-nav-item"
                                    >
                                        địa chỉ
                                    </a>
                                </li>
                                <li>
                                    <a
                                        onClick={handleLogout}
                                        className="my-account-nav-item"
                                        style={{ cursor: "pointer" }}
                                    >
                                        đăng xuất
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-9">
                            {/* Display child route content here */}
                            <Outlet />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Profile;
