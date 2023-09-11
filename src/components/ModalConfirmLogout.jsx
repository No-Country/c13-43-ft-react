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
                <h1 className='font-bold text-4xl text-primaryPurple'>Cerrar sesión</h1>
                <div className='items-center flex flex-col p-6 pb-0 pt-0 text-center'>
                    <p> Estás seguro que deseas cerrar sesión? </p>
                </div>
                <div className="mt-8 flex justify-center gap-6">
                    <button 
                        className="font-semibold rounded-full w-45  bg-red-600 px-4 py-2 text-secondaryWhite" 
                        onClick = {() => changeState(!state)}
                    >
                        CANCELAR
                    </button>
                    <button 
                        className="font-semibold rounded-full w-45 first-letter: bg-slate-300 px-4 py-2 text-primaryPurple"
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