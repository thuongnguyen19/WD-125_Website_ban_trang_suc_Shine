import React, { useEffect, useState } from "react";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";
import { useNavigate } from "react-router-dom";
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
    const [sortBy, setSortBy] = useState("none");
    const [sortOrder, setSortOrder] = useState("asc");
    const [page, setPage] = useState<number>(1);
<<<<<<< HEAD
    const [category, setCategory] = useState<number | null>(null); // Nếu không chọn danh mục, sẽ là null
    const [loadingCategories, setLoadingCategories] = useState<boolean>(true);
=======
>>>>>>> 70bcf24a6e58d76fb9683ca004ab3836cc8c1e2f
    const [totalPages, setTotalPages] = useState<number>(1);
    const [category, setCategory] = useState<number | null>(null); // Thêm trạng thái danh mục
    const perPage = 12; // Số sản phẩm trên mỗi trang
    const navigate = useNavigate();
<<<<<<< HEAD
=======
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState<string | null>(null);
    
>>>>>>> 70bcf24a6e58d76fb9683ca004ab3836cc8c1e2f

    // Gọi API để lấy sản phẩm dựa trên danh mục
    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
            try {
                const params = new URLSearchParams(window.location.search);
                const cate = params.get("cate"); // Lấy thông tin danh mục từ URL
                const response = await axios.get(
                    "http://localhost:8000/api/products/filter_cate", // API lấy sản phẩm theo danh mục
                    {
                        params: {
                            cate: cate || category || null, // Nếu không có category, lấy tất cả sản phẩm
                        },
                    },
                );
                if (response.data) {
                    setProducts(response.data); // Cập nhật sản phẩm
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
    }, [category]);

<<<<<<< HEAD
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

=======
>>>>>>> 70bcf24a6e58d76fb9683ca004ab3836cc8c1e2f
    // Hàm thay đổi trang
    const handlePageChange = (newPage: number) => {
        setPage(newPage);
        window.scrollTo(0, 0); // Cuộn lên đầu trang khi thay đổi trang
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

<<<<<<< HEAD
    // Hàm xử lý khi nhấn vào sản phẩm
=======
    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCategory = Number(event.target.value);
        setCategory(selectedCategory);
        setPage(1); // Reset trang về 1 khi thay đổi danh mục
    };

>>>>>>> 70bcf24a6e58d76fb9683ca004ab3836cc8c1e2f
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
<<<<<<< HEAD
                                products.map((product) => (
                                    <div
                                        key={product.id}
                                        className="card-product"
                                    >
                                        <div className="card-product-wrapper">
=======
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
>>>>>>> 70bcf24a6e58d76fb9683ca004ab3836cc8c1e2f
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
<<<<<<< HEAD
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
=======
>>>>>>> 70bcf24a6e58d76fb9683ca004ab3836cc8c1e2f
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
<<<<<<< HEAD
                                                                {
                                                                    style: "currency",
                                                                    currency:
                                                                        "VND",
                                                                    minimumFractionDigits: 0,
                                                                    maximumFractionDigits: 0,
                                                                },
=======
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
>>>>>>> 70bcf24a6e58d76fb9683ca004ab3836cc8c1e2f
                                                            )}{" "}
                                                            đ
                                                        </span>
                                                    </div>
                                                </div>
<<<<<<< HEAD
                                            </div>
=======
                                            {/* <span className="price">
                                                {product.variants[0]?.selling_price?.toLocaleString()}{" "}
                                                VND
                                                <span className="old-price price">
                                                    {product.variants[0]?.list_price?.toLocaleString()}{" "}
                                                    VND
                                                </span>
                                            </span> */}
>>>>>>> 70bcf24a6e58d76fb9683ca004ab3836cc8c1e2f
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>Không có sản phẩm nào trong danh mục này.</p> // Thông báo khi không có sản phẩm
                            )}
                        </div>
                    </div>
<<<<<<< HEAD

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
=======
                    
>>>>>>> 70bcf24a6e58d76fb9683ca004ab3836cc8c1e2f
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ListProducts;
