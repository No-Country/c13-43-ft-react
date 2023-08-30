"use client"

import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Navbar = () => {

    const path = usePathname()


    if (path === '/' || path === '/about' || path === '/contacto') {
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
                    <li className="text-secondaryBlack font-semibold font-texts hidden md:block cursor-pointer"> Contacto </li>
                    <li className="bg-primaryPurple font-semibold text-secondaryWhite rounded-3xl px-4 py-2 hidden md:block cursor-pointer">Empezar</li>
                    
                    <li className="absolute top-4 right-12 block md:hidden cursor-pointer">
                        <Image src="/menuIcon.svg" alt="MenuIcon" width={30} height={30} />
                    </li>
                </ul>
            </nav>
        )
    } else if (path === '/login' || path === '/signup') {
        return (
            <nav className="flex justify-between px-16 items-center bg-white shadow-md h-20">
            <ul className="flex w-3/4">
                <li>
                    <Image src="/Images/logoColor.png" alt="choiceLogo" width={120} height={70} />
                </li>
            </ul>
            <ul className="flex justify-end px-24 w-2/4 items-center">
                <li className="text-secondaryBlack pr-12 font-semibold font-texts hidden md:block cursor-pointer">Inicio</li>
                <li className="text-secondaryBlack pr-12 font-semibold font-texts hidden md:block cursor-pointer w-40"> Sobre nosotros </li>
                <li className="text-secondaryBlack pr-12 font-semibold font-texts hidden md:block cursor-pointer"> Contacto </li>
                <li className="absolute top-4 right-12 block md:hidden cursor-pointer">
                    <Image src="/menuIcon.svg" alt="MenuIcon" width={30} height={30} />
                </li>
            </ul>
        </nav> 
        )
    } else {
        return (
            <nav className="flex justify-end h-20 w-screen">
                <ul className="flex justify-end px-24 items-center relative">
                    <li className="text-secondaryBlack pr-12 font-semibold font-texts hidden md:block cursor-pointer"> Sobre nosotros </li>
                    <li className="text-secondaryBlack pr-12 font-semibold font-texts hidden md:block cursor-pointer"> Contacto </li>
                    <li className="right-20 cursor-pointer w-12 h-12 rounded-full border flex justify-center items-center">
                        <p className="text-primaryPurple font-semibold font-dmsans">AB</p>
                    </li>
                    <div className="statusCircle w-2 h-2 rounded-full hidden md:block bg-green-400 absolute top-5 right-24"></div>
                </ul>
            </nav>
        )
    }
}

export default Navbar