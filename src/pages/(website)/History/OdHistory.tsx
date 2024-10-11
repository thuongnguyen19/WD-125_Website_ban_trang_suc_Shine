import React from "react";
import { Link } from "react-router-dom"; // Import Link cho điều hướng

const OrderHistory = () => {
    return (
        <div className="order-history-container">
            <table className="order-history-table">
                <thead>
                    <tr>
                        <th>Mã đơn hàng</th>
                        <th>Ngày đặt hàng</th>
                        <th>Trạng thái đơn hàng</th>
                        <th>Tổng tiền</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="tf-order-item">
                        <td>#123</td>
                        <td> 1/9/2024</td>
                        <td>Đang giao</td>
                        <td>200.000</td>
                        <td>
                            <Link
                                to={`/profile/od_histori/detail`} // Điều hướng đến trang chi tiết đơn hàng
                                className="view-btn"
                            >
                                Xem chi tiết đơn hàng
                            </Link>
                        </td>
                    </tr>
                    <tr className="tf-order-item">
                        <td>#124</td>
                        <td> 2/9/2024</td>
                        <td>Chờ xác nhận</td>
                        <td>250.000</td>
                        <td>
                            <Link
                                to={`/profile/od_histori/detail`} // Điều hướng đến trang chi tiết đơn hàng
                                className="view-btn"
                            >
                                Xem chi tiết đơn hàng
                            </Link>
                        </td>
                    </tr>
                    <tr className="tf-order-item">
                        <td>#125</td>
                        <td> 3/9/2024</td>
                        <td>Đã giao</td>
                        <td>300.000</td>
                        <td>
                            <Link
                                to={`/profile/od_histori/detail`} // Điều hướng đến trang chi tiết đơn hàng
                                className="view-btn"
                            >
                                Xem chi tiết đơn hàng
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrderHistory;
