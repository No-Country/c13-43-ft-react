import React from 'react'
import Image from 'next/image'

const Sidebar = () => {
    return (
        <div className='bg-primaryPurple flex flex-col'>
            <ul>
                <li className=''> 
                    <a href="" className='flex gap-2'>
                        <Image src="/Images/panel/panelN.png" width={ 14 } height={ 20 }/>
                        <span> Panel </span>
                    </a>
                </li>

                <li className=''> 
                    <a href="" className='flex gap-2'>
                        <Image src="/Images/panel/salaN.png" width={ 14 } height={ 20 }/>
                        <span> Sala </span>
                    </a>
                </li>

                <li className=''> 
                    <a href="" className='flex gap-2'>
                        <Image src="/Images/panel/votacionN.png" width={ 14 } height={ 20 }/>
                        <span> Votaciones </span>
                    </a>
                </li>

                <li className=''> 
                    <a href="" className='flex gap-2'>
                        <Image src="/Images/panel/perfilN.png" width={ 14 } height={ 20 }/>
                        <span> Perfil </span>
                    </a>
                </li>

                <li className=''> 
                    <a href="" className='flex gap-2'>
                        <Image src="/Images/panel/logoutN.png" width={ 14 } height={ 20 }/>
                        <span> Salir </span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar 
