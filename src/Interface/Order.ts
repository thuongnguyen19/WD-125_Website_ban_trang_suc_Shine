import axiosInstance from "../configs/axios";


export interface Order {
    id: number;
    recipient_name: string;
    email: string;
    phone_number: string;
    recipient_address: string;
    order_date: string;
    status: string;
    updated_at: string;
    total_payment: number;
    order_detail: Array<{
        id: number;
        id_oder: number;
        id_product: number;  
        selling_price: number;
        list_price: number;
        product_name: string;
        product_image: string;
        quantity: number;
        product_variant: Variant;

  }>;
}

export interface Variant {
    color: {
        id: number;
        name: string;
    };
    size: {
        id: number;
        name: string;
    };
}


export const fetchOrders = async (): Promise<Order[]> => {
    const token = localStorage.getItem("authToken");
    if (!token) {
        throw new Error("No token found");
    }

    const response = await axiosInstance.get<Order[]>("/purchasedOrders", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

// export const cancelOrder = async (): Promise<void> => {
//     const token = localStorage.getItem("authToken");
//     if (!token) {
//         throw new Error("No token found");
//     }

//     await axiosInstance.get(`/purchasedOrders`, {
//                 params: {
//                     cancel_id: cancelOrderId, // Truyền cancel_id lên API
//                     note: cancelReason, // Không bắt buộc gửi note, chỉ kiểm tra
//                 },
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     });
// };