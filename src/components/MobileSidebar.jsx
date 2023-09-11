"use client"
import React, { useState } from 'react';
import Link from "next/link";
import { signOut, useSession } from 'next-auth/react';

const MobileSidebar = () => {
    const { data: session } = useSession();
    const userData = session?.user?.id;

    const handleClicksignOut = () => {
        signOut({ callbackUrl: '/'});
    };

    return (
        <nav className="bg-primaryPurple font-dmsans rounded-b-3xl shadow">
            <ul className="flex flex-col w-full">
                <li className="w-full text-white font-semibold font-texts md:block cursor-pointer hover:bg-white hover:text-primaryPurple py-2">
                    <Link href={`/login/${ userData }`}>
                        <div className="flex justify-center items-center">
                            <span className="text-lg font-normal">Panel</span>
                        </div>
                    </Link>
                </li>
                <li className="w-full text-white font-semibold font-texts md:block cursor-pointer hover:bg-white hover:text-primaryPurple py-2">
                <Link href={`/login/${ userData }/votaciones`}>
                        <div className="flex justify-center items-center">
                            <span className="text-lg font-normal">Votaciones</span>
                        </div>
                    </Link>
                </li>
                <li className="w-full text-white font-semibold font-texts md:block cursor-pointer hover:bg-white hover:text-primaryPurple py-2">
                <Link href={`/login/${ userData }/perfil`}>
                        <div className="flex justify-center items-center">
                            <span className="text-lg font-normal">Perfil</span>
                        </div>
                    </Link>
                </li>
                <li className="w-full text-white font-semibold font-texts md:block cursor-pointer hover:bg-white hover:text-primaryPurple py-2 rounded-b-3xl">
                <Link href={"#"} onClick={() => handleClicksignOut()}>
                        <div className="flex justify-center items-center">
                            <span className="text-lg font-normal">Salir</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default MobileSidebar;