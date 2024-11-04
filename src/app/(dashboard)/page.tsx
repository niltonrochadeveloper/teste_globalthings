"use client";

import useHeroes from "@/hooks/useHeroes";
import { useEffect } from "react";

const Page = () => {
  const {
    triggerPostUser: { data, isLoading, isError, isSuccess },
  } = useHeroes();

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <div className="h-full flex gap-4 w-full">
      <h2>Page</h2>
      {}
    </div>
  );
};

export default Page;
