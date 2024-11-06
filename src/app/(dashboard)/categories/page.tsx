/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import TableItems from "@/components/shared/categoryTable";
import { Button, Spinner } from "@/components/ui";
import useCategory from "@/hooks/useCategory";
import { Suspense, useEffect } from "react";

const Page = () => {
  const {
    triggerGetCategories: {
      data,
      isLoading,
      isSuccess,
      isPending,
      isFetching,
      refetch,
    },
  } = useCategory();

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
        <TableItems source={data?.Items} />
      </Suspense>
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Button>Tentar novamente</Button>
    </div>
  );
};

export default Page;
