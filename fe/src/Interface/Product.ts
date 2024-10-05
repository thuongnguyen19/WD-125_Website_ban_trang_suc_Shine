import axiosInstance from "../configs/axios";
export interface Product {
  id: number;
  name: string;
  thumbnail: string;
  variants: Array<{
    id_product: number;
    selling_price: number;
    list_price: number;
  }>;
}

// Hàm lấy danh sách sản phẩm từ API
export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axiosInstance.get<Product[]>("/products");
  return response.data;
};