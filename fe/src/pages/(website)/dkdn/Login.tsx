import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Card, Form, Input, message, Spin } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type FieldType = {
    email: string;
    password: string;
};

const Login: React.FC = () => {
    const queryClient = useQueryClient();
    const [loading, setLoading] = useState(false);
    const [messageAPI, contextHolder] = message.useMessage();

    // Kiểm tra trạng thái đăng nhập khi trang được tải
    useEffect(() => {
        const authToken = localStorage.getItem("authToken");
        const userRole = localStorage.getItem("userRole");

        // Nếu đã có token trong localStorage (đã đăng nhập)
        if (authToken && userRole) {
            messageAPI.warning(
                "Bạn đang đăng nhập một tài khoản. Vui lòng đăng xuất để đăng nhập tài khoản khác.",
            );

            // Điều hướng về trang tương ứng dựa trên role
            setTimeout(() => {
                if (userRole === "2") {
                    window.location.href = `http://127.0.0.1:8000/dashboard`; // Điều hướng đến trang dashboard
                } else if (userRole === "1") {
                    window.location.href = `http://localhost:5173`; // Điều hướng đến trang home
                }
            }, 1500);
        }
    }, [messageAPI]);

    // Mutation for login API call
    const { mutate } = useMutation({
        mutationFn: (user: FieldType) =>
            axios.post(`http://localhost:8000/api/login`, user), // Gọi API login từ Laravel
        onSuccess: (response) => {
            const { token, role } = response.data.data; // Lấy token và vai trò từ phản hồi
            const numericRole = Number(role); // Ép kiểu role thành số

            // Lưu token và vai trò vào localStorage
            localStorage.setItem("authToken", token);
            localStorage.setItem("userRole", numericRole.toString());

            queryClient.invalidateQueries({
                queryKey: ["products"],
            });

            messageAPI.success("Đăng nhập thành công!");

            // Điều hướng dựa trên vai trò người dùng
            setTimeout(() => {
                if (numericRole === 2) {
                    window.location.href = `http://127.0.0.1:8000/dashboard`; // Điều hướng đến trang dashboard
                } else if (numericRole === 1) {
                    window.location.href = `http://localhost:5173`; // Điều hướng đến trang home
                } else {
                    messageAPI.error("Vai trò không hợp lệ.");
                }
            }, 2000);
        },
        onError: () => {
            messageAPI.error("Sai mật khẩu hoặc tài khoản không tồn tại.");
        },
        onSettled: () => {
            setLoading(false);
        },
    });

    const onFinish = (values: FieldType) => {
        setLoading(true);
        mutate(values); // Gọi hàm mutate để xử lý đăng nhập
    };

    const onFinishFailed = () => {
        messageAPI.error("Vui lòng kiểm tra đầu vào của bạn.");
    };

    return (
        <>
            {contextHolder}
            <div className="login-page">
                <div className="register-container">
                    <Card
                        className="register-card"
                        title="Đăng nhập tài khoản"
                        bordered={false}
                    >
                        <Spin spinning={loading}>
                            <Form
                                name="login"
                                layout="vertical"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập email!",
                                        },
                                        {
                                            type: "email",
                                            message:
                                                "Vui lòng nhập đúng định dạng email!",
                                        },
                                    ]}
                                >
                                    <Input className="custom-input" />
                                </Form.Item>

                                <Form.Item
                                    label="Mật khẩu"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng điền mật khẩu!",
                                        },
                                    ]}
                                >
                                    <Input.Password className="custom-input" />
                                </Form.Item>

                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        className="custom-btn"
                                        disabled={loading}
                                        style={{
                                            width: "100%",
                                            backgroundColor: "#1890ff",
                                            borderColor: "#1890ff",
                                        }}
                                    >
                                        Đăng Nhập
                                    </Button>
                                </Form.Item>
                            </Form>
                            <div style={{ textAlign: "center", marginTop: 10 }}>
                                <span>Bạn chưa có tài khoản? </span>
                                <Link to="/register" style={{ color: "blue" }}>
                                    Đăng ký ngay
                                </Link>
                            </div>
                        </Spin>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default Login;