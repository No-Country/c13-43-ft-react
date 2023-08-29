"use client"

import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Navbar = () => {

    const path = usePathname()

    if (path !== '/login/1234') {
        return (
            <nav className="flex justify-between px-16 items-center bg-white shadow-md h-20">
                <ul className="flex w-3/4">
                    <li>
                        <Image src="/Images/logoColor.png" alt="choiceLogo" width={120} height={70} />
                    </li>
                </ul>
                <ul className="flex justify-between px-16 w-2/4 items-center">
                    <li className="text-secondaryBlack font-semibold font-texts hidden md:block cursor-pointer">Inicio</li>
                    <li className="text-secondaryBlack font-semibold font-texts hidden md:block cursor-pointer"> Sobre nosotros </li>
                    <li className="bg-primaryPurple font-semibold text-secondaryWhite font-semibold rounded-3xl px-4 py-2 hidden md:block cursor-pointer">Empezar</li>
                    
                    <li className="absolute top-4 right-12 block md:hidden cursor-pointer">
                        <Image src="/menuIcon.svg" alt="MenuIcon" width={30} height={30} />
                    </li>
                </ul>
            </nav>
        )
    } else {
        return (
            <nav className="flex justify-end pr-20 px-16 h-20">
                <ul className="flex justify-end px-16 w-2/4 items-center relative">
                    <li className="absolute top-4 right-12 block md:hidden cursor-pointer">
                        <Image src="/menuIcon.svg" alt="MenuIcon" width={30} height={30} />
                    </li>
                    <li className="right-20 cursor-pointer w-12 h-12 rounded-full border flex justify-center items-center">
                        <p className="text-primaryPurple font-semibold font-dmsans">AB</p>
                    </li>
                    <div className="statusCircle w-2 h-2 rounded-full hidden md:block bg-green-400 absolute top-5 right-16"></div>
                </ul>
            </nav>
        )
    }
}

export default Navbar