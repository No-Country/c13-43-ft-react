"use client"
import React, { useState } from 'react';
import Link from "next/link";
import { useSession } from 'next-auth/react';
import ModalGeneral from '@/containers/ModalGeneral';
import ModalConfirmLogout from '@/components/ModalConfirmLogout';

const MobileSidebar = ({setIsMobileMenuOpen}) => {
    const { data: session } = useSession();
    const userData = session?.user?.id;
    const [confirmLogout, setConfirmLogout] = useState(false);

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
                        <div className="flex justify-center items-center" onClick={() => setIsMobileMenuOpen(false)}>
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