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
import { Dispatch, SetStateAction, useEffect } from "react";
import useCategory from "@/hooks/useCategory";
import useHeroes from "@/hooks/useHeroes";
import { Heroes } from "@/models/types/heroes";

export const schema = z.object({
  Name: z
    .string({ message: "Nome é obrigatório" })
    .min(2, "Nome deve conter 2 ou mais caracteres"),
  CategoryId: z.number({ message: "Id da Categoria é obrigatório" }),
  Active: z.boolean({ message: "Ativo é obrigatório" }),
});

const CreateHeroForm = ({
  onOpenChange,
}: {
  open: boolean | undefined;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}) => {
  const {
    triggerCreateHeroes: { mutateAsync },
  } = useHeroes();
  const {
    triggerGetCategories: { data, refetch },
  } = useCategory();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const methods = useForm<
    Omit<Heroes, "Category" | "Id"> & { CategoryId: number }
  >({
    resolver: zodResolver(schema),
    defaultValues: {
      Name: "",
      CategoryId: 0,
      Active: false,
    },
  });

  const onSubmit: SubmitHandler<
    Omit<Heroes, "Category" | "Id"> & { CategoryId: number }
  > = async (data) => {
    const { Name } = await mutateAsync(data);
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
          name="Name"
          render={({ field }) => (
            <Input
              {...field}
              label="Nome"
              placeholder="Digite o Nome"
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
                  <SelectValue placeholder="Selecione a Categoria">
                    {data?.Items.find((item) => item.Id === field.value)
                      ?.Name || "Selecione uma categoria"}
                  </SelectValue>
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
              {methods.formState.errors.CategoryId && (
                <small className="text-red-500 mt-2">
                  {methods.formState.errors.CategoryId?.message}
                </small>
              )}
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
              {methods.formState.errors.Active && (
                <small className="text-red-500 mt-2">
                  {methods.formState.errors.Active?.message}
                </small>
              )}
            </div>
          )}
        />
        <div className="bg-green-300 mt-8">
          <Button type="submit">Criar</Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default CreateHeroForm;
