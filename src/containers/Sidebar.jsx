
'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { ChangeLi } from '../components/ChangeLi';
import { signOut, useSession } from 'next-auth/react';


const Sidebar = () => {
    const { data: session } = useSession();
    const userData = session?.user?.id
    const [activeIndex, setActiveIndex] = useState(0);

    const imgsM = {
        panel: '/Images/panel/panelM.png',
        sala: '/Images/panel/salaM.png',
        votacion: '/Images/panel/votacionM.png',
        perfil: '/Images/panel/perfilM.png',
        logout: '/Images/panel/logoutM.png'
    }

    const imgsN = {
        panel: '/Images/panel/panelN.png',
        sala: '/Images/panel/salaN.png',
        votacion: '/Images/panel/votacionN.png',
        perfil: '/Images/panel/perfilN.png',
        logout: '/Images/panel/logoutN.png'
    }

    const handleItemClick = (index) => {
        setActiveIndex(index);
    }

    const handleClicksignOut = () => {
        signOut({ callbackUrl: '/'});
    };

    return (
        <div className='bg-primaryPurple h-screen absolute top-0 w-72 pl-14 rounded-tr-3xl'>
            <ul className=''>
                <li className='m-2 mt-4 mb-20'>
                    <Image src="/Images/logoPanel.png" width={ 186 } height={ 40 } className='static' alt='image'/>
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
                        handleClicksignOut()
                    }}
                />
            </ul>
        </div>
    )
}

export default Sidebar;
