import heroesService from "@/services/heroes";
import { useQuery } from "@tanstack/react-query";

const useHeroes = () => {
  const { getHeroes } = heroesService();

  const triggerPostUser = useQuery({
    queryKey: ["getHeroes"],
    queryFn: getHeroes,
  });

  return {
    triggerPostUser,
  };
};

export default useHeroes;
