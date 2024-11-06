import { Heroes } from "@/models/types/heroes";
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import useHeroes from "@/hooks/useHeroes";
import { Dispatch, SetStateAction, useEffect } from "react";
import useCategory from "@/hooks/useCategory";

export const schema = z.object({
  Id: z
    .number({ message: "Id é obrigatório" })
    .min(1, "Nome deve conter 1 ou mais caracteres"),
  Name: z
    .string({ message: "Nome é obrigatório" })
    .min(2, "Nome deve conter 2 ou mais caracteres"),
  CategoryId: z
    .number({ message: "Id da Categoria é obrigatório" })
    .min(1, "Nome deve conter 2 ou mais caracteres"),
  Active: z.boolean({ message: "Ativo é obrigatório" }),
});

const EditHeroForm = ({
  onOpenChange,
  itemToEdit,
}: {
  open: boolean | undefined;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  itemToEdit: Heroes;
}) => {
  const {
    triggerUpdateHeroes: { mutateAsync },
  } = useHeroes();
  const {
    triggerGetCategories: { data, refetch },
  } = useCategory();

  useEffect(() => {
    refetch();
  }, [itemToEdit, refetch]);

  const methods = useForm<Omit<Heroes, "Category"> & { CategoryId: number }>({
    resolver: zodResolver(schema),
    defaultValues: {
      Id: itemToEdit.Id,
      Name: itemToEdit.Name,
      CategoryId: itemToEdit.Category.Id,
      Active: itemToEdit.Active,
    },
  });

  const onSubmit: SubmitHandler<
    Omit<Heroes, "Category"> & { CategoryId: number }
  > = async (data) => {
    const { Name } = await mutateAsync(data);
    console.log("update", data);
    onOpenChange(!Name);
  };
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="h-full flex flex-col gap-4"
      >
        <Controller
          control={methods.control}
          name="Id"
          render={({ field }) => (
            <Input
              className="hidden"
              {...field}
              label=""
              placeholder=""
              errorMessage={methods.formState.errors.Id?.message}
            />
          )}
        />
        <Controller
          control={methods.control}
          name="Name"
          render={({ field }) => (
            <Input
              {...field}
              label="Categoria"
              placeholder="Digite a categoria"
              errorMessage={methods.formState.errors.Name?.message}
            />
          )}
        />
        <Controller
          control={methods.control}
          name="CategoryId"
          render={({ field }) => (
            <div className="grid items-center justify-between">
              <label className="mb-3 block text-md text-primary-dark font-bold">
                Selecione uma categoria
              </label>
              <Select
                value={String(field.value)}
                onValueChange={(value) => field.onChange(Number(value))}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Selecione a Categoria" />
                </SelectTrigger>
                <SelectContent>
                  {data?.Items.map((item) => {
                    return (
                      <>
                        <SelectItem key={item.Id} value={String(item.Id)}>
                          {item.Name}
                        </SelectItem>
                      </>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          )}
        />
        <Controller
          control={methods.control}
          name="Active"
          render={({ field }) => (
            <div className="grid items-center justify-between">
              <label className="mb-3 block text-md text-primary-dark font-bold">
                Ativo
              </label>
              <Select
                value={String(field.value)}
                onValueChange={(value) => field.onChange(value === "true")}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Ativo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Sim</SelectItem>
                  <SelectItem value="false">Não</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        />
        <div className="bg-green-300 mt-6">
          <Button type="submit">Criar</Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default EditHeroForm;
