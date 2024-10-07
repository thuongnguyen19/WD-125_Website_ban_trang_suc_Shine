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

export const fetchFilteredProducts = async (sort: string, type: string): Promise<Product[]> => {
  const response = await axiosInstance.get<Product[]>("/products/filter", {
    params: {
      sort: sort,
      type: type, // Đảm bảo type được truyền vào
    },
  });
  return response.data;
};
