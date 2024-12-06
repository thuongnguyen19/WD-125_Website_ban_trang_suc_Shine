import React, { useEffect, useState } from "react";
import { Spin, message, Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";
import axiosInstance from "../../../configs/axios";

// Định nghĩa kiểu cho các sản phẩm
interface ProductVariant {
    id: number;
    image_color: string; // Ảnh biến thể sản phẩm
    colors: { id: number; name: string };
    sizes: { id: number; name: string };
}

interface Product {
    id: number;
    name: string;
    selectedVariant: ProductVariant;
    quantity: number;
}

interface Combo {
    id: number;
    name: string;
    image: string;
    price: number;
    products: Product[];
}

const PayCombo: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // State để chứa thông tin sản phẩm
    const [paymentProducts, setPaymentProducts] = useState<Product[]>([]);
    const [combo, setCombo] = useState<Combo | null>(null);
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);

    // Thông tin người dùng
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [address, setAddress] = useState<string>("");
useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
        message.error("Bạn chưa đăng nhập.");
        navigate("/login");
        return;
    }

    const orderDataString = localStorage.getItem("orderData");

    if (!orderDataString) {
        message.error("Không có sản phẩm nào để thanh toán.");
        navigate("/");
        return;
    }

    const orderData = JSON.parse(orderDataString);
    const { comboId, quantity, variantIds } = orderData;

    const fetchInformationOrder = async () => {
        try {
            const response = await axiosInstance.get(
                "/listInformationOrderCombo",
                {
                    headers: { Authorization: `Bearer ${token}` },
                    params: { comboId, quantity, variantIds },
                },
            );

            if (response.data.status) {
                const { productpayment, user } = response.data.data;

                // Tự động điền thông tin người dùng vào form
                if (user) {
                    setName(user.name || "");
                    setEmail(user.email || "");
                    setPhoneNumber(user.phone_number || "");
                    setAddress(user.address || "");
                }

                // Cập nhật thông tin combo và sản phẩm
                setCombo(productpayment);
                setPaymentProducts(productpayment.products || []);
                setTotalAmount(productpayment.price || 0);
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            message.error("Có lỗi xảy ra khi lấy thông tin sản phẩm.");
        } finally {
            setLoading(false);
        }
    };

    fetchInformationOrder();
}, [navigate]);
const saveProductToLocalStorage = (product: any) => {
    // Lấy sản phẩm đã lưu trước đó, nếu có
    const existingProducts = JSON.parse(
        localStorage.getItem("products") || "[]",
    );

    // Thêm sản phẩm mới vào danh sách
    existingProducts.push(product);

    // Lưu lại vào localStorage
    localStorage.setItem("products", JSON.stringify(existingProducts));
};


    if (loading) return <Spin size="large" />;

  return (
      <>
          <Header />
          <div style={{ position: "relative" }}>
              {combo && (
                  <div className="combo-info">
                      <h2>{combo.name}</h2>
                      <img
                          src={combo.image}
                          alt={combo.name}
                          style={{
                              width: "300px",
                              height: "auto",
                              borderRadius: "5px",
                              marginBottom: "10px",
                          }}
                      />
                      <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                          Giá combo: {totalAmount.toLocaleString("vi-VN")} VND
                      </p>
                  </div>
              )}
              <div className="tf-page-title">
                  <div className="container-full">
                      <div className="heading text-center">
                          Thông tin thanh toán
                      </div>
                  </div>
              </div>
              <section className="flat-spacing-11">
                  <div className="container">
                      <div className="tf-page-cart-wrap layout-2">
                          <div className="tf-page-cart-item">
                              <h5 className="fw-5 mb_20">Chi tiết đơn hàng</h5>
                              <form className="form-checkout">
                                  <fieldset className="box fieldset">
                                      <label htmlFor="first-name">
                                          Họ Và Tên
                                      </label>
                                      <input
                                          type="text"
                                          id="first-name"
                                          placeholder="Nguyễn Văn A"
                                          value={name}
                                          onChange={(e) =>
                                              setName(e.target.value)
                                          }
                                      />
                                  </fieldset>
                                  <fieldset className="box fieldset">
                                      <label htmlFor="email">Email</label>
                                      <input
                                          type="email"
                                          id="email"
                                          value={email}
                                          onChange={(e) =>
                                              setEmail(e.target.value)
                                          }
                                      />
                                  </fieldset>
                                  <fieldset className="box fieldset">
                                      <label htmlFor="phonenumber">
                                          Số điện thoại
                                      </label>
                                      <input
                                          type="text"
                                          id="phonenumber"
                                          value={phoneNumber}
                                          onChange={(e) =>
                                              setPhoneNumber(e.target.value)
                                          }
                                      />
                                  </fieldset>
                                  <fieldset className="box fieldset">
                                      <label htmlFor="address">Địa chỉ</label>
                                      <input
                                          type="text"
                                          id="address"
                                          value={address}
                                          onChange={(e) =>
                                              setAddress(e.target.value)
                                          }
                                      />
                                  </fieldset>
                              </form>
                          </div>

                          <div className="tf-page-cart-footer">
                              <div className="tf-cart-footer-inner">
                                  <h5 className="fw-5 mb_20">
                                      Sản phẩm trong combo
                                  </h5>
                                  <div className="pay-page">
                                      <table
                                          style={{
                                              width: "100%",
                                              borderCollapse: "collapse",
                                          }}
                                      >
                                          <thead>
                                              <tr>
                                                  <th
                                                      style={{
                                                          padding: "10px",
                                                          textAlign: "left",
                                                          width: "20%",
                                                      }}
                                                  >
                                                      Hình ảnh
                                                  </th>
                                                  <th
                                                      style={{
                                                          padding: "10px",
                                                          textAlign: "left",
                                                          width: "30%",
                                                      }}
                                                  >
                                                      Tên sản phẩm
                                                  </th>
                                                  <th
                                                      style={{
                                                          padding: "10px",
                                                          textAlign: "left",
                                                          width: "15%",
                                                      }}
                                                  >
                                                      Màu sắc
                                                  </th>
                                                  <th
                                                      style={{
                                                          padding: "10px",
                                                          textAlign: "left",
                                                          width: "15%",
                                                      }}
                                                  >
                                                      Kích thước
                                                  </th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              {paymentProducts.length > 0 ? (
                                                  paymentProducts.map(
                                                      (item) => {
                                                          // Kiểm tra và lấy thông tin màu sắc, kích thước, hình ảnh
                                                          const selectedVariant =
                                                              item.selectedVariant;
                                                          const imageUrl =
                                                              selectedVariant?.image_color ||
                                                              "https://via.placeholder.com/100"; // Hình ảnh mặc định

                                                          const colorName =
                                                              selectedVariant
                                                                  ?.colors
                                                                  ?.name ||
                                                              "Không xác định";
                                                          const sizeName =
                                                              selectedVariant
                                                                  ?.sizes
                                                                  ?.name ||
                                                              "Không xác định";

                                                          return (
                                                              <tr key={item.id}>
                                                                  <td
                                                                      style={{
                                                                          padding:
                                                                              "10px",
                                                                          verticalAlign:
                                                                              "middle",
                                                                      }}
                                                                  >
                                                                      <img
                                                                          src={
                                                                              imageUrl
                                                                          }
                                                                          alt={
                                                                              item.name ||
                                                                              "Sản phẩm"
                                                                          }
                                                                          style={{
                                                                              width: "100px",
                                                                              height: "100px",
                                                                              objectFit:
                                                                                  "cover",
                                                                              borderRadius:
                                                                                  "5px",
                                                                          }}
                                                                          crossOrigin="anonymous"
                                                                      />
                                                                  </td>
                                                                  <td
                                                                      style={{
                                                                          padding:
                                                                              "10px",
                                                                          verticalAlign:
                                                                              "middle",
                                                                      }}
                                                                  >
                                                                      <p
                                                                          style={{
                                                                              margin: "0",
                                                                          }}
                                                                      >
                                                                          {item.name ||
                                                                              "Tên sản phẩm không xác định"}
                                                                      </p>
                                                                      <p
                                                                          style={{
                                                                              margin: "0",
                                                                              fontSize:
                                                                                  "12px",
                                                                              color: "gray",
                                                                          }}
                                                                      >
                                                                          Số
                                                                          lượng:{" "}
                                                                          {
                                                                              item.quantity
                                                                          }
                                                                      </p>
                                                                  </td>
                                                                  <td
                                                                      style={{
                                                                          padding:
                                                                              "10px",
                                                                          verticalAlign:
                                                                              "middle",
                                                                      }}
                                                                  >
                                                                      {
                                                                          colorName
                                                                      }
                                                                  </td>
                                                                  <td
                                                                      style={{
                                                                          padding:
                                                                              "10px",
                                                                          verticalAlign:
                                                                              "middle",
                                                                      }}
                                                                  >
                                                                      {sizeName}
                                                                  </td>
                                                              </tr>
                                                          );
                                                      },
                                                  )
                                              ) : (
                                                  <tr>
                                                      <td
                                                          colSpan={4}
                                                          style={{
                                                              textAlign:
                                                                  "center",
                                                              padding: "10px",
                                                          }}
                                                      >
                                                          Không có sản phẩm nào
                                                          trong đơn hàng.
                                                      </td>
                                                  </tr>
                                              )}
                                          </tbody>
                                      </table>

                                      <h6>
                                          Tổng giá combo:{" "}
                                          {totalAmount.toLocaleString("vi-VN")}{" "}
                                          VND
                                      </h6>
                                  </div>
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

export default PayCombo;
