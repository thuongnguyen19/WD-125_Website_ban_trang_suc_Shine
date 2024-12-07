import React, { useEffect, useState } from "react";
import { Button, Card, Carousel } from "antd"; // Import Carousel từ Ant Design
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper và SwiperSlide
import { Pagination } from "swiper/modules";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../configs/axios";
import { DoubleRightOutlined } from "@ant-design/icons";

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
                    adConfig.data === "Vị trí này còn trống" ? (
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
                                    href={adConfig.data?.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() =>
                                        handleAdClick(adConfig.data?.id_ads!)
                                    }
                                >
                                    <div style={{ position: "relative" }}>
                                        <img
                                            alt="Banner"
                                            src={adConfig.data?.image}
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
                                            {adConfig.data?.title}
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
                                            {adConfig.data?.highlight}
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
                        modules={[Pagination]}
                        spaceBetween={30}
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            1024: { slidesPerView: 3 },
                            768: { slidesPerView: 3 },
                            576: { slidesPerView: 1.3 },
                        }}
                        grabCursor={true} // Hiển thị con trỏ dạng "grab" để người dùng biết có thể kéo
                        loop={true} // Vòng lặp các slide
                        autoplay={{
                            delay: 3000, // Tự động cuộn sau 3 giây
                            disableOnInteraction: false, // Tiếp tục autoplay ngay cả khi người dùng tương tác
                        }}
                    >
                        {combos.map((combo) => (
                            <SwiperSlide key={combo.id}>
                                <div className="collection-item-v2 hover-img">
                                    <a
                                        href={`/combo_detail/${combo.id}`} // Điều hướng đến chi tiết combo
                                        className="collection-inner"
                                    >
                                        <div className="collection-image img-style">
                                            <img
                                                style={{
                                                    height: 550,
                                                    width: 425,
                                                }}
                                                className="lazyload"
                                                src={
                                                    combo.image ||
                                                    "https://via.placeholder.com/300"
                                                } // Hiển thị ảnh mặc định nếu không có ảnh
                                                alt={combo.name}
                                            />
                                        </div>
                                        <div className="collection-content">
                                            <div className="top">
                                                <h5 className="heading">
                                                    {combo.name}
                                                </h5>
                                                <p className="subheading">
                                                    Giá chỉ còn :{" "}
                                                    {Number(
                                                        combo.price,
                                                    ).toLocaleString(
                                                        "vi-VN",
                                                    )}{" "}
                                                    VND
                                                </p>
                                                {/* <p>{combo.description}</p> */}
                                            </div>
                                            <div className="bottom">
                                                <button className="tf-btn btn-line collection-other-link fw-6">
                                                    <span>Mua ngay </span>
                                                    <DoubleRightOutlined />
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
