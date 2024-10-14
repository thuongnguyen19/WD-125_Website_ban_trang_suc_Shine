import React, { useEffect, useState } from "react";
import { message } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";
import axios from "axios";

const Success: React.FC = () => {
    const [status, setStatus] = useState<boolean | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [messageText, setMessageText] = useState<string>("");
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const vnp_TxnRef = params.get("vnp_TxnRef");
        const vnp_ResponseCode = params.get("vnp_ResponseCode");
        const paymentRole = location.state?.paymentRole || null;

        const fetchPaymentResult = async () => {
            // Nếu phương thức thanh toán là online (role = 2), lấy kết quả từ API
            if (paymentRole === 2) {
                try {
                    const response = await axios.get(
                        "http://localhost:8000/api/paymentResult",
                        {
                            params: {
                                vnp_TxnRef,
                                vnp_ResponseCode,
                            },
                        },
                    );

                    if (response.data.status) {
                        setStatus(true);
                        setMessageText(
                            response.data.message || "đặt hàng thành công!",
                        );
                    } else {
                        setStatus(false);
                        setMessageText(
                            response.data.message || "đặt  thất bại.",
                        );
                    }
                } catch (error) {
                    message.error("Có lỗi xảy ra khi xử lý thanh toán.");
                    setStatus(false);
                    setMessageText("Thanh toán thất bại.");
                } finally {
                    setLoading(false);
                }
            } else {
                // Nếu phương thức thanh toán là COD (role = 1), hiển thị mặc định "Thanh toán thành công"
                setStatus(true);
                setMessageText("Thanh toán khi nhận hàng thành công!");
                setLoading(false);
            }
        };

        fetchPaymentResult();
    }, [location]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header />
            <div>
                <div className="tf-page-title">
                    <div className="container-full">
                        <div className="heading text-center">
                            Trạng thái thanh toán{" "}
                        </div>
                    </div>
                </div>
                <section className="flat-spacing-11">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-4 col-lg-6 col-md-8">
                                <div className="tf-page-cart-checkout">
                                    <div className="d-flex gap-10 align-items-center mb_20">
                                        <img
                                            src={
                                                status
                                                    ? "https://imgur.com/ZKPE11b.jpg"
                                                    : "https://imgur.com/failed.jpg"
                                            }
                                            alt=""
                                            width={60}
                                        />
                                        <h5 className="fw-5">
                                            {status
                                                ? "đặt thành công"
                                                : "đặt thất bại"}{" "}
                                        </h5>
                                    </div>
                                    <p className="mb_20">{messageText}</p>
                                    {status && (
                                        <a
                                            href="/"
                                            className="tf-btn mb_20 w-100 btn-fill animate-hover-btn radius-3 justify-content-center"
                                        >
                                            <span>Tiếp tục mua hàng</span>
                                        </a>
                                    )}
                                    <p>
                                        Mọi thắc mắc vui lòng!{" "}
                                        <a
                                            href="contact-1.html"
                                            className="text_primary"
                                        >
                                            Liên hệ Hỗ trợ
                                        </a>
                                    </p>
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

export default Success;
