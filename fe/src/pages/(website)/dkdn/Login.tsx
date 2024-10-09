import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Card, Form, Input, message, Spin } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

type FieldType = {
    email: string;
    password: string;
};

const Login: React.FC = () => {
    const queryClient = useQueryClient();
    const [loading, setLoading] = useState(false);
    const [messageAPI, contextHolder] = message.useMessage();
    const navigate = useNavigate();

    // Kiểm tra trạng thái đăng nhập khi trang được tải
    useEffect(() => {
        const authToken = localStorage.getItem("authToken");

        // Nếu đã có authToken trong localStorage, điều hướng về trang chủ
        if (authToken) {
            navigate("/"); // Điều hướng tới trang chủ nếu đã đăng nhập
        }
    }, [navigate]);

    // Mutation for login API call
    const { mutate } = useMutation({
        mutationFn: (user: FieldType) =>
            axios.post(`http://localhost:8000/api/login`, user), // Gọi API login từ Laravel
        onSuccess: (response) => {
            const { token, role } = response.data.data; // Lấy token và vai trò từ phản hồi
            const numericRole = Number(role); // Ép kiểu role thành số

            // Kiểm tra vai trò hợp lệ trước khi lưu vào localStorage
            if (numericRole === 1 || numericRole === 2) {
                // Lưu token và vai trò vào localStorage
                localStorage.setItem("authToken", token);
                localStorage.setItem("userRole", numericRole.toString());

                queryClient.invalidateQueries({
                    queryKey: ["products"],
                });

                messageAPI.success("Đăng nhập thành công!");

                // Điều hướng dựa trên vai trò người dùng
                setTimeout(() => {
                    if (numericRole === 1) {
                        navigate("/"); // Vai trò 1 => trang người dùng
                    } else {
                        // navigate("/dashboard"); // Vai trò khác => trang dashboard
                    }
                }, 2000);
            } else {
                messageAPI.error("Vai trò không hợp lệ.");
            }
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
