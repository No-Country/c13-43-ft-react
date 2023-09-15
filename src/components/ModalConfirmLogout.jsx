// Descripción: Componente modal de confirmación para cerrar sesión de usuario.

// Funcionamiento: Cuando el usuario decide cerrar sesión, se muestra este modal de confirmación. Se le pregunta si está 
// seguro de que desea cerrar sesión. El usuario puede cancelar la acción o confirmarla haciendo clic en "CANCELAR" o 
// "CONFIRMAR". Si se confirma, se activa un indicador de carga (Loader) durante la operación de cierre de sesión y luego 
// se redirige al usuario a la página de inicio ("/") después de 3 segundos. Ideal para confirmar acciones importantes en 
// la aplicación, como el cierre de sesión.

import React from 'react'
import { signOut } from 'next-auth/react';
import Loader from './Loader';

const ModalConfirmLogout = ({state, changeState}) => {

    const [loaderActive, setLoaderActive] = React.useState(false)

    const Logout = () => {
        setLoaderActive(true)
        signOut({ callbackUrl: '/'});
        setTimeout(() => {
            setLoaderActive(false)
            changeState(!state)
        }, 3000);
    }

  return (
    <>
        <Loader active={loaderActive} />
        <div className='flex justify-center'>
            <div className='flex flex-col  items-center p-6'>
                <h1 className='text-primaryPurple font-dmsans font-bold text-3xl mb-4 text-center'>Cerrar sesión</h1>
                <div className='items-center flex flex-col p-6 pb-0 pt-0 text-center'>
                    <p> Estás seguro que deseas cerrar sesión? </p>
                </div>
                <div className="mt-8 flex justify-center gap-6">
                    <button 
                        className="font-semibold rounded-full w-50  bg-red-600 px-4 py-2 text-secondaryWhite" 
                        onClick = {() => changeState(!state)}
                    >
                        CANCELAR
                    </button>
                    <button 
                        className="font-semibold rounded-full w-50 first-letter: bg-slate-300 px-4 py-2 text-primaryPurple"
                        onClick={Logout}
                    >
                        CONFIRMAR
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default ModalConfirmLogout