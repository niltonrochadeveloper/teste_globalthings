"use client";

import EditHeroForm from "@/components/common/forms/EditHeroForm";
import DeleteHeroModal from "@/components/shared/deleteHeroModal";
import EditHeroModal from "@/components/shared/editHeroModal";
import { Spinner } from "@/components/ui";
import useHeroes from "@/hooks/useHeroes";
import { RefreshCcw } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const HeroesByIdPage = () => {
  const { id } = useParams();
  const [open, setOpen] = useState<boolean>(false);
  const {
    triggerGetHeroesById: { data, mutateAsync, isPending, isSuccess, isError },
  } = useHeroes();

  useEffect(() => {
    mutateAsync({ Id: Number(id) });
  }, []);

  if (isPending) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Spinner>Carregando...</Spinner>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="flex justify-between gap-6 border rounded p-4 border-gray-500/30">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">{data.Name}</h2>
          <p>{data.Category.Name}</p>
          <p>{data.Active ? "Ativo" : "Inativo"}</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <RefreshCcw
          size={24}
          className="cursor-pointer hover:text-primary"
          onClick={() => mutateAsync({ Id: Number(id) })}
        >
          Tentar Novamente
        </RefreshCcw>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Spinner>Carregando...</Spinner>
    </div>
  );
};

export default HeroesByIdPage;
