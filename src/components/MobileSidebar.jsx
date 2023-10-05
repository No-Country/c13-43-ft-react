// Descripción: Componente de barra lateral móvil que muestra enlaces de navegación y una opción para cerrar sesión.

// Funcionamiento: Este componente renderiza una barra lateral de navegación en dispositivos móviles. Muestra enlaces a 
// diferentes secciones, como "Panel", "Votaciones" y "Perfil", y una opción para "Salir". Al hacer clic en un enlace, se 
// cierra el menú (setIsMobileMenuOpen(false)). Al hacer clic en "Salir", se muestra un modal de confirmación 
// (ModalConfirmLogout) y, si se confirma, se ejecuta la función handleClickSignOut para cerrar la sesión del usuario y 
// redirigirlo a la página de inicio ("/"). Ideal para la navegación y cierre de sesión en dispositivos móviles.

"use client"
import React, { useState } from 'react';
import Link from "next/link";
import { signOut, useSession } from 'next-auth/react';
import ModalGeneral from '@/containers/ModalGeneral';
import ModalConfirmLogout from '@/components/ModalConfirmLogout';

const MobileSidebar = ({setIsMobileMenuOpen}) => {
    const { data: session } = useSession();
    const userData = session?.user?.id;
    const [confirmLogout, setConfirmLogout] = useState(false);

    const handleClickSignOut = () => {
        signOut({ callbackUrl: '/' });
    };
    

    return (
        <nav className="bg-primaryPurple font-dmsans rounded-b-3xl shadow">
            <ul className="flex flex-col w-full">
                <li className="w-full text-white font-semibold font-texts md:block cursor-pointer hover:bg-white hover:text-primaryPurple py-2">
                    <Link href={`/login/${ userData }`}>
                        <div className="flex justify-center items-center" onClick={() => setIsMobileMenuOpen(false)}>
                            <span className="text-lg font-normal">Panel</span>
                        </div>
                    </Link>
                </li>
                <li className="w-full text-white font-semibold font-texts md:block cursor-pointer hover:bg-white hover:text-primaryPurple py-2">
                    <Link href={`/login/${ userData }/votaciones`}>
                        <div className="flex justify-center items-center" onClick={() => setIsMobileMenuOpen(false)}>
                            <span className="text-lg font-normal">Votaciones</span>
                        </div>
                    </Link>
                </li>
                <li className="w-full text-white font-semibold font-texts md:block cursor-pointer hover:bg-white hover:text-primaryPurple py-2">
                    <Link href={`/login/${ userData }/perfil`}>
                        <div className="flex justify-center items-center" onClick={() => setIsMobileMenuOpen(false)}>
                            <span className="text-lg font-normal">Perfil</span>
                        </div>
                    </Link>
                </li>
                <li className="w-full text-white font-semibold font-texts md:block cursor-pointer hover:bg-white hover:text-primaryPurple py-2 rounded-b-3xl">
                    <Link href={"#"} onClick={() => {
                        setConfirmLogout(true);
                    }}>
                        <div className="flex justify-center items-center" onClick={() => {handleClickSignOut}}>
                            <span className="text-lg font-normal">Salir</span>
                        </div>
                    </Link>
                </li>
            </ul>
            <ModalGeneral state={confirmLogout} changeState={setConfirmLogout}>
                <ModalConfirmLogout state={confirmLogout} changeState={setConfirmLogout} />
            </ModalGeneral>
        </nav>
    )
}

export default MobileSidebar;