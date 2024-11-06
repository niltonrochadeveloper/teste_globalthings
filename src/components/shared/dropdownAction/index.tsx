"use client";

import { EllipsisVertical } from "lucide-react";
import { useState } from "react";

const DropDownAction = ({ children }: { children: React.ReactNode[] }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <EllipsisVertical onClick={() => setOpen(!open)} />
      {open && (
        <div className="bg-white p-4 w-28 absolute right-0 rounded">
          {children.map((child) => {
            return <>{child}</>;
          })}
          <div className="h-[1px] my-2 bg-gray-500"></div>
          <span className="cursor-pointer" onClick={() => setOpen(!open)}>
            fechar
          </span>
        </div>
      )}
    </>
  );
};

export default DropDownAction;
