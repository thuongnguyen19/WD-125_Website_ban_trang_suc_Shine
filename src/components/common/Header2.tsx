import React, { useEffect, useState } from "react";
import { Button, Card, Carousel } from "antd"; // Import Carousel từ Ant Design
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper và SwiperSlide
import { Navigation, Pagination } from "swiper/modules";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../configs/axios";
import {
    DoubleRightOutlined,
    LeftOutlined,
    RightOutlined,
} from "@ant-design/icons";

// Định nghĩa các interface
interface AdConfig {
    title?: string;
    highlight?: string;
    url?: string;
    image?: string;
    id_ads?: number;
}

interface ApiResponse {
    status: boolean;
    message: string;
    data: {
        [key: string]: string | AdConfig;
    };
}
interface Combo {
    id: number;
    name: string;
    price: string;
    description: string;
    quantity: number;
    image: string;
}

const Header2 = () => {
    const [adConfig, setAdConfig] = useState<ApiResponse | null>(null);
    const [combos, setCombos] = useState<Combo[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAdConfig = async () => {
            try {
                const response =
                    await axiosInstance.get<ApiResponse>("/getConfig");
                setAdConfig(response.data);
            } catch (error) {
                console.error("Failed to fetch ad config:", error);
            }
        };

        fetchAdConfig();
    }, []);

    useEffect(() => {
        const fetchCombos = async () => {
            try {
                const response = await axiosInstance.get<Combo[]>("/combo"); // Gọi API combo
                setCombos(response.data);
            } catch (error) {
                console.error("Lỗi khi gọi API combo:", error);
            }
        };

        fetchCombos();
    }, []);

    const handleAdClick = (id: number) => {
        navigate(`/combo_detail/${id}`); // Điều hướng đến trang combo_detail với id của combo
    };

    return (
        <div>
            {/* Carousel */}
            <div className="carousel-container">
                <Carousel
                    autoplay
                    dots={{ className: "custom-dots" }}
                    arrows={true}
                    autoplaySpeed={3000}
                >
                    <div className="wrap-slider">
                        <img
                            src="https://theme.hstatic.net/200000061680/1000549213/14/ms_banner_img3.jpg?v=1348"
                            alt="Slide 1"
                            loading="lazy"
                            className="carousel-image"
                        />
                    </div>
                    <div className="wrap-slider">
                        <img
                            src="https://file.hstatic.net/1000381168/collection/1920x820px_0a49db5dd4d141b2847493aecbda1d78.jpg"
                            alt="Slide 2"
                            loading="lazy"
                            className="carousel-image"
                        />
                    </div>
                    <div className="wrap-slider">
                        <img
                            src="https://huythanhjewelry.vn/storage/photos/uploads/banner-cnc-03_1726623182.jpg"
                            alt="Slide 4"
                            loading="lazy"
                            className="carousel-image"
                        />
                    </div>
                </Carousel>
            </div>

            <div style={{ padding: 20 }}>
                {adConfig ? (
                    adConfig.data[1] === "Vị trí này còn trống" ? (
                        <div
                            style={{
                                textAlign: "center",
                                fontSize: "16px",
                                color: "gray",
                                padding: "20px",
                                border: "1px dashed gray",
                                margin: "0 auto",
                                maxWidth: "1000px",
                            }}
                        >
                            Vị trí này còn trống
                            <Button
                                type="primary"
                                style={{
                                    marginTop: "10px",
                                    backgroundColor: "#007bff",
                                    borderColor: "#007bff",
                                }}
                                onClick={() => navigate("/banner")}
                            >
                                Đăng ký ngay tại đây
                            </Button>
                        </div>
                    ) : (
                        <div
                            style={{
                                position: "relative",
                                maxWidth: "1000px",
                                margin: "0 auto",
                            }}
                        >
                            <a
                                href={adConfig.data?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    alt="Banner"
                                    src={adConfig.data?.image}
                                    style={{
                                        width: "1000px", // Giữ nguyên kích thước ảnh
                                        height: "300px", // Giữ nguyên kích thước ảnh
                                        objectFit: "cover", // Đảm bảo ảnh không bị méo
                                    }}
                                    className="banner-image"
                                />
                                {/* Tiêu đề */}
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: "60px", // Đặt vị trí của tiêu đề
                                        left: "20px",
                                        color: "white",
                                        fontSize: "24px",
                                        fontWeight: "bold",
                                        zIndex: 1, // Đảm bảo tiêu đề nằm trên ảnh
                                    }}
                                >
                                    {adConfig.data?.title}
                                </div>

                                {/* Mô tả hoặc phần highlight */}
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: "20px", // Đặt vị trí cho phần mô tả
                                        left: "20px",
                                        color: "white",
                                        fontSize: "18px",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        width: "100%",
                                        animation:
                                            "scroll-text 10s linear infinite",
                                        zIndex: 1, // Đảm bảo văn bản nằm trên ảnh
                                    }}
                                >
                                    {adConfig.data?.highlight}
                                </div>
                            </a>
                        </div>
                    )
                ) : (
                    <div
                        style={{
                            textAlign: "center",
                            fontSize: "16px",
                            color: "gray",
                            padding: "20px",
                            border: "1px dashed gray",
                            margin: "0 auto",
                            maxWidth: "1000px",
                        }}
                    >
                        Đang tải dữ liệu...
                    </div>
                )}
            </div>

            {/* Swiper */}
            <div className="flat-tab-store flat-animate-tab overflow-unset">
                <ul
                    className="widget-tab-3 d-flex justify-content-center flex-wrap wow fadeInUp"
                    data-wow-delay="0s"
                    role="tablist"
                >
                    <li className="nav-tab-item" role="presentation">
                        <a
                            href="#essentials"
                            className="active"
                            data-bs-toggle="tab"
                        >
                            COMBO KHUYẾN MÃI
                        </a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div
                        className="tab-pane active show"
                        id="essentials"
                        role="tabpanel"
                    >
                        <div className="wrap-carousel">
                            <div
                                className="swiper tf-sw-product-sell-1"
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
                                    {/* Nút điều hướng slider */}
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

                                    {/* Swiper chính */}
                                    <Swiper
                                        modules={[Navigation]} // Sử dụng module Navigation cho Swiper
                                        spaceBetween={20}
                                        slidesPerView={4} // Hiển thị 4 sản phẩm mỗi lần
                                        navigation={{
                                            nextEl: ".swiper-button-next",
                                            prevEl: ".swiper-button-prev",
                                        }}
                                        loop={true} // Cho phép slider chạy vòng lặp
                                        className="swiper-container"
                                    >
                                        {combos.map((combo) => (
                                            <SwiperSlide key={combo.id}>
                                                <div className="card-product">
                                                    <div className="card-product-wrapper">
                                                        <div
                                                            onClick={() =>
                                                                handleAdClick(
                                                                    combo.id,
                                                                )
                                                            }
                                                            style={{
                                                                cursor: "pointer",
                                                            }}
                                                            className="product-img"
                                                        >
                                                            <img
                                                                className="lazyload img-product"
                                                                src={
                                                                    combo.image ||
                                                                    "https://via.placeholder.com/300"
                                                                }
                                                                alt={combo.name}
                                                                style={{
                                                                    width: "700px",
                                                                    height: "300px",
                                                                    objectFit:
                                                                        "cover",
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="product-name">
                                                            <p
                                                                onClick={() =>
                                                                    handleAdClick(
                                                                        combo.id,
                                                                    )
                                                                }
                                                                style={{
                                                                    cursor: "pointer",
                                                                }}
                                                            >
                                                                {combo.name}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header2;
