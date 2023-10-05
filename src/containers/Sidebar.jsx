// Descripción: El componente Sidebar es la barra de navegación lateral de la aplicación web.

// Funcionamiento: Proporciona enlaces a las secciones principales de la aplicación y permite al usuario navegar entre ellas.
// Al seleccionar un enlace, la barra lateral muestra visualmente la sección activa actual y puede realizar acciones 
// como cerrar sesión.

'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { ChangeLi } from '../components/ChangeLi';
import { useSession } from 'next-auth/react';
import ModalGeneral from './ModalGeneral';
import ModalConfirmLogout from '@/components/ModalConfirmLogout';
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const { data: session } = useSession();
    const userData = session?.user?.id
    const [activeIndex, setActiveIndex] = useState(0);
    const [confirmLogout, setConfirmLogout] = useState(false);
    const path = usePathname()

    React.useEffect(() => {
        const regex = /\/(votaciones|perfil)?$/
        const values = ['', 'votaciones', 'perfil']
    
        if (path.match(regex) == null) {
            setActiveIndex(0)
        } else {
            setActiveIndex(values.indexOf(path.match(regex)[1]))
        }
    }, [path])

    const imgsM = {
        panel: '/Images/panel/panelM.svg',
        sala: '/Images/panel/salaM.svg',
        votacion: '/Images/panel/votacionM.svg',
        perfil: '/Images/panel/perfilM.svg',
        logout: '/Images/panel/logoutM.svg'
    }

    const imgsN = {
        panel: '/Images/panel/panelN.svg',
        sala: '/Images/panel/salaN.svg',
        votacion: '/Images/panel/votacionN.svg',
        perfil: '/Images/panel/perfilN.svg',
        logout: '/Images/panel/logoutN.svg'
    }

    const handleItemClick = (index) => {
        setActiveIndex(index);
    }

    return (
        <div className='bg-primaryPurple rounded-tr-3xl flex h-screen pl-6 pt-4 fixed top-0 w-1/5 min-w-fit z-10'>
            <ul className='w-full'>
                <li className='m-2 mt-4 mb-20'>
                    <Image src="/Images/logoPanel.png" width={ 186 } height={ 40 } alt='image'/>
                </li>

                <ChangeLi
                    img = { activeIndex === 0  ? imgsM.panel : imgsN.panel }
                    nombre={ 'Panel' }
                    isActive={ activeIndex === 0 }
                    href={ `/login/${ userData }` }
                    onClick={() => handleItemClick(0)}
                />

                <ChangeLi
                    img = { activeIndex === 1 ? imgsM.votacion : imgsN.votacion }
                    nombre={ 'Votaciones' }
                    isActive={ activeIndex === 1 }
                    href = { `/login/${ userData }/votaciones` }
                    onClick={() => handleItemClick(1)}
                />
                
                <ChangeLi
                    img = { activeIndex === 2 ? imgsM.perfil : imgsN.perfil }
                    nombre={ 'Perfil' }
                    isActive={ activeIndex === 2 }
                    href= { `/login/${ userData }/perfil` }
                    onClick={() => handleItemClick(2)}
                />

                <ChangeLi
                    img = { activeIndex === 3 ? imgsM.logout : imgsN.logout }
                    nombre={ 'Salir' }
                    isActive={ activeIndex === 3 }
                    onClick={() => {
                        handleItemClick(3)
                        setConfirmLogout(true)
                    }}
                />
            </ul>
            <ModalGeneral state={confirmLogout} changeState={setConfirmLogout}>
                <ModalConfirmLogout state={confirmLogout} changeState={setConfirmLogout} />
            </ModalGeneral>
        </div>
    )
}

export default Sidebar;
