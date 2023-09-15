// Descripción: Este componente representa la barra de navegación superior que se muestra en la parte superior de la 
// mayoría de las páginas de la aplicación web. Dependiendo de la página actual y del estado de autenticación 
// del usuario, la barra de navegación cambia su contenido y estilo.

// Funcionamiento: La barra de navegación es adaptable y cambia su contenido y estilo según la página actual y el tamaño 
// de la pantalla. También es consciente de la sesión de usuario y muestra opciones adicionales cuando el usuario está 
// autenticado.

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import MobileNav from "./MobileNav";
import MobileSidebar from "./MobileSidebar";



const Navbar = () => {
  
  const path = usePathname();

  const { data: session } = useSession();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLargeScreen(window.innerWidth > 1280);

      const handleResize = () => {
        setIsLargeScreen(window.innerWidth > 1280);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);


  if (path === "/" || path === "/about" || path === "/contact") {
    return (
      <header>
        <nav className="flex justify-between items-center px-6 sm:px-12 bg-white dark:bg-darkNav shadow-md h-20">
          <ul className="flex w-3/4">
            <li>
              <Image
                className="max-w-none"
                src="/Images/logoColor.png"
                alt="choiceLogo"
                width={120}
                height={70}
              />
            </li>
          </ul>
          <ul className="flex justify-end gap-12 w-3/4 items-center">
            <li className=" font-semibold hidden md:block cursor-pointer">
              <Link href={"/"}>Inicio</Link>
            </li>
            <li className=" font-semibold hidden md:block cursor-pointer">
              <Link href={"/about"}>Nosotros </Link>
            </li>
            <li className=" font-semibold hidden md:block cursor-pointer">
              <Link href={"/contact"}>Contacto</Link>
            </li>
            <li className="hidden md:block">
              <Link href={'/login'}>
                <button className="bg-primaryPurple text-white font-semibold rounded-3xl px-5 py-2">Empezar</button>
              </Link> 
            </li>
            <li className="absolute top-7 right-12 block md:hidden cursor-pointer" onClick={toggleMobileMenu}>
              <Image src="/menuIcon.svg" alt="MenuIcon" width={30} height={30} />
            </li>
          </ul>
          
        </nav>
        {isMobileMenuOpen && (
            <MobileNav isHome={isHome} isMobileMenuOpen = {isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        )}
      </header>
    );
  } else if (path === "/login") {
    return (
      <header>
        <nav className="flex justify-between px-6 sm:px-12 items-center bg-white dark:bg-darkNav  shadow-md h-20">
          <ul className="flex w-3/4">
            <li>
              <Image
                src="/Images/logoColor.png"
                alt="choiceLogo"
                width={120}
                height={70}
              />
            </li>
          </ul>
          <ul className="flex justify-end gap-12 w-3/4 items-center">
            <li className=" font-semibold hidden md:block cursor-pointer">
              <Link href={"/"}>Inicio</Link>
            </li>
            <li className=" font-semibold hidden md:block cursor-pointer">
              <Link href={"/about"}>Nosotros</Link>
            </li>
            <li className=" font-semibold hidden md:block cursor-pointer">
              <Link href={"/contact"}>Contacto</Link>
            </li>
            <li className="absolute top-7 right-12 block md:hidden cursor-pointer" onClick={toggleMobileMenu}>
              <Image src="/menuIcon.svg" alt="MenuIcon" width={30} height={30} />
            </li>
          </ul>
        </nav>
        {isMobileMenuOpen && (
            <MobileNav isHome={!isHome} isMobileMenuOpen = {isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        )}
      </header>
    );
  } else if (isLargeScreen) {
    return (
      <header>
        <nav className="flex justify-end h-20 w-screen dark:bg-darkNav ">
          <ul className="flex justify-end px-24 items-center relative">
            <li className="right-20 cursor-pointer w-12 h-12 rounded-full border flex justify-center items-center shadow-md">
              <p className="text-primaryPurple font-semibold font-dmsans">{session.user.name.substring(0,2).toUpperCase()}</p>
            </li>
            <div className="statusCircle w-2 h-2 rounded-full hidden md:block bg-green-400 absolute top-5 right-24"></div>
          </ul>
        </nav>
      </header>
    );
  }
  else {
    return (
      <header>
        <nav className="flex justify-end h-20 w-screen bg-primaryPurple">
          <ul className="flex justify-between items-center w-full relative px-6">
          <li>
              <Image
                className="max-w-none"
                src="/Images/logoPanel.png"
                alt="choiceLogo"
                width={120}
                height={70}
              />
            </li>
            <li className="right-20 cursor-pointer w-12 h-12 rounded-full border flex justify-center items-center shadow-md" onClick={toggleMobileMenu}>
              <p className="text-white font-semibold font-dmsans">{session.user.name.substring(0,2).toUpperCase()}</p>
            </li>
          </ul>
        </nav>
        {isMobileMenuOpen && (
            <MobileSidebar isMobileMenuOpen = {isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        )}
      </header>
    );
  }
};

export default Navbar;
