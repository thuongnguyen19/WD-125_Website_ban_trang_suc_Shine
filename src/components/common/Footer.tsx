import { FacebookOutlined, InstagramOutlined, PinterestOutlined, TikTokOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
   import { Button, Card, Carousel } from "antd"; // Import Carousel từ Ant Design
   import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper và SwiperSlide
   import { Pagination } from "swiper/modules";
   import axios from "axios";
   import { useNavigate } from "react-router-dom";
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

const Footer = () => {
 



    // const [adConfig, setAdConfig] = useState<ApiResponse | null>(null);
    // const navigate = useNavigate();
    // useEffect(() => {
    //     const fetchAdConfig = async () => {
    //         try {
    //             const response = await axios.get<ApiResponse>(
    //                 "http://127.0.0.1:8000/api/getConfig",
    //             );
    //             setAdConfig(response.data);
    //         } catch (error) {
    //             console.error("Failed to fetch ad config:", error);
    //         }
    //     };

    //     fetchAdConfig();
    // }, []);
    
    // const handleNavigate = () => {
    //     navigate("/banner"); // Điều hướng đến trang "/banner"
    // };

    // const handleAdClick = async (id: number) => {
    //     try {
    //         const response = await axios.get(
    //             `http://127.0.0.1:8000/api/visits/${id}`,
    //         );
    //         console.log(response.data); // Log kết quả trả về từ API
    //     } catch (error) {
    //         console.error("Failed to register ad click:", error);
    //     }
    // };
    return (
        <div>
            <footer id="footer" className="footer md-pb-70">
                <div className="footer-wrap wow fadeIn" data-wow-delay="0s">
                    <div className="footer-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-md-6 col-12">
                                    <div className="footer-infor">
                                        <div className="footer-logo">
                                            <a href="index.html">
                                                <img
                                                    src="/public/duan/Logo. shine.2.png"
                                                    style={{
                                                        height: "60px",
                                                        width: "60px",
                                                    }}
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <ul>
                                            <li>
                                                <p>
                                                    Địa chỉ: Tòa nhà FPT
                                                    Polytechnic, Phố Trịnh Văn
                                                    Bô, Nam Từ Liêm, Hà Nội
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Email:{" "}
                                                    <a href="#">
                                                        shinejewelryshpop@gmail.com
                                                    </a>
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Số điện thoại:{" "}
                                                    <a href="#">
                                                        (212) 555-1234
                                                    </a>
                                                </p>
                                            </li>
                                        </ul>
                                        <ul className="tf-social-icon d-flex gap-10">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="box-icon w_34 round social-facebook social-line"
                                                >
                                                    <FacebookOutlined />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="box-icon w_34 round social-instagram social-line"
                                                >
                                                    <InstagramOutlined />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="box-icon w_34 round social-tiktok social-line"
                                                >
                                                    <TikTokOutlined />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="box-icon w_34 round social-pinterest social-line"
                                                >
                                                    <PinterestOutlined />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-12 footer-col-block">
                                    <div className="footer-heading footer-heading-desktop">
                                        <h6>Giúp đỡ</h6>
                                    </div>
                                    <div className="footer-heading footer-heading-moblie">
                                        <h6>Giúp đỡ</h6>
                                    </div>
                                    <ul className="footer-menu-list tf-collapse-content">
                                        <li>
                                            <a
                                                href="ac"
                                                className="footer-menu_item"
                                            >
                                                Chính sách bảo mật
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="shipping"
                                                className="footer-menu_item"
                                            >
                                                Vận chuyển
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="terms-conditions.html"
                                                className="footer-menu_item"
                                            >
                                                Điều khiển &amp; Điều kiện
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="faq-1.html"
                                                className="footer-menu_item"
                                            >
                                                Câu hỏi thường gặp
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xl-3 col-md-6 col-12 footer-col-block">
                                    <div className="footer-heading footer-heading-desktop">
                                        <h6>Về chúng tôi</h6>
                                    </div>
                                    <div className="footer-heading footer-heading-moblie">
                                        <h6>Về chúng tôi</h6>
                                    </div>
                                    <ul className="footer-menu-list tf-collapse-content">
                                        <li>
                                            <a
                                                href="about"
                                                className="footer-menu_item"
                                            >
                                                Câu chuyện của chúng tôi
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="lienhe"
                                                className="footer-menu_item"
                                            >
                                                liên hệ
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/login"
                                                className="footer-menu_item"
                                            >
                                                Tài khoản
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* <div className="col-xl-3 col-md-6 col-12">
                                    <div className="footer-newsletter footer-col-block">
                                        <div className="footer-heading footer-heading-desktop">
                                            <h6>Đăng ký nhận Email</h6>
                                        </div>
                                        <div className="footer-heading footer-heading-moblie">
                                            <h6>Đăng ký nhận Email</h6>
                                        </div>
                                        <div className="tf-collapse-content">
                                            <div className="footer-menu_item">
                                                Đăng ký để được ưu tiên nhận
                                                thông tin về hàng mới về, chương
                                                trình khuyến mại, nội dung độc
                                                quyền, sự kiện và nhiều hơn nữa!
                                            </div>
                                            <form
                                                className="form-newsletter"
                                                id="subscribe-form"
                                                action="#"
                                                method="post"
                                                acceptCharset="utf-8"
                                                data-mailchimp="true"
                                            >
                                                <div id="subscribe-content">
                                                    <fieldset className="email">
                                                        <input
                                                            type="email"
                                                            name="email-form"
                                                            id="subscribe-email"
                                                            placeholder="Nhập email của bạn...."
                                                            aria-required="true"
                                                        />
                                                    </fieldset>
                                                    <div className="button-submit">
                                                        <button
                                                            id="subscribe-button"
                                                            className="tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn"
                                                            type="button"
                                                        >
                                                            Đăng ký
                                                            <i className="icon icon-arrow1-top-left"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div id="subscribe-msg"></div>
                                            </form>
                                            <div className="tf-cur">
                                                <div className="tf-currencies">
                                                    <select className="image-select center style-default type-currencies">
                                                        <option data-thumbnail="images/country/fr.svg">
                                                            EUR € | Pháp
                                                        </option>
                                                        <option data-thumbnail="images/country/de.svg">
                                                            EUR € | Đức
                                                        </option>
                                                        <option
                                                            selected
                                                            data-thumbnail="images/country/us.svg"
                                                        >
                                                            USD $ | Mỹ
                                                        </option>
                                                        <option data-thumbnail="images/country/vn.svg">
                                                            VND ₫ | Việt Nam
                                                        </option>
                                                    </select>
                                                </div>
                                                <div className="tf-languages">
                                                    <select className="image-select center style-default type-languages">
                                                        <option>English</option>
                                                        <option>العربية</option>
                                                        <option>
                                                            简体中文
                                                        </option>
                                                        <option>اردو</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer


//  <div style={{ padding: 20 }}>
//                 {adConfig ? (
//                     adConfig.data[2] === "Vị trí này còn trống" ? (
//                         <div
//                             style={{
//                                 textAlign: "center",
//                                 fontSize: "16px",
//                                 color: "gray",
//                                 padding: "20px",
//                                 border: "1px dashed gray",
//                                 margin: "0 auto",
//                                 maxWidth: "1000px",
//                             }}
//                         >
//                             Vị trí này còn trống
//                             <Button
//                                 type="primary"
//                                 style={{
//                                     marginTop: "10px",
//                                     backgroundColor: "#007bff",
//                                     borderColor: "#007bff",
//                                 }}
//                                 onClick={handleNavigate} // Gọi hàm điều hướng khi bấm nút
//                             >
//                                 đăng kí ngay tại đây
//                             </Button>
//                         </div>
//                     ) : (
//                         <Card
//                             hoverable
//                             cover={
//                                 <a
//                                     href={adConfig.data[2]?.url}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     onClick={() =>
//                                         handleAdClick(adConfig.data[2]?.id_ads!)
                                        
//                                     }
                                    
//                                 >
                                    
//                                     <div style={{ position: "relative" }}>
//                                         <img
//                                             alt="Banner"
//                                             src={adConfig.data[2]?.image}
//                                             style={{
//                                                 width: "1000px",
//                                                 height: "300px",
//                                             }}
//                                             className="banner-image"
//                                         />
//                                         {/* Tiêu đề trên nút */}
//                                         <div
//                                             style={{
//                                                 position: "absolute",
//                                                 bottom: "40px",
//                                                 left: "20px",
//                                                 color: "white",
//                                                 fontSize: "24px",
//                                                 fontWeight: "bold",
//                                                 paddingBottom: "140px",
//                                                 paddingLeft: "190px",
//                                             }}
//                                             className="banner-title"
//                                         >
//                                             {adConfig.data[1]?.title}
//                                         </div>

//                                         {/* Nút "Xem ngay tại đây" ở giữa */}
//                                         <Button
//                                             type="primary"
//                                             style={{
//                                                 position: "absolute",
//                                                 bottom: "100px",
//                                                 left: "50%",
//                                                 transform: "translateX(-50%)",
//                                                 backgroundColor: "#ff5722",
//                                                 borderColor: "#ff5722",
//                                                 padding: "10px 10px",
//                                                 width: "120px",
//                                             }}
//                                             className="banner-button"
//                                         >
//                                             Xem ngay tại đây
//                                         </Button>

//                                         {/* Dòng chữ highlight chạy ở góc dưới */}
//                                         <div
//                                             style={{
//                                                 position: "absolute",
//                                                 bottom: "5px",
//                                                 left: "20px",
//                                                 color: "white",
//                                                 fontSize: "18px",
//                                                 fontWeight: "normal",
//                                                 whiteSpace: "nowrap",
//                                                 overflow: "hidden",
//                                                 width: "100%",
//                                                 animation:
//                                                     "scroll-text 10s linear infinite",
//                                             }}
//                                             className="banner-highlight"
//                                         >
//                                             {adConfig.data[1]?.highlight}
//                                         </div>
//                                     </div>
//                                 </a>
//                             }
//                             style={{ maxWidth: 1000, margin: "0 auto" }}
//                         />
//                     )
//                 ) : (
//                     <div
//                         style={{
//                             textAlign: "center",
//                             fontSize: "16px",
//                             color: "gray",
//                             padding: "20px",
//                             border: "1px dashed gray",
//                             margin: "0 auto",
//                             maxWidth: "1000px",
//                         }}
//                     >
//                         Đang tải dữ liệu...
//                     </div>
//                 )}
//             </div>