/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuIcon } from "lucide-react";

const Navbar = (props: any) => {
  return (
    <div className="flex items-center justify-end md:justify-start py-4">
      <div className="hidden md:flex flex-col justify-start text-xl w-1/2">
        <h2 className="text-primary-dark font-bold text-2xl">Olá!</h2>
      </div>
      <div className="md:hidden flex items-center gap-2 justify-end w-1/2">
        <div className="rounded flex items-center cursor-pointer relative">
          {!props.menuOpen && (
            <MenuIcon onClick={() => props.setMenuOpen(true)} size={20} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
