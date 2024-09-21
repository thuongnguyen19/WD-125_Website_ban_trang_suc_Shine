import { Link, Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Header2 from "../../components/Header2";
import Footer from "../../components/Footer";
import { Button, message, Modal } from "antd";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const Layoutweb = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const [messageAPI, contextHolder] = message.useMessage();

    const handleLogout = () => {
        Modal.confirm({
            title: "Xác nhận",
            content: "Bạn có muốn đăng xuất không?",
            okText: "Đăng xuất",
            cancelText: "Hủy",
            onOk: () => {
                localStorage.removeItem("authToken");

                queryClient.clear();

                messageAPI.success("Đã đăng xuất thành công!");

                setTimeout(() => {
                    navigate("/login");
                }, 1000);
            },
        });
    };

    return (
        <>
            {contextHolder}
            <div
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 1000,
                    transition: "top 0.3s",
                }}
            >
                <Header />
                <Header2 />
            </div>
            <Outlet />
            <Footer />
            <div style={{ padding: "10px", textAlign: "right" }}>
                <Button type="primary" onClick={handleLogout}>
                    Đăng xuất
                </Button>
            </div>
        </>
    );
};

export default Layoutweb;
