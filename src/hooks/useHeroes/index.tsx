/* eslint-disable @typescript-eslint/no-explicit-any */
import HeroesService from "@/services/heroes";
import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useToast } from "../use-toast";

const useHeroes = () => {
  const { createHeroes, deleteHeroes, getHeroes, getHeroesById, updateHeroes } =
    HeroesService();

  const [skip, setSkip] = useState(0);
  const [currentPage, setCurrentPage] = useState<any>(1);
  const [totalPages, setTotalPages] = useState(1);
  const { toast } = useToast();

  const fetchHeroes = async (skip: number) => {
    // const page = (skip - 1) * 10;
    return await getHeroes({ skip, take: 20 });
  };
  const triggerDeleteHeroes = useMutation({
    mutationKey: ["deleteHeroes"],
    mutationFn: deleteHeroes,
    onSuccess: () => {
      toast({
        title: `Categoria, deletada!`,
      });
      triggerGetHeroes.refetch();
    },
    onError: () => {
      toast({
        title: "Houve algum erro ou sua solicitação não existe",
        variant: "destructive",
      });
    },
  });
  const triggerGetHeroes = useQuery({
    queryKey: ["getHeroes", skip],
    queryFn: () => fetchHeroes(skip),
    placeholderData: keepPreviousData,
    enabled: false,
  });

  const triggerCreateHeroes = useMutation({
    mutationKey: ["createHeroes"],
    mutationFn: createHeroes,
    onSuccess: ({ Name }) => {
      toast({
        title: `Categoria ${Name}, criada!`,
      });

      triggerGetHeroes.refetch();
    },
    onError: () => {
      toast({
        title: "Houve algum erro ou sua solicitação não existe",
        variant: "destructive",
      });
    },
  });

  const triggerGetHeroesById = useMutation({
    mutationKey: ["getHeroesById"],
    mutationFn: getHeroesById,
  });
  const triggerUpdateHeroes = useMutation({
    mutationKey: ["updateHeroes"],
    mutationFn: updateHeroes,
    onSuccess: ({ Name }) => {
      toast({
        title: `Categoria ${Name}, atualizada!`,
      });

      triggerGetHeroes.refetch();
    },
    onError: () => {
      toast({
        title: "Houve algum erro ou sua solicitação não existe",
        variant: "destructive",
      });
    },
  });

  return {
    triggerGetHeroes,
    triggerCreateHeroes,
    triggerDeleteHeroes,
    triggerGetHeroesById,
    triggerUpdateHeroes,
    skip,
    setSkip,
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages,
  };
};

export default useHeroes;
