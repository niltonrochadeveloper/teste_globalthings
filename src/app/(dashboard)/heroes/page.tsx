/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import HeroesTable from "@/components/shared/heroesTable";
import { Button, Spinner } from "@/components/ui";
import useHeroes from "@/hooks/useHeroes";
import { RefreshCcw } from "lucide-react";
import { Suspense, useEffect } from "react";

const Page = () => {
  const {
    triggerGetHeroes: {
      data,
      isLoading,
      isSuccess,
      isPending,
      isFetching,
      isError,
      refetch,
    },
  } = useHeroes();

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading || isPending || isFetching) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Spinner>Carregando...</Spinner>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <Suspense
        fallback={
          <div className="flex h-full w-full items-center justify-center">
            <Spinner>Carregando...</Spinner>
          </div>
        }
      >
        <HeroesTable source={data?.Items} />
      </Suspense>
    );
  }

  if (isError) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <RefreshCcw
          size={24}
          className="cursor-pointer hover:text-primary"
          onClick={() => refetch()}
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

export default Page;
