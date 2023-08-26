import React from 'react';
import Image from 'next/image';

const Modal = () => {

    return (
        <div className='w-screen h-screen flex justify-center items-center font-dmsans' >
            <div className='bg-secondaryGray flex flex-col min-w-fit min-h-fit items-center p-6 pb-10'>
                <div className='self-end mb-2'>
                    <Image src="/Images/closeIcon.png" alt="closeIcon" width={32} height={32} />
                </div>
                <div className='items-center flex flex-col p-6 pb-0 pt-0'>
                    <h2 className='text-primaryPurple font-dmsans font-bold text-3xl mb-4'>Resultados</h2>
                    <p className='mb-4'>Acá los resultados de tu votación más reciente: <br/> <span className='font-semibold'>Festejo de mi cumple 🎂 Cuento con ustedes!</span></p>
                    <div className='items-center flex flex-col w-full mt-2'>
                        {/* primera opcion */}
                        <div className='w-full mb-5'>
                            <div className='flex mb-3'>
                                <p className='font-semibold'>Viernes 20 de Septiembre - 22h</p>
                            </div>
                            <div className="w-full h-2 border border-primaryPurple rounded mb-2">
                                <div className="h-full bg-primaryPurple rounded" style={{ width: '50%' }}></div>
                            </div>
                            <p className='text-sm'>5 de 10 votaron esta opcion</p>
                        </div>

                         {/* segunda opcion */}
                         <div className='w-full mb-5'>
                            <div className='flex mb-3'>
                                <p className='font-semibold'>Sabada 21 de Septiembre - 22h</p>
                            </div>
                            <div className="w-full h-2 border border-primaryPurple rounded mb-2">
                                <div className="h-full bg-primaryPurple rounded" style={{ width: '30%' }}></div>
                            </div>
                            <p className='text-sm'>3 de 10 votaron esta opcion</p>
                        </div>

                        {/* tercera opcion */}
                        <div className='w-full mb-5'>
                            <div className='flex mb-3'>
                                <p className='font-semibold'>Domingo 22 de Septiembre - 20h</p>
                            </div>
                            <div className="w-full h-2 border border-primaryPurple rounded mb-2">
                                <div className="h-full bg-primaryPurple rounded" style={{ width: '0%' }}></div>
                            </div>
                            <p className='text-sm'>0 de 10 votaron esta opcion</p>
                        </div>


                        {/* cuarta opcion */}
                        <div className='w-full'>
                            <div className='flex mb-3'>
                                <p className='font-semibold'>Viernes 27 de Septiembre - 23:30h</p>
                            </div>
                            <div className="w-full h-2 border border-primaryPurple rounded mb-2">
                                <div className="h-full bg-primaryPurple rounded" style={{ width: '20%' }}></div>
                            </div>
                            <p className='text-sm'>2 de 10 votaron esta opcion</p>
                        </div>


                    </div>
                </div>

            </div>
        </div>

    )
}

export default Modal;