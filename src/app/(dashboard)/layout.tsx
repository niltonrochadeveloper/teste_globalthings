import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/shared/navbar";
import Menu from "@/components/shared/menu";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMS - Home",
  description: "Description CMS",
};

const LayoutDashboardPage = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-screen flex justify-between">
      <div className="w-[14%] md:w-[14%] lg:w-[16%] xl:w-full max-w-[260px] p-4 bg-white">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image
            src="/images/logo-hack-cor-preto-azul.png"
            alt="logo"
            width={129}
            height={44}
          />
        </Link>
        <Menu />
      </div>
      <div className="flex-1 bg-background-gray-dark flex flex-col h-full overflow-hidden">
        <div className="px-5 py-2">
          <Navbar />
        </div>
        <div className="md:h-[.5px] mx-6 bg-[#b1b1b1]" />
        <div className="p-5 h-full overflow-y-auto overflow-x-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboardPage;
