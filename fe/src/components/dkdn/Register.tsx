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
            messageAPI.success("Registration successful!");
            setTimeout(() => {
                navigate(`/login`);
            }, 2000);
        },
        onError: () => {
            messageAPI.error("Registration failed. Please try again.");
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
        messageAPI.error("Please check your input.");
    };

    return (
        <>
            {contextHolder}
            <div className="register-container">
                <Card
                    className="register-card"
                    title="Create Your Account"
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
                                        message: "Please enter your email!",
                                    },
                                    {
                                        type: "email",
                                        message: "Invalid email format!",
                                    },
                                ]}
                            >
                                <Input className="custom-input" />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter your password!",
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password className="custom-input" />
                            </Form.Item>

                            <Form.Item
                                label="Confirm Password"
                                name="confirmPassword"
                                dependencies={["password"]}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please confirm your password!",
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
                                                    "Passwords do not match!",
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
                                    Already have an account?{" "}
                                    <Link to="/login">Log in here</Link>
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
