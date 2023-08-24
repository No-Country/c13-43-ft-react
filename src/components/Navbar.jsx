import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className="flex justify-between px-16 items-center bg-white shadow-md h-20">
            <ul className="flex w-2/4">
                <li>
                    <Image src="/Images/logoColor.png" alt="choiceLogo" width={100} height={50} />
                </li>
            </ul>
            <ul className="flex justify-between px-16 w-2/4 items-center">
                <li className="text-secondaryBlack font-texts hidden md:block cursor-pointer">Home</li>
                <li className="text-secondaryBlack font-texts hidden md:block cursor-pointer"> About </li>
                <li className="text-secondaryBlack font-texts hidden md:block cursor-pointer">Contacto</li>
                <li className="bg-primaryPurple text-secondaryWhite font-semibold rounded-3xl px-4 py-2 hidden md:block cursor-pointer">Empezar</li>
                
                <li className="absolute top-4 right-12 block md:hidden cursor-pointer">
                    <Image src="/menuIcon.svg" alt="MenuIcon" width={30} height={30} />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar