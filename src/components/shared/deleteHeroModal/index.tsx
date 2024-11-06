/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui";
import useHeroes from "@/hooks/useHeroes";
import { Heroes } from "@/models/types/heroes";
import { EraserIcon } from "lucide-react";
import { useState } from "react";

const DeleteHeroModal = ({ itemToEdit }: { itemToEdit: Partial<Heroes> }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    triggerDeleteHeroes: { mutate },
  } = useHeroes();

  const onDelete = (Id: any) => {
    mutate({ Id });
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild className="cursor-pointer">
        <EraserIcon size={20}>deletar</EraserIcon>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogDescription>
            Deseja realmente excluir este item?
            <p className="font-bold mt-4">{itemToEdit.Name}</p>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4"></div>
          {!itemToEdit.Active && (
            <>
              <div className="grid grid-cols-4 items-center gap-4"></div>
            </>
          )}
        </div>
        <DialogFooter>
          <Button onClick={() => onDelete(itemToEdit.Id)}>Confirmar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteHeroModal;
