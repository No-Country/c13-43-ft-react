import Image from "next/image";

import React from 'react'

export default function ModalSalaEliminada() {
    return (
        <div className='w-screen mt-52 flex justify-center items-center font-dmsans' >
            <div className='bg-secondaryGray flex flex-col min-w-fit min-h-fit items-center p-6 pb-10'>
                <div className='self-end mb-2'>
                    <Image src="/Images/closeIcon.png" alt="closeIcon" width={30} height={30} />
                </div>
                <div className='items-center flex flex-col p-6 pb-0 pt-0 text-center'>
                    <Image src="/Images/green.png" alt="green check" width={30} height={30} ></Image>
                    <p className="pt-4 font-bold text-primaryPurple">Sala eliminada con exito!</p>
                    <p className="pt-2 text-sm">Tu sala 029484 ha sido eliminada.</p>
                </div>
            </div>

        </div>)}