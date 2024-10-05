import React, { useEffect, useState } from 'react'
import Header from '../../../components/common/Header'
import Footer from '../../../components/common/Footer'

import { Link } from 'react-router-dom'




interface Product {
  id: number;
  name: string;
  price: number;
  color: string; // Thêm thông tin màu sắc nếu cần
  img: string;   // Đường dẫn đến hình ảnh
}

interface PriceFilterProps {
  minPrice: number;
  maxPrice: number;
  onPriceChange: (min: number, max: number) => void;
}

// Danh sách sản phẩm giả định
const products: Product[] = [
  { id: 1, name: 'Ribbed Tank Top', price: 50000, color: 'yellow', img: 'images/products/jewerly-1.jpg' },
  { id: 2, name: 'Nhẫn bạc', price: 200000, color: 'silver', img: 'images/products/jewerly-2.jpg' },
  { id: 3, name: 'Khuyên tai đính đá', price: 8000000, color: '#ffcd07', img: 'images/products/jewerly-3.jpg' },
  { id: 4, name: 'Nhẫn xà cừ', price: 300000, color: 'white', img: 'images/products/jewerly-7.jpg' },
  { id: 5, name: 'Dây chuyền đĩa', price: 4500000, color: '#ffcd07', img: 'images/products/jewerly-5.jpg' },
  { id: 6, name: 'Nhẫn 3 xà cừ', price: 200000, color: 'silver', img: 'images/products/jewerly-8.jpg' },
  { id: 7, name: 'Nhẫn 3 đá', price: 5000000, color: '#ffcd07', img: 'images/products/jewerly-9.jpg' },
  { id: 8, name: 'nhẫn đôi đính đá', price: 7000000, color: 'silver', img: 'images/products/jewerly-11.jpg' },
  { id: 9, name: 'Vòng cổ mặt đá', price: 1500000, color: '#728d35', img: 'images/products/jewerly-6.jpg' },
];


  const PriceFilter: React.FC<PriceFilterProps> = ({ minPrice, maxPrice, onPriceChange }) => {
  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (value < maxPrice) {
      onPriceChange(value, maxPrice);
    }
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (value > minPrice) {
      onPriceChange(minPrice, value);
    }
  };
   return (
    <div className="price-filter">
      <label>Giá thấp nhất:</label>
      <input type="number" value={minPrice} onChange={handleMinChange} />
      <label>Giá cao nhất:</label>
      <input type="number" value={maxPrice} onChange={handleMaxChange} />
    </div>
  );
};

