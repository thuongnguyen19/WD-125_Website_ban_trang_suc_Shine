import React, { useEffect, useState } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";
import {  useNavigate } from "react-router-dom";
import {
    AlignCenterOutlined,
    DoubleLeftOutlined,
    DoubleRightOutlined,
} from "@ant-design/icons";
import axios from "axios";

// Khai báo kiểu dữ liệu cho sản phẩm và biến thể
interface ProductVariant {
    id_product: number;
    selling_price: number;
    list_price: number;
}

interface Product {
    id: number;
    name: string;
    thumbnail: string;
    variants: ProductVariant[];
}

const ListProducts: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [sortBy, setSortBy] = useState("none"); // Đặt giá trị mặc định cho sortBy
    const [sortOrder, setSortOrder] = useState("asc");
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [category, setCategory] = useState<number | null>(null); // Thêm trạng thái danh mục
    const perPage = 12; // Số sản phẩm trên mỗi trang
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState<string | null>(null);
    

    // Gọi API để lấy sản phẩm
    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    "http://localhost:8000/api/products/filter",
                    {
                        params: {
                            sort_by: sortBy,
                            sort: sortOrder,
                            page,
                            per_page: perPage,
                            cate: category,
                        },
                    },
                );
                console.log(response.data.data.products);
                setProducts(response.data.data.products);
                setTotalPages(response.data.total_pages);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, [sortBy, sortOrder, page, category]);

    // Hàm thay đổi trang
    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };

    // Hàm thay đổi sắp xếp
    const handleSortChange = (value: string) => {
        if (value.includes("Giá")) {
            setSortBy("price");
            setSortOrder(value === "Giá, từ thấp đến cao" ? "asc" : "desc");
        } else {
            setSortBy("name");
            setSortOrder(value === "Theo thứ tự, A-Z" ? "asc" : "desc");
        }
    };

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCategory = Number(event.target.value);
        setCategory(selectedCategory);
        setPage(1); // Reset trang về 1 khi thay đổi danh mục
    };

    const handleProductClick = (id: number) => {
    navigate(`/detail/${id}`);
  };

  const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/products/search`, {
                params: { name: searchTerm },
            });
            setProducts(response.data); // Giả định response.data là mảng sản phẩm
            setError(null);
        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.message || 'Có lỗi xảy ra');
            } else {
                setError('');
            }
            setProducts([]);
        }
    };

    if (loading) {
        return <p>Đang tải...</p>;
    }

    return (
        <div>
            <Header />
            <div className="tf-page-title">
                <div className="container-full">
                    <div className="heading text-center">Tất cả sản phẩm</div>
                </div>
            </div>

            <section className="flat-spacing-2">
                <div className="container">
                    <div className="tf-shop-control grid-3 align-items-center">
                        <div className="tf-control-filter">
                            <select onChange={handleCategoryChange}>
                                <option value="">Chọn danh mục</option>
                                <option value="1">Nhẫn</option>
                                <option value="2">Vòng cổ</option>
                                <option value="3">Lắc tay</option>
                                <option value="4">Lắc chân</option>
                            </select>
                          
                        </div>
                        <div className="tf-control-filter">
                        
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Tìm kiếm sản phẩm..."
                            />
                            <button  onClick={handleSearch}>Tìm kiếm</button>

                            {error && <div>{error}</div>}
                        </div>
                        <div className="tf-control-sorting d-flex justify-content-end">
                            <div className="tf-dropdown-sort">
                                <select
                                    onChange={(e) =>
                                        handleSortChange(e.target.value)
                                    }
                                >
                                    <option >
                                        Lựa chọn
                                    </option>
                                    <option value="Giá, từ thấp đến cao">
                                        Giá, từ thấp đến cao
                                    </option>
                                    <option value="Giá, từ cao đến thấp">
                                        Giá, từ cao đến thấp
                                    </option>
                                    <option value="Theo thứ tự, A-Z">
                                        Theo thứ tự, A-Z
                                    </option>
                                    <option value="Theo thứ tự, Z-A">
                                        Theo thứ tự, Z-A
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="wrapper-control-shop">
                        <div
                            className="grid-layout wrapper-shop"
                            data-grid="grid-4"
                        >
                            
                            {Array.isArray(products) && products.length > 0 ? (
                            products.map(product => (
                                <div key={product.id} className="card-product">
                                    <div className="card-product-wrapper">
                                        
                                        <div    
                                            className="product-img"
                                            onClick={() => handleProductClick(product.id)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <img
                                                className="lazyload img-product"
                                                src={product.thumbnail}
                                                alt={product.name}
                                            />
                                        </div>
                                        <div className="card-product-info">
                                            <h3
                                                onClick={() => handleProductClick(product.id)}
                                                style={{ cursor: "pointer" }}
                                                className="title link"
                                            >
                                                {product.name}
                                            </h3>
                                            <div
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <div
                                                        className="price-list"
                                                        style={{
                                                            marginRight: "10px",
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                textDecoration:
                                                                    "line-through",
                                                                color: "#999",
                                                            }}
                                                        >
                                                            {product.variants[0]?.list_price?.toLocaleString(
                                                                "vi-VN",
                                                            )}{" "}
                                                            đ
                                                        </span>
                                                    </div>
                                                    <div className="price-on-sale">
                                                        <span
                                                            style={{
                                                                fontWeight:
                                                                    "bold",
                                                                color: "#f00",
                                                            }}
                                                        >
                                                            {product.variants[0]?.selling_price?.toLocaleString(
                                                                "vi-VN",
                                                            )}{" "}
                                                            đ
                                                        </span>
                                                    </div>
                                                </div>
                                            {/* <span className="price">
                                                {product.variants[0]?.selling_price?.toLocaleString()}{" "}
                                                VND
                                                <span className="old-price price">
                                                    {product.variants[0]?.list_price?.toLocaleString()}{" "}
                                                    VND
                                                </span>
                                            </span> */}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ): (
                            <p>Không có sản phẩm nào để hiển thị.</p>
                        )}
                        </div>

                        {/* Phân trang */}
                        <div className="phantrang">
                            <ul className="tf-pagination-wrap tf-pagination-list tf-pagination-btn">
                                <li className={page === 1 ? "disabled" : ""}>
                                    <a
                                        href="#"
                                        className="pagination-link"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (page > 1)
                                                handlePageChange(page - 1);
                                        }}
                                    >
                                        <span>
                                            <DoubleLeftOutlined />
                                        </span>
                                    </a>
                                </li>
                                {Array.from(
                                    { length: totalPages },
                                    (_, i) => i + 1,
                                ).map((pageNumber) => (
                                    <li
                                        key={pageNumber}
                                        className={
                                            page === pageNumber ? "active" : ""
                                        }
                                    >
                                        <a
                                            href="#"
                                            className="pagination-link animate-hover-btn"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handlePageChange(pageNumber);
                                            }}
                                        >
                                            {pageNumber}
                                        </a>
                                    </li>
                                ))}
                                <li
                                    className={
                                        page === totalPages ? "disabled" : ""
                                    }
                                >
                                    <a
                                        href="#"
                                        className="pagination-link"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (page < totalPages)
                                                handlePageChange(page + 1);
                                        }}
                                    >
                                        <span>
                                            <DoubleRightOutlined />
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ListProducts;