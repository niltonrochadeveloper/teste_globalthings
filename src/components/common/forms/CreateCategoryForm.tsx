import { CategoryProps } from "@/models/types/category";
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, Input } from "@/components/ui";
import CategoryService from "@/services/category";
import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import { Dispatch, SetStateAction, useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const schema = z.object({
  Name: z
    .string({ message: "Nome é obrigatório" })
    .min(2, "Nome deve conter 2 ou mais caracteres"),
});

const CreateCategoryForm = ({
  onOpenChange,
}: {
  open: boolean | undefined;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}) => {
  const { createCategory, getCategories } = CategoryService();
  const { toast } = useToast();

  const [skip] = useState(0);

  const fetchCategories = async (skip: number) => {
    // const page = (skip - 1) * 10;
    return await getCategories({ skip, take: 20 });
  };

  const triggerGetCategories = useQuery({
    queryKey: ["getCategories", skip],
    queryFn: () => fetchCategories(skip),
    placeholderData: keepPreviousData,
    enabled: false,
  });

  const { mutateAsync } = useMutation({
    mutationKey: ["createCategory"],
    mutationFn: createCategory,
  });

  const methods = useForm<Pick<CategoryProps, "Name">>({
    resolver: zodResolver(schema),
    defaultValues: {
      Name: "",
    },
  });

  const onSubmit: SubmitHandler<Pick<CategoryProps, "Name">> = async (data) => {
    const { Name } = await mutateAsync(data);

    if (Name) {
      onOpenChange(!Name);
      triggerGetCategories.refetch();
      toast({
        title: `Categoria ${Name}, criada!`,
      });
    }
  };
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="h-full flex flex-col gap-12"
      >
        <Controller
          control={methods.control}
          name="Name"
          render={({ field }) => (
            <Input
              {...field}
              label="Categoria"
              placeholder="Digite a categoria"
              isValid={!methods.formState.errors.Name}
              errorMessage={methods.formState.errors.Name?.message}
            />
          )}
        />
        <div className="bg-green-300">
          <Button type="submit">Criar</Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default CreateCategoryForm;