const ListProducts: React.FC = () => {
  const [minPrice, setMinPrice] = useState(100000);
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  // Cập nhật danh sách sản phẩm được lọc mỗi khi giá min hoặc max thay đổi
  useEffect(() => {
    const filtered = products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setFilteredProducts(filtered);
  }, [minPrice, maxPrice]);
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
                        <a href="#filterShop" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="tf-btn-filter"><span className="icon icon-filter"></span><span className="text">Lọc</span></a>
                    </div>
                    <ul className="tf-control-layout d-flex justify-content-center">
                        <li className="tf-view-layout-switch sw-layout-2" data-value-grid="grid-2">
                            <div className="item"><span className="icon icon-grid-2"></span></div>
                        </li>
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
                    </ul>
                    <div className="tf-control-sorting d-flex justify-content-end">
                        <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
                            <div className="btn-select">
                                <span className="text-sort-value">Nổi bật</span>
                                <span className="icon icon-arrow-down"></span>
                            </div>
                            <div className="dropdown-menu">
                                <div className="select-item active">
                                    <span className="text-value-item">Nổi bật</span>
                                </div>
                                <div className="select-item">
                                    <span className="text-value-item">Bán chạy nhất</span>
                                </div>
                                <div className="select-item">
                                    <span className="text-value-item">Theo thứ tự, A-Y</span>
                                </div>
                                <div className="select-item">
                                    <span className="text-value-item">Theo thứ tự, Y-A</span>
                                </div>
                                <div className="select-item">
                                    <span className="text-value-item">Giá, từ thấp đến cao</span>
                                </div>
                                <div className="select-item">
                                    <span className="text-value-item">Giá, từ cao đến thấp</span>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
                <PriceFilter
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    onPriceChange={(min, max) => {
                    setMinPrice(min);
                    setMaxPrice(max);
                    }}
                />
                <div className="wrapper-control-shop">
                    <div className="meta-filter-shop"></div>
                    <div className="grid-layout wrapper-shop" data-grid="grid-4">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="card-product" data-price={product.price}>
                            <div className="card-product-wrapper">
                                <Link to='/detail' className="product-img">
                                
                                <img className="lazyload img-product" data-src={product.img} src={product.img} alt={product.name} />
                                <img className="lazyload img-hover" data-src={product.img} src={product.img} alt={product.name} />
                                {/* Hình ảnh hover nếu có */}
                                </Link>
                                <div className="card-product-info">
                                        <a href="product-detail.html" className="title link">{product.name}</a>
                                        <span className="price">{product.price.toLocaleString('vi-VN')} đ</span>
                                        <ul className="list-color-product">
                                            <li className="list-color-item color-swatch">
                                            <span className="tooltip">{product.color}</span>
                                            <span className="swatch-value" style={{ backgroundColor: product.color }}></span>
                                            </li>
                                        </ul>
                                        </div>
                                
                                
                        
                        
                        
                        
                    </div>
                    
                    
                    
                    </div>
                    ))}
                    <ul className="tf-pagination-wrap tf-pagination-list tf-pagination-btn">
                        <li className="active">
                            <a href="#" className="pagination-link">1</a>
                        </li>
                        <li>
                            <a href="#" className="pagination-link animate-hover-btn">2</a>
                        </li>
                        <li>
                            <a href="#" className="pagination-link animate-hover-btn">3</a>
                        </li>
                        <li>
                            <a href="#" className="pagination-link animate-hover-btn">4</a>
                        </li>
                        <li>
                            <a href="#" className="pagination-link animate-hover-btn">
                                <span className="icon icon-arrow-right"></span>
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
    
    <div className="modal fade modalDemo" id="modalDemo">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="header">
                    <h5 className="demo-title">Ultimate HTML Theme</h5>
                    <span className="icon-close icon-close-popup" data-bs-dismiss="modal"></span>
                </div>
                <div className="mega-menu">
                    <div className="row-demo">
                        <div className="demo-item">
                            <a href="index.html">
                                <div className="demo-image position-relative">
                                    <img className="lazyload" data-src="images/demo/home-01.jpg" src="images/demo/home-01.jpg" alt="home-01"/>
                                    <div className="demo-label">
                                        <span className="demo-new">New</span>
                                        <span>Trend</span>
                                    </div>
                                </div>
                                <span className="demo-name">Home Fashion 01</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-multi-brand.html">
                                <div className="demo-image position-relative">
                                    <img className="lazyload" data-src="images/demo/home-multi-brand.jpg" src="images/demo/home-multi-brand.jpg" alt="home-multi-brand"/>
                                    <div className="demo-label">
                                        <span className="demo-new">New</span>
                                        <span className="demo-hot">Hot</span>
                                    </div>
                                </div>
                                <span className="demo-name">Home Multi Brand</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-02.html">
                                <div className="demo-image position-relative">
                                    <img className="lazyload" data-src="images/demo/home-02.jpg" src="images/demo/home-02.jpg" alt="home-02"/>
                                    <div className="demo-label">
                                        <span className="demo-hot">Hot</span>
                                    </div>
                                </div>
                                <span className="demo-name">Home Fashion 02</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-03.html">
                                <div className="demo-image">
                                    <img className="lazyload" data-src="images/demo/home-03.jpg" src="images/demo/home-03.jpg" alt="home-03"/>
                                </div>
                                <span className="demo-name">Home Fashion 03</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-04.html">
                                <div className="demo-image">
                                    <img className="lazyload" data-src="images/demo/home-04.jpg" src="images/demo/home-04.jpg" alt="home-04"/>
                                </div>
                                <span className="demo-name">Home Fashion 04</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-05.html">
                                <div className="demo-image">
                                    <img className="lazyload" data-src="images/demo/home-05.jpg" src="images/demo/home-05.jpg" alt="home-05"/>
                                </div>
                                <span className="demo-name">Home Fashion 05</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-06.html">
                                <div className="demo-image position-relative">
                                    <img className="lazyload" data-src="images/demo/home-06.jpg" src="images/demo/home-06.jpg" alt="home-06"/>
                                    <div className="demo-label">
                                        <span className="demo-new">New</span>
                                    </div>
                                </div>
                                <span className="demo-name">Home Fashion 06</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-07.html">
                                <div className="demo-image">
                                    <img className="lazyload" data-src="images/demo/home-07.jpg" src="images/demo/home-07.jpg" alt="home-07"/>
                                </div>
                                <span className="demo-name">Home Fashion 07</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-08.html">
                                <div className="demo-image">
                                    <img className="lazyload" data-src="images/demo/home-08.jpg" src="images/demo/home-08.jpg" alt="home-08"/>
                                </div>
                                <span className="demo-name">Home Fashion 08</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-skincare.html">
                                <div className="demo-image">
                                    <img className="lazyload" data-src="images/demo/home-skincare.jpg" src="images/demo/home-skincare.jpg" alt="home-skincare"/>
                                </div>
                                <span className="demo-name">Home Skincare</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-headphone.html">
                                <div className="demo-image">
                                    <img className="lazyload" data-src="images/demo/home-headphone.jpg" src="images/demo/home-headphone.jpg" alt="home-headphone"/>
                                </div>
                                <span className="demo-name">Home Headphone</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-giftcard.html">
                                <div className="demo-image">
                                    <img className="lazyload" data-src="images/demo/home-giftcard.jpg" src="images/demo/home-giftcard.jpg" alt="home-gift-card"/>
                                </div>
                                <span className="demo-name">Home Gift Card</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-furniture.html">
                                <div className="demo-image">
                                    <img className="lazyload" data-src="images/demo/home-furniture.jpg" src="images/demo/home-furniture.jpg" alt="home-furniture"/>
                                </div>
                                <span className="demo-name">Home Furniture</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-furniture-02.html">
                                <div className="demo-image">
                                    <img className="lazyload" data-src="images/demo/home-furniture2.jpg" src="images/demo/home-furniture2.jpg" alt="home-furniture-2"/>
                                </div>
                                <span className="demo-name">Home Furniture 2</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-skateboard.html">
                                <div className="demo-image">
                                    <img className="lazyload" data-src="images/demo/home-skateboard.jpg" src="images/demo/home-skateboard.jpg" alt="home-skateboard"/>
                                </div>
                                <span className="demo-name">Home Skateboard</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-stroller.html">
                                <div className="demo-image">
                                    <img className="lazyload" data-src="images/demo/home-stroller.jpg" src="images/demo/home-stroller.jpg" alt="home-stroller"/>
                                </div>
                                <span className="demo-name">Home Stroller</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-decor.html">
                                <div className="demo-image">
                                    <img className="lazyload" data-src="images/demo/home-decor.jpg" src="images/demo/home-decor.jpg" alt="home-decor"/>
                                </div>
                                <span className="demo-name">Home Decor</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-electronic.html">
                                <div className="demo-image">
                                    <img className="lazyload" data-src="images/demo/home-electronic.jpg" src="images/demo/home-electronic.jpg" alt="home-electronic"/>
                                </div>
                                <span className="demo-name">Home Electronic</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-setup-gear.html">
                                <div className="demo-image">
                                    <img className="lazyload" data-src="images/demo/home-setup-gear.jpg" src="images/demo/home-setup-gear.jpg" alt="home-setup-gear"/>
                                </div>
                                <span className="demo-name">Home Setup Gear</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-dog-accessories.html">
                                <div className="demo-image">
                                    <img className="lazyload" data-src="images/demo/home-dog-accessories.jpg" src="images/demo/home-dog-accessories.jpg" alt="home-dog-accessories"/>
                                </div>
                                <span className="demo-name">Home Dog Accessories</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-kitchen-wear.html">
                                <div className="demo-image">
                                    <img className="lazyload" data-src="images/demo/home-kitchen.jpg" src="images/demo/home-kitchen.jpg" alt="home-kitchen-wear"/>
                                </div>
                                <span className="demo-name">Home Kitchen Wear</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-phonecase.html">
                                <div className="demo-image">
                                    <img className="lazyload" data-src="images/demo/home-phonecase.jpg" src="images/demo/home-phonecase.jpg" alt="home-phonecase"/>
                                </div>
                                <span className="demo-name">Home Phonecase</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-paddle-boards.html">
                                <div className="demo-image">
                                    <img className="lazyload" data-src="images/demo/home_paddle_board.jpg" src="images/demo/home_paddle_board.jpg" alt="home-paddle_board"/>
                                </div>
                                <span className="demo-name">Home Paddle Boards</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-glasses.html">
                                <div className="demo-image">
                                    <img className="lazyload" data-src="images/demo/home-glasses.jpg" src="images/demo/home-glasses.jpg" alt="home-glasses"/>
                                </div>
                                <span className="demo-name">Home Glasses</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-pod-store.html">
                                <div className="demo-image">
                                    <img className="lazyload" data-src="images/demo/home-pod-store.jpg" src="images/demo/home-pod-store.jpg" alt="home-pod-store"/>
                                </div>
                                <span className="demo-name">Home POD Store</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-activewear.html">
                                <div className="demo-image">
                                    <img className="lazyload" data-src="images/demo/home-activewear.jpg" src="images/demo/home-activewear.jpg" alt="home-activewear"/>
                                </div>
                                <span className="demo-name">Activewear</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-handbag.html">
                                <div className="demo-image">
                                    <img className="lazyload" data-src="images/demo/home-handbag.jpg" src="images/demo/home-handbag.jpg" alt="home-handbag"/>
                                </div>
                                <span className="demo-name">Home Handbag</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-tee.html">
                                <div className="demo-image">
                                    <img className="lazyload" data-src="images/demo/home-tee.jpg" src="images/demo/home-tee.jpg" alt="home-tee"/>
                                </div>
                                <span className="demo-name">Home Tee</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-sock.html">
                                <div className="demo-image">
                                    <img className="lazyload" data-src="images/demo/home-socks.jpg" src="images/demo/home-socks.jpg" alt="home-sock"/>
                                </div>
                                <span className="demo-name">Home Sock</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-jewerly.html">
                                <div className="demo-image">
                                    <img className="lazyload" data-src="images/demo/home-jewelry.jpg" src="images/demo/home-jewelry.jpg" alt="home-jewelry"/>
                                </div>
                                <span className="demo-name">Home Jewelry</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-sneaker.html">
                                <div className="demo-image">
                                    <img className="lazyload" data-src="images/demo/home-sneaker.jpg" src="images/demo/home-sneaker.jpg" alt="home-sneaker"/>
                                </div>
                                <span className="demo-name">Home Sneaker</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-accessories.html">
                                <div className="demo-image">
                                    <img className="lazyload" data-src="images/demo/home-accessories.jpg" src="images/demo/home-accessories.jpg" alt="home-accessories"/>
                                </div>
                                <span className="demo-name">Home Accessories</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-grocery.html">
                                <div className="demo-image">
                                    <img className="lazyload" data-src="images/demo/home-gocery.jpg" src="images/demo/home-gocery.jpg" alt="home-grocery"/>
                                </div>
                                <span className="demo-name">Home Grocery</span>
                            </a>
                        </div>
                        <div className="demo-item">
                            <a href="home-baby.html">
                                <div className="demo-image">
                                    <img className="lazyload" data-src="images/demo/home-baby.jpg" src="images/demo/home-baby.jpg" alt="home-baby"/>
                                </div>
                                <span className="demo-name">Home Baby</span>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div> 
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
                        <a href="#dropdown-menu-two" className="collapsed mb-menu-link current" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dropdown-menu-two">
                            <span>Danh mục</span>
                            <span className="btn-open-sub"></span>
                        </a>
                        <div id="dropdown-menu-two" className="collapse">
                            <ul className="sub-nav-menu" id="sub-menu-navigation">
                                <li><a href="#sub-shop-one" className="sub-nav-link collapsed"  data-bs-toggle="collapse" aria-expanded="true" aria-controls="sub-shop-one">
                                        <span>Shop layouts</span>
                                        <span className="btn-open-sub"></span>
                                    </a>
                                    <div id="sub-shop-one" className="collapse">
                                        <ul className="sub-nav-menu sub-menu-level-2">
                                            <li><a href="shop-default.html" className="sub-nav-link">Default</a></li>
                                            <li><a href="shop-left-sidebar.html" className="sub-nav-link">Left sidebar</a></li>
                                            <li><a href="shop-right-sidebar.html" className="sub-nav-link">Right sidebar</a></li>
                                            <li><a href="shop-fullwidth.html" className="sub-nav-link">Fullwidth</a></li>
                                            <li><a href="shop-collection-sub.html" className="sub-nav-link">Sub collection</a></li>
                                            <li><a href="shop-collection-list.html" className="sub-nav-link">Collections list</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="#sub-shop-two" className="sub-nav-link collapsed"  data-bs-toggle="collapse" aria-expanded="true" aria-controls="sub-shop-two">
                                        <span>Features</span>
                                        <span className="btn-open-sub"></span>
                                    </a>
                                    <div id="sub-shop-two" className="collapse">
                                        <ul className="sub-nav-menu sub-menu-level-2">
                                            <li><a href="shop-link.html" className="sub-nav-link">Pagination links</a></li>
                                            <li><a href="shop-loadmore.html" className="sub-nav-link">Pagination loadmore</a></li>
                                            <li><a href="shop-infinite-scrolling.html" className="sub-nav-link">Pagination infinite scrolling</a></li>
                                            <li><a href="shop-filter-sidebar.html" className="sub-nav-link">Filter sidebar</a></li>
                                            <li><a href="shop-filter-hidden.html" className="sub-nav-link">Filter hidden</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="#sub-shop-three" className="sub-nav-link collapsed"  data-bs-toggle="collapse" aria-expanded="true" aria-controls="sub-shop-three">
                                        <span>Product styles</span>
                                        <span className="btn-open-sub"></span>
                                    </a>
                                    <div id="sub-shop-three" className="collapse">
                                        <ul className="sub-nav-menu sub-menu-level-2">
                                            <li><a href="product-style-list.html" className="sub-nav-link">Product style list</a></li>
                                            <li><a href="product-style-01.html" className="sub-nav-link">Product style 01</a></li>
                                            <li><a href="product-style-02.html" className="sub-nav-link">Product style 02</a></li>
                                            <li><a href="product-style-03.html" className="sub-nav-link">Product style 03</a></li>
                                            <li><a href="product-style-04.html" className="sub-nav-link">Product style 04</a></li>
                                            <li><a href="product-style-05.html" className="sub-nav-link">Product style 05</a></li>
                                            <li><a href="product-style-06.html" className="sub-nav-link">Product style 06</a></li>
                                            <li><a href="product-style-07.html" className="sub-nav-link">Product style 07</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-mb-item">
                        <a href="#dropdown-menu-three" className="collapsed mb-menu-link current" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dropdown-menu-three">
                            <span>Products</span>
                            <span className="btn-open-sub"></span>
                        </a>
                    
                    </li>
                    <li className="nav-mb-item">
                        <a href="#dropdown-menu-four" className="collapsed mb-menu-link current" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dropdown-menu-four">
                            <span>Pages</span>
                            <span className="btn-open-sub"></span>
                        </a>
                        <div id="dropdown-menu-four" className="collapse">
                            <ul className="sub-nav-menu" id="sub-menu-navigation">
                                <li><a href="about-us.html" className="sub-nav-link">About us</a></li>
                                <li><a href="brands.html" className="sub-nav-link line-clamp">Brands<div className="demo-label"><span className="demo-new">New</span></div></a></li>
                                <li><a href="brands-v2.html" className="sub-nav-link">Brands V2</a></li>
                                <li><a href="contact-1.html" className="sub-nav-link">Contact 1</a></li>
                                <li><a href="contact-2.html" className="sub-nav-link">Contact 2</a></li>
                               
                                <li><a href="#sub-account" className="sub-nav-link collapsed"  data-bs-toggle="collapse" aria-expanded="true" aria-controls="sub-account">
                                    <span>My Account</span>
                                    <span className="btn-open-sub"></span>
                                    </a>
                                    <div id="sub-account" className="collapse">
                                        <ul className="sub-nav-menu sub-menu-level-2">
                                            <li><a href="my-account.html" className="sub-nav-link">My account</a></li>
                                            <li><a href="my-account-orders.html" className="sub-nav-link">My order</a></li>
                                            <li><a href="my-account-orders-details.html" className="sub-nav-link">My order details</a></li>
                                            <li><a href="my-account-address.html" className="sub-nav-link">My address</a></li>
                                            <li><a href="my-account-edit.html" className="sub-nav-link">My account details</a></li>
                                            <li><a href="my-account-wishlist.html" className="sub-nav-link">My wishlist</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a href="invoice.html" className="sub-nav-link line-clamp">Invoice</a></li>
                                <li><a href="404.html" className="sub-nav-link line-clamp">404</a></li>
                            </ul>
                        </div>
                        
                    </li>
                    <li className="nav-mb-item">
                        <a href="#dropdown-menu-five" className="collapsed mb-menu-link current" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dropdown-menu-five">
                            <span>Blog</span>
                            <span className="btn-open-sub"></span>
                        </a>
                        <div id="dropdown-menu-five" className="collapse">
                            <ul className="sub-nav-menu" >
                                <li><a href="blog-grid.html" className="sub-nav-link">Grid layout</a></li>
                                <li><a href="blog-sidebar-left.html" className="sub-nav-link">Left sidebar</a></li>
                                <li><a href="blog-sidebar-right.html" className="sub-nav-link">Right sidebar</a></li>
                                <li><a href="blog-list.html" className="sub-nav-link">Blog list</a></li>
                                <li><a href="blog-detail.html" className="sub-nav-link">Single Post</a></li>
                            </ul>
                        </div>
                        
                    </li>
                    <li className="nav-mb-item">
                        <a href="https://themeforest.net/item/ecomus-ultimate-html5-template/53417990?s_rank=3" className="mb-menu-link">Buy now</a>
                    </li>
                </ul>
                <div className="mb-other-content">
                    <div className="d-flex group-icon">
                        <a href="wishlist.html" className="site-nav-icon"><i className="icon icon-heart"></i>Wishlist</a>
                        <a href="home-search.html" className="site-nav-icon"><i className="icon icon-search"></i>Search</a>
                    </div>
                    <div className="mb-notice">
                        <a href="contact-1.html" className="text-need">Need help ?</a>
                    </div>
                    <ul className="mb-info">
                        <li>Address: 1234 Fashion Street, Suite 567, <br/> New York, NY 10001</li>
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
                            <option data-thumbnail="images/country/fr.svg">EUR <span>€ | France</span></option>
                            <option data-thumbnail="images/country/de.svg">EUR <span>€ | Germany</span></option>
                            <option selected data-thumbnail="images/country/us.svg">USD <span>$ | United States</span></option>
                            <option data-thumbnail="images/country/vn.svg">VND <span>₫ | Vietnam</span></option>
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
                    <span className="icon icon-filter"></span>
                    <span>Lọc</span>
                </div>
                <span className="icon-close icon-close-popup" data-bs-dismiss="offcanvas" aria-label="Close"></span>
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
                   
                    {/* <div className="widget-facet">
                    <div className="facet-title">
                        <span>Giá</span>
                    </div>
                    <div className="widget-price filter-price">
                        <div className="range-input">
                        <input
                            className="range-min"
                            type="range"
                            min="100000"
                            max="10000000"
                            value={minPrice}
                            onChange={handleMinChange}
                        />
                        <input
                            className="range-max"
                            type="range"
                            min="100000"
                            max="10000000"
                            value={maxPrice}
                            onChange={handleMaxChange}
                        />
                        </div>
                        <div className="box-title-price">
                        <span className="title-price">Giá :</span>
                        <div className="caption-price">
                            <div>
                            <span className="min-price">{minPrice.toLocaleString('vi-VN')}</span>
                            <span>đ</span>
                            </div>
                            <span>-</span>
                            <div>
                            <span className="max-price">{maxPrice.toLocaleString('vi-VN')}</span>
                            <span>đ</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div> */}
        <div className="widget-facet">
                        <div className="facet-title" data-bs-target="#color" data-bs-toggle="collapse" aria-expanded="true" aria-controls="color">
                            <span>Color</span>
                            
                        </div>
                        <div id="color" className="collapsing show" style={{height: 236}}>
                            <ul className="tf-filter-group filter-color current-scrollbar mb_36">
                               
                                <li className="list-item d-flex gap-12 align-items-center">
                                    <input type="checkbox" name="color" className="tf-check-color bg_dark" id="black" value="black"/>
                                    <label htmlFor="black" className="label"><span>Đen</span>&nbsp;<span>(18)</span></label>
                                </li>
                                <li className="list-item d-flex gap-12 align-items-center">
                                    <input type="checkbox" name="color" className="tf-check-color bg_blue-2" id="blue" value="blue"/>
                                    <label htmlFor="blue" className="label"><span>Xanh</span>&nbsp;<span>(3)</span></label>
                                </li>
                               
                                
                                <li className="list-item d-flex gap-12 align-items-center">
                                    <input type="checkbox" name="color" className="tf-check-color bg_dark-blue" id="dark-blue" value="dark-blue"/>
                                    <label htmlFor="dark-blue" className="label"><span>Xanh biển</span>&nbsp;<span>(3)</span></label>
                                </li>
                               
                               
                                
                                <li className="list-item d-flex gap-12 align-items-center">
                                    <input type="checkbox" name="color" className="tf-check-color bg_orange" id="orange" value="orange"/>
                                    <label htmlFor="orange" className="label"><span>Cam</span>&nbsp;<span>(1)</span></label>
                                </li>
                                <li className="list-item d-flex gap-12 align-items-center">
                                    <input type="checkbox" name="color" className="tf-check-color bg_pink" id="pink" value="pink"/>
                                    <label htmlFor="pink" className="label"><span>Hồng</span>&nbsp;<span>(2)</span></label>
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
                    Search our site
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
                                    <a href="shop-default.html" className=""></a>
                                </li>
                                <li className="tf-quicklink-item">
                                    <a href="shop-default.html" className="">Women</a>
                                </li>
                                <li className="tf-quicklink-item">
                                    <a href="shop-default.html" className="">Accessories</a>
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
                    <form className="" action="https://themesflat.co/html/ecomus/my-account.html" accept-charset="utf-8">
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