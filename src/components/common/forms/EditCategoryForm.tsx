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
import useCategory from "@/hooks/useCategory";
import { Dispatch, SetStateAction } from "react";

export const schema = z.object({
  Id: z
    .number({ message: "Id é obrigatório" })
    .min(1, "Nome deve conter 1 ou mais caracteres"),
  Name: z
    .string({ message: "Nome é obrigatório" })
    .min(2, "Nome deve conter 2 ou mais caracteres"),
});

const EditCategoryForm = ({
  onOpenChange,
  itemToEdit,
}: {
  open: boolean | undefined;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  itemToEdit: CategoryProps;
}) => {
  const {
    triggerUpdateCategory: { mutateAsync },
  } = useCategory();

  const methods = useForm<CategoryProps>({
    resolver: zodResolver(schema),
    defaultValues: {
      Id: itemToEdit.Id,
      Name: itemToEdit.Name,
    },
  });

  const onSubmit: SubmitHandler<CategoryProps> = async (data) => {
    const { Name } = await mutateAsync(data);
    console.log("update", data);
    onOpenChange(!Name);
  };
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="h-full flex flex-col gap-12"
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
              errorMessage={methods.formState.errors.Name?.message}
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
        <div className="bg-green-300">
          <Button type="submit">Criar</Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default EditCategoryForm;
