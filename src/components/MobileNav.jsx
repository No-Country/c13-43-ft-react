import React from "react";
import Link from "next/link";

const MobileNav = ( {isHome} ) => {
    return (
        <nav className="flex justify-center bg-white font-dmsans rounded-b-3xl shadow">
            <ul className="flex flex-col text-center items-center w-full">
                <li className="text-secondaryBlack text-lg font-semibold font-texts md:block cursor-pointer hover:bg-primaryPurple w-full hover:text-white border-b border-secondaryGray py-2">
                    <Link href={"/"} className="block w-full py-2">Inicio</Link>
                </li>
                <li className="text-secondaryBlack text-lg font-semibold font-texts md:block cursor-pointer hover:bg-primaryPurple w-full hover:text-white border-b border-secondaryGray py-2">
                    <Link href={"/about"} className="block w-full py-2">Nosotros</Link>
                </li>
                <li className={`text-secondaryBlack text-lg font-semibold font-texts md:block cursor-pointer hover:bg-primaryPurple w-full hover:text-white border-b border-secondaryGray py-2 ${!isHome && "rounded-b-3xl"}`}>
                    <Link href={"/contact"} className="block w-full py-2">Contacto</Link>
                </li>
                {isHome &&(<li className="text-secondaryBlack text-lg font-semibold font-texts md:block cursor-pointer hover:bg-primaryPurple w-full hover:text-white border-b border-secondaryGray py-2 rounded-b-3xl">
                    <Link href={"/login"} className="block w-full py-2">Empezar</Link>
                </li>)}
            </ul>
        </nav>
    )
}

export default MobileNav;