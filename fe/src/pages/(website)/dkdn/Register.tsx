import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, message, Card, Spin } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

type FieldType = {
    email?: string;
    password?: string;
    confirmPassword?: string;
};

const Register = () => {
    const queryClient = useQueryClient();
    const [loading, setLoading] = useState(false);
    const [messageAPI, contextHolder] = message.useMessage();
    const navigate = useNavigate();

    const { mutate } = useMutation({
        mutationFn: (user: FieldType) =>
            axios.post(`http://localhost:3000/register`, user),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
            messageAPI.success("Đăng ký thành công!");
            setTimeout(() => {
                navigate(`/login`);
            }, 2000);
        },
        onError: () => {
            messageAPI.error(
                "Đăng ký không thành công. Tài khoản này đã được đăng kí. Vui lòng nhập email khác.",
            );
        },
        onSettled: () => {
            setLoading(false);
        },
    });

    const onFinish = (values: FieldType) => {
        setLoading(true);
        mutate(values);
    };

    const onFinishFailed = (errorInfo: any) => {
        messageAPI.error("Vui lòng kiểm tra đầu vào của bạn.");
    };

    return (
        <>
            {contextHolder}
            <div className="register-container">
                <Card
                    className="register-card"
                    title="Đăng kí tài khoản"
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
                                        message: "Viết đúng định dạng!",
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
                                hasFeedback
                            >
                                <Input.Password className="custom-input" />
                            </Form.Item>

                            <Form.Item
                                label="Nhập lại mật khẩu"
                                name="confirmPassword"
                                dependencies={["password"]}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập lại mật khẩu!",
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (
                                                !value ||
                                                getFieldValue("password") ===
                                                    value
                                            ) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(
                                                new Error(
                                                    "Mật khẩu không khớp!",
                                                ),
                                            );
                                        },
                                    }),
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
                                >
                                    Đăng kí
                                </Button>
                            </Form.Item>

                            <Form.Item>
                                <div className="login-redirect">
                                    Có tài khoản? Đăng nhập tại đây:{" "}
                                    <Link to="/login">đăng nhập</Link>
                                </div>
                            </Form.Item>
                        </Form>
                    </Spin>
                </Card>
            </div>
        </>
    );
};

export default Register;
