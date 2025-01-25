"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/service" },
  { name: "work", path: "/work" },
  { name: "resume", path: "/resume" },
  { name: "contact", path: "/contact" },
];

export default function MobileNav() {
  const pathname = usePathname();
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex justify-center items-center">
          <CiMenuFries className="text-[32px] text-accent"/>
        </button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1>Alishba's</h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link 
              href={link.path} 
              key={index} 
              className={classNames(
                link.path === pathname && "text-accent border-b-2 border-accent",
                "text-xl capitalize hover:text-accent transition-all"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

