import React, { useEffect, useState } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";
import { useNavigate } from "react-router-dom";
import {
    AlignCenterOutlined,
    CloseOutlined,
    DoubleLeftOutlined,
    DoubleRightOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { fetchCategories } from "../../../Interface/Product";

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

interface Category {
    id: number;
    name: string;
}

const ListProducts: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [sortBy, setSortBy] = useState("none");
    const [sortOrder, setSortOrder] = useState("asc");
    const [page, setPage] = useState<number>(1);
    const [category, setCategory] = useState<number | null>(null); // Nếu không chọn danh mục, sẽ là null
    const [loadingCategories, setLoadingCategories] = useState<boolean>(true);
    const [totalPages, setTotalPages] = useState<number>(1);
    const perPage = 12; // Số sản phẩm trên mỗi trang
    const navigate = useNavigate();

    // Gọi API để lấy sản phẩm
    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
            try {
                const params = new URLSearchParams(window.location.search);
                const cate = params.get("cate"); // Lấy thông tin danh mục từ URL
                const response = await axios.get(
                    "http://localhost:8000/api/products/filter", // Đảm bảo đúng URL API của bạn
                    {
                        params: {
                            sort_by: sortBy,
                            sort: sortOrder,
                            page,
                            per_page: perPage,
                            cate: cate || category || null, // Nếu không có category, lấy tất cả sản phẩm
                        },
                    },
                );
                if (response.data && response.data.data) {
                    setProducts(response.data.data.products); // Cập nhật sản phẩm
                    setTotalPages(response.data.total_pages); // Cập nhật số trang
                } else {
                    setProducts([]); // Nếu không có sản phẩm, để trống
                }
                window.scrollTo(0, 0); // Cuộn lên đầu trang khi có kết quả mới
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, [sortBy, sortOrder, page, category]);

    // Gọi API để lấy danh mục sản phẩm
    useEffect(() => {
        const loadCategories = async () => {
            setLoadingCategories(true);
            try {
                const categoriesData = await fetchCategories();
                setCategories(categoriesData); // Cập nhật trạng thái danh mục
            } catch (error) {
                console.error("Error fetching categories:", error);
            } finally {
                setLoadingCategories(false);
            }
        };

        loadCategories();
    }, []);

    // Hàm thay đổi trang
    const handlePageChange = (newPage: number) => {
        setPage(newPage);
        window.scrollTo(0, 0); // Cuộn lên đầu trang khi thay đổi trang
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

    // Hàm thay đổi danh mục và tải lại trang
    const handleCategoryChange = (cate: number | null) => {
        // Thay đổi URL và lưu giá trị danh mục vào URL
        const urlParams = new URLSearchParams(window.location.search);
        if (cate) {
            urlParams.set("cate", cate.toString());
        } else {
            urlParams.delete("cate");
        }
        window.history.pushState(
            {},
            "",
            `${window.location.pathname}?${urlParams.toString()}`,
        );

        setCategory(cate); // Cập nhật giá trị danh mục
        setPage(1); // Quay lại trang đầu tiên
    };

    // Hàm xử lý khi nhấn vào sản phẩm
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
                            <a
                                href="#filterShop"
                                data-bs-toggle="offcanvas"
                                aria-controls="offcanvasLeft"
                                className="tf-btn-filter"
                            >
                                <AlignCenterOutlined />
                                <span className="text">Lọc</span>
                            </a>
                        </div>
                        <div className="tf-control-sorting d-flex justify-content-end">
                            <div className="tf-dropdown-sort">
                                <select
                                    onChange={(e) =>
                                        handleSortChange(e.target.value)
                                    }
                                >
                                    <option>Lựa chọn</option>
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
                                products.map((product) => (
                                    <div
                                        key={product.id}
                                        className="card-product"
                                    >
                                        <div className="card-product-wrapper">
                                            <div
                                                className="product-img"
                                                onClick={() =>
                                                    handleProductClick(
                                                        product.id,
                                                    )
                                                }
                                                style={{ cursor: "pointer" }}
                                            >
                                                <img
                                                    className="lazyload img-product"
                                                    src={product.thumbnail}
                                                    alt={product.name}
                                                    style={{
                                                        width: "800px",
                                                        height: "500px",
                                                    }}
                                                />
                                            </div>
                                            <div className="card-product-info">
                                                <h3
                                                    onClick={() =>
                                                        handleProductClick(
                                                            product.id,
                                                        )
                                                    }
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
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
                                                                {
                                                                    style: "currency",
                                                                    currency:
                                                                        "VND",
                                                                    minimumFractionDigits: 0,
                                                                    maximumFractionDigits: 0,
                                                                },
                                                            )}{" "}
                                                            đ
                                                        </span>
                                                    </div>
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
                                                                {
                                                                    style: "currency",
                                                                    currency:
                                                                        "VND",
                                                                    minimumFractionDigits: 0,
                                                                    maximumFractionDigits: 0,
                                                                },
                                                            )}{" "}
                                                            đ
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>Không có sản phẩm nào trong danh mục này.</p> // Thông báo khi không có sản phẩm
                            )}
                        </div>

                        {/* Phân trang */}
                        {products.length > 0 && (
                            <div className="phantrang">
                                <ul className="tf-pagination-wrap tf-pagination-list tf-pagination-btn">
                                    <li
                                        className={page === 1 ? "disabled" : ""}
                                    >
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
                                                page === pageNumber
                                                    ? "active"
                                                    : ""
                                            }
                                        >
                                            <a
                                                href="#"
                                                className="pagination-link animate-hover-btn"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handlePageChange(
                                                        pageNumber,
                                                    );
                                                }}
                                            >
                                                {pageNumber}
                                            </a>
                                        </li>
                                    ))}
                                    <li
                                        className={
                                            page === totalPages
                                                ? "disabled"
                                                : ""
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
                        )}
                    </div>

                    {/* Sidebar lọc danh mục */}
                    <div
                        className="offcanvas offcanvas-start canvas-filter"
                        id="filterShop"
                    >
                        <div className="canvas-wrapper">
                            <header className="canvas-header">
                                <div className="filter-icon">
                                    <AlignCenterOutlined />
                                    <span>Lọc</span>
                                </div>
                                <span
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                >
                                    <CloseOutlined />
                                </span>
                            </header>
                            <div className="canvas-body">
                                <div className="widget-facet wd-categories">
                                    <div
                                        className="facet-title"
                                        data-bs-target="#categories"
                                        data-bs-toggle="collapse"
                                        aria-expanded="true"
                                        aria-controls="categories"
                                    >
                                        <span>Danh mục sản phẩm</span>
                                    </div>
                                    <div
                                        id="categories"
                                        style={{ height: "auto" }}
                                    >
                                        {loadingCategories ? (
                                            <p>Đang tải danh mục...</p>
                                        ) : (
                                            <ul className="list-categoris current-scrollbar mb_36">
                                                <li className="cate-item">
                                                    <a
                                                        onClick={() =>
                                                            handleCategoryChange(
                                                                null,
                                                            )
                                                        }
                                                    >
                                                        <span>Tất cả</span>
                                                    </a>
                                                </li>
                                                {categories.map((category) => (
                                                    <li
                                                        key={category.id}
                                                        className="cate-item"
                                                    >
                                                        <a
                                                            onClick={() =>
                                                                handleCategoryChange(
                                                                    category.id,
                                                                )
                                                            }
                                                        >
                                                            <span>
                                                                {category.name}
                                                            </span>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
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

export default ListProducts;