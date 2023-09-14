import React from 'react' 
import Image from "next/image";

export default function ModalSalaEliminada({code}) {
    return (
        <div className='flex justify-center items-center' >
            <div className='flex flex-col items-center p-6 pb-10'>
                <div className='items-center flex flex-col p-6 pb-0 pt-0 text-center'>
                    <Image src="/Images/CheckIcon.png" alt="green check" width={30} height={30} ></Image>
                    <h1 className="text-primaryPurple font-dmsans font-bold text-3xl mb-4 text-center">Sala eliminada con exito!</h1>
                    <p className="pt-2 text-sm">Tu sala {code} ha sido eliminada.</p>
                </div>
            </div>

        </div>)}