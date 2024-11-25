import React, { useEffect, useState } from "react";
import { Button, Card, Carousel } from "antd"; // Import Carousel từ Ant Design
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper và SwiperSlide
import { Pagination } from "swiper/modules";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../configs/axios";

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

const Header2 = () => {
    const [adConfig, setAdConfig] = useState<ApiResponse | null>(null);
const navigate = useNavigate();
    useEffect(() => {
        const fetchAdConfig = async () => {
            try {
                const response = await axiosInstance.get<ApiResponse>(
                    "/getConfig",
                );
                setAdConfig(response.data);
            } catch (error) {
                console.error("Failed to fetch ad config:", error);
            }
        };

        fetchAdConfig();
    }, []);
   const handleNavigate = () => {
       navigate("/banner"); // Điều hướng đến trang "/banner"
   };
    const collections = [
        {
            imgSrc: "images/collections/collection-27.jpg",
            heading: "Modern Backpack",
            subheading: "Start from $199",
            link: "shop-collection-sub.html",
        },
        {
            imgSrc: "images/collections/collection-28.jpg",
            heading: "Season Collection",
            subheading: "Start from $199",
            link: "shop-collection-sub.html",
        },
        {
            imgSrc: "images/collections/collection-26.jpg",
            heading: "Stradivarius top trainers",
            subheading: "Start from $199",
            link: "shop-collection-sub.html",
        },
    ];

    const handleAdClick = async (id: number) => {
        try {
            const response = await axios.get(
                `/visits/${id}`,
            );
            console.log(response.data); // Log kết quả trả về từ API
        } catch (error) {
            console.error("Failed to register ad click:", error);
        }
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
                                onClick={handleNavigate} // Gọi hàm điều hướng khi bấm nút
                            >
                                đăng kí ngay tại đây 
                            </Button>
                        </div>
                    ) : (
                        <Card
                            hoverable
                            cover={
                                <a
                                    href={adConfig.data[1]?.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() =>
                                        handleAdClick(adConfig.data[1]?.id_ads!)
                                    }
                                >
                                    <div style={{ position: "relative" }}>
                                        <img
                                            alt="Banner"
                                            src={adConfig.data[1]?.image}
                                            style={{
                                                width: "1000px",
                                                height: "300px",
                                            }}
                                            className="banner-image"
                                        />
                                        {/* Tiêu đề trên nút */}
                                        <div
                                            style={{
                                                position: "absolute",
                                                bottom: "40px",
                                                left: "20px",
                                                color: "white",
                                                fontSize: "24px",
                                                fontWeight: "bold",
                                                paddingBottom: "140px",
                                                paddingLeft: "190px",
                                            }}
                                            className="banner-title"
                                        >
                                            {adConfig.data[1]?.title}
                                        </div>

                                        {/* Nút "Xem ngay tại đây" ở giữa */}
                                        <Button
                                            type="primary"
                                            style={{
                                                position: "absolute",
                                                bottom: "100px",
                                                left: "50%",
                                                transform: "translateX(-50%)",
                                                backgroundColor: "#ff5722",
                                                borderColor: "#ff5722",
                                                padding: "10px 10px",
                                                width: "120px",
                                            }}
                                            className="banner-button"
                                        >
                                            Xem ngay tại đây
                                        </Button>

                                        {/* Dòng chữ highlight chạy ở góc dưới */}
                                        <div
                                            style={{
                                                position: "absolute",
                                                bottom: "5px",
                                                left: "20px",
                                                color: "white",
                                                fontSize: "18px",
                                                fontWeight: "normal",
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                width: "100%",
                                                animation:
                                                    "scroll-text 10s linear infinite",
                                            }}
                                            className="banner-highlight"
                                        >
                                            {adConfig.data[1]?.highlight}
                                        </div>
                                    </div>
                                </a>
                            }
                            style={{ maxWidth: 1000, margin: "0 auto" }}
                        />
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
            <div className="flat-spacing-13">
                <h2>COMBO</h2>
                <div className="container-full">
                    <Swiper
                        modules={[Pagination]} // Sử dụng Pagination module
                        spaceBetween={30} // Khoảng cách giữa các slide
                        slidesPerView={3} // Hiển thị 3 sản phẩm trên màn hình lớn
                        pagination={{ clickable: true }} // Cho phép bấm vào phân trang
                        breakpoints={{
                            1024: { slidesPerView: 3 }, // Trên màn hình lớn, hiển thị 3 sản phẩm
                            768: { slidesPerView: 3 }, // Trên màn hình tablet, hiển thị 3 sản phẩm
                            576: { slidesPerView: 1.3 }, // Trên màn hình nhỏ, hiển thị 1.3 sản phẩm
                        }}
                    >
                        {collections.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="collection-item-v2 hover-img">
                                    <a
                                        href={item.link}
                                        className="collection-inner"
                                    >
                                        <div className="collection-image img-style">
                                            <img
                                                className="lazyload"
                                                src={item.imgSrc}
                                                alt="collection-img"
                                            />
                                        </div>
                                        <div className="collection-content">
                                            <div className="top">
                                                <h5 className="heading">
                                                    {item.heading}
                                                </h5>
                                                <p className="subheading">
                                                    {item.subheading}
                                                </p>
                                            </div>
                                            <div className="bottom">
                                                <button className="tf-btn btn-line collection-other-link fw-6">
                                                    <span>Shop now</span>
                                                    <i className="icon icon-arrow1-top-left"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Header2;
