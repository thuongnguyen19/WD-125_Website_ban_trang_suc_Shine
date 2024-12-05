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
  description: string;
  products: RelatedProduct[];
}

interface Comment {
    user_name: number;
    content: string;
    created_at: string;
    rating: number;
}

// // Hàm để thêm URL đầy đủ cho đường dẫn ảnh
// const getFullImagePath = (imagePath: string) => {
//     if (!imagePath.startsWith("http")) {
//         return `http://127.0.0.1:8000/${imagePath}`;
//     }
//     return imagePath;
// };

const ComboDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [relatedProducts, setRelatedProducts] = useState<RelatedProduct[]>(
        [],
    );
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedColorImage, setSelectedColorImage] = useState<string | null>(
        null,
    );
    const [selectedColorName, setSelectedColorName] = useState<[] | null>(
        null,
    );
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [availableSizes, setAvailableSizes] = useState<string[]>([]);
    const [totalPrice, setTotalPrice] = useState<number | null>(null);
    const [listPrice, setListPrice] = useState<number | null>(null);
    const [remainingQuantity, setRemainingQuantity] = useState<number | null>(
        null,
    );
    const [averageRating, setAverageRating] = useState<number | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [minSellingPrice, setMinSellingPrice] = useState<number | null>(null);
    const [minListPrice, setMinListPrice] = useState<number | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0); // Theo dõi chỉ số slide hiện tại
    const [isFavorite, setIsFavorite] = useState(false);
    const mainSwiperRef = useRef<any>(null); // Ref để quản lý slider chính
    const thumbSwiperRef = useRef<any>(null); // Ref cho slider nhỏ
    const ratingValue = averageRating || 0;
    
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [combo, setCombo] = useState<Combo | null>(null);

    




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

                    // setAverageRating(comboData.averageRating);
                    // setComments(comboData.comments); // Gán danh sách đánh giá
                    // setCombo(comboData.relatedCombos)
                    // fetchRelatedProducts(comboData.id);

                    // // Lấy giá nhỏ nhất từ các biến thể sản phẩm
                    // const minVariant = productData.variant.reduce(
                    //     (prev, curr) =>
                    //         parseFloat(prev.selling_price) <
                    //         parseFloat(curr.selling_price)
                    //             ? prev
                    //             : curr,
                    // );

                    // const minListVariant = productData.variant.reduce(
                    //     (prev, curr) =>
                    //         parseFloat(prev.list_price) <
                    //         parseFloat(curr.list_price)
                    //             ? prev
                    //             : curr,
                    // );

                    // setMinSellingPrice(parseFloat(minVariant.selling_price));
                    // setMinListPrice(parseFloat(minListVariant.list_price));
                } else {
                    setError("Giá không khả dụng");
                }

                setLoading(false);
            } catch (err) {
                setError("Không tìm thấy sản phẩm");
                setLoading(false);
            }
        };

        const fetchRelatedProducts = async (categoryId: number) => {
            try {
                const response = await axiosInstance.get(
                    `/relatedProducts/${categoryId}`,
                );
                setRelatedProducts(response.data.data);
            } catch (err) {
                console.error("Failed to fetch related products", err);
            }
        };

        
        fetchComboDetails();
    }, [id]);

    // Hàm tăng/giảm số lượng sản phẩm
    const handleQuantityChange = (change: number) => {
        setQuantity((prevQuantity) => {
            // Kiểm tra số lượng còn lại
            if (
                change > 0 &&
                remainingQuantity !== null &&
                prevQuantity < remainingQuantity
            ) {
                return prevQuantity + change;
            }
            if (change < 0 && prevQuantity > 1) {
                return prevQuantity + change;
            }
            return prevQuantity;
        });
    };

    

    const handleColorChange = (colorName: string, product:RelatedProduct) => {
        setSelectedColor(colorName);
        console.log(selectedColorName);
        
        // setSelectedColorName(colorName);
        setSelectedSize(null);

        const selectedVariant = product.variants.find(
            (variant) => variant.colors.name === colorName,
        );

        console.log(selectedVariant);


        const sizesForSelectedColor = product.variants
            .filter((variant) => variant.colors.name === colorName)
            .map((variant) => variant.sizes.name)
            .filter((sizeName) => sizeName !== undefined)
            .sort((a, b) => parseFloat(a) - parseFloat(b));

        setAvailableSizes(sizesForSelectedColor || []);
        setRemainingQuantity(null);
    };

    // const handleSizeChange = (sizeName: string) => {
    //     if (availableSizes.includes(sizeName)) {
    //         setSelectedSize(sizeName);
    //         updateRemainingQuantityAndPrice(selectedColor, sizeName);
    //     }
    // };

    // const updateRemainingQuantityAndPrice = (
    //     colorName: string | null,
    //     sizeName: string | null,
    // ) => {
    //     if (colorName && sizeName) {
    //         const selectedVariant = product?.variant.find(
    //             (variant) =>
    //                 variant.colors.name === colorName &&
    //                 variant.sizes.name === sizeName,
    //         );
    //         if (selectedVariant) {
    //             setRemainingQuantity(selectedVariant.quantity);
    //             setTotalPrice(parseFloat(selectedVariant.selling_price));
    //             setListPrice(parseFloat(selectedVariant.list_price));
    //         }
    //     }
    // };

    // const handleBuyNow = async () => {
    //     const token = localStorage.getItem("authToken");

    //     if (!token) {
    //         message.error("Vui lòng đăng nhập để mua sản phẩm.");
    //         navigate("/login");
    //         return;
    //     }

        
    //     if (!selectedColor || !selectedSize) {
    //         message.error("Vui lòng chọn màu sắc và kích thước.");
    //         return;
    //     }

    //     // Kiểm tra nếu hết hàng
    //     if (remainingQuantity === 0) {
    //         message.error("Sản phẩm đã hết hàng. Vui lòng chọn sản phẩm khác.");
    //         return;
    //     }

    //     const selectedVariant = product?.variant.find(
    //         (variant) =>
    //             variant.colors.name === selectedColor &&
    //             variant.sizes.name === selectedSize,
    //     );

    //     if (!selectedVariant) {
    //         message.error(
    //             "Không tìm thấy sản phẩm với màu và kích thước đã chọn.",
    //         );
    //         return;
    //     }

    //     try {
    //         const orderData = {
    //             variantId: selectedVariant.id,
    //             quantity: quantity,
    //         };

    //         const response = await axiosInstance.get(
    //             "/listInformationOrder",
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`,
    //                 },
    //                 params: orderData,
    //             },
    //         );

    //         if (response.data.status) {
    //             message.success("Lấy thông tin sản phẩm thành công.");

    //             navigate("/pay", {
    //                 state: {
    //                     variantId: selectedVariant.id,
    //                     quantity: quantity,
    //                 },
    //             });
    //         } else {
    //             message.error(response.data.message);
    //         }
    //     } catch (error) {
    //         message.error("Có lỗi xảy ra khi lấy thông tin sản phẩm.");
    //     }
    // };

    // useEffect(() => {
    //     const token = localStorage.getItem("authToken");
    //     if (!token) return;

    //     // Lấy trạng thái yêu thích từ localStorage
    //     const localFavoriteStatus = localStorage.getItem(`isFavorite_${id}`);
    //     if (localFavoriteStatus) {
    //         setIsFavorite(localFavoriteStatus === "true");
    //     }

    //     const checkFavoriteStatus = async () => {
    //         try {
    //             const response = await axiosInstance.get(
    //                 `/favoriteProduct/check?product_id=${id}`,
    //                 {
    //                     headers: {
    //                         Authorization: `Bearer ${token}`,
    //                     },
    //                 },
    //             );
    //             setIsFavorite(response.data.is_favorite);
    //             // Cập nhật trạng thái yêu thích vào localStorage
    //             localStorage.setItem(
    //                 `isFavorite_${id}`,
    //                 response.data.is_favorite.toString(),
    //             );
    //         } catch (error) {
    //             console.error("Lỗi khi kiểm tra trạng thái yêu thích:", error);
    //         }
    //     };

    //     checkFavoriteStatus();
    // }, [product]);

    // const updateLocalStorageFavorite = (favorite: Favorite[]) => {
    //     localStorage.setItem("favorite", JSON.stringify(favorite));
    //     window.dispatchEvent(new Event("storage"));
    // };

    // Phần xử lý khi nhấn vào biểu tượng trái tim
    // const handleAddProductToFavorite = async (productId: number) => {
    //     const token = localStorage.getItem("authToken");
    //     if (!token) {
    //         message.error("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng.");
    //         navigate("/login");
    //         return;
    //     }

    //     try {

    //         if (isFavorite) {
    //             // Xóa khỏi danh sách yêu thích nếu đã yêu thích
    //             await axiosInstance.delete(
    //                 `/favoriteProduct/${productId}`,
    //                 {
    //                     headers: {
    //                         Authorization: `Bearer ${token}`,
    //                     },
    //                 },
    //             );
    //             setIsFavorite(false);

    //             const favoriteData = JSON.parse(
    //                 localStorage.getItem("favorite") || "",
    //             );

    //             const favorites = favoriteData.filter(
    //                 (item) => item.id_product !== productId,
    //             );
    //             console.log(favorites);

    //             updateLocalStorageFavorite(favorites);

    //             localStorage.setItem(`isFavorite_${product}`, "false");

    //             message.success("Đã xóa sản phẩm khỏi danh sách yêu thích.");
    //         } else {
    //             // Thêm vào danh sách yêu thích nếu chưa yêu thích
    //             const report = await axiosInstance.post(
    //                 "/favoriteProduct",
    //                 { product_id: productId },
    //                 {
    //                     headers: {
    //                         Authorization: `Bearer ${token}`,
    //                     },
    //                 },
    //             );

    //             const cartItems = JSON.parse(
    //                 localStorage.getItem("favorite") || "[]",
    //             );
    //             cartItems.push({ id_product: productId });
    //             localStorage.setItem("favorite", JSON.stringify(cartItems));

    //             window.dispatchEvent(new Event("storage"));

    //             setIsFavorite(true);
    //             localStorage.setItem(`isFavorite_${product}`, "true");
    //             message.success("Đã thêm sản phẩm vào danh sách yêu thích.");
    //         }
    //     } catch (error) {
    //         message.error("Có lỗi xảy ra khi thêm hoặc xóa sản phẩm yêu thích");
    //     }
    // };

    

    // const handleAddToCart = async () => {
    //     const token = localStorage.getItem("authToken");
    //     if (!token) {
    //         message.error("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng.");
    //         navigate("/login");
    //         return;
    //     }

    //     if (!selectedColor || !selectedSize) {
    //         message.error("Vui lòng chọn màu sắc và kích thước.");
    //         return;
    //     }

    //     // Kiểm tra nếu hết hàng
    //     if (remainingQuantity === 0) {
    //         message.error("Sản phẩm đã hết hàng. Vui lòng chọn sản phẩm khác.");
    //         return;
    //     }

    //     const selectedVariant = product?.variant.find(
    //         (variant) =>
    //             variant.colors.name === selectedColor &&
    //             variant.sizes.name === selectedSize,
    //     );

    //     if (!selectedVariant) {
    //         message.error(
    //             "Không tìm thấy sản phẩm với màu và kích thước đã chọn.",
    //         );
    //         return;
    //     }

    //     try {
    //         const cartData = {
    //             id_variant: selectedVariant.id,
    //             quantity: quantity,
    //         };
    //         const response = await axiosInstance.post(
    //             "/addCart",
    //             cartData,
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`,
    //                 },
    //             },
    //         );
    //         if (response.data.status) {
    //             const cartItems = JSON.parse(
    //                 localStorage.getItem("cartItems") || "[]",
    //             );
    //             cartItems.push(cartData);
    //             localStorage.setItem("cartItems", JSON.stringify(cartItems));

    //             window.dispatchEvent(new Event("storage"));

    //             message.success("Thêm vào giỏ hàng thành công.");
    //         } else {
    //             message.error("Thêm vào giỏ hàng thất bại.");
    //         }
    //     } catch (error) {
    //         message.error("Có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng.");
    //     }
    // };
    const uniColor = (product: RelatedProduct) => {
        const uniqueColors =
    
        product.variants.reduce((unique, item) => {
            if (
                !unique.some((color) => color.colors.name === item.colors.name)
            ) {
                unique.push(item);
            }
            return unique;
        }, [] as Variant[]) || [];
        return uniqueColors;
    };
    
    

    // const allSizes = Array.from(
    //     new Set(
    //         product?.variant
    //             ?.map((variant) => variant.sizes?.name)
    //             .filter((sizeName) => sizeName !== undefined),
    //     ),
    // ).sort((a, b) => parseFloat(a) - parseFloat(b));

    // const isSizeAvailable = (sizeName: string) => {
    //     return availableSizes.includes(sizeName);
    // };

    // const handleThumbnailClick = (index: number) => {
    //     if (mainSwiperRef.current && mainSwiperRef.current.swiper) {
    //         mainSwiperRef.current.swiper.slideTo(index);
    //         setActiveIndex(index); // Cập nhật trạng thái ảnh đang được xem
    //     }
    // };

    // const getCombinedImages = () => {
    //     if (selectedColorImage) {
    //         return [
    //             selectedColorImage,
    //             ...product!.slideImages.map((image: Image) => image.link_image),
    //         ];
    //     }
    //     return product!.slideImages.map((image: Image) => image.link_image);
    // };

    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.activeIndex); // Cập nhật chỉ số slide hiện tại
        if (thumbSwiperRef.current && thumbSwiperRef.current.swiper) {
            thumbSwiperRef.current.swiper.slideTo(swiper.activeIndex); // Đồng bộ chỉ số của slider nhỏ
        }
    };

    if (loading) {
        return <div>Đang tải...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    // if (!product || !product.name) {
    //     return <div>Sản phẩm không hợp lệ hoặc không tìm thấy</div>;
    // }

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
                                        <img src={combo?.image} alt="" />
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
                                                    
                                                    <div className="price-on-sale">
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
                                         {uniColor(product).map(
                                            (v: Variant) => (
                                            
                                                <input
                                                    key={v.id}
                                                    type="radio"
                                                    name="color"
                                                    checked={
                                                        selectedColor ===
                                                        v.colors.name
                                                    }
                                                    onChange={() =>
                                                        handleColorChange(
                                                            v.colors.name,
                                                            product
                                                        )
                                                    }
                                                    style={{
                                                        appearance: "none",
                                                        width: "30px",
                                                        height: "30px",
                                                        borderRadius: "50%",
                                                        backgroundColor:
                                                            (
                                                               v.colors
                                                                    .code
                                                            ),
                                                        border:
                                                            selectedColor ===
                                                            v.colors.name
                                                                ? "2px solid #000"
                                                                : "1px solid #ccc",
                                                        margin: "0 10px",
                                                        cursor: "pointer",
                                                    }}
                                                />
                                            )
                                        )}
                                    </div>

                            

                                    <div className="tf-size-selection mt-3">
                                        <h6>Kích thước:</h6>
                                        <br />
                                        <div className="tf-variant-sizes d-flex flex-wrap">
                                            
                                        </div>
                                    </div>
                        </div>
))}
                                    

                                    {/* <div className="tf-variant-colors d-flex">
                                        {uniqueColors.map(
                                            (variant: Variant) => (
                                                <input
                                                    key={variant.id}
                                                    type="radio"
                                                    name="color"
                                                    checked={
                                                        selectedColor ===
                                                        variant.colors.name
                                                    }
                                                    onChange={() =>
                                                        handleColorChange(
                                                            variant.colors.name,
                                                        )
                                                    }
                                                    style={{
                                                        appearance: "none",
                                                        width: "30px",
                                                        height: "30px",
                                                        borderRadius: "50%",
                                                        backgroundColor:
                                                            (
                                                               variant.colors
                                                                    .code
                                                            ),
                                                        border:
                                                            selectedColor ===
                                                            variant.colors.name
                                                                ? "2px solid #000"
                                                                : "1px solid #ccc",
                                                        margin: "0 10px",
                                                        cursor: "pointer",
                                                    }}
                                                />
                                            ),
                                        )}
                                    </div>

                                    <div className="tf-size-selection mt-3">
                                        <h6>Kích thước:</h6>
                                        <br />
                                        <div className="tf-variant-sizes d-flex flex-wrap">
                                            {allSizes.map((sizeName, index) => (
                                                <div
                                                    key={index}
                                                    className={`size-box ${selectedSize === sizeName ? "selected" : ""}`}
                                                    onClick={() =>
                                                        handleSizeChange(
                                                            sizeName,
                                                        )
                                                    }
                                                    style={{
                                                        display: "flex",
                                                        justifyContent:
                                                            "center",
                                                        alignItems: "center",
                                                        width: "40px",
                                                        height: "40px",
                                                        margin: "5px",
                                                        cursor: isSizeAvailable(
                                                            sizeName,
                                                        )
                                                            ? "pointer"
                                                            : "not-allowed",
                                                        border:
                                                            selectedSize ===
                                                            sizeName
                                                                ? "3px solid #000"
                                                                : "1px solid #ccc",
                                                        borderRadius: "5px",
                                                        textAlign: "center",
                                                        backgroundColor:
                                                            selectedSize ===
                                                            sizeName
                                                                ? "#ff6600"
                                                                : "#f9f9f9",
                                                        fontWeight: "bold",
                                                        color:
                                                            selectedSize ===
                                                            sizeName
                                                                ? "#fff"
                                                                : "#000",
                                                        opacity:
                                                            isSizeAvailable(
                                                                sizeName,
                                                            )
                                                                ? 1
                                                                : 0.5,
                                                        transition:
                                                            "background-color 0.3s ease, border 0.3s ease, opacity 0.3s ease",
                                                        pointerEvents:
                                                            isSizeAvailable(
                                                                sizeName,
                                                            )
                                                                ? "auto"
                                                                : "none",
                                                    }}
                                                >
                                                    {sizeName}
                                                </div>
                                            ))}
                                        </div>
                                    </div> */}

                                    <div className="remaining-quantity mt-3">
                                        <p>
                                            Số lượng còn lại:{" "}
                                            <strong>
                                                {selectedSize &&
                                                remainingQuantity !== null
                                                    ? remainingQuantity
                                                    : "Vui lòng chọn kích thước và màu "}
                                            </strong>
                                        </p>
                                    </div>

                                    <div className="tf-product-info-quantity mt-4">
                                        <div className="wg-quantity">
                                            <span
                                                className="btn-quantity minus-btn"
                                                onClick={() =>
                                                    handleQuantityChange(-1)
                                                }
                                            >
                                                -
                                            </span>
                                            <input
                                                type="text"
                                                value={quantity}
                                                readOnly
                                            />
                                            <span
                                                className="btn-quantity plus-btn"
                                                onClick={() =>
                                                    handleQuantityChange(1)
                                                }
                                            >
                                                +
                                            </span>
                                        </div>
                                    </div>

                                    
                                    <div className="tf-product-info-buy-now-button mt-3">
                                        <button
                                            className="btns-full btn-buy-now"
                                            
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
   


                        <div
                            className="tf-product-description mt-4"
                            style={{
                                fontSize: "18px",
                                padding: "20px",
                                lineHeight: "1.6",
                                backgroundColor: "#f9f9f9",
                                borderRadius: "8px",
                            }}
                        >
                            <h5
                                style={{
                                    fontSize: "24px",
                                    marginBottom: "16px",
                                }}
                            >
                                Mô tả sản phẩm
                            </h5>
                            <p style={{ fontSize: "18px" }}>
                                {combo?.description}
                            </p>
                        </div>

                        <hr />
                        <div
                            className="tf-product-description mt-4"
                            style={{
                                fontSize: "18px",
                                padding: "20px",
                                lineHeight: "1.6",
                                backgroundColor: "#f9f9f9",
                                borderRadius: "8px",
                            }}
                        >
                            <h5
                                style={{
                                    fontSize: "24px",
                                    marginBottom: "16px",
                                }}
                            >
                                Đánh giá sản phẩm
                            </h5>
                            <div className="comment-list">
                                {comments.length === 0 ? (
                                    <p>Chưa có đánh giá nào.</p>
                                ) : (
                                    comments.map((comment, index) => (
                                        <div
                                            key={index}
                                            className="comment-item"
                                        >
                                            <div className="comment-header">
                                                <strong>
                                                    {comment.user_name}
                                                </strong>

                                                <div className="stars">
                                                    {Array.from(
                                                        { length: 5 },
                                                        (_, i) => (
                                                            <span
                                                                key={i}
                                                                className={`star ${i < comment.rating ? "filled" : ""}`}
                                                            >
                                                                ★
                                                            </span>
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                            <p className="comment-content">
                                                {comment.content}
                                            </p>{" "}
                                            {/* Nội dung đánh giá */}
                                            <p className="comment-date">
                                                {new Date(
                                                    comment.created_at,
                                                ).toLocaleString()}
                                            </p>{" "}
                                            {/* Ngày đánh giá */}
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>

                        <hr />
                        <div className="flat-tab-store flat-animate-tab overflow-unset">
                            <ul
                                className="widget-tab-3 d-flex justify-content-center flex-wrap wow fadeInUp"
                                data-wow-delay="0s"
                                role="tablist"
                            >
                                <li
                                    className="nav-tab-item"
                                    role="presentation"
                                >
                                    <a
                                        href="#related-products"
                                        className="active"
                                        data-bs-toggle="tab"
                                    >
                                        Sản phẩm liên quan
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div
                                    className="tab-pane active show"
                                    id="related-products"
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

                                                {/* Sử dụng Swiper để tạo slider */}
                                                <Swiper
                                                    modules={[Navigation]}
                                                    spaceBetween={20}
                                                    slidesPerView={4}
                                                    navigation={{
                                                        nextEl: ".swiper-button-next",
                                                        prevEl: ".swiper-button-prev",
                                                    }}
                                                    loop={true}
                                                >
                                                    {relatedProducts.length >
                                                    0 ? (
                                                        relatedProducts.map(
                                                            (
                                                                relatedProduct,
                                                            ) => (
                                                                <SwiperSlide
                                                                    key={
                                                                        relatedProduct.id
                                                                    }
                                                                >
                                                                    <div className="card-product">
                                                                        <div className="card-product-wrapper">
                                                                            <a
                                                                                href={`/detail/${relatedProduct.id}`}
                                                                            >
                                                                                {" "}
                                                                                
                                                                                <img
                                                                                    src={
                                                                                        relatedProduct.thumbnail
                                                                                    }
                                                                                    alt={
                                                                                        relatedProduct.name
                                                                                    }
                                                                                    style={{
                                                                                        width: "700px",
                                                                                        height: "400px",
                                                                                        objectFit:
                                                                                            "cover",
                                                                                    }}
                                                                                />
                                                                                
                                                                            </a>
                                                                        </div>
                                                                        <div className="card-product-info text-center">
                                                                            <a href={`/detail/${relatedProduct.id}`}>
                                                                                {relatedProduct.name}
                                                                            </a>
                                                                            {relatedProduct.variants.length > 0 && (
                                                                                <div>
                                                                                    <span className="price">
                                                                                        <span
                                                                                            style={{
                                                                                                textDecoration: "line-through",
                                                                                                color: "#999",
                                                                                                marginRight: "10px",
                                                                                            }}
                                                                                        >
                                                                                            {Math.round(Number(relatedProduct.variants[0].list_price)).toLocaleString("vi-VN")} đ
                                                                                        </span>
                                                                                        <span
                                                                                            style={{
                                                                                                color: "#f00",
                                                                                                fontWeight: "bold",
                                                                                            }}
                                                                                        >
                                                                                            {Math.round(Number(relatedProduct.variants[0].selling_price)).toLocaleString("vi-VN")} đ
                                                                                        </span>
                                                                                    </span>
                                                                                </div>
                                                                            )}
                                                                        </div>

                                                                    </div>
                                                                </SwiperSlide>
                                                            ),
                                                        )
                                                    ) : (
                                                        <div>
                                                            Không có sản phẩm
                                                            liên quan
                                                        </div>
                                                    )}
                                                </Swiper>
                                            </div>
                                        </div>

                                        <div className="sw-dots style-2 sw-pagination-sell-1 justify-content-center"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ComboDetail;