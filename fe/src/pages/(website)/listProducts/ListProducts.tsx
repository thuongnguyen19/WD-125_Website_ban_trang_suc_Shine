import React, { useEffect, useState } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";
import { Link, useNavigate } from "react-router-dom";
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
    const perPage = 12; // Số sản phẩm trên mỗi trang
    const navigate = useNavigate();

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
                        },
                    },
                );
                setProducts(response.data.data);
                setTotalPages(response.data.total_pages);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, [sortBy, sortOrder, page]);

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

    const handleProductClick = (id: number) => {
    navigate(`/detail/${id}`);
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
                    <div className="tf-shop-control grid-2 align-items-center">
                        <div className="tf-control-filter">
                            {/* <a
                                href="#filterShop"
                                data-bs-toggle="offcanvas"
                                aria-controls="offcanvasLeft"
                                className="tf-btn-filter"
                            >
                                <AlignCenterOutlined />
                                <span className="text">Lọc</span>
                            </a> */}
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
                            {products.map((product) => (
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
                                            <span className="price">
                                                {product.variants[0]?.selling_price?.toLocaleString()}{" "}
                                                VND
                                                <span className="old-price price">
                                                    {product.variants[0]?.list_price?.toLocaleString()}{" "}
                                                    VND
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
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