import React, { useEffect, useState } from 'react'
import Header from '../../../components/common/Header'
import Footer from '../../../components/common/Footer'
import { Link } from 'react-router-dom'
import { AlignCenterOutlined, CaretDownOutlined, CloseOutlined, DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { fetchFilteredProducts, fetchProducts, Product } from '../../../Interface/Product';




const ListProducts: React.FC = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [sortBy, setSortBy] = useState<'name' | 'price'>('price');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const perPage = 12; // Số sản phẩm trên mỗi trang

  
   useEffect(() => {
    const loadProducts = async () => {
      setLoading(true); // Bắt đầu tải
      try {
        let response;
        // Gọi hàm lấy sản phẩm
        if (sortBy) { // Nếu có tiêu chí lọc
          response = await fetchFilteredProducts(sortBy, sortOrder, page, perPage);
        } else { // Gọi hàm lấy tất cả sản phẩm
          response = await fetchProducts(page, perPage);
        }
        setProducts(response.data); // Lưu danh sách sản phẩm
        setTotalPages(response.total_pages); // Lưu tổng số trang
        
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Kết thúc tải
      }
    };

    loadProducts(); // Gọi hàm tải sản phẩm
  }, [sortBy, sortOrder,page]); // Gọi lại hàm khi page thay đổi

  const handlePageChange = (newPage: number) => {
    setPage(newPage); // Cập nhật trang hiện tại
  };

  // Hàm thay đổi bộ lọc sắp xếp
  const handleSortChange = (value: string) => {
    if (value.includes("Giá")) {
      setSortBy("price");
      setSortOrder(value === "Giá, từ thấp đến cao" ? "asc" : "desc");
    } else {
      setSortBy("name");
      setSortOrder(value === "Theo thứ tự, A-Z" ? "asc" : "desc");
    }
  };

//   const filterProducts = (products: Product[], selectedItem: string) => {
//     switch (selectedItem) {
//       case 'Nổi bật':
//         return products; // Hiển thị sản phẩm nổi bật
//       // case 'Bán chạy nhất':
//       //   return products.sort((a, b) => b.sold - a.sold); // Sắp xếp theo bán chạy
//       case 'Theo thứ tự, A-Z':
//         return products.sort((a, b) => a.name.localeCompare(b.name)); // Sắp xếp theo A-Z
//       case 'Theo thứ tự, Z-A':
//         return products.sort((a, b) => b.name.localeCompare(a.name)); // Sắp xếp theo Z-A
//       default:
//         return products; // Trả về danh sách sản phẩm gốc
//     }
//   };

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSelect = (value: string) => {
//     handleSortChange(value); // Gọi hàm xử lý sắp xếp
//     setIsOpen(false); // Đóng dropdown sau khi chọn
//   };

  if (loading) {
    return <p>Loading...</p>;
  }

  
  return (
    <div>
        <Header/>
        <div className="tf-page-title">
            <div className="container-full">
                <div className="heading text-center">Tất cả sản phẩm</div>
            </div>
        </div>
       
        <section className="flat-spacing-2">
            <div className="container">
                <div className="tf-shop-control grid-3 align-items-center">
                    <div className="tf-control-filter">
                        <a href="#filterShop" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="tf-btn-filter"><AlignCenterOutlined /><span className="text">Lọc</span></a>
                    </div>
                    {/* <ul className="tf-control-layout d-flex justify-content-center">

                        <li className="tf-view-layout-switch sw-layout-3" data-value-grid="grid-3">
                            <div className="item"><span className="icon icon-grid-3"></span></div>
                        </li>
                        <li className="tf-view-layout-switch sw-layout-4 active" data-value-grid="grid-4">
                            <div className="item"><span className="icon icon-grid-4"></span></div>
                        </li>
                        <li className="tf-view-layout-switch sw-layout-5" data-value-grid="grid-5">
                            <div className="item"><span className="icon icon-grid-5"></span></div>
                        </li>
                        <li className="tf-view-layout-switch sw-layout-6" data-value-grid="grid-6">
                            <div className="item"><span className="icon icon-grid-6"></span></div>
                        </li>
                    </ul> */}
                    <div className="tf-control-sorting d-flex justify-content-end">
                        <div className="tf-dropdown-sort">
                            
                            <select onChange={(e) => handleSortChange(e.target.value)}>
                            <option value="Giá, từ thấp đến cao">Giá, từ thấp đến cao</option>
                            <option value="Giá, từ cao đến thấp">Giá, từ cao đến thấp</option>
                            <option value="Theo thứ tự, A-Z">Theo thứ tự, A-Z</option>
                            <option value="Theo thứ tự, Z-A">Theo thứ tự, Z-A</option>
                            </select>
                        </div>
                        
                    </div>
                </div>
                
                <div className="wrapper-control-shop">
                    <div className="meta-filter-shop"></div>
                     {/* <button onClick={handleSortByPrice}>
                        Sắp xếp theo giá: {sortByPrice === "asc" ? "Thấp đến cao" : "Cao đến thấp"}
                    </button> */}
                    <div className="grid-layout wrapper-shop" data-grid="grid-4">
                       {loading ? (
          <p>Đang tải...</p>
        ) : (
          products.map((product) => (
                            <div key={product.id} className="card-product" >
                            <div className="card-product-wrapper">
                                <Link to='/detail' className="product-img">
                                
                                <img className="lazyload img-product" src={product.thumbnail} alt={product.name}  />
                                {/* <img className="lazyload img-hover" data-src={product.img} src={product.img} alt={product.name} /> */}
                                {/* Hình ảnh hover nếu có */}
                                </Link>
                                <div className="card-product-info">
                                        <a href="product-detail.html" className="title link">{product.name}</a>
                                        <span className="price">{product.variants[0]?.selling_price.toLocaleString()} VND <span className="old-price price">{product.variants[0]?.list_price.toLocaleString()} VND</span></span>
                                        {/* <ul className="list-color-product">
                                            <li className="list-color-item color-swatch">
                                            <span className="tooltip">{product.color}</span>
                                            <span className="swatch-value" style={{ backgroundColor: product.color }}></span>
                                            </li>
                                        </ul> */}
                                        </div>
                                
                        
                    </div>
                    
                    
                    
                    </div>
                    )))}
                    
                    
                </div>
                <div className='phantrang'>
                    <ul className="tf-pagination-wrap tf-pagination-list tf-pagination-btn">
                    {/* Nút quay về trang trước */}
                    <li className={page === 1 ? "disabled" : ""}>
                        <a 
                        href="#" 
                        className="pagination-link"
                        onClick={(e) => {
                            e.preventDefault(); // Ngăn chặn mặc định
                            if (page > 1) handlePageChange(page - 1); // Điều kiện không cho click nếu ở trang đầu
                        }}
                        >
                        <span className=""><DoubleLeftOutlined /></span>
                        </a>
                    </li>

                    {/* Render các số trang */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                        <li key={pageNumber} className={page === pageNumber ? "active" : ""}>
                        <a 
                            href="#" 
                            className="pagination-link animate-hover-btn"
                            onClick={(e) => {
                            e.preventDefault(); // Ngăn chặn mặc định
                            handlePageChange(pageNumber); // Gọi hàm thay đổi trang
                            }}
                        >
                            {pageNumber}
                        </a>
                        </li>
                    ))}

                    {/* Nút tới trang sau */}
                    <li className={page === totalPages ? "disabled" : ""}>
                        <a 
                        href="#" 
                        className="pagination-link"
                        onClick={(e) => {
                            e.preventDefault(); // Ngăn chặn mặc định
                            if (page < totalPages) handlePageChange(page + 1); // Điều kiện không cho click nếu ở trang cuối
                        }}
                        >
                        <span className=""><DoubleRightOutlined /></span>
                        </a>
                    </li>
                    </ul>
                </div>
                
                </div>
            </div>
        </section>
        <div className="progress-wrap">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path
  d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
  style={{
    transition: 'stroke-dashoffset 10ms linear 0s',
    strokeDasharray: '307.919, 307.919',
    strokeDashoffset: 286.138
  }}
/>
        </svg>
    </div>
    
    <div className="tf-toolbar-bottom type-1150">
        <div className="toolbar-item active">
            <a href="#toolbarShopmb" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft">
                <div className="toolbar-icon">
                    <i className="icon-shop"></i>
                </div>
                <div className="toolbar-label">danh mục</div>
            </a>
        </div>
        <div className="toolbar-item">
            <a href="#filterShop" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft">
                <div className="toolbar-icon">
                    <i className="icon-fill"></i>
                </div>
                <div className="toolbar-label">Lọc</div>
            </a>
        </div>
        <div className="toolbar-item">
            <a href="#canvasSearch" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft">
                <div className="toolbar-icon">
                    <i className="icon-search"></i>
                </div>
                <div className="toolbar-label">Tìm kiếm</div>
            </a>
        </div>
        <div className="toolbar-item">
            <a href="#login" data-bs-toggle="modal">
                <div className="toolbar-icon">
                    <i className="icon-account"></i>
                </div>
                <div className="toolbar-label">Tài khoản</div>
            </a>
        </div>

        <div className="toolbar-item">
            <a href="#shoppingCart" data-bs-toggle="modal">
                <div className="toolbar-icon">
                    <i className="icon-bag"></i>
                    <div className="toolbar-count">1</div>
                </div>
                <div className="toolbar-label">Giỏ hàng</div>
            </a>
        </div>
    </div>
    
   
    <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
        <span className="icon-close icon-close-popup" data-bs-dismiss="offcanvas" aria-label="Close"></span>
        <div className="mb-canvas-content">
            <div className="mb-body">
                <ul className="nav-ul-mb" id="wrapper-menu-navigation">
                    <li className="nav-mb-item">
                        <a href="#dropdown-menu-one" className="collapsed mb-menu-link current" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dropdown-menu-one">
                            <span>Trang chủ</span>
                            <span className="btn-open-sub"></span>
                        </a>
                      
                        
                    </li>
                    <li className="nav-mb-item">
                        <a href="#dropdown-menu-four" className="collapsed mb-menu-link current" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dropdown-menu-four">
                            <span>Danh mục</span>
                            <span className="btn-open-sub"></span>
                        </a>
                        <div id="dropdown-menu-four" className="collapse">
                            <ul className="sub-nav-menu" id="sub-menu-navigation">
                                <li><a href="about-us.html" className="sub-nav-link">Nhẫn</a></li>
                                <li><a href="contact-1.html" className="sub-nav-link">Vòng - Lắc</a></li>
                                <li><a href="contact-2.html" className="sub-nav-link">Dây chuyền</a></li>
                                <li><a href="contact-2.html" className="sub-nav-link">Khuyên tai</a></li>
                               
                                <li><a href="#sub-account" className="sub-nav-link collapsed"  data-bs-toggle="collapse" aria-expanded="true" aria-controls="sub-account">
                                    <span>Bộ sưu tập</span>
                                    <span className="btn-open-sub"></span>
                                    </a>
                                    <div id="sub-account" className="collapse">
                                        <ul className="sub-nav-menu sub-menu-level-2">
                                            <li><a href="mZ-Account.html" className="sub-nav-link">Trang sức cưới</a></li>
                                            <li><a href="mZ-Account-orders.html" className="sub-nav-link">Trang sức đôi</a></li>
                                            <li><a href="mZ-Account-orders-details.html" className="sub-nav-link">Trang sức đính đá</a></li>
                                            <li><a href="mZ-Account-edit.html" className="sub-nav-link">Lịch sử mua hàng</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a href="invoice.html" className="sub-nav-link line-clamp">Hóa đơn</a></li>
                            </ul>
                        </div>
                        
                    </li>
                    <li className="nav-mb-item">
                        <a href="#dropdown-menu-three" className="collapsed mb-menu-link current" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dropdown-menu-three">
                            <span>Sản phẩm</span>
                            <span className="btn-open-sub"></span>
                        </a>
                    
                    </li>
                    <li className="nav-mb-item">
                        <a href="#dropdown-menu-four" className="collapsed mb-menu-link current" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dropdown-menu-four">
                            <span>Trang</span>
                            <span className="btn-open-sub"></span>
                        </a>
                        <div id="dropdown-menu-four" className="collapse">
                            <ul className="sub-nav-menu" id="sub-menu-navigation">
                                <li><a href="about-us.html" className="sub-nav-link">Về chúng tôi</a></li>
                                <li><a href="contact-1.html" className="sub-nav-link">Liên hệ</a></li>
                                <li><a href="contact-2.html" className="sub-nav-link">Xem giỏ hàng</a></li>
                               
                                <li><a href="#sub-account" className="sub-nav-link collapsed"  data-bs-toggle="collapse" aria-expanded="true" aria-controls="sub-account">
                                    <span>Tài khoản của tôi</span>
                                    <span className="btn-open-sub"></span>
                                    </a>
                                    <div id="sub-account" className="collapse">
                                        <ul className="sub-nav-menu sub-menu-level-2">
                                            <li><a href="mZ-Account.html" className="sub-nav-link">Tài khoản của tôi</a></li>
                                            <li><a href="mZ-Account-orders.html" className="sub-nav-link">Đơn hàng của tôi</a></li>
                                            <li><a href="mZ-Account-orders-details.html" className="sub-nav-link">Chi tiết đơn hàng</a></li>
                                            <li><a href="mZ-Account-edit.html" className="sub-nav-link">Lịch sử mua hàng</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a href="invoice.html" className="sub-nav-link line-clamp">Hóa đơn</a></li>
                            </ul>
                        </div>
                        
                    </li>
                    
                    <li className="nav-mb-item">
                        <a href="https://themeforest.net/item/ecomus-ultimate-html5-template/53417990?s_rank=3" className="mb-menu-link">Khuyến mãi</a>
                    </li>
                </ul>
                <div className="mb-other-content">
                    <div className="d-flex group-icon">
                        <a href="home-search.html" className="site-nav-icon"><i className="icon icon-search"></i>Search</a>
                    </div>
                    <div className="mb-notice">
                        <a href="contact-1.html" className="text-need">Need help ?</a>
                    </div>
                    <ul className="mb-info">
                        <li>Địa chỉ:  Tòa nhà FPT Polytechnic, Phố Trịnh Văn Bô, Nam Từ Liêm, Hà Nội</li>
                        <li>Email: <b>info@fashionshop.com</b></li>
                        <li>Phone: <b>(212) 555-1234</b></li>
                    </ul>
                </div>
            </div>
            <div className="mb-bottom">
                <a href="login.html" className="site-nav-icon"><i className="icon icon-account"></i>Login</a>
                <div className="bottom-bar-language">
                    <div className="tf-currencies">
                        <select className="image-select center style-default type-currencies">
                            <option data-thumbnail="images/country/fr.svg">EUR <span>€ | Pháp</span></option>
                            <option data-thumbnail="images/country/de.svg">EUR <span>€ | Đức</span></option>
                            <option selected data-thumbnail="images/country/us.svg">USD <span>$ | Mỹ</span></option>
                            <option data-thumbnail="images/country/vn.svg">VND <span>₫ | Việt Nam</span></option>
                        </select>
                    </div>
                    <div className="tf-languages">
                        <select className="image-select center style-default type-languages">
                            <option>English</option>
                            <option>العربية</option>
                            <option>简体中文</option>
                            <option>اردو</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>       
    </div>
   
    <div className="offcanvas offcanvas-start canvas-filter" id="filterShop">
        <div className="canvas-wrapper">
            <header className="canvas-header">
                <div className="filter-icon">
                    <AlignCenterOutlined />
                    <span>Lọc</span>
                </div>
                <span  data-bs-dismiss="offcanvas" aria-label="Close"><CloseOutlined /></span>
            </header>
            <div className="canvas-body">
                <div className="widget-facet wd-categories">
                    <div className="facet-title" data-bs-target="#categories" data-bs-toggle="collapse" aria-expanded="true" aria-controls="categories">
                        <span>Danh mục sản phẩm</span>
                        
                    </div>
                    <div id="categories" className="collapsing show" style={{height: 200}}>
                        <ul className="list-categoris current-scrollbar mb_36">
                            <li className="cate-item current"><a href="shop-default.html"><span>Nhẫn</span></a></li>
                            <li className="cate-item"><a href="shop-default.html"><span>Vòng - Lắc</span></a></li>
                            <li className="cate-item"><a href="shop-default.html"><span>Dây chuyền</span></a></li>
                            <li className="cate-item"><a href="shop-default.html"><span>Khuyên tai</span></a></li>
                            <li className="cate-item"><a href="shop-default.html"><span>Đính đá</span></a></li>
                            <li className="cate-item"><a href="shop-default.html"><span>Trang sức cưới</span></a></li>
                            <li className="cate-item"><a href="shop-default.html"><span>Trang sức đôi</span></a></li>
                        </ul>
                    </div>
                </div>
                <form action="#" id="facet-filter-form" className="facet-filter-form">
                    <div className="widget-facet">
                        <div className="facet-title" data-bs-target="#availability" data-bs-toggle="collapse" aria-expanded="true" aria-controls="availability">
                            <span>Khả dụng</span>
                            
                        </div>
                        <div id="availability" className="collapsing show" style={{height: 91}}>
                            <ul className="tf-filter-group current-scrollbar mb_36">
                                <li className="list-item d-flex gap-12 align-items-center">
                                    <input type="radio" name="availability" className="tf-check" id="availability-1"/>
                                    <label htmlFor="availability-1" className="label"><span>Còn hàng</span></label>
                                </li>
                                <li className="list-item d-flex gap-12 align-items-center">
                                    <input type="radio" name="availability" className="tf-check" id="availability-2"/>
                                    <label htmlFor="availability-2" className="label"><span>Hết hàng</span></label>
                                </li>
                            </ul>
                        </div>
                    </div>

                    
                    
                   
                    
        <div className="widget-facet">
                        <div className="facet-title" data-bs-target="#color" data-bs-toggle="collapse" aria-expanded="true" aria-controls="color">
                            <span>Màu sắc</span>
                            
                        </div>
                        <div id="color" className="collapsing show" style={{height: 236}}>
                            <ul className="tf-filter-group filter-color current-scrollbar mb_36">
                               
                                
                                <li className="list-item d-flex gap-12 align-items-center">
                                    <input type="checkbox" name="color" className="tf-check-color bg_grey" id="grey" value="grey"/>
                                    <label htmlFor="grey" className="label"><span>Silver</span>&nbsp;<span>(2)</span></label>
                                </li>
                               
                                <li className="list-item d-flex gap-12 align-items-center">
                                    <input type="checkbox" name="color" className="tf-check-color bg_white" id="white" value="white"/>
                                    <label htmlFor="white" className="label"><span>Trắng</span>&nbsp;<span>(14)</span></label>
                                </li>
                                <li className="list-item d-flex gap-12 align-items-center">
                                    <input type="checkbox" name="color" className="tf-check-color bg_yellow" id="yellow" value="yellow"/>
                                    <label htmlFor="yellow" className="label"><span>Vàng</span>&nbsp;<span>(1)</span></label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="widget-facet">
                        <div className="facet-title" data-bs-target="#size" data-bs-toggle="collapse" aria-expanded="true" aria-controls="size">
                            <span>Size</span>
                            <span className="icon icon-arrow-up"></span>
                        </div>
                        <div id="size" className="collapsing show "style={{height: 120}}>
                            <ul className="tf-filter-group current-scrollbar">
                                <li className="list-item d-flex gap-12 align-items-center">
                                    <input type="radio" name="size" className="tf-check tf-check-size" value="s" id="s"/>
                                    <label htmlFor="s" className="label"><span>S</span>&nbsp;<span>(7)</span></label>
                                </li>
                                <li className="list-item d-flex gap-12 align-items-center">
                                    <input type="radio" name="size" className="tf-check tf-check-size" value="m" id="m"/>
                                    <label htmlFor="m" className="label"><span>M</span>&nbsp;<span>(8)</span></label>
                                </li>
                                <li className="list-item d-flex gap-12 align-items-center">
                                    <input type="radio" name="size" className="tf-check tf-check-size" value="l" id="l"/>
                                    <label htmlFor="l" className="label"><span>L</span>&nbsp;<span>(8)</span></label>
                                </li>
                                <li className="list-item d-flex gap-12 align-items-center">
                                    <input type="radio" name="size" className="tf-check tf-check-size" value="xl" id="xl"/>
                                    <label htmlFor="xl" className="label"><span>XL</span>&nbsp;<span>(6)</span></label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </form>    
            </div>
            
        </div>       
    </div>
    
    <div className="offcanvas offcanvas-end canvas-search" id="canvasSearch">
        <div className="canvas-wrapper">
            <header className="tf-search-head">
                <div className="title fw-5">
                    Tìm kiếm
                    <div className="close">
                        <span className="icon-close icon-close-popup" data-bs-dismiss="offcanvas" aria-label="Close"></span>
                    </div>
                </div>
                <div className="tf-search-sticky">
                    <form className="tf-mini-search-frm">
                        <fieldset className="text">
                            <input type="text" placeholder="Search" className="" name="text" tabIndex={0} value="" aria-required="true" required={true} />

                        </fieldset>
                        <button className="" type="submit"><i className="icon-search"></i></button>
                    </form>
                </div>
            </header>
            <div className="canvas-body p-0">
                <div className="tf-search-content">
                    <div className="tf-cart-hide-has-results">
                        <div className="tf-col-quicklink">
                            <div className="tf-search-content-title fw-5">Quick link</div>
                            <ul className="tf-quicklink-list">
                                <li className="tf-quicklink-item">
                                    <a href="shop-default.html" className="">Nhẫn</a>
                                </li>
                                <li className="tf-quicklink-item">
                                    <a href="shop-default.html" className="">Vòng - Lắc</a>
                                </li>
                                <li className="tf-quicklink-item">
                                    <a href="shop-default.html" className="">Dây chuyền</a>
                                </li>
                                <li className="tf-quicklink-item">
                                    <a href="shop-default.html" className="">Khuyên tai</a>
                                </li>
                            </ul>
                        </div>
                        <div className="tf-col-content">
                            <div className="tf-search-content-title fw-5">Need some inspiration?</div>
                            <div className="tf-search-hidden-inner">
                                <div className="tf-loop-item">
                                    <div className="image">
                                        <a href="product-detail.html">
                                            <img src="images/products/white-3.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="content">
                                        <a href="product-detail.html">Cotton jersey top</a>
                                        <div className="tf-product-info-price">
                                            <div className="compare-at-price">$10.00</div>
                                            <div className="price-on-sale fw-6">$8.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tf-loop-item">
                                    <div className="image">
                                        <a href="product-detail.html">
                                            <img src="images/products/jewerly-8.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="content">
                                        <a href="product-detail.html">Mini crossbody bag</a>
                                        <div className="tf-product-info-price">
                                            <div className="price fw-6">$18.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tf-loop-item">
                                    <div className="image">
                                        <a href="product-detail.html">
                                            <img src="images/products/jewerly-6.jpg" alt=""/>
                                        </a>
                                    </div>
                                    <div className="content">
                                        <a href="product-detail.html">Oversized Printed T-shirt</a>
                                        <div className="tf-product-info-price">
                                            <div className="price fw-6">$18.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="offcanvas offcanvas-start canvas-mb toolbar-shop-mobile" id="toolbarShopmb">
        <span className="icon-close icon-close-popup" data-bs-dismiss="offcanvas" aria-label="Close"></span>
        <div className="mb-canvas-content">
            <div className="mb-body">
                <ul className="nav-ul-mb" id="wrapper-menu-navigation">
                    <li className="nav-mb-item">
                        <a href="shop-default.html" className="tf-category-link mb-menu-link">
                            <div className="image">
                                <img src="images/collections/jewerly-10.jpg" alt=""/>
                            </div>
                            <span>Nhẫn</span>
                        </a>
                    </li>
                    <li className="nav-mb-item">
                        <a href="shop-default.html" className="tf-category-link mb-menu-link">
                            <div className="image">
                                <img src="images/collections/jewerly-6.jpg" alt=""/>
                            </div>
                            <span>Vòng - Lắc</span>
                        </a>
                    </li>
                    <li className="nav-mb-item">
                        <a href="shop-default.html" className="tf-category-link mb-menu-link">
                            <div className="image">
                                <img src="images/collections/jewerly-3.jpg" alt=""/>
                            </div>
                            <span>Dây chuyền</span>
                        </a>
                    </li>
                    <li className="nav-mb-item">
                        <a href="shop-default.html" className="tf-category-link mb-menu-link">
                            <div className="image">
                                <img src="images/collections/jewerly-1.jpg" alt=""/>
                            </div>
                            <span>Khuyên tai</span>
                        </a>
                    </li>
                    
                    
                    <li className="nav-mb-item">
                        <a href="shop-default.html" className="tf-category-link mb-menu-link">
                            <div className="image">
                                <img src="images/collections/jewerly-12.jpg" alt=""/>
                            </div>
                            <span>Đính đá</span>
                        </a>
                    </li>
                    <li className="nav-mb-item">
                        <a href="shop-default.html" className="tf-category-link mb-menu-link">
                            <div className="image">
                                <img src="images/collections/jewerly-14.jpg" alt=""/>
                            </div>
                            <span>Trang sức cưới</span>
                        </a>
                    </li>

                    <li className="nav-mb-item">
                        <a href="shop-default.html" className="tf-category-link mb-menu-link">
                            <div className="image">
                                <img src="images/collections/jewerly-17.jpg" alt=""/>
                            </div>
                            <span>Trang sức đôi</span>
                        </a>
                    </li>
                    
                </ul>
            </div>
           
        </div>       
    </div>
    
    <div className="modal modalCentered fade form-sign-in modal-part-content" id="login">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="header">
                    <div className="demo-title">Đăng nhập</div>
                    <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
                </div>
                <div className="tf-login-form">
                    <form className="" action="https://themesflat.co/html/ecomus/mZ-Account.html" acceptCharset="utf-8">
                        <div className="tf-field style-1">
                            <input className="tf-field-input tf-input" placeholder=" " type="email"  name=""/>
                            <label className="tf-field-label" htmlFor="">Email</label>
                        </div>
                        <div className="tf-field style-1">
                            <input className="tf-field-input tf-input" placeholder=" " type="password"  name=""/>
                            <label className="tf-field-label" htmlFor="">Mật khẩu</label>
                        </div>
                        <div>
                            <a href="#forgotPassword" data-bs-toggle="modal" className="btn-link link">Quên mật khẩu?</a>
                        </div>
                        <div className="bottom"> 
                            <div className="w-100">
                                <button type="submit" className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center"><span>Log in</span></button>
                            </div>
                            <div className="w-100">
                                <a href="#register" data-bs-toggle="modal" className="btn-link fw-6 w-100 link">
                                    Khách hàng mới? Tạo tài khoản của bạn
                                    
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div className="modal modalCentered fade form-sign-in modal-part-content" id="forgotPassword">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="header">
                    <div className="demo-title">Đặt lại mật khẩu của bạn</div>
                    <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
                </div>
                <div className="tf-login-form">
                    <form className="">
                        <div>
                            <p>Đăng ký để được tiếp cận chương trình Khuyến mại sớm cùng với các sản phẩm mới, xu hướng và chương trình khuyến mại được thiết kế riêng. Để từ chối, hãy nhấp vào hủy đăng ký trong email của chúng tôi</p>
                        </div>
                        <div className="tf-field style-1">
                            <input className="tf-field-input tf-input" placeholder=" " type="email"  name=""/>
                            <label className="tf-field-label" htmlFor="">Email</label>
                        </div>
                        <div>
                            <a href="#login" data-bs-toggle="modal" className="btn-link link">Hủy bỏ</a>
                        </div>
                        <div className="bottom"> 
                            <div className="w-100">
                                <button type="submit" className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center"><span>Đặt lại mật khẩu</span></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div className="modal modalCentered fade form-sign-in modal-part-content" id="register">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="header">
                    <div className="demo-title">Đăng ký</div>
                    <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
                </div>
                <div className="tf-login-form">
                    <form className="">
                        
                        <div className="tf-field style-1">
                            <input className="tf-field-input tf-input" placeholder=" " type="text"  name=""/>
                            <label className="tf-field-label" htmlFor="">Họ tên</label>
                        </div>
                        <div className="tf-field style-1">
                            <input className="tf-field-input tf-input" placeholder=" " type="email"  name=""/>
                            <label className="tf-field-label" htmlFor="">Email</label>
                        </div>
                        <div className="tf-field style-1">
                            <input className="tf-field-input tf-input" placeholder=" " type="password"  name=""/>
                            <label className="tf-field-label" htmlFor="">Mật khẩu</label>
                        </div>
                        <div className="bottom"> 
                            <div className="w-100">
                                <a href="register.html" className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center"><span>Register</span></a>
                            </div>
                            <div className="w-100">
                                <a href="#login" data-bs-toggle="modal" className="btn-link fw-6 w-100 link">
                                    Đã có tài khoản? Đăng nhập tại đây
                                    <i className="icon icon-arrow1-top-left"></i>
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
   
    <div className="modal fullRight fade modal-shopping-cart" id="shoppingCart">
      <div className="modal-dialog">
        <div className="title fw-5">
          <Link to="/cart" className="item-link">
            Giỏ hàng
          </Link>
        </div>
        <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
      </div>
    </div>
    
    <div className="offcanvas offcanvas-bottom canvas-compare" id="compare">
        <div className="canvas-wrapper">
            <header className="canvas-header">
                <div className="close-popup">
                    <span className="icon-close icon-close-popup" data-bs-dismiss="offcanvas" aria-label="Close"></span>
                </div>
            </header>
            <div className="canvas-body">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tf-compare-list">
                                <div className="tf-compare-head">
                                    <div className="title">Compare Products</div>
                                </div>
                                <div className="tf-compare-offcanvas">
                                    <div className="tf-compare-item">
                                        <div className="position-relative">
                                            <div className="icon">
                                                <i className="icon-close"></i>
                                            </div>
                                            <a href="product-detail.html">
                                                <img className="radius-3" src="images/products/orange-1.jpg" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="tf-compare-item">
                                        <div className="position-relative">
                                            <div className="icon">
                                                <i className="icon-close"></i>
                                            </div>
                                            <a href="product-detail.html">
                                                <img className="radius-3" src="images/products/jewerly-7.jpg" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tf-compare-buttons">
                                    <div className="tf-compare-buttons-wrap">
                                        <a href="compare.html" className="tf-btn radius-3 btn-fill justify-content-center fw-6 fs-14 flex-grow-1 animate-hover-btn ">Compare</a>
                                        <div className="tf-compapre-button-clear-all link">
                                            Clear All
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
    </div>
    
    
        <Footer/>
    </div>
  )
}

export default ListProducts