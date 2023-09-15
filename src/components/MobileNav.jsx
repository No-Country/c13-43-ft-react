import React from "react";
import Link from "next/link";
import ThemeButton from "./ThemeButton";

const MobileNav = ({ isHome }) => {

    return (
        <nav className="flex justify-center dark:bg-darkNav font-dmsans rounded-b-3xl shadow">
            <ul className="flex flex-col text-center items-center w-full">
            <li className=" text-lg font-texts md:block cursor-pointer hover:bg-primaryPurple w-full hover:text-white border-b border-secondaryGray dark:border-darkBlack py-2">
                    <div className="w-full py-2 align-center flex justify-center">
                        <ThemeButton/>
                    </div>
                </li>
                <li className=" text-lg font-texts md:block cursor-pointer hover:bg-primaryPurple w-full hover:text-white border-b border-secondaryGray  dark:border-darkBlack py-2">
                    <Link href={"/"} className="block w-full py-2" onClick={() => setIsMobileMenuOpen(false)}>Inicio</Link>
                </li>
                <li className=" text-lg font-texts md:block cursor-pointer hover:bg-primaryPurple w-full hover:text-white border-b border-secondaryGray dark:border-darkBlack py-2">
                    <Link href={"/about"} className="block w-full py-2" onClick={() => setIsMobileMenuOpen(false)}>Nosotros</Link>
                </li>
                <li className={` text-lg font-texts md:block cursor-pointer hover:bg-primaryPurple w-full hover:text-white border-b border-secondaryGray  dark:border-darkBlack py-2 ${!isHome && "rounded-b-3xl"}`}>
                    <Link href={"/contact"} className="block w-full py-2" onClick={() => setIsMobileMenuOpen(false)}>Contacto</Link>
                </li>
                {isHome && (<li className=" text-lg font-texts md:block cursor-pointer hover:bg-primaryPurple w-full hover:text-white border-b border-secondaryGray py-2 rounded-b-3xl">
                    <Link href={"/login"} className="block w-full py-2" onClick={() => setIsMobileMenuOpen(false)}>Empezar</Link>
                </li>)}
            </ul>
        </nav>
    )
}

export default MobileNav;