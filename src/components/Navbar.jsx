import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className="flex justify-between px-16 mt-4 items-center">
            <ul className="flex w-2/4">
                <li> ✓ </li>
                <li className="font-semibold font-texts"> VoteChoice </li>
            </ul>
            <ul className="flex justify-between px-16 w-2/4 items-center">
                <li className="text-primaryPurple font-texts hidden md:block">Home</li>
                <li className="text-primaryPurple font-texts hidden md:block"> About </li>
                <li className="text-primaryPurple font-texts hidden md:block">Contacto</li>
                <li className="bg-primaryPurple text-secondaryWhite font-semibold rounded-3xl px-4 py-2 hidden md:block">Empezar</li>
                
                <li className="absolute top-4 right-12 block md:hidden">
                    <Image src="/menuIcon.svg" alt="MenuIcon" width={30} height={30} />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar