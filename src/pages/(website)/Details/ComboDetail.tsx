import React, { useEffect, useState, useRef } from "react";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/common/Header";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button, message, Modal, Rate } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { HeartFilled, HeartOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Navigation } from "swiper/modules";
import axiosInstance from "../../../configs/axios";

// Interfaces
// interface Favorite {
//     id: number;
//     id_user: number;
//     id_product: number;
//     product: Product;
// }

interface Image {
    id_product: number;
    id_attribute_color: number;
    link_image: string;
}

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

interface Comment {
    user_name: number;
    content: string;
    created_at: string;
    rating: number;
}

const ComboDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [relatedProducts, setRelatedProducts] = useState<RelatedProduct[]>(
        [],
    );
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState<{ [productId: string]: string | null }>({});
    const [selectedColorImage, setSelectedColorImage] = useState<string | null>(
        null,
    );
    const [selectedColorName, setSelectedColorName] = useState<[] | null>(
        null,
    );
    const [selectedSize, setSelectedSize] = useState<{ [productId: string]: string | null }>({});
    const [totalPrice, setTotalPrice] = useState<number | null>(null);
    const [listPrice, setListPrice] = useState<number | null>(null);
    const [remainingQuantity, setRemainingQuantity] = useState<number | null>(
        null,
    );
    const [averageRating, setAverageRating] = useState<number | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [activeIndex, setActiveIndex] = useState<number>(0); // Theo dõi chỉ số slide hiện tại
    const [isFavorite, setIsFavorite] = useState(false);
    const mainSwiperRef = useRef<any>(null); // Ref để quản lý slider chính
    const thumbSwiperRef = useRef<any>(null); // Ref cho slider nhỏ
    const ratingValue = averageRating || 0;
    
    const [combo, setCombo] = useState<Combo | null>(null);
