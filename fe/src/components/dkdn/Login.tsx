import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Form, FormProps, Input, InputNumber, message } from "antd";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
type FieldType = {
  email?: string;
  password?: string;

};

const Login = () => {
  const queryClient = useQueryClient();
  const [messageAPI, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: (user: FieldType) =>
      axios.post(`http://localhost:3000/login`, user),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      messageAPI.success("dang nhap thanh cong");
      setTimeout(() => {
        navigate(`/`);
      }, 2000);
    },
  });
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    mutate(values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      {contextHolder}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="email"
          name="email"
          rules={[
            { required: true, message: "k để trống!" },
            {type : "email", message: "phai de dung dinh dang email" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="password"
          name="password"
          rules={[{ required: true, message: "k để trống!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
