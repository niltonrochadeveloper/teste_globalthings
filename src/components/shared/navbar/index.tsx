import { SearchIcon } from "lucide-react";

const Navbar = async () => {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="hidden md:flex flex-col justify-center text-xl w-1/2">
        <h2 className="text-primary-dark font-bold text-2xl">Olá!</h2>
      </div>
      <div className="flex items-center gap-2 justify-end w-1/2">
        <div className="rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <SearchIcon width={14} height={14} />
        </div>
        <div className="bg-primary-dark text-white rounded text-sm w-7 h-7 flex items-center justify-center cursor-pointer relative">
          NN
        </div>
      </div>
    </div>
  );
};

export default Navbar;
