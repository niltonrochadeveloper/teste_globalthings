"use client";

import Link from "next/link";

const AnchorClick = () => {
  return (
    <Link
      href=""
      onClick={() => {}}
      className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
    >
      <span className="hidden lg:block">Sair</span>
    </Link>
  );
};

export default AnchorClick;
