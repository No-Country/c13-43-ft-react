import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex justify-between px-16 mt-4 items-center">
            <ul className="flex w-2/4">
                <li> ✓ </li>
                <li className="font-bold"> VoteChoice </li>
            </ul>
            <ul className="flex justify-between px-16 w-2/4 items-center">
                <li className="text-purple-900">Home</li>
                <li className="text-purple-900">Sobre nosotros</li>
                <li className="text-purple-900">Contacto</li>
                <li className="bg-purple-900 text-white font-semibold rounded-3xl px-4 py-2">Empezar</li>
            </ul>
        </nav>
    )
}

export default Navbar