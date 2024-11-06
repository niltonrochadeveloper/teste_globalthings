"use client";

import Navbar from "@/components/shared/navbar";
import Menu from "@/components/shared/menu";
import { useState } from "react";

const LayoutDashboardPage = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(true);

  return (
    <div className="h-screen flex z-100 justify-between">
      {menuOpen && (
        <div className="h-full z-100 w-[14%] md:w-[14%] lg:w-[16%] xl:w-full max-w-[260px] p-4 bg-white ">
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
      )}
      <div className="flex-1 relative bg-background-gray-dark flex flex-col h-full overflow-hidden">
        <div className="px-5 py-2">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
        <div className="md:h-[.5px] mx-6 bg-[#b1b1b1]" />
        <div className="p-2 md:p-5 h-full overflow-y-auto overflow-x-hidden">
          <div
            onClick={() => setMenuOpen(false)}
            className={`${
              menuOpen ? "" : "hidden"
            } md:hidden z-10 h-full absolute w-full`}
          ></div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboardPage;
