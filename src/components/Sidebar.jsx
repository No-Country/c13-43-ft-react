import React from 'react'
import Image from 'next/image'

const Sidebar = () => {
    return (
        <div className='bg-primaryPurple h-screen absolute top-0 w-72 pl-20 rounded-tr-md'>
            <ul>
                <li className='p-3'>
                    <Image src="/Images/logoPanel.png" width={ 186 } height={ 45 }/>
                </li>

                <li className='pt-9 py-4'> 
                    <a href="" className='flex gap-3'>
                        <Image src="/Images/panel/panelN.png" width={ 20 } height={ 20 }/>
                        <span className='dmsans font-medium'> Panel </span>
                    </a>
                </li>

                <li className='py-4'> 
                    <a href="" className='flex gap-3'>
                        <Image src="/Images/panel/salaN.png" width={ 20 } height={ 20 }/>
                        <span className='dmsans font-medium'> Sala </span>
                    </a>
                </li>

                <li className='py-4'> 
                    <a href="" className='flex gap-3'>
                        <Image src="/Images/panel/votacionN.png" width={ 20 } height={ 20 }/>
                        <span className='dmsans font-medium'> Votaciones </span>
                    </a>
                </li>

                <li className='py-4'> 
                    <a href="" className='flex gap-3'>
                        <Image src="/Images/panel/perfilN.png" width={ 20 } height={ 20 }/>
                        <span className='dmsans font-medium'> Perfil </span>
                    </a>
                </li>

                <li className='py-4'> 
                    <a href="" className='flex gap-3'>
                        <Image src="/Images/panel/logoutN.png" width={ 20 } height={ 20 }/>
                        <span className='dmsans font-medium'> Salir </span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar 
