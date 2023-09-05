import Image from "next/image";

import React from 'react'

export default function ModalEliminarSala() {
    return (
        <div className='w-screen mt-52 flex justify-center items-center font-dmsans' >
            <div className='bg-secondaryGray flex flex-col min-w-fit min-h-fit items-center p-6 pb-10'>
                <div className='self-end mb-2'>
                    <Image src="/Images/closeIcon.png" alt="closeIcon" width={30} height={30} />
                </div>
                <div className='items-center flex flex-col p-6 pb-0 pt-0 text-center'>
                    <p>¿Estás seguro de que deseas eliminar la sala <br /> <span className="font-bold">  029484 - Viaje   |    Mar del Plata </span>? </p>
                </div>
                <div className="mt-8 flex gap-6">
                <button class="rounded-full bg-slate-400 px-4 py-2 text-secondaryWhite">CONFIRMAR</button>
                <button class="rounded-full bg-red-500 px-4 py-2 text-secondaryWhite">CANCELAR</button>
                </div>
            </div>

        </div>
)
}