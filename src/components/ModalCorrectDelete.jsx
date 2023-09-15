// Descripción: Componente modal que confirma la eliminación exitosa de una cuenta de usuario.

// Funcionamiento: Este componente muestra un mensaje de confirmación después de que la cuenta del usuario se haya 
// eliminado con éxito. Muestra una marca de verificación verde y un mensaje que indica que la cuenta ha sido eliminada.
// También muestra el correo electrónico de la cuenta que se eliminó. Ideal para proporcionar retroalimentación después
// de una acción importante en la aplicación, como la eliminación de una cuenta.

import React from 'react'
import Image from 'next/image';
import { useSession } from 'next-auth/react';

const ModalCorrectDelete = () => {

    const {data: session} = useSession();

  return (
    <div className='flex justify-center items-center' >
        <div className='flex flex-col items-center p-6 pb-10'>
            <div className='items-center flex flex-col p-6 pb-0 pt-0 text-center'>
                <Image src="/Images/CheckIcon.png" alt="green check" width={30} height={30} className='mb-6' ></Image>
                <h1 className="text-primaryPurple font-dmsans font-bold text-3xl mb-4 text-center">Cuenta eliminada con exito!</h1>
                <p className="pt-2 text-sm">Tu cuenta <b>{session.user.email}</b> ha sido eliminada.</p>
            </div>
        </div>
    </div>
    )
}

export default ModalCorrectDelete