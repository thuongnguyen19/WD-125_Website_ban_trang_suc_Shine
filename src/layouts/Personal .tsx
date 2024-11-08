import React, { useState, useEffect } from "react";
import {
    Card,
    Avatar,
    Input,
    Button,
    Form,
    message,
    Row,
    Col,
    Typography,
    Modal,
} from "antd";
import axios from "axios";
import { EditOutlined, SaveOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom"; // Thay useHistory bằng useNavigate

const { Title } = Typography;

interface FormData {
    name: string;
    phone: string | null;
    address: string | null;
    email: string | null;
    avatar: string | null;
}

interface ChangePasswordData {
    oldPassword: string;
    newPassword: string;
    confirmNewPassword: string;
}

const Personal = () => {
    const navigate = useNavigate(); // Hook để chuyển hướng
    const [isEditing, setIsEditing] = useState(false);
    const [isChangingPassword, setIsChangingPassword] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        phone: null,
        address: null,
        email: null,
        avatar: null,
    });
    const [avatarFile, setAvatarFile] = useState<File | null>(null);
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

    const [passwordData, setPasswordData] = useState<ChangePasswordData>({
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
    });

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem("authToken");
            if (!token) {
                message.error("Vui lòng đăng nhập lại.");
                return;
            }

            try {
                const response = await axios.get(
                    "http://127.0.0.1:8000/api/listInformationOrder",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );

                if (response.data.status) {
                    const user = response.data.data.user;
                    setFormData({
                        name: user.name || "",
                        phone: user.phone_number || null,
                        address: user.address || null,
                        email: user.email || null,
                        avatar: user.image || null,
                    });
                    setAvatarPreview(user.image || null);
                } else {
                    message.error(response.data.message);
                }
            } catch (error) {
                message.error("Lấy thông tin người dùng không thành công!");
            }
        };

        fetchUserData();
    }, []);

    const handleUpdate = async () => {
        const updatedData = new FormData();
        updatedData.append("name", formData.name);
        updatedData.append("email", formData.email || "");
        updatedData.append("phone_number", formData.phone || "");
        updatedData.append("address", formData.address || "");

        if (avatarFile) {
            updatedData.append("image", avatarFile);
        }

        const token = localStorage.getItem("authToken");
        if (!token) {
            message.error("Vui lòng đăng nhập lại.");
            return;
        }

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/updateUser",
                updatedData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                    },
                },
            );

            if (response.data.status) {
                message.success("Thông tin đã được cập nhật!");
                setIsEditing(false);
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            message.error("Cập nhật thông tin không thành công!");
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordData({
            ...passwordData,
            [e.target.name]: e.target.value,
        });
    };

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;

        if (file) {
            setAvatarFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                if (reader.result) {
                    setAvatarPreview(reader.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handlePasswordChange = async () => {
        const { oldPassword, newPassword, confirmNewPassword } = passwordData;

        if (!oldPassword || !newPassword || !confirmNewPassword) {
            message.error("Tất cả các trường mật khẩu đều bắt buộc.");
            return;
        }

        if (newPassword !== confirmNewPassword) {
            message.error("Mật khẩu mới và xác nhận mật khẩu không khớp.");
            return;
        }

        Modal.confirm({
            title: "Bạn có chắc muốn đổi mật khẩu không?",
            content: "Sau khi đổi mật khẩu, bạn sẽ phải đăng nhập lại.",
            okText: "Đồng ý",
            cancelText: "Hủy",
            onOk: async () => {
                const token = localStorage.getItem("authToken");
                if (!token) {
                    message.error("Vui lòng đăng nhập lại.");
                    return;
                }

                try {
                    const response = await axios.post(
                        "http://127.0.0.1:8000/api/changePassword",
                        {
                            old_password: oldPassword,
                            new_password: newPassword,
                            new_password_confirmation: confirmNewPassword,
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        },
                    );

                    if (response.data.status) {
                        message.success("Mật khẩu đã được thay đổi!");

                        await axios.post(
                            "http://127.0.0.1:8000/api/logout",
                            {},
                            {
                                headers: {
                                    Authorization: `Bearer ${token}`,
                                },
                            },
                        );

                        localStorage.removeItem("authToken");
                        navigate("/login"); // Sử dụng navigate để chuyển hướng về trang login
                    } else {
                        message.error(response.data.message);
                    }
                } catch (error) {
                    message.error("Đổi mật khẩu không thành công.");
                }
            },
        });
    };

    return (
        <div
            style={{
                padding: "30px",
                maxWidth: "1000px",
                margin: "auto",
                background: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Card
                style={{
                    borderRadius: "10px",
                    boxShadow: "none",
                    border: "none",
                    padding: "30px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <Row gutter={[16, 16]} align="middle">
                    <Col span={24} style={{ textAlign: "center" }}>
                        <div style={{ marginBottom: "20px" }}>
                            <Button
                                type="link"
                                onClick={() => {
                                    setIsEditing(false);
                                    setIsChangingPassword(false);
                                }}
                                style={{ marginRight: "15px" }}
                            >
                                Thông tin
                            </Button>
                            <Button
                                type="link"
                                onClick={() => {
                                    setIsEditing(false);
                                    setIsChangingPassword(true);
                                }}
                            >
                                Thay đổi mật khẩu
                            </Button>
                        </div>

                        <Avatar
                            size={150}
                            src={avatarPreview || formData.avatar || undefined}
                            style={{
                                marginBottom: "20px",
                                borderRadius: "50%",
                            }}
                        />
                    </Col>
                </Row>

                {!isChangingPassword && (
                    <Row gutter={[16, 16]} style={{ marginTop: "30px" }}>
                        <Col span={24}>
                            <Form layout="vertical">
                                <Form.Item
                                    label="Tên người dùng"
                                    style={{ marginBottom: "20px" }}
                                >
                                    <Input
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                name: e.target.value,
                                            })
                                        }
                                        disabled={!isEditing}
                                    />
                                </Form.Item>

                                <Form.Item
                                    label="Email"
                                    style={{ marginBottom: "20px" }}
                                >
                                    <Input
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                email: e.target.value,
                                            })
                                        }
                                        disabled={!isEditing}
                                    />
                                </Form.Item>

                                <Form.Item
                                    label="Số điện thoại"
                                    style={{ marginBottom: "20px" }}
                                >
                                    <Input
                                        value={formData.phone || ""}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                phone: e.target.value,
                                            })
                                        }
                                        disabled={!isEditing}
                                    />
                                </Form.Item>

                                <Form.Item
                                    label="Địa chỉ"
                                    style={{ marginBottom: "20px" }}
                                >
                                    <Input
                                        value={formData.address || ""}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                address: e.target.value,
                                            })
                                        }
                                        disabled={!isEditing}
                                    />
                                </Form.Item>

                                <Form.Item
                                    label="Avatar"
                                    style={{ marginBottom: "20px" }}
                                >
                                    <Avatar
                                        size={150}
                                        src={
                                            avatarPreview ||
                                            formData.avatar ||
                                            undefined
                                        }
                                        style={{
                                            marginBottom: "20px",
                                            borderRadius: "50%",
                                        }}
                                    />
                                    {isEditing && (
                                        <input
                                            type="file"
                                            onChange={handleAvatarChange}
                                            disabled={!isEditing}
                                            style={{ marginTop: "10px" }}
                                        />
                                    )}
                                </Form.Item>

                                {isEditing ? (
                                    <Button
                                        type="primary"
                                        icon={<SaveOutlined />}
                                        onClick={handleUpdate}
                                    >
                                        Lưu thay đổi
                                    </Button>
                                ) : (
                                    <Button
                                        type="default"
                                        icon={<EditOutlined />}
                                        onClick={() => setIsEditing(true)}
                                    >
                                        Chỉnh sửa
                                    </Button>
                                )}
                            </Form>
                        </Col>
                    </Row>
                )}

                {isChangingPassword && (
                    <Row gutter={[16, 16]} style={{ marginTop: "30px" }}>
                        <Col span={24}>
                            <Form layout="vertical">
                                <Form.Item
                                    label="Mật khẩu cũ"
                                    style={{ marginBottom: "20px" }}
                                >
                                    <Input.Password
                                        name="oldPassword"
                                        value={passwordData.oldPassword}
                                        onChange={handleInputChange}
                                    />
                                </Form.Item>

                                <Form.Item
                                    label="Mật khẩu mới"
                                    style={{ marginBottom: "20px" }}
                                >
                                    <Input.Password
                                        name="newPassword"
                                        value={passwordData.newPassword}
                                        onChange={handleInputChange}
                                    />
                                </Form.Item>

                                <Form.Item
                                    label="Xác nhận mật khẩu mới"
                                    style={{ marginBottom: "20px" }}
                                >
                                    <Input.Password
                                        name="confirmNewPassword"
                                        value={passwordData.confirmNewPassword}
                                        onChange={handleInputChange}
                                    />
                                </Form.Item>

                                <Button
                                    type="primary"
                                    icon={<LockOutlined />}
                                    onClick={handlePasswordChange}
                                >
                                    Đổi mật khẩu
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                )}
            </Card>
        </div>
    );
};

export default Personal;
