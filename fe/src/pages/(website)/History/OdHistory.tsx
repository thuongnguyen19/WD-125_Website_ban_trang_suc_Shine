import React, { useState } from "react";
import { Layout, Radio, Input, Card, Typography, Button, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { RadioChangeEvent } from "antd/lib/radio";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";

const { Content } = Layout;
const { Title } = Typography;

interface Order {
    key: string;
    orderId: string;
    productName: string;
    date: string;
    total: string;
    quantity: number;
    status: string;
    imageUrl: string;
    productDetails: string;
}

const OdHistory: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filter, setFilter] = useState<string>("all");

    const dataSource: Order[] = [
        {
            key: "1",
            orderId: "#123456",
            productName: "Sản phẩm 1",
            date: "01/09/2024",
            total: "500,000 VND",
            quantity: 2,
            status: "Đã giao",
            imageUrl: "path/to/image1.jpg",
            productDetails: "Vòng được làm từ chất liệu vàng",
        },
        {
            key: "2",
            orderId: "#123457",
            productName: "Sản phẩm 2",
            date: "02/09/2024",
            total: "300,000 VND",
            quantity: 1,
            status: "Đang giao",
            imageUrl: "path/to/image2.jpg",
            productDetails: "Vòng được làm từ chất liệu vàng",
        },
        {
            key: "3",
            orderId: "#123458",
            productName: "Sản phẩm 3",
            date: "03/09/2024",
            total: "450,000 VND",
            quantity: 3,
            status: "Chờ xác nhận",
            imageUrl: "path/to/image3.jpg",
            productDetails: "Vòng được làm từ chất liệu vàng",
        },
    ];

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (e: RadioChangeEvent) => {
        setFilter(e.target.value);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Đã giao":
                return "#52c41a"; // Màu xanh cho đã giao
            case "Đang giao":
                return "#faad14"; // Màu cam cho đang giao
            case "Chờ xác nhận":
                return "#ff4d4f"; // Màu đỏ cho chờ xác nhận
            default:
                return "#000";
        }
    };

    const filteredData = dataSource
        .filter((item) => {
            if (filter === "all") return true;
            if (filter === "delivered" && item.status === "Đã giao")
                return true;
            if (filter === "shipping" && item.status === "Đang giao")
                return true;
            if (filter === "waiting" && item.status === "Chờ xác nhận")
                return true;
            return false;
        })
        .filter((item) =>
            item.productName.toLowerCase().includes(searchTerm.toLowerCase()),
        );

    return (
        <div>
            <Header/>
            <Layout style={{ backgroundColor: "#fef7f1" }}>
                <Content
                    style={{
                        padding: "20px",
                        minHeight: "calc(100vh - 64px)",
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <Title level={2} style={{ color: "#8b572a" }}>
                        Lịch sử đơn hàng
                    </Title>
                    <Row
                        justify="space-between"
                        style={{ marginBottom: "20px" }}
                    >
                        <Col>
                            <Radio.Group
                                onChange={handleFilterChange}
                                value={filter}
                                style={{
                                    color: "#8b572a",
                                    fontWeight: "bold",
                                }}
                            >
                                <Radio value="all" style={{ color: "#8b572a" }}>
                                    Tất cả
                                </Radio>
                                <Radio
                                    value="waiting"
                                    style={{ color: "#8b572a" }}
                                >
                                    Chờ xác nhận
                                </Radio>
                                <Radio
                                    value="shipping"
                                    style={{ color: "#8b572a" }}
                                >
                                    Đang giao
                                </Radio>
                                <Radio
                                    value="delivered"
                                    style={{ color: "#8b572a" }}
                                >
                                    Đã giao
                                </Radio>
                            </Radio.Group>
                        </Col>
                        <Col>
                            <Input
                                placeholder="Tìm kiếm theo tên sản phẩm..."
                                prefix={<SearchOutlined />}
                                value={searchTerm}
                                onChange={handleSearchChange}
                                style={{
                                    width: "250px",
                                    borderRadius: "5px",
                                    borderColor: "#8b572a",
                                    color: "#8b572a",
                                }}
                            />
                        </Col>
                    </Row>

                    {filteredData.map((order) => (
                        <Card
                            key={order.key}
                            style={{
                                marginBottom: "20px",
                                backgroundColor: "#fff3e6",
                                borderRadius: "8px",
                            }}
                            bodyStyle={{ padding: "20px" }}
                        >
                            <Row gutter={16}>
                                <Col xs={24} sm={6}>
                                    <img
                                        src={order.imageUrl}
                                        alt={order.productName}
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                            borderRadius: "8px",
                                        }}
                                    />
                                </Col>
                                <Col xs={24} sm={12}>
                                    <Title
                                        level={4}
                                        style={{ color: "#8b572a" }}
                                    >
                                        {order.productName}
                                    </Title>
                                    <p>Ngày đặt: {order.date}</p>
                                    <p>Số lượng: {order.quantity}</p>
                                    <p>Tổng tiền: {order.total}</p>
                                </Col>
                                <Col
                                    xs={24}
                                    sm={6}
                                    style={{
                                        textAlign: "right",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-end",
                                    }}
                                >
                                    <p>Mã đơn hàng: {order.orderId}</p>
                                    <Row
                                        justify="end"
                                        align="middle"
                                        style={{ marginTop: "10px" }}
                                    >
                                        <Col style={{ minWidth: "100px" }}>
                                            {" "}
                                            {/* Đảm bảo trạng thái có chiều rộng cố định */}
                                            <p
                                                style={{
                                                    color: getStatusColor(
                                                        order.status,
                                                    ),
                                                    fontWeight: "bold",
                                                    margin: 0,
                                                    marginRight: "10px", // Khoảng cách bên phải giữa trạng thái và nút
                                                    textAlign: "left", // Đảm bảo căn chỉnh trái
                                                }}
                                            >
                                                {order.status}
                                            </p>
                                        </Col>
                                        <Col>
                                            <Button
                                                type="default"
                                                style={{
                                                    backgroundColor: "#8b572a",
                                                    color: "#fff",
                                                    borderRadius: "5px",
                                                    border: "none",
                                                }}
                                                onMouseEnter={(e) =>
                                                    (e.currentTarget.style.backgroundColor =
                                                        "#5c3a1b")
                                                }
                                                onMouseLeave={(e) =>
                                                    (e.currentTarget.style.backgroundColor =
                                                        "#8b572a")
                                                }
                                            >
                                                Xem chi tiết
                                            </Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card>
                    ))}
                </Content>
            </Layout>
            <Footer/>
        </div>
    );
};

export default OdHistory;