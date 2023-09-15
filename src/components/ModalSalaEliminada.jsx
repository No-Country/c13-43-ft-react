// Descripción: Este componente representa un modal que se muestra cuando una sala ha sido eliminada con éxito. 
// Muestra un ícono de verificación verde ("green check"), un mensaje de confirmación y el código de la sala eliminada.

// code: El código de la sala que ha sido eliminada.
// Funcionamiento: Cuando se muestra este componente, se presenta un mensaje de confirmación de que la sala ha sido 
// eliminada con éxito, junto con el código de la sala eliminada. También se muestra un ícono de verificación verde 
// para indicar que la operación se ha completado con éxito.

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