const [availableSizes, setAvailableSizes] = useState<{ [productId: string]: string[] }>({});
    




    useEffect(() => {
        setLoading(true);

        const fetchComboDetails = async () => {
            const token = localStorage.getItem("authToken");
            try {
                const response = await axiosInstance.get(
                    `/detailCombos/${id}`,
                     {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );
                const comboData: Combo = response.data.data;
                console.log(comboData);

                if (comboData) {
                    setCombo(comboData);

                    
                } else {
                    setError("Giá không khả dụng");
                }

                setLoading(false);
            } catch (err) {
                setError("Không tìm thấy sản phẩm");
                setLoading(false);
            }
        };


        
        fetchComboDetails();
    }, [id]);

    // Hàm tăng/giảm số lượng sản phẩm
    const handleQuantityChange = (change: number) => {
        setQuantity((prevQuantity) => {
            const newQuantity = prevQuantity + change;

            if (change > 0 && newQuantity <= (combo?.available_quantity || 0)) {
                return newQuantity; // Tăng nếu số lượng chưa đạt giới hạn
            }
            if (change < 0 && newQuantity >= 1) {
                return newQuantity; // Giảm nếu số lượng lớn hơn hoặc bằng 1
            }
            return prevQuantity; // Giữ nguyên nếu vượt giới hạn
        });
    };


    const handleColorChange = (colorName: string, product: RelatedProduct) => {
        const productId = product.id.toString();

        // Cập nhật màu sắc được chọn cho sản phẩm cụ thể
        setSelectedColor((prevColors) => ({
            ...prevColors,
            [productId]: colorName,
        }));

        // Đặt lại kích thước được chọn
        setSelectedSize((prevSizes) => ({
            ...prevSizes,
            [productId]: null,
        }));

        // Tìm biến thể màu đã chọn
        const selectedVariant = product.variants.find(
            (variant) => variant.colors.name === colorName,
        );

        console.log("Selected Variant:", selectedVariant);

        // Lấy danh sách kích thước cho màu được chọn
        const sizesForSelectedColor = product.variants
            .filter((variant) => variant.colors.name === colorName)
            .map((variant) => variant.sizes.name)
            .filter((sizeName) => sizeName !== undefined)
            .sort((a, b) => parseFloat(a) - parseFloat(b));

        setAvailableSizes((prevSizes) => ({
            ...prevSizes,
            [productId]: sizesForSelectedColor || [],
        }));

        // Đặt lại số lượng còn lại
        setRemainingQuantity(null);
    };

    const handleSizeChange = (sizeName: string, productId: string) => {
        if (availableSizes[productId]?.includes(sizeName)) {
            setSelectedSize((prevSizes) => ({
                ...prevSizes,
                [productId]: sizeName,
            }));
        }
    };

    const getAllSizes = (product: RelatedProduct) => {
        return Array.from(
            new Set(
                product?.variants
                    ?.map((variant) => variant.sizes?.name)
                    .filter((sizeName) => sizeName !== undefined),
            ),
        ).sort((a, b) => parseFloat(a) - parseFloat(b));
    };

    const isSizeAvailable = (sizeName: string, productId: string) => {
        return availableSizes[productId]?.includes(sizeName);
    };

        
        const uniColor = (product: RelatedProduct) => {
        const uniqueColors =
            product.variants.reduce((unique, item) => {
                if (!unique.some((color) => color.colors.name === item.colors.name)) {
                    unique.push(item);
                }
                return unique;
            }, [] as Variant[]) || [];
        return uniqueColors;
    };

    
    const handleBuyNow = async () => {
    const token = localStorage.getItem("authToken");

    if (!token) {
        message.error("Vui lòng đăng nhập để mua sản phẩm.");
        navigate("/login");
        return;
    }

    // Kiểm tra combo có sản phẩm hay không
    if (!combo?.products || combo.products.length === 0) {
        message.error("Không có sản phẩm nào trong combo.");
        return;
    }

    // Lặp qua từng sản phẩm trong combo để kiểm tra màu sắc và kích thước
    const missingSelections = combo.products.filter((product) => {
        const selectedColor = product?.variants.selectedColor;
        const selectedSize = product?.variants.selectedSize;
        return !selectedColor || !selectedSize;
    });

    if (missingSelections.length > 0) {
        message.error(
            "Vui lòng chọn đầy đủ màu sắc và kích thước cho tất cả sản phẩm trong combo."
        );
        return;
    }

    // Kiểm tra tồn kho của từng sản phẩm
    const outOfStockProducts = combo.products.filter(
        (product) => product.remainingQuantity === 0
    );

    if (outOfStockProducts.length > 0) {
        message.error("Một số sản phẩm trong combo đã hết hàng.");
        return;
    }

    try {
        const orderData = combo.products.map((product) => ({
            variantId: product.selectedVariant.id,
            quantity: product.quantity,
        }));

        const response = await axiosInstance.get("/listInformationOrderCombo", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: { orderData },
        });

        if (response.data.status) {
            message.success("Lấy thông tin sản phẩm thành công.");

            navigate("/payCombo", {
                state: { orderData },
            });
        } else {
            message.error(response.data.message);
        }
    } catch (error) {
        message.error("Có lỗi xảy ra khi lấy thông tin sản phẩm.");
    }
};



    if (loading) {
        return <div>Đang tải...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!combo) {
  return <p>Không tìm thấy combo!</p>;
}

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
                            <i><RightOutlined /></i>
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
                                        {/* Main Image Swiper */}
                                        <Swiper
                                            modules={[Navigation]}
                                            spaceBetween={20}
                                            slidesPerView={1}
                                            navigation={{
                                                nextEl: ".swiper-button-next",
                                                prevEl: ".swiper-button-prev",
                                            }}
                                            loop={true}
                                            ref={mainSwiperRef}
                                            
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
                                                                objectFit:
                                                                    "cover",
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
                                                
                                                <div className="price-on-sale" 
                                                style={{
                                                            marginRight: "10px"
                                                        }}
                                                >
                                                    <span
                                                        style={{
                                                            fontWeight:
                                                                "bold",
                                                            color: "#f00",
                                                        }}
                                                    >
                                                        {new Intl.NumberFormat(
                                                    "vi-VN",
                                                    {
                                                        style: "currency",
                                                        currency: "VND",
                                                    },
                                                ).format(
                                                    combo?.price
                                                )}
                                                        
                                                    </span>
                                                </div>

                                                <div
                                                        className="price-list"
                                                        
                                                    >
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
                                                ).format(
                                                    combo?.sum_price
                                                )}
                                                        </span>
                                                    </div>
                                            </div>
                                        
                                    </div>
                                   
                                    {combo.products.map((product) => (    
                                    <div className="combo-product" key={product.id}>
                                        <h5 className="product-name">{product.name}</h5>
                                        <div className="tf-color-selection d-flex align-items-center">
                                            <h6 style={{ marginRight: "10px" }}>
                                                Màu sắc: 
                                            </h6>
                                            {selectedColorName && (
                                                <div style={{ marginLeft: "10px" }}>
                                                    <h6 >{selectedColorName[product.id]}</h6>
                                                </div>
                                            )}

                                        </div>

                                        <div className="tf-variant-colors d-flex">
                                            {uniColor(product).map((v: Variant) => (
                                                <input
                                                    key={v.id}
                                                    type="radio"
                                                    name={`color-${product.id}`} // Đảm bảo nhóm radio riêng biệt cho từng sản phẩm
                                                    checked={selectedColor[product.id] === v.colors.name}
                                                    onChange={() =>
                                                        handleColorChange(v.colors.name, product)
                                                    }
                                                    style={{
                                                        appearance: "none",
                                                        width: "30px",
                                                        height: "30px",
                                                        borderRadius: "50%",
                                                        backgroundColor: v.colors.code,
                                                        border:
                                                            selectedColor[product.id] === v.colors.name
                                                                ? "2px solid #000"
                                                                : "1px solid #ccc",
                                                        margin: "0 10px",
                                                        cursor: "pointer",
                                                    }}
                                                />
                                            ))}
                                        </div>                        

                                    <div className="tf-size-selection mt-3">
                                        <h6>Kích thước:</h6>
                                        <br />
                                        <div className="tf-variant-sizes d-flex flex-wrap">
                                            {getAllSizes(product).map((sizeName, index) => (
                                                <div
                                                    key={index}
                                                    className={`size-box ${
                                                        selectedSize[product.id] === sizeName ? "selected" : ""
                                                    }`}
                                                    onClick={() => handleSizeChange(sizeName, product.id.toString())}
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        width: "40px",
                                                        height: "40px",
                                                        margin: "5px",
                                                        cursor: isSizeAvailable(sizeName,product.id.toString())
                                                            ? "pointer"
                                                            : "not-allowed",
                                                        border:
                                                            selectedSize[product.id] === sizeName
                                                                ? "3px solid #000"
                                                                : "1px solid #ccc",
                                                        borderRadius: "5px",
                                                        textAlign: "center",
                                                        backgroundColor:
                                                            selectedSize[product.id] === sizeName
                                                                ? "#ff6600"
                                                                : "#f9f9f9",
                                                        fontWeight: "bold",
                                                        color:
                                                            selectedSize[product.id] === sizeName
                                                                ? "#fff"
                                                                : "#000",
                                                        opacity: isSizeAvailable(sizeName, product.id.toString()) ? 1 : 0.5,
                                                        transition: "background-color 0.3s ease, border 0.3s ease, opacity 0.3s ease",
                                                        pointerEvents: isSizeAvailable(sizeName, product.id.toString())
                                                            ? "auto"
                                                            : "none",
                                                    }}
                                                >
                                                    {sizeName}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                                ))}
                                    

                                    

                                    <div className="remaining-quantity mt-3">
                                        <p>
                                            Số lượng còn lại:
                                            <strong>
                                                {combo?.available_quantity}
                                            </strong>
                                        </p>
                                    </div>

                                    <div className="tf-product-info-quantity mt-4">
                                        <div className="wg-quantity">
                                            <span
                                                className="btn-quantity minus-btn"
                                                onClick={() => handleQuantityChange(-1)}
                                                style={{
                                                    cursor: quantity > 1 ? "pointer" : "not-allowed",
                                                    opacity: quantity > 1 ? 1 : 0.5,
                                                }}
                                            >
                                                -
                                            </span>
                                            <input type="text" value={quantity} readOnly />
                                            <span
                                                className="btn-quantity plus-btn"
                                                onClick={() => handleQuantityChange(1)}
                                                style={{
                                                    cursor: quantity < (combo?.available_quantity || 0) ? "pointer" : "not-allowed",
                                                    opacity: quantity < (combo?.available_quantity || 0) ? 1 : 0.5,
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

                        <hr />

                        <div className="combo-promotion">
   


                        
                    </div>
                </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ComboDetail;
