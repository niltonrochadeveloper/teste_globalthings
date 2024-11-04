import type { Heroes } from "@/models/types/heroes";
import api from "@/services/api";

const heroesService = () => {
  const getHeroes = async (): Promise<Heroes[]> => {
    const { data: result } = await api.get("/Heroes", {
      params: {
        skip: 0,
        take: 10,
      },
      headers: {
        accessKey: `${process.env.NEXT_PUBLIC_API_KEY}`,
        Accept: "application/json",
      },
    });
    return result;
  };

  return {
    getHeroes,
  };
};

export default heroesService;
