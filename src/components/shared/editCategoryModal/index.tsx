import EditCategoryForm from "@/components/common/forms/EditCategoryForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";
import { CategoryProps } from "@/models/types/category";
import { PencilIcon } from "lucide-react";
import { useState } from "react";

const editCategoryModal = ({ itemToEdit }: { itemToEdit: CategoryProps }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild className="cursor-pointer">
        <PencilIcon size={20}>editar</PencilIcon>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar Categoria</DialogTitle>
          <DialogDescription>
            Crie a categoria para seu Super Herói
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-2 py-4">
          <div className="flex flex-col gap-1">
            <EditCategoryForm
              itemToEdit={itemToEdit}
              open={isModalOpen}
              onOpenChange={setIsModalOpen}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default editCategoryModal;
