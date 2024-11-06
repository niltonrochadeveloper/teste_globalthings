/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { AtomIcon, ChartBarIcon, XIcon } from "lucide-react";

const Menu = (props: any) => {
  return (
    <div className="mt-4 text-sm">
      <div className="flex flex-col gap-2">
        {props.menuOpen && (
          <XIcon
            className="md:hidden mb-6"
            onClick={() => props.setMenuOpen(false)}
            size={20}
          />
        )}
        <div className="md:h-[1.5px] mx-6 md:hidden bg-[#333333]" />
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-3 text-gray-500 py-1 md:px-2 rounded-md hover:bg-lamaSkyLight"
        >
          <AtomIcon className={`size-5 `} />
          <span className="hidden lg:block">Herois</span>
        </Link>
        <Link
          href="/categories"
          className="flex items-center justify-center lg:justify-start gap-3 text-gray-500 py-1 md:px-2 rounded-md hover:bg-lamaSkyLight"
        >
          <ChartBarIcon className={`size-5 `} />
          <span className="hidden lg:block">Categorias</span>
        </Link>
        <div className="md:h-[.5px] bg-[#b1b1b1] my-6" />
      </div>
    </div>
  );
};

export default Menu;
