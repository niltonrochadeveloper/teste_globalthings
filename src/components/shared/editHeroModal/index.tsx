import EditHeroForm from "@/components/common/forms/EditHeroForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";
import { Heroes } from "@/models/types/heroes";
import { PencilIcon } from "lucide-react";
import { useState } from "react";

const editHeroModal = ({ itemToEdit }: { itemToEdit: Heroes }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild className="cursor-pointer">
        <PencilIcon size={20}>editar</PencilIcon>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar Herói</DialogTitle>
          <DialogDescription>Edite seu Super Herói</DialogDescription>
        </DialogHeader>
        <div className="grid gap-2 py-4">
          <div className="flex flex-col gap-1">
            <EditHeroForm
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

export default editHeroModal;
