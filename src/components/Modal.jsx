import React from 'react';
import Image from 'next/image';

const Modal = () => {

    return (
        <div className='w-screen h-screen flex justify-center items-center font-dmsans' >
            <div className='bg-secondaryGray flex flex-col w-2/5 h-3/4 items-center p-6'>
                <div className='self-end mb-4'>
                    <Image src="/Images/closeIcon.png" alt="closeIcon" width={32} height={32} />
                </div>
                <div className='items-center flex flex-col p-6 pt-0'>
                    <h2 className='text-primaryPurple font-dmsans font-bold text-3xl mb-4'>Resultados</h2>
                    <p className='mb-4'>Acá los resultados de tu votación más reciente: <span className='font-semibold'>Festejo de mi cumple 🎂 Cuento con ustedes!</span></p>
                    <div className='items-center flex flex-col w-full'>
                        <div className='w-full'>
                            <div className='flex'>
                                <p className='font-semibold'>Viernes 20 de Septiembre - 22h</p>
                            </div>
                            <div className="w-full h-2 border border-primaryPurple rounded">
                                <div className="h-full bg-primaryPurple rounded" style={{ width: '80%' }}></div>
                            </div>
                            <p className='text-sm'>5 de 10 votaron esta opcion</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default Modal;