"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";



const Navbar = () => {
  
  const path = usePathname();

  const { data: session } = useSession();

  if (path === "/" || path === "/about" || path === "/contact") {
    return (
      <nav className="flex justify-between items-center px-12 shadow-md h-20">
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
          <li className="font-semibold font-texts hidden md:block cursor-pointer">
            <Link href={"/"}> Inicio </Link>
          </li>
          <li className="font-semibold font-texts hidden md:block cursor-pointer">
            <Link href={"/about"}> Nosotros </Link>
          </li>
          <li className="font-semibold font-texts hidden md:block cursor-pointer">
            <Link href={"/contact"}> Contacto </Link>
          </li>
          <li className="bg-primaryPurple font-semibold text-secondaryWhite rounded-3xl px-5 py-2 hidden md:block cursor-pointer">
            <Link href={"/login"}> Empezar </Link>
          </li>

          <li className="absolute top-7 right-12 block md:hidden cursor-pointer">
            <Image src="/menuIcon.svg" alt="MenuIcon" width={30} height={30} />
          </li>
        </ul>
      </nav>
    );
  } else if (path === "/login" || path === "/signup") {
    return (
      <nav className="flex justify-between px-12 items-center bg-white shadow-md h-20">
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
          <li className="text-secondaryBlack font-semibold font-texts hidden md:block cursor-pointer">
            <Link href={"/"}>Inicio</Link>
          </li>
          <li className="text-secondaryBlack font-semibold font-texts hidden md:block cursor-pointer">
            <Link href={"/about"}> Nosotros </Link>
          </li>
          <li className="text-secondaryBlack font-semibold font-texts hidden md:block cursor-pointer">
            <Link href={"/contact"}> Contacto </Link>
          </li>
          <li className="absolute top-7 right-12 block md:hidden cursor-pointer">
            <Image src="/menuIcon.svg" alt="MenuIcon" width={30} height={30} />
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="flex justify-end h-20 w-screen">
        <ul className="flex justify-end px-24 items-center relative">
          <li className="right-20 cursor-pointer w-12 h-12 rounded-full border flex justify-center items-center shadow-md">
            <p className="text-primaryPurple font-semibold font-dmsans">{session.user.name.substring(0,2).toUpperCase()}</p>
          </li>
          <div className="statusCircle w-2 h-2 rounded-full hidden md:block bg-green-400 absolute top-5 right-24"></div>
        </ul>
      </nav>
    );
  }
};

export default Navbar;
