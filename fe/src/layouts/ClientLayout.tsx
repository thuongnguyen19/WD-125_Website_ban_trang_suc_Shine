import { Link, Outlet, useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import Header2 from "../components/common/Header2";
import Footer from "../components/common/Footer";
import { Button, message, Modal } from "antd";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Home from "../pages/(website)/home/page";


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
            <Home />

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
