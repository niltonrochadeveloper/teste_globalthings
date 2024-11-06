/* eslint-disable @typescript-eslint/no-explicit-any */
// import { CategoryProps } from "@/models/types/category";
import CategoryService from "@/services/category";
import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useToast } from "../use-toast";

const useCategory = () => {
  const {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory,
    getCategoryById,
  } = CategoryService();

  const [skip, setSkip] = useState(0);
  const [currentPage, setCurrentPage] = useState<any>(1);
  const [totalPages, setTotalPages] = useState(1);
  const { toast } = useToast();

  const fetchCategories = async (skip: number) => {
    // const page = (skip - 1) * 10;
    return await getCategories({ skip, take: 10 });
  };
  const triggerDeleteCategory = useMutation({
    mutationKey: ["deleteCategory"],
    mutationFn: deleteCategory,
    onSuccess: () => {
      toast({
        title: `Categoria, deletada!`,
      });
      triggerGetCategories.refetch();
    },
    onError: () => {
      toast({
        title: "Houve algum erro ou sua solicitação não existe",
        variant: "destructive",
      });
    },
  });
  const triggerGetCategories = useQuery({
    queryKey: ["getCategories", skip],
    queryFn: () => fetchCategories(skip),
    placeholderData: keepPreviousData,
    enabled: false,
  });

  const triggerCreateCategory = useMutation({
    mutationKey: ["createCategory"],
    mutationFn: createCategory,
    onSuccess: ({ Name }) => {
      toast({
        title: `Categoria ${Name}, criada!`,
      });

      triggerGetCategories.refetch();
    },
    onError: () => {
      toast({
        title: "Houve algum erro ou sua solicitação não existe",
        variant: "destructive",
      });
    },
  });

  const triggerGetCategoryById = useMutation({
    mutationKey: ["getCategoryById"],
    mutationFn: getCategoryById,
  });
  const triggerUpdateCategory = useMutation({
    mutationKey: ["updateCategory"],
    mutationFn: updateCategory,
    onSuccess: ({ Name }) => {
      toast({
        title: `Categoria ${Name}, atualizada!`,
      });

      triggerGetCategories.refetch();
    },
    onError: () => {
      toast({
        title: "Houve algum erro ou sua solicitação não existe",
        variant: "destructive",
      });
    },
  });

  return {
    triggerGetCategories,
    triggerCreateCategory,
    triggerDeleteCategory,
    triggerGetCategoryById,
    triggerUpdateCategory,
    skip,
    setSkip,
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages,
  };
};

export default useCategory;
