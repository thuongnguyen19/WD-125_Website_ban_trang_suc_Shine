import React from "react";

const OrderHistory = () => {
    return (
        <div className="order-history-container">
            <table className="order-history-table">
                <thead>
                    <tr>
                        <th>mã đơn hàng</th>
                        <th>ngày đặt hàng</th>
                        <th>Trạng thái đơn hàng</th>
                        <th>Tổng tiền</th>
                        <th>hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="tf-order-item">
                        <td>#123</td>
                        <td> 1/9/2024</td>
                        <td>đang giao</td>
                        <td>200.000</td>
                        <td>
                            <a
                                href="my-account-orders-details.html"
                                className="view-btn"
                            >
                                Xem chi tiết đơn hàng
                            </a>
                        </td>
                    </tr>
                    <tr className="tf-order-item">
                        <td>#123</td>
                        <td> 1/9/2024</td>
                        <td>chờ xác nhận</td>
                        <td>200.000</td>
                        <td>
                            <a
                                href="my-account-orders-details.html"
                                className="view-btn"
                            >
                                Xem chi tiết đơn hàng
                            </a>
                        </td>
                    </tr>
                    <tr className="tf-order-item">
                        <td>#123</td>
                        <td> 1/9/2024</td>
                        <td>đã giao</td>
                        <td>200.000</td>
                        <td>
                            <a
                                href="my-account-orders-details.html"
                                className="view-btn"
                            >
                                Xem chi tiết đơn hàng
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrderHistory;