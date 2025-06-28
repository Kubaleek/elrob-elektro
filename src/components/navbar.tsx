"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Phone, Plane } from "lucide-react";
import Image from "next/image";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { useState, useEffect } from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "./ui/drawer";
import { Offers } from "@/data/offers";
import { usePathname } from "next/navigation";

function NavbarLogo() {
  return (
    <Link href={"/"} className="flex items-center gap-3">
      <Image src={"/logo.svg"} alt="Logo" width={35} height={35} className="w-[35px] h-[35px]" />
      <div className="text-sm">
        <p className="font-medium text-base">Robert Król</p>
        <p className="text-[#FF6600]">Elektryk Łódź</p>
      </div>
    </Link>
  );
}

function NavbarBurger({ open, handleMenuClick }: { open: boolean; handleMenuClick: (event: React.MouseEvent<HTMLButtonElement>) => void }) {
  return (
    <button aria-pressed={open ? "true" : "false"} onClick={handleMenuClick} className="group inline-flex w-6 h-6  text-center items-center justify-center rounded transition">
      <span className="sr-only">Menu</span>
      <svg className="w-6 h-5 fill-current pointer-events-none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <rect
          className="origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-x-0 group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[315deg]"
          y="7"
          width="9"
          height="2"
          rx="1"
        ></rect>
        <rect className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-[[aria-pressed=true]]:rotate-45" y="7" width="16" height="2" rx="1"></rect>
        <rect className="origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-pressed=true]]:translate-y-0 group-[[aria-pressed=true]]:rotate-[135deg]" y="7" width="9" height="2" rx="1"></rect>
      </svg>
    </button>
  );
}

function NavbarMobile({ open, handleMenuClick }: { open: boolean; handleMenuClick: (event: React.MouseEvent<HTMLButtonElement>) => void }) {
  return (
    <nav className="flex md:hidden justify-between items-center">
      <NavbarLogo />
      <NavbarBurger open={open} handleMenuClick={handleMenuClick} />
    </nav>
  );
}

function NavbarDrawer({ open, toggleMenu, closeMenu, handleMenuClick }: { open: boolean; closeMenu: () => void; toggleMenu: () => void; handleMenuClick: (event: React.MouseEvent<HTMLButtonElement>) => void }) {
  return (
    <Drawer open={open} onOpenChange={toggleMenu}>
      <DrawerContent aria-describedby={undefined} className="flex md:hidden overflow-hidden">
        <DrawerHeader
          className="flex justify-between border-b border-neutral-300
         items-center"
        >
          <DrawerTitle>
            <NavbarLogo />
          </DrawerTitle>
          <NavbarBurger open={open} handleMenuClick={handleMenuClick} />
        </DrawerHeader>
        <div className="flex flex-col">
          <div className="p-6">
            <ul className="space-y-3 font-sans text-lg tracking-tight">
              <li>
                <Link href="/#o-nas" aria-label="O Nas" onClick={closeMenu}>
                  O Nas
                </Link>
              </li>
              <li className="flex flex-col gap-1 border-y py-3 border-neutral-400">
                <h2 className="font-bold text-lg uppercase mb-1">Usługi Elektryczne</h2>
                <div className="flex flex-col gap-3">
                  {Offers.map((a, i) => (
                    <Link key={i} href={a.href} aria-label={a.label} onClick={closeMenu}>
                      {a.label}
                    </Link>
                  ))}
                </div>
              </li>
              <li>
                <Link href="/#galeria" aria-label="Galeria" onClick={closeMenu}>
                  Galeria
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const isPressed = event.currentTarget.getAttribute("aria-pressed") === "true";
    event.currentTarget.setAttribute("aria-pressed", (!isPressed).toString());

    toggleMenu();
  };
  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const path = usePathname();

  return (
    <div className="sticky top-0 left-0 right-0 bg-[#fafafa] z-[2137] nav-border-reveal nav-bg-reveal ">
      <div className="max-w-5xl mx-auto   p-4 border-x border-neutral-300 ">
        <div className="items-center justify-between md:flex hidden">
          <div className="flex items-center gap-12">
            <NavbarLogo />
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/#o-nas" aria-label="O Nas">
                      <Button aria-label="O Nas" variant={"link"} className="cursor-pointer px-2 hover:bg-transparent border-neutral-300 text-base group hover:text-[#FF6600]">
                        O Nas
                      </Button>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="cursor-pointer border-neutral-300 text-base group hover:text-[#FF6600]">Usługi</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 md:w-[400px] md:grid-cols-2 lg:w-[600px]">
                      {Offers.map((a, i) => (
                        <li key={i}>
                          <NavigationMenuLink asChild className={`group  ${path === a.href ? "text-[#FF6600]" : "hover:text-[#FF6600]"}`}>
                            <Link href={a.href}>
                              <div className="text-sm leading-none font-medium">{a.label}</div>
                              <p className="text-neutral-700 line-clamp-2 text-xs leading-snug">{a.desc}</p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/#galeria" aria-label="Galeria">
                      <Button aria-label="Galeria" variant={"link"} className="cursor-pointer px-0 bg-transparent border-neutral-300 text-base group hover:text-[#FF6600]">
                        Galeria
                      </Button>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center gap-3">
            <Link href="tel:737593320" aria-label="Telefon">
              <Button aria-label="Telefon" variant={"link"} className="cursor-pointer border-neutral-300 text-base group hover:text-[#FF6600]">
                <Phone className="group-hover:-translate-y-1 group-hover:rotate-90 transition-all" />
                +48737593320
              </Button>
            </Link>
            <Link href="mailto:robert.krol.el@gmail.com" aria-label="Kontakt">
              <Button aria-label="Kontakt" variant={"link"} className="cursor-pointer text-base group hover:text-[#FF6600]">
                Kontakt
                <Plane className="group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:rotate-12 transition-all" />
              </Button>
            </Link>
          </div>
        </div>
        <NavbarMobile open={open} handleMenuClick={handleMenuClick} />
        <NavbarDrawer closeMenu={closeMenu} open={open} toggleMenu={toggleMenu} handleMenuClick={handleMenuClick} />
      </div>
    </div>
  );
}
