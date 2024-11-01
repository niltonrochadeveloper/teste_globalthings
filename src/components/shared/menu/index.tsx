import Link from "next/link";
import AnchorClick from "./anchor";

const menuItems = [
  {
    title: "",
    items: [
      {
        icon: "home",
        label: "Home",
        href: "/",
      },
      {
        icon: "dashboard",
        label: "Dashboard",
        href: "/admin",
      },
      {
        icon: "bussiness",
        label: "Empresas",
        href: "/companies",
      },
      {
        icon: "register",
        label: "Cadastrar banners",
        href: "/banners",
      },
      {
        icon: "/videos.png",
        label: "Videos",
        href: "/videos",
      },
      {
        icon: "/podcast.png",
        label: "Podcasts",
        href: "/podcasts",
      },
      {
        icon: "/class.png",
        label: "Comentários",
        href: "/comentarios",
      },
    ],
  },
];

const Menu = async () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            return (
              <Link
                href={item.href}
                key={item.label}
                className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-1 md:px-2 rounded-md hover:bg-lamaSkyLight"
              >
                {/* <Image
                    src={`${item.icon}_${
                      path === item.href ? "white" : "gray"
                    }`}
                    alt=""
                    width={20}
                    height={20}
                  /> */}
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            );
          })}
          <div className="md:h-[.5px] bg-[#b1b1b1] my-6" />
          <AnchorClick />
        </div>
      ))}
    </div>
  );
};

export default Menu;
