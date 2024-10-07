import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Card, Form, Input, message, Spin } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type FieldType = {
    email?: string;
    password?: string;
};

const Login = () => {
    const queryClient = useQueryClient();
    const [loading, setLoading] = useState(false);
    const [messageAPI, contextHolder] = message.useMessage();
    const navigate = useNavigate();

    // Mutation for login API call
    const { mutate } = useMutation({
        mutationFn: (user: FieldType) =>
            axios.post(`http://localhost:8000/api/login`, user), // Gọi API login từ Laravel
        onSuccess: (response) => {
            const token = response.data.data; // Lấy token từ phản hồi
            localStorage.setItem("authToken", token); // Lưu token vào localStorage
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
            messageAPI.success("Đăng nhập thành công!");
            setTimeout(() => {
                navigate(`/`); // Chuyển hướng về trang chủ sau khi đăng nhập
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
                                name="register"
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
                        </Spin>
                    </Card>
                </div>
            </div>

        </>
    );
};

export default Login;