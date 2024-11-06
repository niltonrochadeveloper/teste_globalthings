import { ApiRequestPagination, ApiResponse } from "@/models/types/apiResponse";
import { Heroes } from "@/models/types/heroes";
import api from "@/services/api";

const HeroesService = () => {
  const getHeroes = async ({
    skip,
    take,
  }: ApiRequestPagination): Promise<ApiResponse<Heroes[]>> => {
    const response = await api.get("/Heroes", {
      params: {
        skip,
        take,
      },
    });
    const result = response.data?.Items.sort(
      (a: Heroes, b: Heroes) => a.Id - b.Id
    );
    return { ...response.data, Items: result };
  };

  const createHeroes = async (data: Pick<Heroes, "Name">): Promise<Heroes> => {
    const { data: result } = await api.post("/Heroes", data);
    return result;
  };

  const deleteHeroes = async (data: {
    Id: Pick<Heroes, "Id">;
  }): Promise<void> => {
    const { data: result } = await api.delete(`/Heroes/${data.Id}`);
    return result;
  };

  const getHeroesById = async (data: Pick<Heroes, "Id">): Promise<Heroes> => {
    const { data: result } = await api.get(`/Heroes/${data.Id}`);
    return result;
  };

  const updateHeroes = async (
    data: Omit<Heroes, "Category"> & { CategoryId: number }
  ): Promise<Heroes> => {
    const { data: result } = await api.put(`/Heroes/${data.Id}`, data);
    return result;
  };

  return {
    getHeroes,
    createHeroes,
    deleteHeroes,
    getHeroesById,
    updateHeroes,
  };
};

export default HeroesService;
