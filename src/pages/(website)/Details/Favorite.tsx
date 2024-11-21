import { useState, useEffect } from "react";
import axios from "axios";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { message, Modal, Card, Row, Col } from "antd";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/common/Header";
import { Navigate, useNavigate } from "react-router-dom";
import axiosInstance from "../../../configs/axios";

interface Variant {
    id_product: number;
    selling_price: string;
    list_price: string;
}

interface Product {
    id: number;
    name: string;
    thumbnail: string;
    variants: Variant[];
}

interface Favorite {
    id: number;
    id_user: number;
    id_product: number;
    product: Product;
}

const FavoritesList = () => {
    const [favorites, setFavorites] = useState<Favorite[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const token = localStorage.getItem("authToken");
                if (!token) {
                    message.error("Bạn chưa đăng nhập.");
                    navigate("/login");
                    return;
                }

                const response = await axiosInstance.get(
                    "/favoriteProduct",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );

                updateLocalStorageFavorite(response.data);

                if (Array.isArray(response.data)) {
                    setFavorites(response.data);
                } else {
                    setError("Dữ liệu trả về không phải là mảng JSON.");
                }
            } catch (error) {
                setError("Không thể tải sản phẩm yêu thích.");
                console.error("Error fetching favorites:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFavorites();
    }, []);

    const updateLocalStorageFavorite = (favorite: Favorite[]) => {
        localStorage.setItem("favorite", JSON.stringify(favorite));
        window.dispatchEvent(new Event("storage"));
    };

    const handleDelete = async (productId: string) => {
        const token = localStorage.getItem("authToken");

        if (!token) {
            message.error("Bạn cần đăng nhập để thực hiện hành động này.");
            return;
        }

        try {
            const response = await axiosInstance.delete(
                `/favoriteProduct/${productId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );

            message.success(response.data.message);

            const favoriteData = JSON.parse(
                localStorage.getItem("favorite") || "",
            );

            const favorites = favoriteData.filter(
                (item) => item.id_product !== productId,
            );
            setFavorites(favorites);
            updateLocalStorageFavorite(favorites);
        } catch (error) {
            message.error("Không thể xóa sản phẩm yêu thích.");
            console.error("Error deleting favorite:", error);
        }
    };

    const confirmDelete = (productId: string) => {
        Modal.confirm({
            title: "Xác nhận xóa",
            content:
                "Bạn có chắc chắn muốn xóa sản phẩm này khỏi danh sách yêu thích không?",
            onOk: () => handleDelete(productId),
            onCancel() {
                // Thao tác khi người dùng hủy
            },
        });
    };

    if (loading) return <p>Đang tải...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <Header />
            <h6>Sản phẩm yêu thích</h6>
            <Row gutter={[16, 16]}>
                {favorites.map((item) => (
                    <Col span={6} key={item.id}>
                        <Card
                            hoverable
                            cover={
                                <img
                                    style={{
                                        height: 200,
                                        width: "100%",
                                        objectFit: "cover",
                                    }} // Kích thước hình vuông
                                    alt={item.product.name}
                                    src={item.product.thumbnail}
                                />
                            }
                            actions={[
                                <HeartFilled
                                    onClick={() => {
                                        if (item.product && item.product.id) {
                                            confirmDelete(item.product.id);
                                        } else {
                                            console.error(
                                                "ID sản phẩm không hợp lệ",
                                                item,
                                            );
                                        }
                                    }}
                                    style={{
                                        fontSize: "20px",
                                        color: "red", // Biểu tượng trái tim đỏ
                                        cursor: "pointer",
                                    }}
                                />,
                            ]}
                        >
                            <Card.Meta
                                title={item.product.name}
                                description={
                                    <>
                                        <p>
                                            Giá bán:{" "}
                                            {new Intl.NumberFormat("vi-VN", {
                                                style: "currency",
                                                currency: "VND",
                                            }).format(
                                                Number(
                                                    item.product.variants[0]
                                                        ?.selling_price,
                                                ),
                                            )}
                                        </p>
                                        <p>
                                            Giá niêm yết:{" "}
                                            {new Intl.NumberFormat("vi-VN", {
                                                style: "currency",
                                                currency: "VND",
                                            }).format(
                                                Number(
                                                    item.product.variants[0]
                                                        ?.list_price,
                                                ),
                                            )}
                                        </p>
                                    </>
                                }
                            />
                        </Card>
                    </Col>
                ))}
            </Row>
            <Footer />
        </div>
    );
};

export default FavoritesList;
