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

export const fetchProducts = async (
 
  page: number,
  perPage: number
): Promise<{ data: Product[]; total_pages: number }> => {
  const response = await axiosInstance.get<{ data: Product[]; total_pages: number }>("/products", {
    params: {
      
      page: page,
      per_page: perPage,
    },
  });
  
  return response.data; // Đảm bảo bạn trả về đúng cấu trúc dữ liệu
};

export interface Category {
    id: number;
    name: string;
}

// Hàm lấy danh sách sản phẩm từ API
export const fetchCategories = async (): Promise<Category[]> => {
  const response = await axiosInstance.get<Category[]>("/category");
  return response.data;
};

// Hàm lấy sản phẩm lọc theo sắp xếp, loại và phân trang
export const fetchFilteredProducts = async (
  sort: string,
  type: string,
  page: number,
  perPage: number
): Promise<{ data: Product[]; total_pages: number }> => {
  const response = await axiosInstance.get<{ data: Product[]; total_pages: number }>("/products/filter", {
    params: {
      sort: sort,
      type: type,
      page: page,
      per_page: perPage
    },
  });
  
  return response.data; // Đảm bảo bạn trả về đúng cấu trúc dữ liệu
};

