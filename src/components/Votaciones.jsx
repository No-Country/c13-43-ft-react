import React from 'react';
import Image from 'next/image';

const Votaciones = () => {
    return (
        <div className='w-2/4 font-dmsans'>
            <h1 className='mb-10 text-4xl font-bold'>Votaciones</h1>
            <div className=' flex flex-col bg-secondaryGray pt-6 w-5/6 rounded-lg'>
                <div className='pb-10 flex flex-col items-center'>
                    <form className='bg-primaryOrange rounded-full flex items-center h-8 justify-evenly gap-4 px-4'>
                        <label className="busqueda text-secondaryWhite">Buscar:</label>
                        <input type="text" name="busqueda" className='buesqueda bg-primaryOrange text-secondaryWhite mx-2 w-24' />
                        <button type="submit">
                            <Image src="/Images/lupa.png" alt="lupa" width={25} height={25} />
                        </button>
                    </form>
                </div>
                <div className='flex gap-4 pl-10 pb-10 '>
                    <div className='flex justify-center items-center rounded-full bg-slate-300 gap-2 w-24 h-6' >
                        <div className='w-4 h-4 bg-green-500 rounded-full'></div>
                        <button className="text-xs">Activas</button>
                    </div>
                    <div className='flex justify-center items-center rounded-full bg-slate-300 gap-2 w-24 h-6'>
                        <div className='w-4 h-4 bg-red-500 rounded-full'></div>
                        <button className="text-xs">Inactivas</button>
                    </div>
                </div>
                <div className='flex flex-col gap-4 px-10 pb-10'>
                    <div className='flex gap-2 items-center'>
                        <div className='w-4 h-4 bg-green-500 rounded-full'></div>
                        <p className=''>01563 - Fiesta de cumpleaños   |   80% votó 20 de Marzo</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <div className='w-4 h-4 bg-green-500 rounded-full'></div>
                        <p className=''>025884 - Instrumento musical   |   60% votó Guitarra</p>
                    </div>
                    <hr className='border-secondaryBlack'/>
                    <div className='flex gap-2 items-center'>
                        <div className='w-4 h-4 bg-red-500 rounded-full'></div>
                        <p className=''>029484 - Viaje   |   30% votó Mar del Plata</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <div className='w-4 h-4 bg-red-500 rounded-full'></div>
                        <p className=''>079584 - ¿Qué cenamos?   |   70% votó Pizza</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Votaciones