// Descripción: Componente de navegación móvil que muestra enlaces a diferentes secciones de la aplicación.

// Funcionamiento: Este componente renderiza una barra de navegación en dispositivos móviles. Muestra enlaces a las 
// secciones principales de la aplicación, como "Inicio", "Nosotros", "Contacto" y "Empezar" (si es la página de inicio).
// Al hacer clic en un enlace, el menú se cierra (setIsMobileMenuOpen(false)). El componente también incluye un botón de 






import React from "react";
import Link from "next/link";

const MobileNav = ({ isHome }) => {

    return (
        <nav className="flex justify-center bg-white font-dmsans rounded-b-3xl shadow">
            <ul className="flex flex-col text-center items-center w-full">
                <li className="text-secondaryBlack text-lg font-texts md:block cursor-pointer hover:bg-primaryPurple w-full hover:text-white border-b border-secondaryGray py-2">
                    <Link href={"/"} className="block w-full py-2" onClick={() => setIsMobileMenuOpen(false)}>Inicio</Link>
                </li>
                <li className="text-secondaryBlack text-lg font-texts md:block cursor-pointer hover:bg-primaryPurple w-full hover:text-white border-b border-secondaryGray py-2">
                    <Link href={"/about"} className="block w-full py-2" onClick={() => setIsMobileMenuOpen(false)}>Nosotros</Link>
                </li>
                <li className={`text-secondaryBlack text-lg font-texts md:block cursor-pointer hover:bg-primaryPurple w-full hover:text-white border-b border-secondaryGray py-2 ${!isHome && "rounded-b-3xl"}`}>
                    <Link href={"/contact"} className="block w-full py-2" onClick={() => setIsMobileMenuOpen(false)}>Contacto</Link>
                </li>
                {isHome && (<li className="text-secondaryBlack text-lg font-texts md:block cursor-pointer hover:bg-primaryPurple w-full hover:text-white border-b border-secondaryGray py-2 rounded-b-3xl">
                    <Link href={"/login"} className="block w-full py-2" onClick={() => setIsMobileMenuOpen(false)}>Empezar</Link>
                </li>)}
            </ul>
        </nav>
    )
}

export default MobileNav;