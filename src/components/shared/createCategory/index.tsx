import CreateCategoryForm from "@/components/common/forms/CreateCategoryForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";
import { CirclePlusIcon } from "lucide-react";
import { useState } from "react";

const CreateCategory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <div className="flex gap-2 items-center cursor-pointer max-w-48">
          <CirclePlusIcon size={30} className="text-primary" />
          <small className="text-primary font-semibold">
            Adicionar categoria
          </small>
        </div>
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
            <CreateCategoryForm
              open={isModalOpen}
              onOpenChange={setIsModalOpen}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCategory;
