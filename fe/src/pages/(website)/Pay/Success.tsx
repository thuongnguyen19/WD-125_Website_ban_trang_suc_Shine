import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

const Success = () => {
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
                                            src="https://imgur.com/ZKPE11b.jpg"
                                            alt=""
                                            width={60}
                                        />
                                        <h5 className="fw-5">
                                            Thanh toán thành công{" "}
                                        </h5>
                                    </div>
                                    <p className="mb_20">
                                        Chúc mừng bạn đã thanh toán thành công,
                                        cảm ơn bạn đã ghé thăm và sử dụng dịch
                                        vụ của chúng tôi.
                                    </p>
                                    <a
                                        href="/"
                                        className="tf-btn mb_20 w-100 btn-fill animate-hover-btn radius-3 justify-content-center"
                                    >
                                        <span>Tiếp tục mua hàng</span>
                                    </a>
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
