import { ApiRequestPagination, ApiResponse } from "@/models/types/apiResponse";
import { CategoryProps } from "@/models/types/category";
import api from "@/services/api";

const CategoryService = () => {
  const getCategories = async ({
    skip,
    take,
  }: ApiRequestPagination): Promise<ApiResponse<CategoryProps[]>> => {
    const response = await api.get("/Category", {
      params: {
        skip,
        take,
      },
    });
    const result = response.data?.Items.sort(
      (a: CategoryProps, b: CategoryProps) => a.Id - b.Id
    );
    return { ...response.data, Items: result };
  };

  const createCategory = async (
    data: Pick<CategoryProps, "Name">
  ): Promise<CategoryProps> => {
    const { data: result } = await api.post("/Category", data);
    return result;
  };

  const deleteCategory = async (data: {
    Id: Pick<CategoryProps, "Id">;
  }): Promise<void> => {
    const { data: result } = await api.delete(`/Category/${data.Id}`);
    return result;
  };

  const getCategoryById = async (
    data: CategoryProps
  ): Promise<CategoryProps> => {
    const { data: result } = await api.delete(`/Category/${data}`);
    return result;
  };

  const updateCategory = async (
    data: CategoryProps
  ): Promise<CategoryProps> => {
    const { data: result } = await api.put(`/Category/${data.Id}`, data);
    return result;
  };

  return {
    getCategories,
    createCategory,
    deleteCategory,
    getCategoryById,
    updateCategory,
  };
};

export default CategoryService;
