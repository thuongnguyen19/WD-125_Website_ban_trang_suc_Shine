import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Card, Form, FormProps, Input, InputNumber, message, Spin } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
type FieldType = {
  email?: string;
  password?: string;

};

const Login = () => {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  const [messageAPI, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: (user: FieldType) =>
      axios.post(`http://localhost:3000/login`, user),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      messageAPI.success("Đăng nhập thành công");
      setTimeout(() => {
        navigate(`/`);
      }, 2000);
    },
    onError: () => {
            messageAPI.error(
                "Sai mật khẩu hoặc tài khoản không tồn tại.",
            );
        },
        onSettled: () => {
            setLoading(false);
        },
  });
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
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
                                    Đăng Nhập
                                </Button>
                            </Form.Item>

                            
                        </Form>
                    </Spin>
                </Card>
            </div>
        </>
    );
};

export default Login;
